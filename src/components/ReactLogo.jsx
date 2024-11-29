import { Float,useGLTF } from '@react-three/drei'


const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF('https://res.cloudinary.com/dvbc6ctqu/image/upload/v1732913810/react_erkwwy.glb')
    return (
        <Float  dispose={null}>
            <group position={[8,8,0]} {...props} scale={0.4}>
                <mesh
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={[0, 0.79, 0.181]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.39, 0.39, 0.5]}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('https://res.cloudinary.com/dvbc6ctqu/image/upload/v1732913810/react_erkwwy.glb')

export default ReactLogo;
