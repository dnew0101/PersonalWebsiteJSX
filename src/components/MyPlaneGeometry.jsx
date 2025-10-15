import { useFrame } from '@react-three/fiber';
import React from 'react';

/**
 * Documentation reference: https://r3f.docs.pmnd.rs/tutorials/basic-animations#basic-animations
 * 
 * @returns Animated mesh object of 3^3 dimensions.
 */

export default function MyPlaneGeometry() {
    const myMesh = React.useRef()

    useFrame(() => {
            myMesh.current.rotation.x = (Math.PI / 2)
            myMesh.current.position.y = -3
        })
    return (
        /* Mesh events: https://r3f.docs.pmnd.rs/tutorials/events-and-interaction */

        <mesh wireframe='true' ref={myMesh}
            onWheel={(event) => console.log(event)}>
            <planeGeometry args={[30,30,10,10]}/>

            {/* wireframe is a parameter for mesh material
            Source... broke things until it worked.
            
            Documentation: https://threejs.org/docs/#api/en/materials/MeshStandardMaterial.wireframe

            Colors: https://github.com/mrdoob/three.js/blob/master/src/math/Color.js
            */}
            <meshBasicMaterial wireframe={true} color="white"/>
        </mesh>
    )
}
