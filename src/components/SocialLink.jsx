import Link from "next/link";

export default function SocialLink({icon: Icon, ...props}) {
    return (<Link className="group -m-1 p-1" {...props}>
        <Icon
            className="h-6 w-6 fill-neutral-800 transition group-hover:fill-accent-400 dark:fill-neutral-200 dark:group-hover:fill-accent-500"/>
    </Link>)
}