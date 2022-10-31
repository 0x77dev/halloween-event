import { setArtNet } from "./artnet"

let state = [255, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0]

export const setRow = (row: 'crowd' | 'scene', red?: number, green?: number, blue?: number, amber?: number, white?: number, uv?: number) => {
  const data = [red, green, blue, amber, white, uv]
  let shift = 1

  if (row === 'scene') shift = 8

  for (const [i, channel] of data.entries()) {
    if (!channel) continue
    state[i + shift] = channel
  }

  setArtNet(state)
}
