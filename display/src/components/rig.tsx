import { CameraShake } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";
import { useAudio } from "../services/audio";

export const Rig: React.FC = () => {
  const [vec] = useState(() => new THREE.Vector3());
  const { camera, mouse } = useThree();
  useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, 1, 60), 0.05));
  const audio = useAudio();
  const loudness = audio.loudness / 10;

  return (
    <CameraShake
      maxYaw={0.01 + loudness}
      maxPitch={0.01 + loudness}
      maxRoll={0.01 + loudness}
      yawFrequency={0.5 + audio.energy}
      pitchFrequency={0.5 + audio.energy}
      rollFrequency={0.5 + audio.energy}
    />
  );
};
