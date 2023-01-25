import {Head, Html, Main, NextScript} from 'next/document'
import modeScript from "@/lib/modeScript";

export default function Document() {
    return (<Html className="h-full antialiased" lang="en">
        <Head>
            {/* * Inject dark/light mode script into all pages "head" */}
            <script dangerouslySetInnerHTML={{__html: modeScript}}/>
        </Head>
        <body className="flex h-full flex-col bg-zinc-50 dark:bg-primary-800 ">
        <Main/>
        <NextScript/>
        </body>
    </Html>)
}
