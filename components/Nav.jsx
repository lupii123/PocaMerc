"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "photocard",
        path: "/photocard"
    },
    {
        name: "album",
        path: "/album"
    },
    {
        name: "fashion",
        path: "/fashion"
    },
    {
        name: "about us",
        path: "/aboutus"
    },
]

const Nav = () => {
    const pathName = usePathname();

    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={`${link.path === pathName && "text-lime-200 border-b-2 border-accent"} text-white text-lg capitalize font-medium hover:text-accent hover:border-b-2 hover:border-accent transition-all`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    )
}

export default Nav