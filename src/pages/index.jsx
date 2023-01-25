import Head from 'next/head'
import {Container} from '@/components/layouts/Container'
import {GitHubIcon} from '@/components/icons/SocialIcons'

import Resume from "@/components/Resume";
import SocialLink from "@/components/SocialLink";
import {Button} from "@/components/Button";

export default function Home() {
    return (<>
        <Head>
            <title>
                Miguel Carrera - Software developer, designer
            </title>
            <meta
                name="description"
                content="Name's Miguel Carrera, I'm a software developer and designer!"
            />
        </Head>
        <Container className="mt-9">
            <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-primary-800 dark:text-neutral-100 sm:text-5xl ">
                    Fullstack Web developer, designer, and maker.
                </h1>
                <p className="mt-6 text-base text-primary-500 dark:text-neutral-200">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores debitis magnam
                    omnis, porro voluptate. Doloremque ratione, temporibus. Harum hic, minus? At aut corporis
                    deleniti fugiat minima recusandae repellat repudiandae.
                </p>
                <Button variant='primary' className='mt-5' href='/about'> Learn More </Button>
                <div className="mt-6 flex gap-6">
                    <SocialLink
                        href="https://github.com/miomech"
                        aria-label="View my GitHub"
                        icon={GitHubIcon}
                    />
                </div>
            </div>
        </Container>
        <Container className="mt-24 md:mt-28">
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">

            </div>
        </Container>
    </>)
}
