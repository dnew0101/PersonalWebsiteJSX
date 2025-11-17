import { useFrame } from '@react-three/fiber';
import React from 'react';

/**
 * Documentation reference: https://r3f.docs.pmnd.rs/tutorials/basic-animations#basic-animations
 * 
 * @returns Animated mesh object of 3^3 dimensions.
 */

export default function MyAnimatedBox({ position, size, color }) {
    const myMesh = React.useRef()

    //Clock object is a three.js object
    //Source: https://threejs.org/docs/#api/en/core/Clock
    useFrame((state, delta) => {
        myMesh.current.rotation.x += (0.5)*delta
        myMesh.current.rotation.y += (0.5)*delta
    })
    return (
        /* Mesh events: https://r3f.docs.pmnd.rs/tutorials/events-and-interaction */

        <mesh ref={myMesh} position={position} className="z-20">
            <boxGeometry args={size}/>

            {/* wireframe is a parameter for mesh material
            Source... broke things until it worked.
            
            Documentation: https://threejs.org/docs/#api/en/materials/MeshStandardMaterial.wireframe

            Colors: https://github.com/mrdoob/three.js/blob/master/src/math/Color.js
            */}
            <meshBasicMaterial color={color} wireframe={true} wireframeLinewidth={1.0}/>
        </mesh>
    )
}
