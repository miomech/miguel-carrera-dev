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
]

export default function Projects() {
    return (<>
        <Head>
            <title>Projects - Spencer Sharp</title>
            <meta
                name="description"
                content="Things I’ve made trying to put my dent in the universe."
            />
        </Head>
        <SimpleLayout
            title="Things I’ve made trying to put my dent in the universe."
            intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
        >
            <ul
                role="list"
                className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            >
                {projects.map((project) => (<Card as="li" key={project.name}>
                    <div
                        className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                        <Image
                            src={project.logo}
                            alt=""
                            className="h-8 w-8"
                            unoptimized
                        />
                    </div>
                    <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                        <CardLink href={project.link.href}>{project.name}</CardLink>
                    </h2>
                    <CardDescription>{project.description}</CardDescription>
                    <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                        <LinkIcon className="h-6 w-6 flex-none"/>
                        <span className="ml-2">{project.link.label}</span>
                    </p>
                </Card>))}
            </ul>
        </SimpleLayout>
    </>)
}
