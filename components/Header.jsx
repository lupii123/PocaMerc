import Link from "next/link";
import { FaShopify } from 'react-icons/fa'

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="bg-secondary py-4 xl:py-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"} className="flex flex-row items-center justify-center group gap-2">
                    <FaShopify className="text-white text-4xl group-hover:text-accent transition-all" />
                    <h1 className="text-4xl font-semibold text-white group-hover:text-accent transition-all">
                        PocaMerc<span>.</span>
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