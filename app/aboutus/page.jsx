"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube, FaCheck } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const socials = [
    {
        icon: <FaYoutube />,
        title: "Youtube",
        link: "https://youtube.com"
    },
    {
        icon: <FaInstagram />,
        title: "instagram",
        link: "https://instagram.com"
    },
    {
        icon: <FaXTwitter />,
        title: "X",
        link: "https://x.com"
    },
    {
        icon: <FaFacebook />,
        title: "Facebook",
        link: "https://facebook.com"
    },
]

const AboutUs = () => {
    return (
        <div className='h-full w-full'>
            <div className='flex flex-col'>
                <div className='w-full h-[280px] bg-accent flex justify-center items-center'>
                    <h1 className='uppercase text-secondary font-bold'>About us</h1>
                </div>

                <div className='container mx-auto my-20 flex flex-col gap-8 text-xl'>
                    <p>
                        Welcome to PocaMerc, your ultimate e-catalogue for everything K-pop!
                        We are passionate about bringing fans closer to their favorite idols
                        by showcasing a wide collection of photocards, albums, and fashion or accessories from
                        various K-pop groups.
                    </p>

                    <h1 className='text-center text-secondary'>
                        PocaMerc.
                    </h1>

                    <p>
                        At PocaMerc, we aim to make it a one-stop destination for photocard collectors and fans to easily browse and discover the newest and rarest K-pop merchandise.
                        Whether you're looking for a specific photo card, a must-have album,
                        or the trendiest idol-inspired fashion or accessories, our platform helps you explore everything in one place.
                    </p>
                    <p>
                        Join us in celebrating the vibrant world of K-pop—because every fan deserves the best!
                    </p>

                    <h2 className='text-center text-secondary'>
                        Why Choose Us?
                    </h2>
                    <ul className="flex flex-col text-xl gap-4">
                        <li className="flex flex-row gap-4">
                            <FaCheck className="text-3xl text-secondary" />
                            <p><span className="uppercase font-bold">100% Authentic Products –</span>  We ensure that all items listed in our catalogue are genuine and officially licensed, so you can collect with confidence.</p>
                        </li>
                        <li className="flex flex-row gap-4">
                            <FaCheck className="text-3xl text-secondary" />
                            <p><span className="uppercase font-bold">Best Prices Guaranteed –</span> We strive to offer the most competitive prices, making it easier for every K-pop fan to build their dream collection.</p>
                        </li>
                        <li className="flex flex-row gap-4">
                            <FaCheck className="text-3xl text-secondary" />
                            <p><span className="uppercase font-bold">Fast & Responsive Customer Service –</span> Your satisfaction is our priority! Our team is always ready to assist you with inquiries.</p>
                        </li>
                        <li className="flex flex-row gap-4">
                            <FaCheck className="text-3xl text-secondary" />
                            <p><span className="uppercase font-bold">Get in touch –</span> Have a special request? Need bulk pricing? Want to share a review? We’re here for you! Contact Us!</p>
                        </li>
                    </ul>

                    <h2 className='text-center text-secondary'>
                        Our Social Media
                    </h2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {socials.map((item, index) => {
                            return (
                                <Card key={index} className="group w-full py-6 xl:py-8 border-0 border-x-2 border-secondary bg-accent hover:bg-accent/80 rounded-xl shadow-lg transition-all">
                                    <Link href={item.link} target="_blank" className="flex flex-col text-center items-center justify-center">
                                        <CardContent className="text-5xl xl:text-7xl text-secondary group-hover:scale-125 transition-all">

                                            {item.icon}

                                        </CardContent>
                                        <CardTitle className="capitalize font-semibold text-xl lg:text-2xl text-secondary">
                                            {item.title}
                                        </CardTitle>
                                    </Link>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutUs