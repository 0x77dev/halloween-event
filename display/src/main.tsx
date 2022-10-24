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

const Root = () => {
  const [p16, p8] = useMultiMidiStates([
    [160, 43],
    [160, 51],
  ]);

  const invert = p16 < 0.5;
  const ascii = p8 > 0.5;

  return (
    <React.StrictMode>
      <Suspense fallback={null}>
        <Canvas shadows flat linear>
          <App />
          <OrbitControls />
          {ascii && <AsciiRenderer invert={invert} />}
        </Canvas>
      </Suspense>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Root />
);
