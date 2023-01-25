import FooterNavLink from './FooterNavLink'

import {Container} from '@/components/layouts/Container'

export function Footer() {
    return (<footer className="mt-32">
        <Container.Inner>
            <div className="border-t border-primary-500/25 pt-10 pb-16 dark:border-primary-500/50">
                <Container.Inner>
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <div className="flex gap-6 font-serif text-base font-medium text-primary-800 dark:text-neutral-200">
                            <FooterNavLink href="/about">About</FooterNavLink>
                            <FooterNavLink href="/projects">Projects</FooterNavLink>
                        </div>
                        <p className="text-xs text-neutral-500 dark:text-neutral-100/75">
                            &copy; {new Date().getFullYear()} Miguel Carrera. All rights reserved.
                        </p>
                    </div>
                </Container.Inner>
            </div>
        </Container.Inner>
    </footer>)
}
