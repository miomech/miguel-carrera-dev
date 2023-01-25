import logoDM from "@/images/logos/dm.png";
import logoAttco from "@/images/logos/attco.png";
import logoMisc from "@/images/logos/misc-jobs.png";
import logoRBMoldDie from "@/images/logos/r-b-mold-die.png";
import Image from "next/image";
import BriefcaseIcon from "@/components/icons/BriefcaseIcon";

export default function Resume() {
    let resume = [
        {
            company: 'Duneland Media',
            title: 'Lead Developer',
            logo: logoDM,
            start: '2018',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear(),
            },
        }, {
            company: 'ATTCo Machine',
            title: 'Lead CNC Programmer',
            logo: logoAttco,
            start: '2019', end: '2018',
        },
        {
            company: 'R&B Mold & Die',
            title: 'Design Engineer & Programmer',
            logo: logoRBMoldDie,
            start: '2017', end: '2017',
        },
        {
            company: 'Various Other Manufacturing Companies',
            title: 'CNC Machinist / Programmer',
            logo: logoMisc,
            start: '2014', end: '2017',
        }
    ]

    return (<div className="rounded-2xl border border-primary-500/25 p-4 dark:border-neutral-100/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <BriefcaseIcon className="h-6 w-6 flex-none"/>
            <span className="ml-3">Work Experience</span>
        </h2>
        <ol className="mt-6 space-y-4">
            {resume.map((role, roleIndex) => (<li key={roleIndex} className="flex gap-4">
                <div
                    className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image src={role.logo} alt="" className="h-7 w-7 rounded-full " unoptimized/>
                </div>
                <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm font-medium text-primary-800 dark:text-white">
                        {role.company}
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="text-xs text-primary-500 dark:text-neutral-200">
                        {role.title}
                    </dd>
                    <dt className="sr-only">Date</dt>
                    <dd
                        className="ml-auto text-xs text-neutral-600 dark:text-neutral-300"
                        aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end}`}
                    >
                        <time dateTime={role.start.dateTime ?? role.start}>
                            {role.start.label ?? role.start}
                        </time>
                        {' '}
                        <span aria-hidden="true">—</span>{' '}
                        <time dateTime={role.end.dateTime ?? role.end}>
                            {role.end.label ?? role.end}
                        </time>
                    </dd>
                </dl>
            </li>))}
        </ol>
    </div>)
}