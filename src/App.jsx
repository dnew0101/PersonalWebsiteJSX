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
  const boxPositions = React.useMemo(() => generateDistantPositions(30,20), []);
  const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS || '';
  const mailLink = emailAddress
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent('Hello')}&body=${encodeURIComponent('Hi David,%0A%0A')}`
    : 'mailto:';

  return (
    <>
      <div id="canvas-container">
        <div className="absolute flex w-full h-screen justify-center">
          <div className="flex flex-col text-center justify-center mb-40">
            <div className="baseplate bg-black opacity-80 border-1 px-3 py-1">
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

            {boxPositions.map((pos, index) => (
              <MyAnimatedBox
                key={index}
                position={pos}
                size={[1, 1, 1]}
                color={`Green`}
              />
            ))}

          {/* <Skull position={[0,0,-5]}/> */}
          <Stars
          radius={100}
          depth={50}
          count={2000}
          factor={3}
          saturation={0.5}
          fade
          />

          <fogExp2 attach="fog" color="indigo" density={0.04} />
        </Canvas>
        
      </div>

      <div>
        <div className="content-body flex flex-col gap-8 bg-black h-full opacity-85 border-t-1">

          <div className="about-me flex flex-col w-full items-center text-center mt-16">
            <div className="bg-neutral-900 border-1 px-2 w-[80%] sm:w-[80%] md:w-[60%] xl:w-[50%]">
                <p className="text-4xl underline font-bold my-4">
                  About Me
                </p>
              <div className="flex flex-row text-center justify-center">
                <p className="text-box w-[80%] my-4 text-xs">
                  I'm currently in my <span className="border-b">senior year</span> at <span className="text-purple-500 font-bold">UW Tacoma</span>, in the <span className="border-b">Computer Science</span> undergraduate program. <br/> <br/>
                  Within my classes, I've found <span>Computer Architecture</span> to be the most interesting, specifically the overlap between the circuits we'd build in Logisim Evolution and the MIPS .asm files we write for the MARS simulator. This was explored when we reconstructed a rudimentary MIPS CPU and ran .asm files throughout! <br/><br/>
                  Outside of class, my interests tend to be mostly <span className="italic">music-related</span>. This usually consists of guitar covers (mixed/mastered in <span className="text-green-300">Ableton 12</span>) or diving into music software development, with frameworks like <span className="text-amber-600">JUCE</span>, for C++.
                </p>
              </div>
            </div>
          </div>

          <div className="projects flex flex-col w-full items-center text-center mt-8">
            <div className="bg-neutral-900 border-1 px-2 w-[80%] sm:w-[80%] md:w-[60%] xl:w-[50%]">
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
                  link="https://www.raveninkwork.com" /> {/* https://www.raveninkwork.com */}
                <ProjectCard 
                  title="Phacebook" 
                  thumbNail="phacebook.png"
                  description="Reverse engineered Facebook log-in to study the phishing attack pipeline. Uploads submitted credentials to private Firebase database." 
                  link="https://github.com/dnew0101/phacebook" /> {/* https://github.com/dnew0101/phacebook */}
                <ProjectCard 
                  title="JUCE Gain Plug-In" 
                  thumbNail="gainProject.png"
                  description="A simple audio plug-in, using the JUCE framework, that modifies incoming sample by increasing the buffer's decibel value by a factor of the slider's current value." 
                  link="https://github.com/dnew0101/gain_project_demo" /> {/* https://github.com/dnew0101/gain_project_demo */}
                <ProjectCard 
                  title="Rare Breed Ink" 
                  thumbNail="rareBreedInk.png"
                  description="Tattoo website built with SquareSpace. My job was to optimize the SEO score and utilize SquareSpace's CSS ''code injection'' for custom styling." 
                  link="https://www.rarebreedinkstudio.com/" /> {/* https://www.rarebreedinkstudio.com/ */}
              </div>
            </div>
          </div>

          <div className="skills flex flex-col w-full items-center text-center mt-8">
            <div className="bg-neutral-900 border-1 px-2 w-[80%] sm:w-[80%] md:w-[60%] xl:w-[50%]">
                <p className="text-4xl underline font-bold my-4">
                  Skills
                </p>
              <div className="flex flex-row flex-wrap text-center justify-center items-center gap-4 mb-8">

                <SkillCard icon={faReact} skill="React" color="hover:bg-blue-600"/>
                <SkillCard icon={faJava} skill="Java" color="hover:bg-amber-700"/>
                <SkillCard icon={faCss3Alt} skill="CSS" color="hover:bg-indigo-600"/>
                <SkillCard icon={faDatabase} skill="SQL" color="hover:bg-blue-400"/>

              </div>
            </div>
          </div>

          <div className="contact flex flex-col w-full items-center text-center mt-8 mb-16">
            <div className="bg-neutral-900 border-1 px-2 w-[80%] sm:w-[80%] md:w-[60%] xl:w-[50%]">
                <p className="text-4xl underline font-bold my-4">
                  Get in touch!
                </p>
              <div className="flex flex-row flex-wrap text-center justify-center items-center gap-4 mb-8">
                <ResumeCard icon={faFile} contact="Resumé"/>
                <ContactCard icon={faSquareLinkedin} color="hover:bg-blue-500" contact="LinkedIn" link="https://www.linkedin.com/in/david-newman0101/"/>
                <ContactCard icon={faEnvelope} color="hover:bg-green-600" contact="Gmail" link={mailLink} />
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
