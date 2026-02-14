import Link from "next/link";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Queries", href: "/queries" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full px-8 py-10 hidden md:block">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:opacity-70 transition-opacity uppercase">
                    Pixelwebstar
                </Link>
                <nav>
                    <ul className="flex space-x-12">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
