import NavItem from "@/components/header/NavItem";

export default function DesktopNavigation(props) {
    return (<nav {...props}>
        <ul className="flex font-serif rounded-sm bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/projects">Projects</NavItem>
        </ul>
    </nav>)
}