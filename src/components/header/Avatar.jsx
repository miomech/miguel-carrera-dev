import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import avatarImage from "@/images/avatar.jpg";
import React from "react";

export default function Avatar({large = false, className, ...props}) {
    return (

        <div
            className='h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-primary-800/5 ring-1 ring-primary-900/5 backdrop-blur dark:bg-primary-800/90 dark:ring-success/50'>
            <Link href="/" aria-label="Home" className={clsx(className, 'pointer-events-auto')}
                  {...props}
            >
                <Image
                    src={avatarImage}
                    alt=""
                    sizes={large ? '4rem' : '2.25rem'}
                    className={clsx('rounded-full bg-zinc-100 object-cover dark:bg-primary-800', large ? 'h-16 w-16' : 'h-9 w-9')}
                    priority
                />
            </Link>
        </div>
    )
}