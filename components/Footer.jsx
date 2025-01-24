"use client";
import Link from "next/link"
import { FaInstagram, FaFacebook, FaYoutube, FaCheck, FaMoneyBillWave } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { TbMailFilled } from 'react-icons/tb'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const cards = [
    {
        icon: <FaCheck />,
        title: "100% authentic",
        description: "We only show you official products",
    },
    {
        icon: <FaMoneyBillWave />,
        title: "best price",
        description: "We recommend you products with the best price",
    },
    {
        icon: <RiCustomerService2Fill />,
        title: "customer service",
        description: "Our team will respond quickly",
    },
    {
        icon: <TbMailFilled />,
        title: "Contact Us",
        description: "contact us for bulk purchases, product requests, reviews, etc.",
    },
]

const socials = [
    {
        icon: <FaYoutube />,
        href: "https://youtube.com",
        tooltip: "Youtube",
    },
    {
        icon: <FaInstagram />,
        href: "https://instagram.com",
        tooltip: "Instagram",
    },
    {
        icon: <FaFacebook />,
        href: "https://facebook.com",
        tooltip: "Facebook",
    },
    {
        icon: <FaXTwitter />,
        href: "https://x.com",
        tooltip: "X",
    },
]
const Footer = () => {
    return (
        <footer className='bg-black text-accent flex flex-row gap-4'>
            <div className="container mx-auto py-6 xl:py-8 grid grid-cols-1 xl:grid-cols-2 gap-4">

                <div className="flex flex-col gap-8 p-4 text-center xl:text-start">
                    <div className="py-8">
                        <button onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                            <h2 className="font-semibold text-accent">
                                PocaMerc<span className="text-accent">.</span>
                            </h2>
                        </button>
                    </div>

                    {/* socials */}
                    <div className="flex flex-row gap-8 text-2xl items-center justify-center xl:justify-start">
                        {socials.map((item, index) => {
                            return (
                                <TooltipProvider delayDuration={200} skipDelayDuration={0} key={index}>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Link href={item.href} target="_blank">
                                                {item.icon}
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{item.tooltip}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            )
                        })}
                    </div>

                    <div className="flex flex-col">
                        <h3 className="uppercase">PocaMerc inc.</h3>
                        <p className="text-sm">
                            Business no: 123-45-67890 | CEO: Roseanne Park | Address: S-202, 338, Gwanggyojungang-ro, Suji-gu, Yongin-si, Gyeonggi-do, 16942 South Korea | Mail: hello@pocamerc.com
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 p-4">
                    {cards.map((item, index) => {
                        return (
                            <Card key={index} className="flex flex-col justify-center items-center bg-black text-accent border-none">
                                <CardHeader className="flex flex-col items-center justify-center p-2">
                                    <CardTitle>{item.icon}</CardTitle>
                                    <CardDescription className="text-accent uppercase">{item.title}</CardDescription>
                                </CardHeader>
                                <CardContent className="text-sm text-center capitalize">
                                    {item.description}
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}

export default Footer