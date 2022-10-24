import { useControls } from "leva";
import { MeatBall } from "./scenes/meat-ball";

const scenes = {
  MeatBall,
};

function App() {
  const { scene } = useControls({
    scene: { value: "MeatBall", options: Object.keys(scenes) },
  });

  const Scene = scenes[scene as keyof typeof scenes];

  return (
    <>
      <Scene />
    </>
  );
}

export default App;
