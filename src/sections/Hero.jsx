import HackerRoom from "../components/HackerRoom.jsx";
import IceCube from "../components/IceCube.jsx";
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth:440});
    const isMobile = useMediaQuery({maxWidth:768});
    const isTablet = useMediaQuery({minWidth:768, maxWidth:1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section id="home" className=" min-h-screen w-full flex flex-col relative">
            <div className=" w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Nisar
                    <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient z-10">Buiding products & Brands</p>
            </div>
            <div className="w-full h-full absolute inset-0">


                <Canvas className=" w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]}/>

                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                position={sizes.deskPosition}
                                scale={sizes.deskScale}
                                rotation={[0, -Math.PI, 0]}
                            />
                        </HeroCamera>
                        <group>
                            <IceCube
                            position={sizes.javaScriptPosition}
                            scale={1.6}
                            />
                            <ReactLogo
                                position={sizes.reactLogoPosition}
                            />
                            <Cube
                                position={sizes.cubePosition}
                            />
                            <Rings
                                position={sizes.ringPosition}
                            />
                        </group>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className="w-full z-10 absolute bottom-7 left-0 right-0 c-space">
                <a href="#contact" className="w-fit">
                    <Button name=" Lets Work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>
        </section>
    )
}
export default Hero
