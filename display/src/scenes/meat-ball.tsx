import React, { useRef } from "react";
import { Environment, OrthographicCamera } from "@react-three/drei";
import useSpline from "@splinetool/r3f-spline";
import { useFrame, MeshProps } from "@react-three/fiber";
import { useAudio } from "../services/audio";
import { useMidiState } from "../services/control-surface/midi";
import { Rig } from "../components/rig";
import { config, useSpring, animated } from "@react-spring/three";
import { Mesh } from "three";

const Sphere = (props: MeshProps) => {
  const audio = useAudio();
  const sphere = React.useRef<Mesh>();
  const { nodes, materials } = useSpline(
    "/meatball.splinecode"
  );

  const { scale } = useSpring({
    scale: 1 + audio.energy / 20,
    config: {
      ...config.wobbly,
      mass: 0.01,
    },
  });

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if(!sphere.current) return
    sphere.current.rotation.x = (a/5)+(audio.rms / 40);
    sphere.current.rotation.y = (a/5)+(audio.rms / 40);
    sphere.current.rotation.z = (a/5)+(audio.rms / 40);
  });

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
        position={[292.92, 305.86, 0]}
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
        position={[0,-15,0]}
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
      <color attach="background" args={["#000000"]} />
      <Sphere />
      <Environment preset="warehouse" />
      <Rig />
    </>
  );
};
