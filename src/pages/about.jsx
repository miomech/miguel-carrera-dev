import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import {Container} from '@/components/layouts/Container'
import {GitHubIcon,} from '@/components/icons/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import Resume from "@/components/Resume";

function SocialLink({className, href, children, icon: Icon}) {
    return (<li className={clsx(className, 'flex')}>
        <Link
            href={href}
            className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        >
            <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"/>
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
                content="I’m Spencer Sharp. I live in New York City, where I design the future."
            />
        </Head>
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={portraitImage}
                            alt=""
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        I’m Miguel Carrera. A Fullstack developer working on building the web!
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            For the past five years, I have acted as the CTO of a small marketing agency here in the US.
                            I'm looking to
                            focus on software development. If necessary, I am capable of acting in management roles as
                            well.
                            My focus has been learning and mastering the core web programming languages (PHP & JS)
                            rather than
                            specializing in a few sets of libraries. Doing so has allowed me to use whichever library is
                            necessary for
                            the job and quickly adapt to requirements.
                            My career started in the industrial manufacturing sector. I would design and build products
                            for various
                            industries, such as medical, automotive, aviation, and defense. After around five years, I
                            transitioned
                            from engineering to software development.
                            I started by working with WordPress and installing plugins and themes. Then I gradually
                            learned more
                            about PHP and Javascript development to build my solutions. Later I would learn to leverage
                            APIs and
                            3rd party services to enhance application capabilities. Backend development with PHP has
                            been my
                            main focus when it comes to development. I am just as comfortable in Javascript and Python.
                            I'm able to
                            write Python code and leverage its vast libraries.
                            I don't know everything (though It would be awesome if I did). My most valuable skills are;
                            being able to
                            teach myself and adapting to any situation that comes my way. While I am self-reliant, my
                            years of
                            experience have taught me to rely on the help of others when necessary and to know where to
                            look for
                            answers.
                        </p>
                    </div>
                </div>
                <div className="lg:pl-20">
                    <ul role="list">
                        <p className='text-gray-500'>(I&#39; m not big on social media!)</p>
                        <SocialLink href="https://github.com/miomech" icon={GitHubIcon} className="mt-4">
                            GitHub
                        </SocialLink>
                        <SocialLink
                            href="mailto:miguel.carrera@adivolt.com"
                            icon={MailIcon}
                            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                        >
                            miguel.carrera@adivolt.com
                        </SocialLink>
                    </ul>
                    <div className='mt-5'>
                        <Resume/>
                    </div>
                </div>
            </div>
        </Container>
    </>)
}
