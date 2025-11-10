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
      <Canvas style={{
        position: "absolute"
      }}>

        {/**
         * Disables interaction with 3D background; allows for 2D HTML elements to be scrolled through.
         */}
        <OrbitControls enableZoom={false} enableRotate={false}/>

        <ScrollControls pages={3} damping={0.25} enableScroll={true}>
          {/*
          Layered Terrain Planes for a cool "multidimensional" effect. 
          Jerryrigged? Yeah. But cool? Also yeah. 

          Speed is slightly offset to give a rotating, not-as-predictable variance.
          */}
          <MyTerrainPlane color="yellow" offset={-2} speed={0.05} position={[0,0,0]} disMap="disMap1.png" negative={-1}/>
          <MyTerrainPlane color="yellow" offset={-2} speed={0.0375} position={[0,0,0]} disMap="disMap2.png"/>
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

      <div className="relative">
        Hi
      </div>
      
    </div>
  )
}

export default App;
