import { Canvas } from '@react-three/fiber'
import './App.css'
import MyPlaneGeometry from './components/MyPlaneGeometry'
import MyAnimatedSphere from './components/MyAnimatedSphere'
import MyTerrainPlane from './components/MyTerrainPlane'
import { OrbitControls, ScrollControls, Stars } from '@react-three/drei'
import Overlay from './components/Overlay'
import React, { useRef, Suspense } from "react"
import Skull from '../public/Skull'


/* 
Height map/Displacement Map reference video:
https://www.youtube.com/watch?v=wULUAhckH9w

Niche Three.js (not React Three Fiber) research/experiment by Maxime Heckel resource:
https://blog.maximeheckel.com/posts/vaporwave-3d-scene-with-threejs/
*/

function App() {


  return (
    <div id="canvas-container">
      <Canvas>

        <OrbitControls/>

        <ScrollControls pages={3} damping={0.25} enableScroll={false}>
          <MyTerrainPlane color="yellow" offset={-2} position={[0,0,0]}/>
          {/* <MyPlaneGeometry color={"yellow"}/> */}
          <ambientLight intensity={1} />
          <directionalLight color="lime" position={[0, -1, 2]} />
          {/* <MyAnimatedSphere position={[0,0,-5]} size={[2, 15, 8, 0, Math.PI*2, 0, Math.PI]} color={"white"}/> */}

          {/* <Overlay /> */}
        </ScrollControls>

        {/* <Skull position={[0,0,-5]}/> */}
        <Stars
        radius={100}
        depth={50}
        count={2000}
        factor={3}
        saturation={0.5}
        fade
        />

        <fogExp2 attach="fog" color="indigo" density={0.09} />
      </Canvas>
    </div>
  )
}

export default App;
