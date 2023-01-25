import {Html, useProgress} from '@react-three/drei'

export default function Loader() {
    const {progress} = useProgress()
    return (
        <Html center >
            <div className='font-serif text-md md:text-3xl text-primary-800 dark:text-neutral-100'>
                loading ...
            </div>
        </Html>
    )
}
