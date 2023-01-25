import NavItem from "@/components/header/NavItem";

export default function DesktopNavigation(props) {
    return (<nav {...props}>
        <ul className="flex font-serif rounded-sm bg-white/90 px-3 text-base font-medium text-primary-800 shadow-lg shadow-primary-800/5 ring-1 ring-primary-800/5 backdrop-blur dark:bg-primary-800 dark:text-neutral-100 dark:ring-primary-100/25">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/projects">Projects</NavItem>
        </ul>
    </nav>)
}