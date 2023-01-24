import ChevronRightIcon from "@/components/card/ChevronRightIcon";

export default function CardCta({children}) {
    return (<div
        aria-hidden="true"
        className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
    >
        {children}
        <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current"/>
    </div>)
}