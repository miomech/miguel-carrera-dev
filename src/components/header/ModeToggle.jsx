import SunIcon from "@/components/icons/SunIcon";
import MoonIcon from "@/components/icons/MoonIcon";

export default function ModeToggle() {
    function disableTransitionsTemporarily() {
        document.documentElement.classList.add('[&_*]:!transition-none')
        window.setTimeout(() => {
            document.documentElement.classList.remove('[&_*]:!transition-none')
        }, 0)
    }

    function toggleMode() {
        disableTransitionsTemporarily()

        let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        let isSystemDarkMode = darkModeMediaQuery.matches
        let isDarkMode = document.documentElement.classList.toggle('dark')

        if (isDarkMode === isSystemDarkMode) {
            delete window.localStorage.isDarkMode
        } else {
            window.localStorage.isDarkMode = isDarkMode
        }
    }

    return (
        <button
            type="button"
            aria-label="Toggle dark mode"
            className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-primary-800/5 ring-1 ring-primary-800/5 backdrop-blur transition dark:bg-primary-800/90 dark:ring-white/10 dark:hover:ring-white/20"
            onClick={toggleMode}
        >
            <SunIcon
                className="h-6 w-6 fill-white stroke-primary-500 transition dark:hidden [@media(prefers-color-scheme:dark)]:stroke-primary-800  [@media(prefers-color-scheme:dark)]:group-hover:stroke-accent-500"/>
            <MoonIcon
                className="hidden h-6 w-6 fill-primary-800 stroke-success-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-accent-500"/>
        </button>
    )
}