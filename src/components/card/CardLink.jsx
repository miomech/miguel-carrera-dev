import Link from "next/link";

export default function CardLink({children, ...props}) {
    return (
        <>
            <div
                className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-primary-500/5  opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-primary-800 sm:-inset-x-6 sm:rounded-2xl"/>
            <Link {...props}>
                <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"/>
                <span className="relative z-10">{children}</span>
            </Link>
        </>
    )
}