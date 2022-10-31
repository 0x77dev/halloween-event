import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./services/audio";
import "./main.css";
import "./services/control-surface/midi";
import { OrbitControls } from "@react-three/drei";
import { AsciiRenderer } from "./components/ascii-render";
import { useMultiMidiStates } from "./services/control-surface/midi";
import { Leva } from "leva";
import "./services/lights/artnet";
import { useAudio } from "./services/audio";

const Root = () => {
  const [p8] = useMultiMidiStates([
    [160, 51],
  ]);

  const audio = useAudio();

  const invert = audio.loudness > 18 || p8 > 0.9;
  const ascii = audio.loudness > 18 || p8 > 0.1;

  return (
    <React.StrictMode>
      <Suspense fallback={null}>
        <Leva hideCopyButton />
        <Canvas shadows flat linear>
          <App />
          <OrbitControls />
          {ascii && <AsciiRenderer invert={!invert} />}
        </Canvas>
      </Suspense>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Root />
);
