import {ContactShadows, Environment, Float, PresentationControls, Text} from '@react-three/drei'
import Model from "@/components/three/Model";
import {Canvas} from "@react-three/fiber";

export default function Experience() {

    return (
        <>
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 2000,
                    position: [-4, 1.5, 4]
                }}
            >

                <Environment preset='city'/>
                {/* Requires css to fix the mobile issue */}
                {/* Presentation controls uses "spring" under the hood */}
                <PresentationControls
                    global
                    rotation={[0.13, 0.1, 0]}
                    polar={[-0.4, 0.2]}
                    azimuth={[-1, 0.75]}
                    config={{mass: 2, tension: 400}}
                    snap={{mass: 4, tension: 400}}

                >
                    <Float rotationIntensity={1} >
                        <Model/>
                        <Text
                            font='./bangers-v20-latin-regular.woff'
                            fontSize={1}
                            position={[2, 0.75, 0.75]}
                            rotation-y={-1.25}
                            maxWidth={2}
                            textAlign='center'
                            castShadow={false}
                        >
                            Hello!
                        </Text>
                    </Float>
                </PresentationControls>

                <ContactShadows
                    position-y={-1.1}
                    opacity={0.3}
                    scale={5}
                    blur={3}
                />
            </Canvas>
        </>
    )
}