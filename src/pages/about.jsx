import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import {Container} from '@/components/layouts/Container'
import {GitHubIcon,} from '@/components/icons/SocialIcons'
import portraitImage from '@/images/avatar.jpg'
import Resume from "@/components/Resume";

function SocialLink({className, href, children, icon: Icon}) {
    return (<li className={clsx(className, 'flex')}>
        <Link
            href={href}
            className="group flex text-sm font-medium text-primary-800 transition hover:text-accent-500 dark:text-neutral-200 dark:hover:text-success-500"
        >
            <Icon
                className="h-6 w-6 flex-none fill-primary-800 dark:fill-neutral-100 transition group-hover:fill-accent-500 dark:group-hover:fill-success-500"/>
            <span className="ml-4">{children}</span>
        </Link>
    </li>)
}

function MailIcon(props) {
    return (<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
            fillRule="evenodd"
            d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
        />
    </svg>)
}

export default function About() {
    return (<>
        <Head>
            <title>About - Miguel Carrera</title>
            <meta
                name="description"
                content="I’m Miguel Carrera. A fullstack developer working on building the web!."
            />
        </Head>
        <Container className="mt-1 sm:mt-20">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={portraitImage}
                            alt=""
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-6 rounded-2xl bg-neutral-500 drop-shadow-lg object-cover dark:bg-primary-800"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-primary-800 dark:text-neutral-100 sm:text-5xl">
                        I’m Miguel Carrera. A Fullstack developer working on building the web!
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-primary-500 dark:text-neutral-200">
                        <p>
                            For the past 9 years I&#39;ve been working with machines and code. I started off
                            machining and then gradually moving on to programming the steel eating mammoths that live
                            inside factories.
                        </p>
                        <p>
                            From then I moved on to Industrial design. I would design, make prints, model out assets,
                            and then proceed to create the programs that would be fed to the cnc machines in order to
                            produce a real life part! While that was a very great experience and taught me a lot in
                            terms of problem solving and being resourceful I found myself gravitating to the development
                            side of things and took an interest in web technology.
                        </p>
                        <p>
                            Since transitioning into web development I&#39;ve worked with tons of PHP code consisting
                            mainly of Wordpress, Laravel (TALL stack) and SQL. As far as the front end I mainly work with React, Next
                            and regular old &#39;Vanilla&#39; JS + Tons of other libraries & APIs.

                            For me it is pretty satisfying to be able to design, develop and deploy an application from
                            beginning to end. Also, learning how to model objects in Autodesk Inventor and Fusion360 has made
                            learning and using 3JS a lot easier,
                        </p>
                        <p>
                            For the past 5 years I have been working at a small marketing company where I would work my
                            way up to being the lead developer and eventually CTO, leading a team of 4 (Awesome)
                            developers.
                        </p>
                    </div>
                </div>
                <div className="lg:pl-20">
                    <ul role="list">
                        <p className='text-neutral-400'>(I&#39; m not big on social media!)</p>
                        <SocialLink href="https://github.com/miomech" icon={GitHubIcon} className="mt-4">
                            GitHub
                        </SocialLink>
                        <SocialLink
                            href="mailto:miguel.carrera@adivolt.com"
                            icon={MailIcon}
                            className="mt-8 border-t border-primary-500/25 pt-8 dark:border-neutral-100/40"
                        >
                            miguel.carrera@adivolt.com
                        </SocialLink>
                    </ul>
                    <div className='mt-8'>
                        <Resume/>
                    </div>
                </div>
            </div>
        </Container>
    </>)
}
