import { Canvas } from '@react-three/fiber';
import './App.css';
import { ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import MyAnimatedSphere from './components/MyAnimatedSphere';
import MyAnimatedTorus from './components/MyAnimatedTorus';
import MyTerrainPlane from './components/MyTerrainPlane';
import { OrbitControls, ScrollControls, Stars } from '@react-three/drei';
import Overlay from './components/Overlay';
import React, { useRef, Suspense, useEffect, useState } from "react";
import Skull from '../public/Skull';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ProjectCard from './components/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJava, faCss3Alt, faSquareLinkedin, faSquareGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import SkillCard from './components/SkillCard';
import ContactCard from './components/ContactCard';
import ResumeCard from './components/ResumeCard';
import MyAnimatedBox from './components/MyAnimatedBox';
import generateDistantPositions from './util/generateDistantPositions';


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
  //util function call for random 3D vector generation.
  const boxPositions = React.useMemo(() => generateDistantPositions(70,50,400), []);

  //pulls from .env file for email address.
  const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS || '';

  //creates mail link via string interpolation.
  const mailLink = emailAddress
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent('Hello')}&body=${encodeURIComponent('Hi David,')}`
    : 'mailto:';

  return (
    <>
      <div id="canvas-container" className="w-[100vw]">
        <Navbar />
        <div id="hero" className="absolute flex w-full h-screen justify-center">
          <div className="flex flex-col text-center justify-center mb-40">
            <div className="baseplate bg-black opacity-80 border-1 px-3 py-1">
              <h1>
                David Newman
              </h1>
              <p>
                CS student at UW Tacoma
              </p>
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
            <MyTerrainPlane color="yellow" xOffset={0} yOffset={-5} speed={0.09} position={[0,-5,0]} disMap="disMapA.png" negative={-1} amplitude={24}/>
            {/* <MyTerrainPlane color="yellow" xOffset={0} yOffset={-5} speed={0.09} position={[0,-5,0]} disMap="disMapB.png" amplitude={32}/> */}
            {/* <MyPlaneGeometry color={"yellow"}/> */}
            <ambientLight intensity={1} />
            <directionalLight color="indigo" position={[0, -1, 2]} />
            {/* <MyAnimatedSphere position={[0,0,-5]} size={[2, 15, 8, 0, Math.PI*2, 0, Math.PI]} color={"white"}/> */}

            {boxPositions.map((pos, index) => (
              <MyAnimatedBox
                key={index}
                position={pos}
                size={[7,7,7]}
                color={`White`}
              />
            ))}

          <Stars
          radius={100}
          depth={50}
          count={2000}
          factor={3}
          saturation={0.5}
          fade
          />

          <Stars
          radius={100}
          depth={5}
          count={200}
          factor={7}
          saturation={2}
          fade
          />

          <fogExp2 
          attach="fog" 
          color="black" 
          density={0.0065} 
          />
        </Canvas>
        
      </div>
      <div>
        <div className="content-body flex flex-col gap-8 bg-black h-full w-[100vw] opacity-95 border-t-1">

          <div id="about-me" className="about-me flex flex-col w-full items-center text-center mt-16">
            <div className="bg-neutral-900 border-1 px-2 w-[80%] sm:w-[80%] md:w-[60%] xl:w-[50%]">
                <p className="text-4xl underline font-bold my-4">
                  About Me
                </p>
              <div className="flex flex-row items-center text-center justify-center mb-4">
                <div className="flex flex-col bg-neutral-950 border-1 px-2 w-[80%] items-center text-center mb-4">
                  <p className="text-box w-[80%] my-4 text-sm">
                    I'm currently in my senior year at <span className="text-purple-500 font-bold">UW Tacoma</span>, in the Computer Science undergraduate program. <br/> <br/>
                    Within my classes, I've found <span>Computer Architecture</span> to be the most interesting, specifically the overlap between the circuits we'd build in Logisim Evolution and the MIPS .asm files we write for the MARS simulator. This was explored when we reconstructed a rudimentary MIPS CPU and ran .asm files throughout! <br/><br/>
                    Outside of class, my interests tend to be mostly <span className="italic">music-related</span>. This usually consists of guitar covers (mixed/mastered in <span className="text-green-300">Ableton 12</span>) or diving into music software development, with frameworks like <span className="text-amber-600">JUCE</span>, for C++.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="projects" className="projects flex flex-col w-full items-center text-center mt-8">
            <div className="bg-neutral-900 border-1 px-2 w-[80%] sm:w-[80%] md:w-[70%] xl:w-[50%]">
                <p className="text-4xl underline font-bold my-4">
                  Projects
                </p>
                <p className="text-neutral-400">
                  <span className="italic border-b pb-0.5">(With more currently in the works!)</span>
                </p>
              <div className="flex flex-row flex-wrap text-center justify-center items-start gap-2 mb-4">
                <ProjectCard 
                  title="Raven Inkwork" 
                  thumbNail="ravenInkwork.png"
                  description="Full-stack NextJS website, hosted on Vercel. Designed with no-nonsense UX, high-contrast accessibility, SEO optimization, and performance optimization."
                  techStack="NextJS, TailwindCSS, Vite, TypeScript, React, Vercel"
                  link="https://www.raveninkwork.com" /> {/* https://www.raveninkwork.com */}
                <ProjectCard 
                  title="Phacebook" 
                  thumbNail="phacebook.png"
                  description="Reverse engineered Facebook log-in to study the phishing attack pipeline. Uploads submitted credentials to private Firebase database." 
                  techStack="React, JavaScript, TailwindCSS, Firebase"
                  link="https://github.com/dnew0101/phacebook" /> {/* https://github.com/dnew0101/phacebook */}
                <ProjectCard 
                  title="Gain Audio Plug-In" 
                  thumbNail="gainProject.png"
                  description="A simple audio plug-in, using the JUCE framework, that modifies incoming sample by increasing the buffer's decibel value by a factor of the slider's current value."
                  techStack="JUCE, C++" 
                  link="https://github.com/dnew0101/gain_project_demo" /> {/* https://github.com/dnew0101/gain_project_demo */}
                <ProjectCard 
                  title="Rare Breed Ink" 
                  thumbNail="rareBreedInk.png"
                  description="Tattoo website built with SquareSpace. My job was to optimize the SEO score and utilize SquareSpace's CSS 'code injection' for custom styling." 
                  techStack="SquareSpace CMS, HTML, CSS"
                  link="https://www.rarebreedinkstudio.com/" /> {/* https://www.rarebreedinkstudio.com/ */}
              </div>
            </div>
          </div>

          <div id="skills" className="skills flex flex-col w-full items-center text-center mt-8">
            <div className="bg-neutral-900 border-1 px-2 w-[80%] sm:w-[80%] md:w-[60%] xl:w-[50%]">
                <p className="text-4xl underline font-bold my-4">
                  Skills
                </p>
              <div className="flex flex-row flex-wrap text-center justify-center items-center gap-4 mb-8">

                <SkillCard icon={faReact} skill="React" color="hover:bg-blue-700"/>
                <SkillCard icon={faJava} skill="Java" color="hover:bg-amber-700"/>
                <SkillCard icon={faCss3Alt} skill="CSS" color="hover:bg-indigo-700"/>
                <SkillCard icon={faDatabase} skill="SQL" color="hover:bg-green-700"/>

              </div>
            </div>
          </div>

          <div id="contact" className="contact flex flex-col w-full items-center text-center mt-8 mb-16">
            <div className="bg-neutral-900 border-1 px-2 w-[80%] sm:w-[80%] md:w-[60%] xl:w-[50%]">
                <p className="text-4xl underline font-bold my-4">
                  Get in touch!
                </p>
              <div className="flex flex-row flex-wrap text-center justify-center items-center gap-4 mb-8">
                <ResumeCard icon={faFile} contact="Resumé" link="https://www.dropbox.com/scl/fi/vbqj4c0mt0lfiyeuoptot/Updated_Resume.pdf?rlkey=ficm7f0o76jjuq2q5awk8f3ex&st=bkdhew50&dl=0"/>
                <ContactCard icon={faSquareLinkedin} color="hover:bg-blue-700" contact="LinkedIn" link="https://www.linkedin.com/in/david-newman0101/"/>
                <ContactCard icon={faEnvelope} color="hover:bg-green-700" contact="Gmail" link={mailLink} />
                <ContactCard icon={faSquareGithub} color="hover:bg-purple-700" contact="Github" link="https://github.com/dnew0101"/>
                <ContactCard icon={faStackOverflow} color="hover:bg-yellow-700" contact="Stack Overflow" link="https://stackexchange.com/users/44512754/david-n"/>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App;
