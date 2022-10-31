import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'
import React from 'react'

export const Hands: React.FC = ({ ...props }) => {
  const { nodes, materials } = useSpline('/hands.splinecode')

  return (
    <>
      <color attach="background" args={['#000000']} />
      <group {...props} dispose={null}>
        <group name="Hands" rotation={[-0.01, 0, 0]} scale={7.69}>
          <group name="root" rotation={[0, 0, 0]}>
            <group name="_rootJoint" rotation={[0, 0, 0]}>
              <group name="Armature_015_02" position={[-15.55, 0, -15.94]} rotation={[-0.12, 0.12, -1.56]} scale={1}>
                <group name="forearm_L_01" position={[8.7, 0.41, -0.24]} rotation={[-2.83, 0.98, -0.34]} scale={1}>
                  <group name="hand_L_037" position={[13.52, 0, 0]} rotation={[1.52, 0.07, 0.02]} scale={1}>
                    <group name="palm_02_L_034" position={[1.15, 0.21, -0.31]} rotation={[0.18, -0.06, 0.01]} scale={1}>
                      <group
                        name="finger_middle_01_L_023"
                        position={[2.6, 0, 0]}
                        rotation={[-0.71, -0.12, -0.1]}
                        scale={1}
                      >
                        <group
                          name="finger_middle_02_L_038"
                          position={[1.87, 0, 0]}
                          rotation={[0.17, 0.03, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_03_L_035"
                      position={[1.12, -0.56, -0.37]}
                      rotation={[0.07, -0.06, -0.1]}
                      scale={1}
                    >
                      <group
                        name="finger_ring_01_L_018"
                        position={[2.47, 0, 0]}
                        rotation={[-0.48, -0.12, -0.05]}
                        scale={1}
                      >
                        <group
                          name="finger_ring_02_L_033"
                          position={[1.73, 0, 0]}
                          rotation={[-0.22, 0, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_04_L_028"
                      position={[0.9, -1.12, -0.28]}
                      rotation={[0.21, -0.05, -0.25]}
                      scale={1}
                    >
                      <group
                        name="finger_pinky_01_L_030"
                        position={[2.67, 0, 0]}
                        rotation={[-0.72, -0.16, -0.13]}
                        scale={1}
                      >
                        <group
                          name="finger_pinky_02_L_073"
                          position={[0.98, 0, 0]}
                          rotation={[-0.82, -0.01, 0.08]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_01_L_039"
                      position={[1.06, 1.04, -0.14]}
                      rotation={[-0.01, -0.05, 0.13]}
                      scale={1}
                    >
                      <group
                        name="finger_index_01_L_040"
                        position={[2.64, 0, 0]}
                        rotation={[-0.15, -0.1, -0.04]}
                        scale={1}
                      >
                        <group
                          name="finger_index_02_L_036"
                          position={[1.86, 0, 0]}
                          rotation={[-0.1, 0.04, -0.01]}
                          scale={1}
                        />
                      </group>
                      <group
                        name="thumb_01_L_032"
                        position={[-0.32, 0.39, 0.67]}
                        rotation={[1.09, 0.57, 0.3]}
                        scale={1}
                      >
                        <group name="thumb_02_L_063" position={[1.43, 0, 0]} rotation={[0.4, -0.12, 0.11]} scale={1} />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group name="Armature_014_03" position={[-6.97, 0, -16.26]} rotation={[-1.13, -1.47, -2.7]} scale={1}>
                <group name="forearm_L_0_041" position={[8.7, 0.41, -0.24]} rotation={[-2.83, 0.98, -0.34]} scale={1}>
                  <group name="hand_L_0_043" position={[13.52, 0, 0]} rotation={[1.52, 0.07, 0.02]} scale={1}>
                    <group
                      name="palm_02_L_0_057"
                      position={[1.15, 0.21, -0.31]}
                      rotation={[0.18, -0.06, 0.01]}
                      scale={1}
                    >
                      <group
                        name="finger_middle_01_L_0_042"
                        position={[2.6, 0, 0]}
                        rotation={[-0.71, -0.12, -0.1]}
                        scale={1}
                      >
                        <group
                          name="finger_middle_02_L_0_060"
                          position={[1.87, 0, 0]}
                          rotation={[0.17, 0.03, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_03_L_0_061"
                      position={[1.12, -0.56, -0.37]}
                      rotation={[0.07, -0.06, -0.1]}
                      scale={1}
                    >
                      <group
                        name="finger_ring_01_L_0_019"
                        position={[2.47, 0, 0]}
                        rotation={[-0.48, -0.12, -0.05]}
                        scale={1}
                      >
                        <group
                          name="finger_ring_02_L_0_00"
                          position={[1.73, 0, 0]}
                          rotation={[-0.22, 0, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_04_L_0_022"
                      position={[0.9, -1.12, -0.28]}
                      rotation={[0.21, -0.05, -0.25]}
                      scale={1}
                    >
                      <group
                        name="finger_pinky_01_L_0_025"
                        position={[2.67, 0, 0]}
                        rotation={[-0.72, -0.16, -0.13]}
                        scale={1}
                      >
                        <group
                          name="finger_pinky_02_L_0_024"
                          position={[0.98, 0, 0]}
                          rotation={[-0.82, -0.01, 0.08]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_01_L_0_064"
                      position={[1.06, 1.04, -0.14]}
                      rotation={[-0.01, -0.05, 0.13]}
                      scale={1}
                    >
                      <group
                        name="finger_index_01_L_0_026"
                        position={[2.64, 0, 0]}
                        rotation={[-0.15, -0.1, -0.04]}
                        scale={1}
                      >
                        <group
                          name="finger_index_02_L_0_065"
                          position={[1.86, 0, 0]}
                          rotation={[-0.1, 0.04, -0.01]}
                          scale={1}
                        />
                      </group>
                      <group
                        name="thumb_01_L_0_068"
                        position={[-0.32, 0.39, 0.67]}
                        rotation={[1.09, 0.57, 0.3]}
                        scale={1}
                      >
                        <group
                          name="thumb_02_L_0_067"
                          position={[1.43, 0, 0]}
                          rotation={[0.4, -0.12, 0.11]}
                          scale={1}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group name="Armature_013_04" position={[3.12, 0, -16.63]} rotation={[-3.02, 0.05, 1.57]} scale={1}>
                <group name="forearm_L_1_069" position={[8.7, 0.41, -0.24]} rotation={[-2.83, 0.98, -0.34]} scale={1}>
                  <group name="hand_L_1_072" position={[13.52, 0, 0]} rotation={[1.52, 0.07, 0.02]} scale={1}>
                    <group
                      name="palm_02_L_1_045"
                      position={[1.15, 0.21, -0.31]}
                      rotation={[0.18, -0.06, 0.01]}
                      scale={1}
                    >
                      <group
                        name="finger_middle_01_L_1_071"
                        position={[2.6, 0, 0]}
                        rotation={[-0.71, -0.12, -0.1]}
                        scale={1}
                      >
                        <group
                          name="finger_middle_02_L_1_047"
                          position={[1.87, 0, 0]}
                          rotation={[0.17, 0.03, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_03_L_1_048"
                      position={[1.12, -0.56, -0.37]}
                      rotation={[0.07, -0.06, -0.1]}
                      scale={1}
                    >
                      <group
                        name="finger_ring_01_L_1_049"
                        position={[2.47, 0, 0]}
                        rotation={[-0.48, -0.12, -0.05]}
                        scale={1}
                      >
                        <group
                          name="finger_ring_02_L_1_051"
                          position={[1.73, 0, 0]}
                          rotation={[-0.22, 0, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_04_L_1_053"
                      position={[0.9, -1.12, -0.28]}
                      rotation={[0.21, -0.05, -0.25]}
                      scale={1}
                    >
                      <group
                        name="finger_pinky_01_L_1_052"
                        position={[2.67, 0, 0]}
                        rotation={[-0.72, -0.16, -0.13]}
                        scale={1}
                      >
                        <group
                          name="finger_pinky_02_L_1_055"
                          position={[0.98, 0, 0]}
                          rotation={[-0.82, -0.01, 0.08]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_01_L_1_054"
                      position={[1.06, 1.04, -0.14]}
                      rotation={[-0.01, -0.05, 0.13]}
                      scale={1}
                    >
                      <group
                        name="finger_index_01_L_1_075"
                        position={[2.64, 0, 0]}
                        rotation={[-0.15, -0.1, -0.04]}
                        scale={1}
                      >
                        <group
                          name="finger_index_02_L_1_074"
                          position={[1.86, 0, 0]}
                          rotation={[-0.1, 0.04, -0.01]}
                          scale={1}
                        />
                      </group>
                      <group
                        name="thumb_01_L_1_076"
                        position={[-0.32, 0.39, 0.67]}
                        rotation={[1.09, 0.57, 0.3]}
                        scale={1}
                      >
                        <group
                          name="thumb_02_L_1_078"
                          position={[1.43, 0, 0]}
                          rotation={[0.4, -0.12, 0.11]}
                          scale={1}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group name="Armature_012_05" position={[14.72, 0, -17.07]} rotation={[-1.95, 1.48, 0.38]} scale={1}>
                <group name="forearm_L_2_081" position={[8.7, 0.41, -0.24]} rotation={[-2.83, 0.98, -0.34]} scale={1}>
                  <group name="hand_L_2_080" position={[13.52, 0, 0]} rotation={[1.52, 0.07, 0.02]} scale={1}>
                    <group
                      name="palm_02_L_2_082"
                      position={[1.15, 0.21, -0.31]}
                      rotation={[0.18, -0.06, 0.01]}
                      scale={1}
                    >
                      <group
                        name="finger_middle_01_L_2_083"
                        position={[2.6, 0, 0]}
                        rotation={[-0.71, -0.12, -0.1]}
                        scale={1}
                      >
                        <group
                          name="finger_middle_02_L_2_084"
                          position={[1.87, 0, 0]}
                          rotation={[0.17, 0.03, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_03_L_2_086"
                      position={[1.12, -0.56, -0.37]}
                      rotation={[0.07, -0.06, -0.1]}
                      scale={1}
                    >
                      <group
                        name="finger_ring_01_L_2_087"
                        position={[2.47, 0, 0]}
                        rotation={[-0.48, -0.12, -0.05]}
                        scale={1}
                      >
                        <group
                          name="finger_ring_02_L_2_089"
                          position={[1.73, 0, 0]}
                          rotation={[-0.22, 0, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_04_L_2_091"
                      position={[0.9, -1.12, -0.28]}
                      rotation={[0.21, -0.05, -0.25]}
                      scale={1}
                    >
                      <group
                        name="finger_pinky_01_L_2_090"
                        position={[2.67, 0, 0]}
                        rotation={[-0.72, -0.16, -0.13]}
                        scale={1}
                      >
                        <group
                          name="finger_pinky_02_L_2_093"
                          position={[0.98, 0, 0]}
                          rotation={[-0.82, -0.01, 0.08]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_01_L_2_094"
                      position={[1.06, 1.04, -0.14]}
                      rotation={[-0.01, -0.05, 0.13]}
                      scale={1}
                    >
                      <group
                        name="finger_index_01_L_2_095"
                        position={[2.64, 0, 0]}
                        rotation={[-0.15, -0.1, -0.04]}
                        scale={1}
                      >
                        <group
                          name="finger_index_02_L_2_096"
                          position={[1.86, 0, 0]}
                          rotation={[-0.1, 0.04, -0.01]}
                          scale={1}
                        />
                      </group>
                      <group
                        name="thumb_01_L_2_098"
                        position={[-0.32, 0.39, 0.67]}
                        rotation={[1.09, 0.57, 0.3]}
                        scale={1}
                      >
                        <group
                          name="thumb_02_L_2_099"
                          position={[1.43, 0, 0]}
                          rotation={[0.4, -0.12, 0.11]}
                          scale={1}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group name="Armature_011_06" position={[-17.8, 0, -4.85]} rotation={[-1.57, -1.48, -Math.PI]} scale={1}>
                <group name="forearm_L_3_0101" position={[8.7, 0.41, -0.24]} rotation={[-2.83, 0.98, -0.34]} scale={1}>
                  <group name="hand_L_3_0103" position={[13.52, 0, 0]} rotation={[1.52, 0.07, 0.02]} scale={1}>
                    <group
                      name="palm_02_L_3_0104"
                      position={[1.15, 0.21, -0.31]}
                      rotation={[0.18, -0.06, 0.01]}
                      scale={1}
                    >
                      <group
                        name="finger_middle_01_L_3_0106"
                        position={[2.6, 0, 0]}
                        rotation={[-0.71, -0.12, -0.1]}
                        scale={1}
                      >
                        <group
                          name="finger_middle_02_L_3_0105"
                          position={[1.87, 0, 0]}
                          rotation={[0.17, 0.03, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_03_L_3_0107"
                      position={[1.12, -0.56, -0.37]}
                      rotation={[0.07, -0.06, -0.1]}
                      scale={1}
                    >
                      <group
                        name="finger_ring_01_L_3_0110"
                        position={[2.47, 1, 0]}
                        rotation={[-0.48, -0.12, -0.05]}
                        scale={1}
                      >
                        <group
                          name="finger_ring_02_L_3_0109"
                          position={[1.73, 0, 0]}
                          rotation={[-0.22, 0, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_04_L_3_0112"
                      position={[0.9, -1.12, -0.28]}
                      rotation={[0.21, -0.05, -0.25]}
                      scale={1}
                    >
                      <group
                        name="finger_pinky_01_L_3_0114"
                        position={[2.67, 0, 0]}
                        rotation={[-0.72, -0.16, -0.13]}
                        scale={1}
                      >
                        <group
                          name="finger_pinky_02_L_3_0115"
                          position={[0.98, 0, 0]}
                          rotation={[-0.82, -0.01, 0.08]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_01_L_3_0117"
                      position={[1.06, 1.04, -0.14]}
                      rotation={[-0.01, -0.05, 0.13]}
                      scale={1}
                    >
                      <group
                        name="finger_index_01_L_3_0118"
                        position={[2.64, 0, 0]}
                        rotation={[-0.15, -0.1, -0.04]}
                        scale={1}
                      >
                        <group
                          name="finger_index_02_L_3_0119"
                          position={[1.86, 0, 0]}
                          rotation={[-0.1, 0.04, -0.01]}
                          scale={1}
                        />
                      </group>
                      <group
                        name="thumb_01_L_3_0120"
                        position={[-0.32, 0.39, 0.67]}
                        rotation={[1.09, 0.57, 0.3]}
                        scale={1}
                      >
                        <group
                          name="thumb_02_L_3_0123"
                          position={[1.43, 0, 0]}
                          rotation={[0.4, -0.12, 0.11]}
                          scale={1}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group name="Armature_010_07" position={[-6.18, 0, -4.85]} rotation={[-0.12, 0.09, -1.57]} scale={1}>
                <group name="forearm_L_4_0125" position={[8.7, 0.41, -0.24]} rotation={[-2.83, 0.98, -0.34]} scale={1}>
                  <group name="hand_L_4_0124" position={[13.52, 0, 0]} rotation={[1.52, 0.07, 0.02]} scale={1}>
                    <group
                      name="palm_02_L_4_0126"
                      position={[1.15, 0.21, -0.31]}
                      rotation={[0.18, -0.06, 0.01]}
                      scale={1}
                    >
                      <group
                        name="finger_middle_01_L_4_0127"
                        position={[2.6, 0, 0]}
                        rotation={[-0.71, -0.12, -0.1]}
                        scale={1}
                      >
                        <group
                          name="finger_middle_02_L_4_0128"
                          position={[1.87, 0, 0]}
                          rotation={[0.17, 0.03, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_03_L_4_0130"
                      position={[1.12, -0.56, -0.37]}
                      rotation={[0.07, -0.06, -0.1]}
                      scale={1}
                    >
                      <group
                        name="finger_ring_01_L_4_0131"
                        position={[2.47, 0, 0]}
                        rotation={[-0.48, -0.12, -0.05]}
                        scale={1}
                      >
                        <group
                          name="finger_ring_02_L_4_0132"
                          position={[1.73, 0, 0]}
                          rotation={[-0.22, 0, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_04_L_4_0134"
                      position={[0.9, -1.12, -0.28]}
                      rotation={[0.21, -0.05, -0.25]}
                      scale={1}
                    >
                      <group
                        name="finger_pinky_01_L_4_0135"
                        position={[2.67, 0, 0]}
                        rotation={[-0.72, -0.16, -0.13]}
                        scale={1}
                      >
                        <group
                          name="finger_pinky_02_L_4_0137"
                          position={[0.98, 0, 0]}
                          rotation={[-0.82, -0.01, 0.08]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_01_L_4_0139"
                      position={[1.06, 1.04, -0.14]}
                      rotation={[-0.01, -0.05, 0.13]}
                      scale={1}
                    >
                      <group
                        name="finger_index_01_L_4_0138"
                        position={[2.64, 0, 0]}
                        rotation={[-0.15, -0.1, -0.04]}
                        scale={1}
                      >
                        <group
                          name="finger_index_02_L_4_0141"
                          position={[1.86, 0, 0]}
                          rotation={[-0.1, 0.04, -0.01]}
                          scale={1}
                        />
                      </group>
                      <group
                        name="thumb_01_L_4_0142"
                        position={[-0.32, 0.39, 0.67]}
                        rotation={[1.09, 0.57, 0.3]}
                        scale={1}
                      >
                        <group
                          name="thumb_02_L_4_0143"
                          position={[1.43, 0, 0]}
                          rotation={[0.4, -0.12, 0.11]}
                          scale={1}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group name="Armature_009_08" position={[3.91, 0, -4.85]} rotation={[-Math.PI / 2, 1.48, 0]}>
                <group name="forearm_L_5_0145" position={[8.7, 0.41, -0.24]} rotation={[-2.83, 0.98, -0.34]} scale={1}>
                  <group name="hand_L_5_0146" position={[13.52, 0, 0]} rotation={[1.52, 0.07, 0.02]} scale={1}>
                    <group
                      name="palm_02_L_5_0147"
                      position={[1.15, 0.21, -0.31]}
                      rotation={[0.18, -0.06, 0.01]}
                      scale={1}
                    >
                      <group
                        name="finger_middle_01_L_5_0149"
                        position={[2.6, 0, 0]}
                        rotation={[-0.71, -0.12, -0.1]}
                        scale={1}
                      >
                        <group
                          name="finger_middle_02_L_5_0148"
                          position={[1.87, 0, 0]}
                          rotation={[0.17, 0.03, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_03_L_5_0151"
                      position={[1.12, -0.56, -0.37]}
                      rotation={[0.07, -0.06, -0.1]}
                      scale={1}
                    >
                      <group
                        name="finger_ring_01_L_5_0153"
                        position={[2.47, 0, 0]}
                        rotation={[-0.48, -0.12, -0.05]}
                        scale={1}
                      >
                        <group
                          name="finger_ring_02_L_5_0152"
                          position={[1.73, 0, 0]}
                          rotation={[-0.22, 0, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_04_L_5_0154"
                      position={[0.9, -1.12, -0.28]}
                      rotation={[0.21, -0.05, -0.25]}
                      scale={1}
                    >
                      <group
                        name="finger_pinky_01_L_5_0157"
                        position={[2.67, 0, 0]}
                        rotation={[-0.72, -0.16, -0.13]}
                        scale={1}
                      >
                        <group
                          name="finger_pinky_02_L_5_0156"
                          position={[0.98, 0, 0]}
                          rotation={[-0.82, -0.01, 0.08]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_01_L_5_0159"
                      position={[1.06, 1.04, -0.14]}
                      rotation={[-0.01, -0.05, 0.13]}
                      scale={1}
                    >
                      <group
                        name="finger_index_01_L_5_0160"
                        position={[2.64, 0, 0]}
                        rotation={[-0.15, -0.1, -0.04]}
                        scale={1}
                      >
                        <group
                          name="finger_index_02_L_5_0161"
                          position={[1.86, 0, 0]}
                          rotation={[-0.1, 0.04, -0.01]}
                          scale={1}
                        />
                      </group>
                      <group
                        name="thumb_01_L_5_0163"
                        position={[-0.32, 0.39, 0.67]}
                        rotation={[1.09, 0.57, 0.3]}
                        scale={1}
                      >
                        <group
                          name="thumb_02_L_5_0165"
                          position={[1.43, 0, 0]}
                          rotation={[0.4, -0.12, 0.11]}
                          scale={1}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group name="Armature_008_09" position={[12.49, 0, -4.85]} rotation={[-3.02, 0.09, 1.57]} scale={1}>
                <group name="forearm_L_6_0166" position={[8.7, 0.41, -0.24]} rotation={[-2.83, 0.98, -0.34]} scale={1}>
                  <group name="hand_L_6_0167" position={[13.52, 0, 0]} rotation={[1.52, 0.07, 0.02]} scale={1}>
                    <group
                      name="palm_02_L_6_0169"
                      position={[1.15, 0.21, -0.31]}
                      rotation={[0.18, -0.06, 0.01]}
                      scale={1}
                    >
                      <group
                        name="finger_middle_01_L_6_0168"
                        position={[2.6, 0, 0]}
                        rotation={[-0.71, -0.12, -0.1]}
                        scale={1}
                      >
                        <group
                          name="finger_middle_02_L_6_0171"
                          position={[1.87, 0, 0]}
                          rotation={[0.17, 0.03, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_03_L_6_0173"
                      position={[1.12, -0.56, -0.37]}
                      rotation={[0.07, -0.06, -0.1]}
                      scale={1}
                    >
                      <group
                        name="finger_ring_01_L_6_0172"
                        position={[2.47, 0, 0]}
                        rotation={[-0.48, -0.12, -0.05]}
                        scale={1}
                      >
                        <group
                          name="finger_ring_02_L_6_0174"
                          position={[1.73, 0, 0]}
                          rotation={[-0.22, 0, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_04_L_6_0176"
                      position={[0.9, -1.12, -0.28]}
                      rotation={[0.21, -0.05, -0.25]}
                      scale={1}
                    >
                      <group
                        name="finger_pinky_01_L_6_0177"
                        position={[2.67, 0, 0]}
                        rotation={[-0.72, -0.16, -0.13]}
                        scale={1}
                      >
                        <group
                          name="finger_pinky_02_L_6_0178"
                          position={[0.98, 0, 0]}
                          rotation={[-0.82, -0.01, 0.08]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_01_L_6_0180"
                      position={[1.06, 1.04, -0.14]}
                      rotation={[-0.01, -0.05, 0.13]}
                      scale={1}
                    >
                      <group
                        name="finger_index_01_L_6_0181"
                        position={[2.64, 0, 0]}
                        rotation={[-0.15, -0.1, -0.04]}
                        scale={1}
                      >
                        <group
                          name="finger_index_02_L_6_0183"
                          position={[1.86, 0, 0]}
                          rotation={[-0.1, 0.04, -0.01]}
                          scale={1}
                        />
                      </group>
                      <group
                        name="thumb_01_L_6_0185"
                        position={[-0.32, 0.39, 0.67]}
                        rotation={[1.09, 0.57, 0.3]}
                        scale={1}
                      >
                        <group
                          name="thumb_02_L_6_0184"
                          position={[1.43, 0, 0]}
                          rotation={[0.4, -0.12, 0.11]}
                          scale={1}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group name="Armature_007_010" position={[-14.59, 0, 6.25]} rotation={[-0.12, 0.11, -1.56]} scale={1}>
                <group name="forearm_L_7_0188" position={[8.7, 0.41, -0.24]} rotation={[-2.83, 0.98, -0.34]} scale={1}>
                  <group name="hand_L_7_0190" position={[13.52, 0, 0]} rotation={[1.52, 0.07, 0.02]} scale={1}>
                    <group
                      name="palm_02_L_7_0189"
                      position={[1.15, 0.21, -0.31]}
                      rotation={[0.18, -0.06, 0.01]}
                      scale={1}
                    >
                      <group
                        name="finger_middle_01_L_7_0192"
                        position={[2.6, 0, 0]}
                        rotation={[-0.71, -0.12, -0.1]}
                        scale={1}
                      >
                        <group
                          name="finger_middle_02_L_7_0191"
                          position={[1.87, 0, 0]}
                          rotation={[0.17, 0.03, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_03_L_7_0193"
                      position={[1.12, -0.56, -0.37]}
                      rotation={[0.07, -0.06, -0.1]}
                      scale={1}
                    >
                      <group
                        name="finger_ring_01_L_7_0195"
                        position={[2.47, 0, 0]}
                        rotation={[-0.48, -0.12, -0.05]}
                        scale={1}
                      >
                        <group
                          name="finger_ring_02_L_7_0196"
                          position={[1.73, 0, 0]}
                          rotation={[-0.22, 0, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_04_L_7_0198"
                      position={[0.9, -1.12, -0.28]}
                      rotation={[0.21, -0.05, -0.25]}
                      scale={1}
                    >
                      <group
                        name="finger_pinky_01_L_7_0200"
                        position={[2.67, 0, 0]}
                        rotation={[-0.72, -0.16, -0.13]}
                        scale={1}
                      >
                        <group
                          name="finger_pinky_02_L_7_0199"
                          position={[0.98, 0, 0]}
                          rotation={[-0.82, -0.01, 0.08]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_01_L_7_0201"
                      position={[1.06, 1.04, -0.14]}
                      rotation={[-0.01, -0.05, 0.13]}
                      scale={1}
                    >
                      <group
                        name="finger_index_01_L_7_0204"
                        position={[2.64, 0, 0]}
                        rotation={[-0.15, -0.1, -0.04]}
                        scale={1}
                      >
                        <group
                          name="finger_index_02_L_7_0203"
                          position={[1.86, 0, 0]}
                          rotation={[-0.1, 0.04, -0.01]}
                          scale={1}
                        />
                      </group>
                      <group
                        name="thumb_01_L_7_0206"
                        position={[-0.32, 0.39, 0.67]}
                        rotation={[1.09, 0.57, 0.3]}
                        scale={1}
                      >
                        <group
                          name="thumb_02_L_7_0186"
                          position={[1.43, 0, 0]}
                          rotation={[0.4, -0.12, 0.11]}
                          scale={1}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group name="Armature_006_011" position={[-6.01, 0, 6.06]} rotation={[-1.3, -1.48, -2.87]} scale={1}>
                <group name="forearm_L_8_0207" position={[8.7, 0.41, -0.24]} rotation={[-2.83, 0.98, -0.34]} scale={1}>
                  <group name="hand_L_8_0210" position={[13.52, 0, 0]} rotation={[1.52, 0.07, 0.02]} scale={1}>
                    <group
                      name="palm_02_L_8_0209"
                      position={[1.15, 0.21, -0.31]}
                      rotation={[0.18, -0.06, 0.01]}
                      scale={1}
                    >
                      <group
                        name="finger_middle_01_L_8_0212"
                        position={[2.6, 0, 0]}
                        rotation={[-0.71, -0.12, -0.1]}
                        scale={1}
                      >
                        <group
                          name="finger_middle_02_L_8_0211"
                          position={[1.87, 0, 0]}
                          rotation={[0.17, 0.03, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_03_L_8_0214"
                      position={[1.12, -0.56, -0.37]}
                      rotation={[0.07, -0.06, -0.1]}
                      scale={1}
                    >
                      <group
                        name="finger_ring_01_L_8_0216"
                        position={[2.47, 0, 0]}
                        rotation={[-0.48, -0.12, -0.05]}
                        scale={1}
                      >
                        <group
                          name="finger_ring_02_L_8_0215"
                          position={[1.73, 0, 0]}
                          rotation={[-0.22, 0, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_04_L_8_0217"
                      position={[0.9, -1.12, -0.28]}
                      rotation={[0.21, -0.05, -0.25]}
                      scale={1}
                    >
                      <group
                        name="finger_pinky_01_L_8_0220"
                        position={[2.67, 0, 0]}
                        rotation={[-0.72, -0.16, -0.13]}
                        scale={1}
                      >
                        <group
                          name="finger_pinky_02_L_8_0219"
                          position={[0.98, 0, 0]}
                          rotation={[-0.82, -0.01, 0.08]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_01_L_8_0221"
                      position={[1.06, 1.04, -0.14]}
                      rotation={[-0.01, -0.05, 0.13]}
                      scale={1}
                    >
                      <group
                        name="finger_index_01_L_8_0223"
                        position={[2.64, 0, 0]}
                        rotation={[-0.15, -0.1, -0.04]}
                        scale={1}
                      >
                        <group
                          name="finger_index_02_L_8_0224"
                          position={[1.86, 0, 0]}
                          rotation={[-0.1, 0.04, -0.01]}
                          scale={1}
                        />
                      </group>
                      <group
                        name="thumb_01_L_8_0227"
                        position={[-0.32, 0.39, 0.67]}
                        rotation={[1.09, 0.57, 0.3]}
                        scale={1}
                      >
                        <group
                          name="thumb_02_L_8_0228"
                          position={[1.43, 0, 0]}
                          rotation={[0.4, -0.12, 0.11]}
                          scale={1}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group name="Armature_005_012" position={[4.08, 0, 5.84]} rotation={[-3.02, 0.06, 1.57]} scale={1}>
                <group name="forearm_L_9_0231" position={[8.7, 0.41, -0.24]} rotation={[-2.83, 0.98, -0.34]} scale={1}>
                  <group name="hand_L_9_0230" position={[13.52, 0, 0]} rotation={[1.52, 0.07, 0.02]} scale={1}>
                    <group
                      name="palm_02_L_9_0232"
                      position={[1.15, 0.21, -0.31]}
                      rotation={[0.18, -0.06, 0.01]}
                      scale={1}
                    >
                      <group
                        name="finger_middle_01_L_9_0102"
                        position={[2.6, 0, 0]}
                        rotation={[-0.71, -0.12, -0.1]}
                        scale={1}
                      >
                        <group
                          name="finger_middle_02_L_9_0233"
                          position={[1.87, 0, 0]}
                          rotation={[0.17, 0.03, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_03_L_9_0235"
                      position={[1.12, -0.56, -0.37]}
                      rotation={[0.07, -0.06, -0.1]}
                      scale={1}
                    >
                      <group
                        name="finger_ring_01_L_9_0237"
                        position={[2.47, 0, 0]}
                        rotation={[-0.48, -0.12, -0.05]}
                        scale={1}
                      >
                        <group
                          name="finger_ring_02_L_9_0236"
                          position={[1.73, 0, 0]}
                          rotation={[-0.22, 0, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_04_L_9_0239"
                      position={[0.9, -1.12, -0.28]}
                      rotation={[0.21, -0.05, -0.25]}
                      scale={1}
                    >
                      <group
                        name="finger_pinky_01_L_9_0113"
                        position={[2.67, 0, 0]}
                        rotation={[-0.72, -0.16, -0.13]}
                        scale={1}
                      >
                        <group
                          name="finger_pinky_02_L_9_0111"
                          position={[0.98, 0, 0]}
                          rotation={[-0.82, -0.01, 0.08]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_01_L_9_0241"
                      position={[1.06, 1.04, -0.14]}
                      rotation={[-0.01, -0.05, 0.13]}
                      scale={1}
                    >
                      <group
                        name="finger_index_01_L_9_0243"
                        position={[2.64, 0, 0]}
                        rotation={[-0.15, -0.1, -0.04]}
                        scale={1}
                      >
                        <group
                          name="finger_index_02_L_9_0242"
                          position={[1.86, 0, 0]}
                          rotation={[-0.1, 0.04, -0.01]}
                          scale={1}
                        />
                      </group>
                      <group
                        name="thumb_01_L_9_0245"
                        position={[-0.32, 0.39, 0.67]}
                        rotation={[1.09, 0.57, 0.3]}
                        scale={1}
                      >
                        <group
                          name="thumb_02_L_9_0247"
                          position={[1.43, 0, 0]}
                          rotation={[0.4, -0.12, 0.11]}
                          scale={1}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group name="Armature_004_013" position={[15.69, 0, 5.58]} rotation={[-1.8, 1.48, 0.23]} scale={1}>
                <group name="forearm_L_10_0249" position={[8.7, 0.41, -0.24]} rotation={[-2.83, 0.98, -0.34]} scale={1}>
                  <group name="hand_L_10_0248" position={[13.52, 0, 0]} rotation={[1.52, 0.07, 0.02]} scale={1}>
                    <group
                      name="palm_02_L_10_0251"
                      position={[1.15, 0.21, -0.31]}
                      rotation={[0.18, -0.06, 0.01]}
                      scale={1}
                    >
                      <group
                        name="finger_middle_01_L_10_0250"
                        position={[2.6, 0, 0]}
                        rotation={[-0.71, -0.12, -0.1]}
                        scale={1}
                      >
                        <group
                          name="finger_middle_02_L_10_0252"
                          position={[1.87, 0, 0]}
                          rotation={[0.17, 0.03, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_03_L_10_0255"
                      position={[1.12, -0.56, -0.37]}
                      rotation={[0.07, -0.06, -0.1]}
                      scale={1}
                    >
                      <group
                        name="finger_ring_01_L_10_0254"
                        position={[2.47, 0, 0]}
                        rotation={[-0.48, -0.12, -0.05]}
                        scale={1}
                      >
                        <group
                          name="finger_ring_02_L_10_0256"
                          position={[1.73, 0, 0]}
                          rotation={[-0.22, 0, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_04_L_10_0258"
                      position={[0.9, -1.12, -0.28]}
                      rotation={[0.21, -0.05, -0.25]}
                      scale={1}
                    >
                      <group
                        name="finger_pinky_01_L_10_0259"
                        position={[2.67, 0, 0]}
                        rotation={[-0.72, -0.16, -0.13]}
                        scale={1}
                      >
                        <group
                          name="finger_pinky_02_L_10_0261"
                          position={[0.98, 0, 0]}
                          rotation={[-0.82, -0.01, 0.08]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_01_L_10_0263"
                      position={[1.06, 1.04, -0.14]}
                      rotation={[-0.01, -0.05, 0.13]}
                      scale={1}
                    >
                      <group
                        name="finger_index_01_L_10_0262"
                        position={[2.64, 0, 0]}
                        rotation={[-0.15, -0.1, -0.04]}
                        scale={1}
                      >
                        <group
                          name="finger_index_02_L_10_0244"
                          position={[1.86, 0, 0]}
                          rotation={[-0.1, 0.04, -0.01]}
                          scale={1}
                        />
                      </group>
                      <group
                        name="thumb_01_L_10_0266"
                        position={[-0.32, 0.39, 0.67]}
                        rotation={[1.09, 0.57, 0.3]}
                        scale={1}
                      >
                        <group
                          name="thumb_02_L_10_0267"
                          position={[1.43, 0, 0]}
                          rotation={[0.4, -0.12, 0.11]}
                          scale={1}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group
                name="Armature_003_014"
                position={[-16.24, 0, 17.08]}
                rotation={[-1.57, -1.48, -Math.PI]}
                scale={1}
              >
                <group name="forearm_L_11_0269" position={[8.7, 0.41, -0.24]} rotation={[-2.83, 0.98, -0.34]} scale={1}>
                  <group name="hand_L_11_0270" position={[13.52, 0, 0]} rotation={[1.52, 0.07, 0.02]} scale={1}>
                    <group
                      name="palm_02_L_11_0271"
                      position={[1.15, 0.21, -0.31]}
                      rotation={[0.18, -0.06, 0.01]}
                      scale={1}
                    >
                      <group
                        name="finger_middle_01_L_11_0273"
                        position={[2.6, 0, 0]}
                        rotation={[-0.71, -0.12, -0.1]}
                        scale={1}
                      >
                        <group
                          name="finger_middle_02_L_11_0272"
                          position={[1.87, 0, 0]}
                          rotation={[0.17, 0.03, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_03_L_11_0274"
                      position={[1.12, -0.56, -0.37]}
                      rotation={[0.07, -0.06, -0.1]}
                      scale={1}
                    >
                      <group
                        name="finger_ring_01_L_11_0277"
                        position={[2.47, 0, 0]}
                        rotation={[-0.48, -0.12, -0.05]}
                        scale={1}
                      >
                        <group
                          name="finger_ring_02_L_11_0276"
                          position={[1.73, 0, 0]}
                          rotation={[-0.22, 0, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_04_L_11_0278"
                      position={[0.9, -1.12, -0.28]}
                      rotation={[0.21, -0.05, -0.25]}
                      scale={1}
                    >
                      <group
                        name="finger_pinky_01_L_11_0280"
                        position={[2.67, 0, 0]}
                        rotation={[-0.72, -0.16, -0.13]}
                        scale={1}
                      >
                        <group
                          name="finger_pinky_02_L_11_0281"
                          position={[0.98, 0, 0]}
                          rotation={[-0.82, -0.01, 0.08]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_01_L_11_0282"
                      position={[1.06, 1.04, -0.14]}
                      rotation={[-0.01, -0.05, 0.13]}
                      scale={1}
                    >
                      <group
                        name="finger_index_01_L_11_0264"
                        position={[2.64, 0, 0]}
                        rotation={[-0.15, -0.1, -0.04]}
                        scale={1}
                      >
                        <group
                          name="finger_index_02_L_11_0285"
                          position={[1.86, 0, 0]}
                          rotation={[-0.1, 0.04, -0.01]}
                          scale={1}
                        />
                      </group>
                      <group
                        name="thumb_01_L_11_0287"
                        position={[-0.32, 0.39, 0.67]}
                        rotation={[1.09, 0.57, 0.3]}
                        scale={1}
                      >
                        <group
                          name="thumb_02_L_11_0289"
                          position={[1.43, 0, 0]}
                          rotation={[0.4, -0.12, 0.11]}
                          scale={1}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group name="Armature_002_015" position={[-4.63, 0, 17.08]} rotation={[-0.12, 0.09, -1.57]} scale={1}>
                <group name="forearm_L_12_0291" position={[8.7, 0.41, -0.24]} rotation={[-2.83, 0.98, -0.34]} scale={1}>
                  <group name="hand_L_12_0290" position={[13.52, 0, 0]} rotation={[1.52, 0.07, 0.02]} scale={1}>
                    <group
                      name="palm_02_L_12_0293"
                      position={[1.15, 0.21, -0.31]}
                      rotation={[0.18, -0.06, 0.01]}
                      scale={1}
                    >
                      <group
                        name="finger_middle_01_L_12_0292"
                        position={[2.6, 0, 0]}
                        rotation={[-0.71, -0.12, -0.1]}
                        scale={1}
                      >
                        <group
                          name="finger_middle_02_L_12_0295"
                          position={[1.87, 0, 0]}
                          rotation={[0.17, 0.03, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_03_L_12_0296"
                      position={[1.12, -0.56, -0.37]}
                      rotation={[0.07, -0.06, -0.1]}
                      scale={1}
                    >
                      <group
                        name="finger_ring_01_L_12_0297"
                        position={[2.47, 0, 0]}
                        rotation={[-0.48, -0.12, -0.05]}
                        scale={1}
                      >
                        <group
                          name="finger_ring_02_L_12_0298"
                          position={[1.73, 0, 0]}
                          rotation={[-0.22, 0, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_04_L_12_0301"
                      position={[0.9, -1.12, -0.28]}
                      rotation={[0.21, -0.05, -0.25]}
                      scale={1}
                    >
                      <group
                        name="finger_pinky_01_L_12_0300"
                        position={[2.67, 0, 0]}
                        rotation={[-0.72, -0.16, -0.13]}
                        scale={1}
                      >
                        <group
                          name="finger_pinky_02_L_12_0302"
                          position={[0.98, 0, 0]}
                          rotation={[-0.82, -0.01, 0.08]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_01_L_12_0284"
                      position={[1.06, 1.04, -0.14]}
                      rotation={[-0.01, -0.05, 0.13]}
                      scale={1}
                    >
                      <group
                        name="finger_index_01_L_12_0305"
                        position={[2.64, 0, 0]}
                        rotation={[-0.15, -0.1, -0.04]}
                        scale={1}
                      >
                        <group
                          name="finger_index_02_L_12_0307"
                          position={[1.86, 0, 0]}
                          rotation={[-0.1, 0.04, -0.01]}
                          scale={1}
                        />
                      </group>
                      <group
                        name="thumb_01_L_12_0309"
                        position={[-0.32, 0.39, 0.67]}
                        rotation={[1.09, 0.57, 0.3]}
                        scale={1}
                      >
                        <group
                          name="thumb_02_L_12_0308"
                          position={[1.43, 0, 0]}
                          rotation={[0.4, -0.12, 0.11]}
                          scale={1}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group name="Armature_001_016" position={[5.47, 0, 17.08]} rotation={[-Math.PI / 2, 1.48, 0]}>
                <group name="forearm_L_13_0310" position={[8.7, 0.41, -0.24]} rotation={[-2.83, 0.98, -0.34]} scale={1}>
                  <group name="hand_L_13_0312" position={[13.52, 0, 0]} rotation={[1.52, 0.07, 0.02]} scale={1}>
                    <group
                      name="palm_02_L_13_0313"
                      position={[1.15, 0.21, -0.31]}
                      rotation={[0.18, -0.06, 0.01]}
                      scale={1}
                    >
                      <group
                        name="finger_middle_01_L_13_0315"
                        position={[2.6, 0, 0]}
                        rotation={[-0.71, -0.12, -0.1]}
                        scale={1}
                      >
                        <group
                          name="finger_middle_02_L_13_0314"
                          position={[1.87, 0, 0]}
                          rotation={[0.17, 0.03, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_03_L_13_0317"
                      position={[1.12, -0.56, -0.37]}
                      rotation={[0.07, -0.06, -0.1]}
                      scale={1}
                    >
                      <group
                        name="finger_ring_01_L_13_0318"
                        position={[2.47, 0, 0]}
                        rotation={[-0.48, -0.12, -0.05]}
                        scale={1}
                      >
                        <group
                          name="finger_ring_02_L_13_0319"
                          position={[1.73, 0, 0]}
                          rotation={[-0.22, 0, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_04_L_13_0320"
                      position={[0.9, -1.12, -0.28]}
                      rotation={[0.21, -0.05, -0.25]}
                      scale={1}
                    >
                      <group
                        name="finger_pinky_01_L_13_0323"
                        position={[2.67, 0, 0]}
                        rotation={[-0.72, -0.16, -0.13]}
                        scale={1}
                      >
                        <group
                          name="finger_pinky_02_L_13_0322"
                          position={[0.98, 0, 0]}
                          rotation={[-0.82, -0.01, 0.08]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_01_L_13_0325"
                      position={[1.06, 1.04, -0.14]}
                      rotation={[-0.01, -0.05, 0.13]}
                      scale={1}
                    >
                      <group
                        name="finger_index_01_L_13_0327"
                        position={[2.64, 0, 0]}
                        rotation={[-0.15, -0.1, -0.04]}
                        scale={1}
                      >
                        <group
                          name="finger_index_02_L_13_0326"
                          position={[1.86, 0, 0]}
                          rotation={[-0.1, 0.04, -0.01]}
                          scale={1}
                        />
                      </group>
                      <group
                        name="thumb_01_L_13_0328"
                        position={[-0.32, 0.39, 0.67]}
                        rotation={[1.09, 0.57, 0.3]}
                        scale={1}
                      >
                        <group
                          name="thumb_02_L_13_0330"
                          position={[1.43, 0, 0]}
                          rotation={[0.4, -0.12, 0.11]}
                          scale={1}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group name="Armature_017" position={[14.05, 0, 17.08]} rotation={[-3.02, 0.09, 1.57]} scale={1}>
                <group name="forearm_L_14_0332" position={[8.7, 0.41, -0.24]} rotation={[-2.83, 0.98, -0.34]} scale={1}>
                  <group name="hand_L_14_0333" position={[13.52, 0, 0]} rotation={[1.52, 0.07, 0.02]} scale={1}>
                    <group
                      name="palm_02_L_14_0334"
                      position={[1.15, 0.21, -0.31]}
                      rotation={[0.18, -0.06, 0.01]}
                      scale={1}
                    >
                      <group
                        name="finger_middle_01_L_14_0335"
                        position={[2.6, 0, 0]}
                        rotation={[-0.71, -0.12, -0.1]}
                        scale={1}
                      >
                        <group
                          name="finger_middle_02_L_14_0337"
                          position={[1.87, 0, 0]}
                          rotation={[0.17, 0.03, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_03_L_14_0339"
                      position={[1.12, -0.56, -0.37]}
                      rotation={[0.07, -0.06, -0.1]}
                      scale={1}
                    >
                      <group
                        name="finger_ring_01_L_14_0338"
                        position={[2.47, 0, 0]}
                        rotation={[-0.48, -0.12, -0.05]}
                        scale={1}
                      >
                        <group
                          name="finger_ring_02_L_14_0341"
                          position={[1.73, 0, 0]}
                          rotation={[-0.22, 0, 0.04]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_04_L_14_0343"
                      position={[0.9, -1.12, -0.28]}
                      rotation={[0.21, -0.05, -0.25]}
                      scale={1}
                    >
                      <group
                        name="finger_pinky_01_L_14_0342"
                        position={[2.67, 0, 0]}
                        rotation={[-0.72, -0.16, -0.13]}
                        scale={1}
                      >
                        <group
                          name="finger_pinky_02_L_14_0324"
                          position={[0.98, 0, 0]}
                          rotation={[-0.82, -0.01, 0.08]}
                          scale={1}
                        />
                      </group>
                    </group>
                    <group
                      name="palm_01_L_14_0346"
                      position={[1.06, 1.04, -0.14]}
                      rotation={[-0.01, -0.05, 0.13]}
                      scale={1}
                    >
                      <group
                        name="finger_index_01_L_14_0345"
                        position={[2.64, 0, 0]}
                        rotation={[-0.15, -0.1, -0.04]}
                        scale={1}
                      >
                        <group
                          name="finger_index_02_L_14_0348"
                          position={[1.86, 0, 0]}
                          rotation={[-0.1, 0.04, -0.01]}
                          scale={1}
                        />
                      </group>
                      <group
                        name="thumb_01_L_14_0350"
                        position={[-0.32, 0.39, 0.67]}
                        rotation={[1.09, 0.57, 0.3]}
                        scale={1}
                      >
                        <group
                          name="thumb_02_L_14_0349"
                          position={[1.43, 0, 0]}
                          rotation={[0.4, -0.12, 0.11]}
                          scale={1}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <mesh
              name="1"
              geometry={nodes['1'].geometry}
              material={nodes['1'].material}
              castShadow
              receiveShadow
              rotation={[0, 0, 0]}
              scale={1}
            />
            <mesh
              name="2"
              geometry={nodes['2'].geometry}
              material={nodes['2'].material}
              castShadow
              receiveShadow
              rotation={[0, 0, 0]}
            />
            <mesh
              name="3"
              geometry={nodes['3'].geometry}
              material={nodes['3'].material}
              castShadow
              receiveShadow
              rotation={[0, 0, 0]}
            />
            <mesh
              name="4"
              geometry={nodes['4'].geometry}
              material={nodes['4'].material}
              castShadow
              receiveShadow
              rotation={[0, 0, 0]}
            />
            <mesh
              name="5"
              geometry={nodes['5'].geometry}
              material={nodes['5'].material}
              castShadow
              receiveShadow
              rotation={[0, 0, 0]}
            />
            <mesh
              name="6"
              geometry={nodes['6'].geometry}
              material={nodes['6'].material}
              castShadow
              receiveShadow
              rotation={[0, 0, 0]}
            />
            <mesh
              name="7"
              geometry={nodes['7'].geometry}
              material={nodes['7'].material}
              castShadow
              receiveShadow
              rotation={[0, 0, 0]}
            />
            <mesh
              name="8"
              geometry={nodes['8'].geometry}
              material={nodes['8'].material}
              castShadow
              receiveShadow
              rotation={[0, 0, 0]}
            />
            <mesh
              name="9"
              geometry={nodes['9'].geometry}
              material={nodes['9'].material}
              castShadow
              receiveShadow
              rotation={[0, 0, 0]}
            />
            <mesh
              name="10"
              geometry={nodes['10'].geometry}
              material={nodes['10'].material}
              castShadow
              receiveShadow
              rotation={[0, 0, 0]}
            />
            <mesh
              name="11"
              geometry={nodes['11'].geometry}
              material={nodes['11'].material}
              castShadow
              receiveShadow
              rotation={[0, 0, 0]}
            />
            <mesh
              name="12"
              geometry={nodes['12'].geometry}
              material={nodes['12'].material}
              castShadow
              receiveShadow
              rotation={[0, 0, 0]}
            />
            <mesh
              name="13"
              geometry={nodes['13'].geometry}
              material={nodes['13'].material}
              castShadow
              receiveShadow
              rotation={[0, 0, 0]}
            />
            <mesh
              name="14"
              geometry={nodes['14'].geometry}
              material={nodes['14'].material}
              castShadow
              receiveShadow
              rotation={[0, 0, 0]}
            />
            <mesh
              name="15"
              geometry={nodes['15'].geometry}
              material={nodes['15'].material}
              castShadow
              receiveShadow
              rotation={[0, 0, 0]}
            />
            <mesh
              name="16"
              geometry={nodes['16'].geometry}
              material={nodes['16'].material}
              castShadow
              receiveShadow
              rotation={[0, 0, 0]}
            />
            <group name="Plane" rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                name="Plane_unnamed_0"
                geometry={nodes.Plane_unnamed_0.geometry}
                material={nodes.Plane_unnamed_0.material}
                castShadow
                receiveShadow
                rotation={[0, 0, 0]}
                scale={1}
              />
            </group>
          </group>
        </group>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          position={[200, 300, 300]}
        />
        <OrthographicCamera
          name="17"
          makeDefault={true}
          zoom={2.52}
          far={100000}
          near={-100000}
          position={[620.89, 685.41, 625.28]}
          rotation={[-Math.PI / 4, 0.62, Math.PI / 6]}
          scale={1}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
  )
}
