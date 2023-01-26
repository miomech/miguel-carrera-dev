import {Html, useGLTF} from "@react-three/drei";
import React from "react";

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
                    intensity={30}
                    color={'rgba(114,232,126,0.72)'}
                    rotation={[0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}
                />
                <Html
                    transform
                    distanceFactor={1.17}
                    position={[0, 1.57, -1.4]}
                    rotation-x={-0.256}
                >
                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <div className='block w-[1024px] h-[670px] lg:w-[1024px] lg:h-[670px]'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className='bg-black rounded-[20px] border-none w-full h-full z-10' alt="image" src='/hello-php.png'/>
                    </div>
                </Html>
            </primitive>
        </>
    )
}


