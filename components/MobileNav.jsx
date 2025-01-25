"use client";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "./ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from 'react-icons/ci';

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

const MobileNav = () => {
    const pathName = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-4xl text-accent" />
            </SheetTrigger>

            <SheetContent className="bg-secondary border-0 flex flex-col">
                <SheetTitle>
                    <div className="mt-32 mb-32 text-center text-2xl">
                        <Link href={"/"}>
                            <h1 className="text-4xl font-semibold text-white">
                                PocaMerc<span className="text-accent">.</span>
                            </h1>
                        </Link>
                    </div>
                </SheetTitle>

                <nav className="flex flex-col justify-normal items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link href={link.path} key={index} className={`${link.path === pathName && "text-primary border-b-2 border-primary"} text-white text-lg capitalize font-medium hover:text-accent hover:border-b-2 hover:border-accent transition-all`}>
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav