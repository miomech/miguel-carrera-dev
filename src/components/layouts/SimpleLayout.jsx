import {Container} from '@/components/layouts/Container'

export default function SimpleLayout({title, intro, children}) {
    return (<Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-primary-800 dark:text-neutral-100 sm:text-5xl">
                {title}
            </h1>
            <p className="mt-6 text-base text-primary-500 dark:text-neutral-200">
                {intro}
            </p>
        </header>
        <div className="mt-16 sm:mt-20">{children}</div>
    </Container>)
}
