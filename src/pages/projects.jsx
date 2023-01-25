import Image from 'next/image'
import Head from 'next/head'

import Card from '@/components/card/Card'
import SimpleLayout from '@/components/layouts/SimpleLayout'
import logoDex from '@/images/project-icons/dex.png'
import logoOwt from '@/images/project-icons/owt.png'
import CardLink from "@/components/card/CardLink";
import CardDescription from "@/components/card/CardDescription";
import LinkIcon from "@/components/icons/LinkIcon";

const projects = [
    {
        name: 'Old World Tech',
        description: 'Teaching makers & developers about the inner working of computers by building games. Built with TALL stack',
        link: {href: 'http://oldworldtech.com', label: 'oldworldtech.com'},
        logo: logoOwt
    },
    {
        name: 'Pokedex',
        description: 'A fun to use online Pokedex for all pokemon fans out there! Built with React, Next, Tailwind and Poke API',
        link: {href: 'http://dex.adivolt.com', label: 'dex.adivolt.com'},
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
                            <CardDescription>{project.description}</CardDescription>
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
