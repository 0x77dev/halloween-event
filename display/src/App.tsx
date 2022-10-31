import { useControls } from "leva";
import { Blobs } from "./scenes/blobs";
import { MeatBall } from "./scenes/meat-ball";

const scenes = {
  MeatBall,
  Blobs
};

function App() {
  const { scene, background } = useControls({
    background: { value: "#000000", options: ["#000000", "#00ff00"] },
    scene: { value: "MeatBall", options: Object.keys(scenes) },
  });

  const Scene = scenes[scene as keyof typeof scenes];
  return (
    <>
      <color attach="background" args={[background]} />
      <Scene />
    </>
  );
}

export default App;
