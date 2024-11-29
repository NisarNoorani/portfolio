import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useState} from "react";


const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText('nisarcraft116@gmail.com')
        setHasCopied(true);
        setTimeout(()=>{
            setHasCopied(false);
        },2000)

    }
    return (
        <section id="about" className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="https://res.cloudinary.com/dvbc6ctqu/image/upload/v1732917777/grid1_a8esxc.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain " />
                        <div>
                            <p className="grid-headtext">Hi, I'm Nisar Noorani</p>
                            <p className="grid-subtext">With 4 years of experience, I’ve mastered the art of front-end development, specializing in crafting visually stunning, animated websites that captivate and engage users.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="https://res.cloudinary.com/dvbc6ctqu/image/upload/v1732917780/grid2_ndxkgz.png" alt="grid-2"
                             className="w-full sm:h-[276px] h-fit object-contain "/>
                    <div>
                        <p className="grid-headtext">Digital Toolkit</p>
                        <p className="grid-subtext">I specialize in JavaScript with a focus on the React ecosystem, using Three.js for 3D models, GSAP for animations, and Framer Motion for smooth, interactive transitions.</p>
                    </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                // showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I Thrive in Remote Work, Bridging Time Zones.</p>
                            <p className="grid-subtext">I'm based in Pakistan, offering remote work opportunities worldwide.</p>
                        <Button
                            name="Contact Me"
                            isBeam
                            containerClass="w-full mt-10"
                        />
                        </div>
                    </div>

                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="https://res.cloudinary.com/dvbc6ctqu/image/upload/v1732917776/grid3_qtfw8h.png" alt="grid-3"
                             className="w-full sm:h-[266px] h-fit object-contain "/>
                    <div>
                        <p className="grid-headtext">My dedication to coding</p>
                        <p className="grid-subtext">Building solutions through code excites me. Coding is not just a profession; it's a passion that fuels me every day</p>
                    </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="https://res.cloudinary.com/dvbc6ctqu/image/upload/v1732917777/grid4_hr6txg.png" alt="grid-4" className=" w-full sm:h-[200px] h-fit object-cover sm:object-top "/>
                    <div className="space-y-2">
                        <p className="grid-subtext text-center" >Contact me</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? 'https://res.cloudinary.com/dvbc6ctqu/image/upload/v1732918733/tick_vczssy.svg': 'https://res.cloudinary.com/dvbc6ctqu/image/upload/v1732918739/copy_x1foag.svg'} alt="copy" />
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white ">nisarcraft116@gmail.com</p>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;
