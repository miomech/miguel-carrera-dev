import Head from 'next/head'
import {Container} from '@/components/layouts/Container'
import {GitHubIcon} from '@/components/icons/SocialIcons'
import SocialLink from "@/components/SocialLink";
import {Button} from "@/components/Button";
import Experience from "@/components/three/Experience";

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
            <Container className="mt-1 sm:mt-20">
                <div>
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold tracking-tight text-primary-800 dark:text-neutral-100 sm:text-5xl ">
                            Fullstack developer, designer, and maker.
                        </h1>
                    </div>
                    <p className="mt-6 text-base text-primary-500 dark:text-neutral-200">
                        For the past 9 years I&#39;ve been working with technology of all types.
                        From programming heavy industrial manufacturing equipment
                        to developing creative and interactive web experiences.
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

            <div className='h-[40vh] md:h-[50vh] lg:h-[100vh] '>
                <Experience/>
            </div>

        </>
    )
}
