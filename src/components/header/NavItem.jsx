import {useRouter} from "next/router";
import Link from "next/link";
import clsx from "clsx";
import React from "react";

export default function NavItem({href, children}) {
    let isActive = useRouter().pathname === href

    return (<li>
        <Link
            href={href}
            className={clsx('relative block px-3 py-2 transition', isActive ? 'text-accent-500 dark:text-success-500' : 'hover:text-accent-500 dark:hover:text-success-500')}
        >
            {children}
            {isActive && (<span
                className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-accent-500/0 via-accent-500/40 to-accent-500/0 dark:from-success-400/0 dark:via-success-400/40 dark:to-success-400/0"/>)}
        </Link>
    </li>)
}