import {useRouter} from 'next/router'
import React, {useEffect, useRef} from 'react'

import {Container} from '@/components/layouts/Container'
import Avatar from "@/components/header/Avatar";
import MobileNavigation from "@/components/header/MobileNavigation";
import DesktopNavigation from "@/components/header/DesktopNavigation";
import ModeToggle from "@/components/header/ModeToggle";

export function Header() {

    return (<>
            <header
                className="pointer-events-none relative z-50 flex flex-col">
                <div className="top-0 z-10 h-16 pt-6">
                    <Container
                        className="top-0 w-full">
                        <div className="relative flex gap-4">
                            <div className="flex flex-1">
                                <Avatar/>
                            </div>
                            <div className="flex flex-1 justify-end md:justify-center">
                                <MobileNavigation className="pointer-events-auto md:hidden"/>
                                <DesktopNavigation className="pointer-events-auto hidden md:block"/>
                            </div>
                            <div className="flex justify-end md:flex-1">
                                <div className="pointer-events-auto">
                                    <ModeToggle/>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </header>
        </>
    )
}
