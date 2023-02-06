import Image from 'next/image'
import Head from 'next/head'

import Card from '@/components/card/Card'
import SimpleLayout from '@/components/layouts/SimpleLayout'
import logoDex from '@/images/project-icons/dex.png'
import logoOwt from '@/images/project-icons/owt.png'
import CardLink from "@/components/card/CardLink";
import CardDescription from "@/components/card/CardDescription";
import LinkIcon from "@/components/icons/LinkIcon";

import LogoLaravel from "@/images/tech-icons/laravel.svg";
import LogoNextJS from "@/images/tech-icons/nextjs.svg";
import LogoReact from "@/images/tech-icons/react.svg";
import LogoVue from "@/images/tech-icons/vue.svg";
import LogoAlpine from "@/images/tech-icons/alpine.svg";
import {GitHubIcon,} from '@/components/icons/SocialIcons'
import portraitImage from '@/images/avatar.jpg'

const technologies = {
    laravel: {
        name: 'Laravel',
        icon: LogoLaravel,
    },
    next: {
        name: 'Next JS',
        icon: LogoNextJS,
    },
    react: {
        name: 'React',
        icon: LogoReact,
    },
    vue: {
        name: 'Vue',
        icon: LogoVue,
    },
    alpine: {
        name: 'Alpine',
        icon: LogoAlpine
    }
}


const projects = [
    {
        name: 'Portfolio',
        description: 'The portfolio site you\'re looking at right now! Take a look around and reach out if you need something!',
        stack: [technologies.react, technologies.next],
        link: {href: 'https://miguel-carrera.dev', label: 'miguel-carrera.dev'},
        logo: portraitImage
    },
    {
        name: 'Old World Tech',
        description: 'Teaching makers & developers about the inner working of computers by building games on retro hardware.',
        stack: [technologies.laravel, technologies.alpine],
        link: {href: 'https://oldworldtech.com', label: 'oldworldtech.com'},
        logo: logoOwt
    },
    {
        name: 'Pokedex',
        description: 'A fun to use online Pokedex powered by the pokeAPI, A does of nostalgia for all pokemon fans out there!',
        stack: [technologies.vue],
        link: {href: 'https://pokedex.adivolt.dev', label: 'pokedex.adivolt.dev'},
        logo: logoDex
    },
]

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects - Miguel Carrera</title>
                <meta
                    name="description"
                    content="Check out some of the projects I've been working on."
                />
            </Head>
            <SimpleLayout
                title="Check out some of the projects I've been working on."
                intro="Here you'll find some examples of the work I have either done or am currently working on. Feel free to click around,
                        If you run into some errors chances are the project is still being worked on so you may have to check back later."
            >
                <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Card as="li" key={project.name}>
                            <div
                                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-primary-800/50 ring-1 ring-primary-800/50 dark:border dark:border-primary-500 dark:bg-primary-800 dark:ring-0">
                                <Image src={project.logo} alt="" className="h-10 w-10 rounded-full" unoptimized/>
                            </div>
                            <h2 className="mt-6 text-base font-semibold text-primary-800 dark:text-neutral-100">
                                <CardLink href={project.link.href}>{project.name}</CardLink>
                            </h2>
                            <CardDescription>
                                <div className="flex flex-row gap-2 mb-1">
                                    {project.stack.map((tech) => {
                                        return (
                                            <>
                                                <div className="flex flex-row items-center">
                                                    <Image className="w-5 h-5"
                                                           src={tech.icon}
                                                           alt=""/>
                                                    <p className="pl-2 font-bold text-neutral-800">{tech.name}</p>
                                                </div>
                                            </>)
                                    })}
                                </div>
                                {project.description}
                            </CardDescription>
                            <p className="relative z-10 mt-6 flex text-sm font-medium text-primary-800 transition group-hover:text-accent-500 dark:text-success dark:group-hover:text-accent-500">
                                <LinkIcon className="h-6 w-6 flex-none"/>
                                <span className="ml-2">{project.link.label}</span>
                            </p>
                        </Card>))}
                </ul>
            </SimpleLayout>
        </>
    )
}
