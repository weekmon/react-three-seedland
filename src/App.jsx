import { Canvas, useThree } from '@react-three/fiber'
import { Environment, OrbitControls, Sky, Cloud, CameraShake } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'
import { Grass } from './Grass'
//require('three/examples/js/geometries/RoundedBoxGeometry.js')
import { Particles } from './Particles'
//import { BoxGeometry } from 'three'
//import { RoundedBoxGeometry } from 'three-rounded-box'
const bottleMaterial = new THREE.MeshPhysicalMaterial({
  color: '#9f9fff',
  transmission: 1,
  roughness: 0.2,
  thickness: 500,
  envMapIntensity: 4
})
{
  /*
//var RoundedBoxGeometry = require('three-rounded-box')(THREE)
const RCubeGeometry = new THREE.RoundedBoxGeometry({
  width: 1.2, //size of box in x axis, default 1
  height: 1.2, //size of box in y axis, default 1
  depth: 1.2, //size of box in z axis, default 1
  radius: 16, //radius of the fillet,  default 0.15
  radiusSegments: 0.2 // 1.2, 1.2, 1.2, 16, 0.2
})*/
}

function Cubes() {
  return (
    <group>
      <mesh
        scale={6}
        position={(0, 0, 0)}
        geometry={new THREE.SphereGeometry()}
        material={bottleMaterial}>
        {' '}
      </mesh>
    </group>
  )
}

export const App = () => {
  return (
    <>
      <Canvas
        dpr={1.5}
        camera={{ fov: 125, position: [1, -1.25, 9] }} //
        // gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense rotation={(1, 1, 1)} fallback={null}>
          <Grass>
            <mesh>
              <coneGeometry rotation={(Math.PI / 4, 0, 0)} />
              <meshPhongMaterial color="royalblue" />
            </mesh>
          </Grass>

          <Clouds />
          <Sky
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
            rayleigh={0}
          />
          <Environment preset="sunset" />
        </Suspense>
        <Cubes position={(30, 0, 0)} scale={3} />
        {/* <Capture /> */}
        <Particles />
        <OrbitControls enableZoom={false} makeDefault autoRotate autoRotateSpeed={0.8} />
        {/* <OrbitControls makeDefault /> */}
        <CameraShake maxRoll={0.2} maxPitch={0.1} maxYaw={0.2} />
      </Canvas>
    </>
  )
}

function Clouds() {
  return (
    <group>
      <Cloud position={[-1, -6, -10]} speed={0.2} opacity={0.4} />
      <Cloud position={[10, 6, -15]} speed={0.2} opacity={0.25} />
      <Cloud position={[0, 10, 0]} speed={0.2} opacity={0.2} />
      <Cloud position={[0, -10, 0]} speed={0.2} opacity={0.2} />
      <Cloud position={[-10, -6, 15]} speed={0.2} opacity={0.3} />
      <Cloud position={[10, 6, 10]} speed={0.2} opacity={0.25} />
    </group>
  )
}
