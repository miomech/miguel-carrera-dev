import {Popover, Transition} from "@headlessui/react";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import MobileNavItem from "@/components/header/MobileNavItem";
import {Fragment} from "react";

export default function MobileNavigation(props) {
    return (<Popover {...props}>
        <Popover.Button
            className="group flex items-center rounded-md bg-white/90 px-4 py-2 text-sm font-serif font-medium text-primary-800 shadow-lg shadow-primary-800/5 ring-1 ring-primary-800/5 backdrop-blur dark:bg-primary-800/90 dark:text-neutral-100 dark:ring-white/10 dark:hover:ring-white/20">
            Menu
            <ChevronDownIcon
                className="ml-3 h-auto w-2 stroke-primary-800 dark:stroke-neutral-100 group-hover:stroke-accent-500 dark:group-hover:stroke-primary-400"/>
        </Popover.Button>
        <Transition.Root>
            <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Popover.Overlay className="fixed inset-0 z-50 bg-neutral-800/40 backdrop-blur-sm dark:bg-black/80"/>
            </Transition.Child>
            <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-primary-800/5 dark:bg-primary-800 dark:ring-primary-700"
                >
                    <div className="flex flex-row-reverse items-center justify-between">
                        <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                            <CloseIcon className="h-6 w-6 text-danger-500 dark:text-danger-400"/>
                        </Popover.Button>
                        <h2 className="text-xs font-medium text-neutral-800 dark:text-neutral-300">
                            Take a look around!
                        </h2>
                    </div>
                    <nav className="mt-6">
                        <ul className="font-serif text-base text-primary-800 -my-2 divide-y divide-primary-500/15 dark:divide-neutral-100/5 dark:text-neutral-100 ">
                            <MobileNavItem href="/">Home</MobileNavItem>
                            <MobileNavItem href="/about">About</MobileNavItem>
                            <MobileNavItem href="/projects">Projects</MobileNavItem>
                        </ul>
                    </nav>
                </Popover.Panel>
            </Transition.Child>
        </Transition.Root>
    </Popover>)
}