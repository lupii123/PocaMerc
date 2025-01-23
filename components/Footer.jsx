import Link from "next/link"
import { FaInstagram, FaFacebook, FaYoutube, FaCheck, FaMoneyBillWave } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { TbMailFilled } from 'react-icons/tb'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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

const Footer = () => {
    return (
        <footer className='bg-black text-accent flex flex-row gap-4 mt-8'>
            <div className="container mx-auto py-6 xl:py-8 grid grid-cols-1 xl:grid-cols-2 gap-4">

                <div className="flex flex-col gap-8 p-4">
                    <Link href={"/"} className="py-8">
                        <h2 className="font-semibold text-accent">
                            PocaMerc<span className="text-accent">.</span>
                        </h2>
                    </Link>

                    {/* socials */}
                    <div className="flex flex-row gap-8 text-2xl">
                        <Link href={"https://youtube.com"} target="_blank">
                            <FaYoutube />
                        </Link>
                        <Link href={"https://instagram.com"} target="_blank">
                            <FaInstagram />
                        </Link>
                        <Link href={"https://x.com"} target="_blank">
                            <FaXTwitter />
                        </Link>
                        <Link href={"https://facebook.com"} target="_blank">
                            <FaFacebook />
                        </Link>
                    </div>

                    <div className="">
                        <h3 className="uppercase">PocaMerc inc.</h3>
                        <text className="text-sm">
                            Business no: 123-45-67890 | CEO: Roseanne Park | Address: S-202, 338, Gwanggyojungang-ro, Suji-gu, Yongin-si, Gyeonggi-do, 16942 South Korea | Mail: hello@pocamerc.com
                        </text>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 p-4">
                    {cards.map((item, index) => {
                        return (
                            <Card key={index} className="flex flex-col justify-center items-center bg-black text-accent border-none">
                                <CardHeader className="flex flex-col items-center justify-center p-2">
                                    <CardTitle>{item.icon}</CardTitle>
                                    <CardDescription className="text-accent">{item.title}</CardDescription>
                                </CardHeader>
                                <CardContent className="text-sm text-center">
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