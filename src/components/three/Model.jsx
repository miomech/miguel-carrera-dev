import {Html, useGLTF} from "@react-three/drei";

export default function Model() {

    const computer = useGLTF('/laptop.gltf')
    return (
        <>
            <primitive
                object={computer.scene}
                position-y={-1.2}
            >
                <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={65}
                    color={'#ff6900'}
                    rotation={[0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}
                />

                <Html
                    transform
                    wrapperClass='htmlScreen'
                    distanceFactor={1.17}
                    position={[0, 1.57, -1.4]}
                    rotation-x={-0.256}
                >
                    <iframe src='https://bruno-simon.com/html/'/>
                </Html>
            </primitive>
        </>
    )
}


