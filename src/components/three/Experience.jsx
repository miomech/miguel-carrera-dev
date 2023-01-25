import {ContactShadows, Environment, Float, PresentationControls, Text} from '@react-three/drei'
import Model from "@/components/three/Model";
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import Loader from "@/components/three/Loader";

export default function Experience() {

    return (
        <>
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 2000,
                    position: [-3.5, 1.5, 4]
                }}
            >
                <Suspense fallback={<Loader/>}>
                    <Environment preset='city'/>
                    <PresentationControls
                        global
                        rotation={[0.13, 0.1, 0]}
                        polar={[-0.4, 0.2]}
                        azimuth={[-1, 0.75]}
                        config={{mass: 2, tension: 400}}
                        snap={{mass: 4, tension: 400}}
                    >
                        <Float rotationIntensity={1}>
                            <Model/>
                        </Float>
                    </PresentationControls>
                    <ContactShadows
                        position-y={-1.1}
                        opacity={0.3}
                        scale={5}
                        blur={3}
                    />
                </Suspense>
            </Canvas>
        </>
    )
}