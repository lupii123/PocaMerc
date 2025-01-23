import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="bg-secondary py-6 xl:py-8">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}>
                    <h1 className="text-4xl font-semibold text-white">
                        PocaMerc<span className="text-accent">.</span>
                    </h1>
                </Link>

                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                </div>

                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header