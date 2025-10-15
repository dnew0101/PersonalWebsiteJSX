import { Canvas } from '@react-three/fiber'
import './App.css'
import MyPlaneGeometry from './components/MyPlaneGeometry'
import MyAnimatedSphere from './components/MyAnimatedSphere'
import { OrbitControls, ScrollControls } from '@react-three/drei'
import Overlay from './components/Overlay'
import React, { useRef } from "react";



function App() {


  return (
    <div id="canvas-container">
      <Canvas>

        <OrbitControls enableZoom={false}/>

        <ScrollControls pages={3} damping={0.25}>
          <MyPlaneGeometry />
          <ambientLight intensity={0.1} />
          <directionalLight color="lime" position={[0, 0, 2]} />
          <MyAnimatedSphere position={[0,0,-10]} size={[3, 50, 40, 0, Math.PI*2, 0, Math.PI]} color={"white"}/>
          <Overlay />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App;
