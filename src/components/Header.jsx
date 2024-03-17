'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Form } from "react-bootstrap";
import { useTheme } from "@/hook/useTheme";

const navItems = [
    { url: "/", name: "Home" },
    { url: "/blog", name: "Blog" },
    { url: "/projects", name: "Projects" }
];

export default function Header() {
    const pathname = usePathname();
    const [theme, handleTheme] = useTheme();

    return (
        <nav className="d-flex">
            <ul>
                {
                    navItems.map(({ url, name }) => (
                        <li key={url}>
                            <Link href={url} className={`navbar-link ${pathname === url ? 'navlink-active' : ''}`}>{name}</Link>
                        </li>
                    ))
                }
            </ul>
            <div className="ms-auto">
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    className="theme-switch"
                    onChange={handleTheme}
                    checked={theme === 'dark'}
                ></Form.Check>
            </div>
        </nav>
    );
}