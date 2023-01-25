import Image from 'next/image'
import Head from 'next/head'

import Card from '@/components/card/Card'
import SimpleLayout from '@/components/layouts/SimpleLayout'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import CardLink from "@/components/card/CardLink";
import CardDescription from "@/components/card/CardDescription";
import LinkIcon from "@/components/icons/LinkIcon";

const projects = [
    {
        name: 'Old World Tech',
        description: 'Helping up and coming makers & developers learn about the inner working of computers. ',
        link: {href: 'http://oldworldtech.com', label: 'oldworldtech.com'},
        logo: logoPlanetaria
    },
    {
        name: 'Pokedex',
        description: 'A fun to use online pokedex for all pokemon fans out there!',
        link: {href: 'http://dex.adivolt.com', label: 'dex.adivolt.com'},
        logo: logoPlanetaria
    },
    {
        name: 'Bueno Price',
        description: 'A powerful tool for helping businesses of all sizes estimate their pricing correctly',
        link: {href: 'http://buenoprice.com', label: 'buenoprice.com'},
        logo: logoPlanetaria
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
                intro="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores debitis magnam omnis, porro voluptate. Doloremque ratione, temporibus. Harum hic, minus? At aut corporis deleniti fugiat minima recusandae repellat repudiandae."
            >
                <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Card as="li" key={project.name}>
                            <div
                                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-primary-800/5 ring-1 ring-primary-800/5 dark:border dark:border-primary-500 dark:bg-primary-800 dark:ring-0">
                                <Image src={project.logo} alt="" className="h-8 w-8" unoptimized/>
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
