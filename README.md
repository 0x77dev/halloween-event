# Visual Performance

This is visual performance toolkit built for [Halloween event @ Blivande (Oct. 29th – 30th, 2022)](https://tickets.blivande.com/on/halloween001).

_Caution: source code is not clean, it missing a couple of scenes and it might be dirty._

## Quick overview

The visual part is handled by [react-three-fiber](https://github.com/pmndrs/react-three-fiber) and sound analysis by [Essentia.js](https://www.npmjs.com/package/essentia.js), also live tuning and controls are handled by [WebMIDI](https://github.com/djipco/webmidi) which is intended to be used with [Arturia Beatstep Sequencer](https://www.arturia.com/products/beatstep/resources). The plan is to extend project with remote WebMIDI and maybe crowd tracking using Tensorflow.js.

DMX lights are controlled by ESP8266 with ESP-Dmx and ArtNet protocol libraries.

## Getting started

### Prerequisites

- Node.js (`16.x` / `lts/*`)
- Yarn
- [Arturia Beatstep Sequencer](https://www.arturia.com/products/beatstep/resources) (hardware component, might be optional at the end but required to start the project now)
- Git and [Git LFS](https://git-lfs.github.com)
- Latest Chrome or equivalent abilities browser

### Running

1. Clone the repository

```bash
git clone https://github.com/0x77dev/visual-performance.git
```

2. Install the dependencies

```bash
yarn install
```

3. Start the project

```bash
cd display
yarn dev
```

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](./LICENSE) file for details.
