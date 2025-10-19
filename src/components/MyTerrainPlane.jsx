import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import React, { useRef } from 'react'; 

/*
Documentation reference: https://r3f.docs.pmnd.rs/tutorials/basic-animations#basic-animations
Resources:
- useTexture: https://r3f.docs.pmnd.rs/tutorials/loading-textures#using-usetexture
*/

export default function MyTerrainPlane({ position, offset, speed = 0.1, amplitude = 5 }) {
    const myMesh = React.useRef()
    const disp = useTexture('/disMap1.png')
    const material = useRef()

    /*
    const t is set to the frame state's clock.
    const factor is (-1 * absolute value) to always oscillate between 0 and -1, instead of
    -1 and 1 (cos default)
    */
    useFrame((state) => {
            myMesh.current.rotation.x = (Math.PI/2)
            myMesh.current.position.y = offset
            myMesh.current.position.z = -5
            const t = state.clock.getElapsedTime()
            const factor = -1*(Math.abs(Math.cos(t * speed)))
            material.current.displacementScale = (amplitude * factor)
        })
    return (
        /* Mesh events: https://r3f.docs.pmnd.rs/tutorials/events-and-interaction */

        <mesh wireframe='true' ref={myMesh} position={position}
            >
            <planeGeometry args={[40,80,16,32]}/>

            {/* wireframe is a parameter for mesh material
            Source... broke things until it worked.
            
            Documentation: https://threejs.org/docs/#api/en/materials/MeshStandardMaterial.wireframe

            Colors: https://github.com/mrdoob/three.js/blob/master/src/math/Color.js
            */}
            <meshStandardMaterial 
                ref={material}
                wireframe={true} 
                color="white" 
                displacementMap={disp}
                displacementScale={2}/>
        </mesh>
    )
}
