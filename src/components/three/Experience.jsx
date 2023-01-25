import {ContactShadows, Environment, Float, PresentationControls, Text} from '@react-three/drei'
import Model from "@/components/three/Model";

export default function Experience() {


    return (
        <>
            <Environment preset='city'/>
            <color/>
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
                <Float rotationIntensity={0.4}>
                    <Model/>
                    <Text
                        font='./bangers-v20-latin-regular.woff'
                        fontSize={1}
                        position={[2, 0.75, 0.75]}
                        rotation-y={-1.25}
                        maxWidth={2}
                        textAlign='center'
                    >
                        Bruno Simon
                    </Text>
                </Float>
            </PresentationControls>

            <ContactShadows
                position-y={-1.4}
                opacity={0.4}
                scale={5}
                blur={2.4}
            />
        </>
    )
}