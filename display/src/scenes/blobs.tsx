import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'
import { useAudio } from '../services/audio'
import { useEffect, useRef } from 'react'
import { Group } from 'three'
import { config, useSpring, animated } from "@react-spring/three";
import { useMidiState } from '../services/control-surface/midi'
import { useFrame } from '@react-three/fiber'
import chroma from 'chroma-js'
import { setRow } from '../services/lights/controls'

export const Blobs = ({ ...props }) => {
  const { nodes, materials } = useSpline('/blobs.splinecode')
  const audio = useAudio()
  const ref = useRef<Group | null>()
  const scaleOverride =  useMidiState(176, 10)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if (!ref.current) return;
    ref.current.rotation.x = (a / 4) + (audio.rms * 1.5);
    ref.current.rotation.y = (a / 4) + (audio.loudness / 2);
    ref.current.rotation.z = (a / 4) + (audio.rms * 2);
  });

  useEffect(() => {
    const [r, g, b] = chroma("red")
      .saturate(audio.energy/2)
      .brighten(audio.loudness/8)
      .rgb();

    setRow("crowd", r/4.5, g / 2.5, 0, 0, 0, audio.energy*35);
    setRow("scene", r / 2, g / 3, 0, 0, 0, audio.energy*25);
  }, [audio]);

  const { scale } = useSpring({
    scale: 1 + (audio.energy+scaleOverride*10) / 15,
    config: {
      ...config.wobbly,
      mass: 0.015,
    },
  })

  return (
    <>
      <group {...props} ref={ref as any} scale={scale.get()} dispose={null}>
        <mesh name="Trigger" geometry={nodes.Trigger.geometry} material={materials.Main} castShadow receiveShadow />
        <mesh
          name="Sphere 0"
          geometry={nodes['Sphere 1'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[-125.19, 134.51, -62.02+audio.loudness*10]}
          rotation={[0.94, -0.83, 1.33]}
          scale={1.5}
        />
        <mesh
          name="Sphere 1"
          geometry={nodes['Sphere 1'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[-187.03, 41.17, -35.17+audio.loudness*10]}
          rotation={[1.4, -0.57, 1.65]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 2"
          geometry={nodes['Sphere 2'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[-115.34, -49.34, 133.66+audio.loudness*10]}
          rotation={[1.5, 0.42, 0.45]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 3"
          geometry={nodes['Sphere 3'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[-104.57, 81.96, 112.49]}
          rotation={[-1, -0.67, -1.19]}
        />
        <mesh
          name="Sphere 4"
          geometry={nodes['Sphere 4'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[26.17, 22.65, 181.66+audio.loudness*10]}
          rotation={[1.52, 0, 0]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 5"
          geometry={nodes['Sphere 5'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[64.4, 179.8, 19.42+audio.loudness*10]}
          rotation={[-0.69, -1.04, -0.96]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 6"
          geometry={nodes['Sphere 6'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[-51.34, 169.66, 78.66+audio.loudness*10]}
          rotation={[0.58, 0, 0.3]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 7"
          geometry={nodes['Sphere 7'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[-30.3, -58.21, -178.04+audio.loudness*10]}
          rotation={[-1.79, -0.59, 0.09]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 8"
          geometry={nodes['Sphere 8'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[-161.34, -85.34, -14.34]}
          rotation={[-3.06, 0.21, 1.15]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 9"
          geometry={nodes['Sphere 9'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[50.37, 62.18, -156.33+audio.loudness*10]}
          rotation={[-1.22, -0.56, -0.32]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 10"
          geometry={nodes['Sphere 10'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[-1.34, 154.92, -69.34+audio.loudness*10]}
          rotation={[-0.45, 0, 0]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 11"
          geometry={nodes['Sphere 11'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[11.82, 130.57, 157.45+audio.loudness*10]}
          rotation={[1.22, -1.21, 0.11]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 13"
          geometry={nodes['Sphere 13'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[91.97, -37.19, -144.41+audio.loudness*10]}
          rotation={[-1.71, 0.01, -0.35]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 14"
          geometry={nodes['Sphere 14'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[-106.34, 42.66, -155.34+audio.loudness*10]}
          rotation={[-1.21, -0.1, 0.39]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 15"
          geometry={nodes['Sphere 15'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[-97.73, -139.68, -91.37+audio.loudness*10]}
          rotation={[-0.87, -0.96, 1.81]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 16"
          geometry={nodes['Sphere 16'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[7.66, -167.18, -77.49+audio.loudness*10]}
          rotation={[-2.85, 0, 0]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 17"
          geometry={nodes['Sphere 17'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[48.26, -145.18, 45.86+audio.loudness*10]}
          rotation={[-1.74, 1.07, -1.55]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 18"
          geometry={nodes['Sphere 18'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[-24.39, -166.3, 98.52+audio.loudness*10]}
          rotation={[-0.48, -0.68, 3.13]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 19"
          geometry={nodes['Sphere 19'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[109.66, -140.34, -52.34+audio.loudness*10]}
          rotation={[0.27, 0.29, -2.34]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 20"
          geometry={nodes['Sphere 20'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[93.47, -93.08, 142.61+audio.loudness*10]}
          rotation={[-0.64, -0.52, 0.56]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 21"
          geometry={nodes['Sphere 21'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[180.66, -10.34, -66.34+audio.loudness*10]}
          rotation={[-0.05, 0.53, -1.46]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 22"
          geometry={nodes['Sphere 22'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[158.46, 12.39, 64.46]}
          rotation={[-0.74, -0.14, -1.63]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 23"
          geometry={nodes['Sphere 23'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[114.66, 125.66, 110.66+audio.loudness*10]}
          rotation={[0.42, -0.41, -0.73]}
          scale={1.15-audio.rms}
        />
        <mesh
          name="Sphere 25"
          geometry={nodes['Sphere 25'].geometry}
          material={materials['Super Material']}
          castShadow
          receiveShadow
          position={[135.22, 110.04, -64.05+audio.loudness*10]}
          rotation={[-0.17, 0.61, -0.87]}
          scale={1.15-audio.rms}
        />
        <OrthographicCamera name="1" makeDefault={true} far={100000} near={-100000} position={[0, 0, 1000]} />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
  )
}
