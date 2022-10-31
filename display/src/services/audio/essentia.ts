// @ts-expect-error
import { EssentiaWASM } from 'essentia.js/dist/essentia-wasm.es.js'
import type TEssentia from 'essentia.js/dist/core_api'
// @ts-expect-error
import Essentia from 'essentia.js/dist/essentia.js-core.es.js'
import { ProcessingResult } from './interfaces';
const essentia = new Essentia(EssentiaWASM) as TEssentia

console.log('EssentiaWorkletProcessor - essentia:' + essentia.version);

class EssentiaWorkletProcessor extends AudioWorkletProcessor {
  constructor() {
    super()
  }

  process(
    inputs: Float32Array[][],
    outputs: Float32Array[][],
    parameters: Record<string, Float32Array>
  ): boolean {
    const input = inputs[0];
    if (!input?.length) {
      return true
    }

    const vectorInput = essentia.arrayToVector(input[0])
    const rmsFrame = essentia.RMS(vectorInput)
    const energyFrame = essentia.Energy(vectorInput)
    const loudnessFrame = essentia.Loudness(vectorInput)
    const danceabilityFrame = essentia.Danceability(vectorInput)

    const result: ProcessingResult = { rms: rmsFrame.rms, energy: energyFrame.energy, loudness: loudnessFrame.loudness, danceability: danceabilityFrame.danceability }
    this.port.postMessage(result)

    return true
  }
}

registerProcessor('essentia', EssentiaWorkletProcessor);
