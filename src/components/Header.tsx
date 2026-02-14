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
        <header className="fixed top-0 left-0 z-50 w-full px-6 py-6 transition-all duration-300">
            <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white/5 px-8 py-4 backdrop-blur-md border border-white/10">
                <Link href="/" className="text-xl font-bold uppercase tracking-widest text-white">
                    Pixel Webstar
                </Link>
                <nav className="hidden md:block">
                    <ul className="flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium uppercase tracking-wider text-white/70 transition-colors hover:text-white"
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
