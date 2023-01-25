import Link from "next/link";

export default function NavLink({href, children}) {
    return (
        <Link href={href} className="transition hover:text-accent-500 dark:hover:text-success-500">
            {children}
        </Link>)
}