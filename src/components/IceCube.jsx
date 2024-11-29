import React, { useRef } from 'react'
import {Float, useGLTF} from '@react-three/drei'

const IceCube=({...props}) => {
    const { nodes, materials } = useGLTF('https://res.cloudinary.com/dvbc6ctqu/image/upload/v1732913811/ice_cube_he8hgo.glb')
    return (
        <Float>
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube1_lambert3_0.geometry}
                material={materials.lambert3}
                position={[0, 0.85, 0]}
                rotation={[-0.087, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube2_lambert2_0.geometry}
                material={materials.lambert2}
                position={[0, 0.85, 0]}
                rotation={[-0.087, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube3_lambert4_0.geometry}
                material={materials.lambert4}
                position={[0.15, 0.25, 0]}
                scale={[0.05, 0.5, 0.05]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube4_lambert4_0.geometry}
                material={materials.lambert4}
                position={[-0.15, 0.25, 0]}
                scale={[0.05, 0.5, 0.05]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube5_lambert4_0.geometry}
                material={materials.lambert4}
                position={[0.525, 0.552, 0]}
                rotation={[0.087, 0, 0]}
                scale={[0.05, 0.6, 0.05]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube6_lambert4_0.geometry}
                material={materials.lambert4}
                position={[-0.53, 0.552, 0]}
                rotation={[-3.054, 0, -Math.PI]}
                scale={[0.05, 0.6, 0.05]}
            />
        </group>
        </Float>
    )
}

useGLTF.preload('https://res.cloudinary.com/dvbc6ctqu/image/upload/v1732913811/ice_cube_he8hgo.glb')

export default IceCube;

