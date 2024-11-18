'use client';

import React, {FC} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import './nav-link.css'

type IProps = {
    path: string;
    children: React.ReactNode;
}
const NavLinkClientComponent: FC<IProps> = ({path, children}) => {

    const pathname = usePathname();
    console.log(pathname);
    return (
        <Link href={path} className={pathname === path ? 'active': ''}>
            {children}
        </Link>
    );
};

export default NavLinkClientComponent;