import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
    primary: 'bg-accent-500 font-serif font-base text-white hover:bg-success-700 hover:text-primary-800 active:bg-primary-500 active:text-primary-800 dark:bg-success-500 dark:text-primary-800 dark:hover:bg-accent dark:hover:text-white dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
    secondary: 'bg-neutral-200 font-serif font-medium text-neutral-900 hover:bg-neutral-100 active:bg-neutral-100 active:text-neutral-900/60 dark:bg-neutral-500/50 dark:text-neutral-100 dark:hover:bg-neutral-500 dark:hover:text-neutral-50 dark:active:bg-neutral-800/50 dark:active:text-neutral-50/70',
}

export function Button({variant = 'primary', className, href, ...props}) {
    className = clsx('inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none', variantStyles[variant], className)

    return href ? (<Link href={href} className={className} {...props} />) : (<button className={className} {...props} />)}
