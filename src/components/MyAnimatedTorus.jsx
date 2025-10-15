import { useFrame } from '@react-three/fiber';
import React from 'react';

/**
 * Documentation reference: https://r3f.docs.pmnd.rs/tutorials/basic-animations#basic-animations
 * 
 * @returns Animated mesh object of 3^3 dimensions.
 */

export default function MyAnimatedTorus({ position, size, color }) {
    const myMesh = React.useRef()

    //Clock object is a three.js object
    //Source: https://threejs.org/docs/#api/en/core/Clock
    useFrame((state, delta) => {
        myMesh.current.rotation.y += (delta*-0.5)
        myMesh.current.rotation.x += (delta*-0.2)

        myMesh.current.position.z = Math.sin(state.clock.elapsedTime)*1.5
        myMesh.current.position.x = Math.sin(state.clock.elapsedTime*2)*2
    })
    return (
        /* Mesh events: https://r3f.docs.pmnd.rs/tutorials/events-and-interaction */

        <mesh ref={myMesh} position={position} className="z-20">
            <torusGeometry args={size}/>

            {/* wireframe is a parameter for mesh material
            Source... broke things until it worked.
            
            Documentation: https://threejs.org/docs/#api/en/materials/MeshStandardMaterial.wireframe

            Colors: https://github.com/mrdoob/three.js/blob/master/src/math/Color.js
            */}
            <meshBasicMaterial color={color} wireframe={true}/>
        </mesh>
    )
}