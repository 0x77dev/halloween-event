import { EventEmitter } from "events";
import { useControls } from "leva";
import { isEqual } from "lodash";
import { useEffect, useState } from "react";
import { useMultiMidiStates as useMidiStates } from "../control-surface/midi";
import { ProcessingResult } from "./interfaces";
import processorUrl from "./processor.ts?url";

const createWorkletNode = async (
  context: BaseAudioContext,
  name: string,
  url: string
) => {
  await context.audioWorklet.addModule(url);
  return new AudioWorkletNode(context, name);
}

const audioCtx = new AudioContext();
const processor = await createWorkletNode(
  audioCtx,
  "processor",
  processorUrl
);

audioCtx.addEventListener('statechange', async (ev) => {
  const mic = await navigator.mediaDevices.getUserMedia({ audio: true });
  const micNode = audioCtx.createMediaStreamSource(mic);
  micNode.connect(processor)
})

const resume = () => {
  audioCtx.suspend();
  audioCtx.resume();
  console.log('audioCtx.state', audioCtx.state)
}

window.addEventListener('mouseup', resume);
resume()

const getPosFromMiddle = (input: number, multiply = 1) => {
  return (((Number(input.toFixed(2)) - 0.5) * 2) / 10)
}

const events = new EventEmitter()
processor.port.onmessage = (e: MessageEvent<ProcessingResult>) => {
  events.emit('result', e.data)
}

export const useAudio = () => {
  // @ts-ignore
  const [res, setRes] = useControls('audio', () => {
    const init = { value: 0, transient: false, min: -1, max: 10, step: 0.01 }

    return {
      rms: init,
      energy: init,
      loudness: init,
    }
  })

  const [
    s1, s2, s3,
    p1, p2, p3,
    reset,
    m1
  ] = useMidiStates([
    [176, 10],
    [176, 74],
    [176, 76],

    [160, 44],
    [160, 45],
    [160, 46],

    [160, 43],

    [176, 7],
  ])

  useEffect(() => {
    let prev: ProcessingResult = res;

    const listener = (res: ProcessingResult) => {
      const master = getPosFromMiddle(m1)

      const data = {
        rms: (res.rms + getPosFromMiddle(s1) + master) + (p1 * 10),
        energy: (res.energy + getPosFromMiddle(s2) + master) + (p2 * 10),
        loudness: (res.loudness + getPosFromMiddle(s3) + master) + (p3 * 10)
      }

      if (isEqual(prev, res)) return;
      prev = res;
      setRes(data)
    }

    events.on('result', listener)

    return () => {
      events.off('result', listener)
    }
  }, [s1, s2, s3, p1, p2, p3, m1, reset])

  return res
}