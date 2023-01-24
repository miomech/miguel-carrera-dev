import {Popover} from "@headlessui/react";
import Link from "next/link";
import React from "react";

export default function MobileNavItem({href, children}) {
    return (<li>
        <Popover.Button as={Link} href={href} className="block py-2">
            {children}
        </Popover.Button>
    </li>)
}