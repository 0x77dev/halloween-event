import React, { useEffect, useRef } from "react";
import { Environment, OrthographicCamera } from "@react-three/drei";
import useSpline from "@splinetool/r3f-spline";
import { useFrame, MeshProps } from "@react-three/fiber";
import { useAudio } from "../services/audio";
import { Rig } from "../components/rig";
import { config, useSpring, animated } from "@react-spring/three";
import { Mesh } from "three";
import { setArtNet } from "../services/lights/artnet";
import * as chroma from "chroma-js";
import { setRow } from "../services/lights/controls";
import { useMidiState } from "../services/control-surface/midi";

const Sphere: React.FC = () => {
  const audio = useAudio();
  const sphere = React.useRef<Mesh>();
  const { nodes, materials } = useSpline("/meatball.splinecode");
  const scaleOverride =  useMidiState(176, 10)

  const { scale } = useSpring({
    scale: 1 + (audio.energy+scaleOverride*10) / 15,
    config: {
      ...config.wobbly,
      mass: 0.015,
    },
  });

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if (!sphere.current) return;
    sphere.current.rotation.x = (a / 4) + (audio.rms * 1.5);
    sphere.current.rotation.y = (a / 4) + (audio.rms * 2);
    sphere.current.rotation.z = (a / 4) + (audio.rms * 2);
  });

  useEffect(() => {
    const [r, g, b] = chroma("red")
      .rgb();

    setRow("crowd", r/5, 0, 0, 0, 0, 0);
    setRow("scene", 0, 0, 0, 0, 0, 0);
  }, [audio]);

  return (
    <group dispose={null}>
      <pointLight
        name="Point Light"
        castShadow
        intensity={0.7}
        distance={2000}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={100}
        shadow-camera-far={2500}
        color="#fed79d"
        position={[292.92+audio.loudness, 305.86, 0+audio.rms]}
      />
      <directionalLight
        name="Directional Light"
        castShadow
        intensity={0.3}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={-10000}
        shadow-camera-far={100000}
        shadow-camera-left={-1250}
        shadow-camera-right={1250}
        shadow-camera-top={1250}
        shadow-camera-bottom={-1250}
        position={[-443.35, 275.13, 338.6]}
      />
      <animated.mesh
        name="Sphere"
        geometry={nodes.Sphere.geometry}
        material={materials["Sphere Material"]}
        scale={scale}
        castShadow
        receiveShadow
        ref={sphere as any}
        position={[0, -15, 0]}
      />
      <OrthographicCamera
        name="1"
        makeDefault={true}
        zoom={0.81}
        far={100000}
        near={-100000}
        position={[598.72, 567.56, 565.77]}
        rotation={[-0.79, 0.62, 0.52]}
      />
      <hemisphereLight
        name="Default Ambient Light"
        intensity={0.75}
        color="#eaeaea"
      />
    </group>
  );
};

export const MeatBall: React.FC = () => {
  return (
    <>
      <Sphere />
      <Environment preset="warehouse" />
      <Rig />
    </>
  );
};
