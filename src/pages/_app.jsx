import {Footer} from '@/components/footer/Footer';
import {Header} from '@/components/header/Header';
import {Poppins, Silkscreen} from '@next/font/google';

import '@/styles/tailwind.css'
import 'focus-visible'


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
})

const silkscreen = Silkscreen({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-silkscreen',
})


export default function App({Component, pageProps}) {

    return (
        <>
            <div className="fixed inset-0 flex justify-center sm:px-8">
                <div className="flex w-full max-w-7xl lg:px-8">
                    <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-primary-700 dark:ring-success-300/50 "/>
                </div>
            </div>
            <div className={`${poppins.variable} ${silkscreen.variable} font-sans font-serif relative z-0`}>
                <Header/>
                <main>
                    <Component {...pageProps} />
                </main>
                <Footer/>
            </div>
        </>
    )
}
