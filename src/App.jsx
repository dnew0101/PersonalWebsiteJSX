import { Canvas } from '@react-three/fiber';
import './App.css';
import MyPlaneGeometry from './components/MyPlaneGeometry';
import MyAnimatedSphere from './components/MyAnimatedSphere';
import MyTerrainPlane from './components/MyTerrainPlane'
import { OrbitControls, ScrollControls, Stars } from '@react-three/drei';
import Overlay from './components/Overlay';
import React, { useRef, Suspense } from "react";
import Skull from '../public/Skull';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger'



/* 
Height map/Displacement Map reference video:
https://www.youtube.com/watch?v=wULUAhckH9w

Niche Three.js (not React Three Fiber) research/experiment by Maxime Heckel resource:
https://blog.maximeheckel.com/posts/vaporwave-3d-scene-with-threejs/
*/

/*
GSAP animation library reference; tailored for React
https://gsap.com/resources/React/
https://gsap.com/docs/v3/Plugins/ScrollTrigger/
*/




function App() {

  return (
    <>
      <div id="canvas-container">
        <div className="absolute flex w-full h-screen justify-center">
          <div className="flex flex-col text-center justify-center mb-20">
            <div className="bg-black opacity-80 border-1 px-2">
              <h1>
                David Newman
              </h1>
              <h3>
                CS student at UW Tacoma
              </h3>
            </div>
          </div>
        </div>
        <Canvas style={{
          position: "fixed",
          zIndex: "-5"
        }}>

          {/**
           * Disables interaction with 3D background; allows for 2D HTML elements to be scrolled through.
           */}
          <OrbitControls enableZoom={false} enableRotate={false}/>
            {/*
            Layered Terrain Planes for a cool "multidimensional" effect. 
            Jerryrigged? Yeah. But cool? Also yeah. 

            Speed is slightly offset to give a rotating, not-as-predictable variance.
            */}
            <MyTerrainPlane color="yellow" xOffset={0} yOffset={-2} speed={0.08} position={[0,0,0]} disMap="disMapA.png" negative={-1}/>
            <MyTerrainPlane color="yellow" xOffset={0} yOffset={-2} speed={0.09} position={[0,0,0]} disMap="disMapB.png"/>
            {/* <MyPlaneGeometry color={"yellow"}/> */}
            <ambientLight intensity={1} />
            <directionalLight color="lime" position={[0, -1, 2]} />
            {/* <MyAnimatedSphere position={[0,0,-5]} size={[2, 15, 8, 0, Math.PI*2, 0, Math.PI]} color={"white"}/> */}

            {/* <Overlay /> */}

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

      <div>
        <div className="content-body flex flex-col bg-black h-screen opacity-80 border-t-1">

          <div className="about-me flex flex-col w-full items-center text-center">
            <div className="bg-black border-1 px-2">
              <h1>
                David Newman
              </h1>
              <h3>
                CS student at UW Tacoma
              </h3>
            </div>
          </div>

          <div className="projects flex flex-col w-full items-center text-center">
            <div className="bg-black opacity-80 border-1 px-2">
              <h1>
                David Newman
              </h1>
              <h3>
                CS student at UW Tacoma
              </h3>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App;
