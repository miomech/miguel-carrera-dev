import Head from 'next/head'
import {Container} from '@/components/layouts/Container'
import {GitHubIcon} from '@/components/icons/SocialIcons'

import Resume from "@/components/Resume";
import SocialLink from "@/components/SocialLink";

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
                <h1 className="text-4xl font-normal tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl font-silkscreen ">
                    Software developer, designer.
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores debitis magnam
                    omnis, porro voluptate. Doloremque ratione, temporibus. Harum hic, minus? At aut corporis
                    deleniti fugiat minima recusandae repellat repudiandae.
                </p>
                <div className="mt-6 flex gap-6">
                    <SocialLink
                        href="https://github.com/miomech"
                        aria-label="Follow on GitHub"
                        icon={GitHubIcon}
                    />
                </div>
            </div>
        </Container>
        <Container className="mt-24 md:mt-28">
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <div className="space-y-10 lg:pl-16 xl:pl-24">
                    <Resume/>
                </div>
            </div>
        </Container>
    </>)
}
