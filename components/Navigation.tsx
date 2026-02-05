"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

const Navigation = () => {
    const pathname = usePathname();

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT', href: '/about' },
        { name: 'SERVICE', href: '/service' },
        { name: 'QUERIES', href: '/queries' },
        { name: 'CONTACT', href: '/contact' },
    ];

    return (
        <header className={styles.header}>
            <nav className={styles.navPill}>
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Navigation;
