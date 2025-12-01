import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import React, { useRef } from 'react'; 

/*
Documentation reference: https://r3f.docs.pmnd.rs/tutorials/basic-animations#basic-animations
Resources:
- useTexture: https://r3f.docs.pmnd.rs/tutorials/loading-textures#using-usetexture
*/

export default function MyTerrainPlane({ position, xOffset, yOffset, speed, amplitude, disMap, negative = 1 }) {
    const myMesh = React.useRef()
    const disp = useTexture(disMap)
    const material = useRef()

    /*i
    const t is set to the frame state's clock.
    const factor is (-1 * absolute value) to always oscillate between 0 and -1, instead of
    -1 and 1 (cos default)

    -0.25 in the factor is to avoid completely flattening the plane.
    */
    useFrame((state) => {
            myMesh.current.rotation.x = (Math.PI/2)
            myMesh.current.position.x = xOffset
            myMesh.current.position.y = yOffset
            myMesh.current.position.z = 1
            const t = (negative)*state.clock.getElapsedTime()
            const factor = (-1*(Math.abs(Math.sin(t * speed))));
            material.current.displacementScale = (amplitude * factor)
        })
    return (
        /* Mesh events: https://r3f.docs.pmnd.rs/tutorials/events-and-interaction */

        <mesh ref={myMesh} position={position}
            >
            <planeGeometry args={[400,500,50,100]}/>

            {/* wireframe is a parameter for mesh material
            Source... broke things until it worked.
            
            Documentation: https://threejs.org/docs/#api/en/materials/MeshStandardMaterial.wireframe

            Colors: https://github.com/mrdoob/three.js/blob/master/src/math/Color.js
            */}
            <meshStandardMaterial 
                ref={material}
                wireframe={true}
                wireframeLinewidth={3}
                color="white" 
                displacementMap={disp}
                displacementScale={2}
            />
        </mesh>
    )
}
