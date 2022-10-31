import { useEffect, useState } from "react";
import { WebMidi, MessageEvent, Input } from "webmidi";

const midi = await WebMidi.enable()

let input: Input | null

const init = async () => {
  input = await midi.getInputById('573783705')?.open().catch(console.warn) || null

  input?.addListener('midimessage', (e) => {
    console.log('midiState', ...e.message.data.slice(0, 2), e.message.data[2] / 127)
  })

  console.log('midi init done')
}

midi.addListener('connected', () => {
  init()
})

init()

export const useMidiState = (a = 176, b = 7): number => {
  const [val, setVal] = useState<number>(0)

  useEffect(() => {
    const listener = (e: MessageEvent) => {
      if (e.message.data[0] === a && e.message.data[1] === b) {
        setVal(e.message.data[2] / 127)
      }
    }

    input?.addListener('midimessage', listener)

    return () => {
      input?.removeListener('midimessage', listener)
    }
  }, [])

  return val
}

export const useMultiMidiStates = (filters: Parameters<typeof useMidiState>[]): number[] => {
  return filters.map((args) => useMidiState(...args))
}
