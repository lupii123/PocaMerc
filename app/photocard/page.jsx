'use client';
import { Card, CardContent, CardTitle, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const photocards = [
    {
        artist: "blackpink",
        title: "ROSE - -R- Photobook [Special Edition]",
        release: "2 Januari 2025",
        price: "290.000",
        image: "/photocard/rose-r.webp"
    },
    {
        artist: "blackpink",
        title: "ROSE - -R- Photobook [Special Edition]",
        release: "2 Januari 2025",
        price: "290.000",
        image: "/photocard/rose-r.webp"
    },
    {
        artist: "blackpink",
        title: "ROSE - -R- Photobook [Special Edition]",
        release: "2 Januari 2025",
        price: "290.000",
        image: "/photocard/rose-r.webp"
    },
    {
        artist: "blackpink",
        title: "ROSE - -R- Photobook [Special Edition]",
        release: "2 Januari 2025",
        price: "290.000",
        image: "/photocard/rose-r.webp"
    },
    {
        artist: "bts",
        title: "BTS V - ‘TYPE 1’",
        release: "28 Desember 2024",
        price: "500.000",
        image: "/photocard/bts_v_type1.webp"
    },
    {
        artist: "bts",
        title: "BTS V - ‘TYPE 1’",
        release: "28 Desember 2024",
        price: "500.000",
        image: "/photocard/bts_v_type1.webp"
    },
    {
        artist: "bts",
        title: "BTS V - ‘TYPE 1’",
        release: "28 Desember 2024",
        price: "500.000",
        image: "/photocard/bts_v_type1.webp"
    },
    {
        artist: "bts",
        title: "BTS V - ‘TYPE 1’",
        release: "28 Desember 2024",
        price: "500.000",
        image: "/photocard/bts_v_type1.webp"
    },
    {
        artist: "Seventeen",
        title: "DICON VOLUME No. 26 (Unit-type) WONWOO MINGYU’",
        release: "27 februari 2025",
        price: "700.000",
        image: "/photocard/dicon_volume_26.webp"
    },
    {
        artist: "Seventeen",
        title: "DICON VOLUME No. 26 (Unit-type) WONWOO MINGYU’",
        release: "27 februari 2025",
        price: "700.000",
        image: "/photocard/dicon_volume_26.webp"
    },
    {
        artist: "Seventeen",
        title: "DICON VOLUME No. 26 (Unit-type) WONWOO MINGYU’",
        release: "27 februari 2025",
        price: "700.000",
        image: "/photocard/dicon_volume_26.webp"
    },
    {
        artist: "Seventeen",
        title: "DICON VOLUME No. 26 (Unit-type) WONWOO MINGYU’",
        release: "27 februari 2025",
        price: "700.000",
        image: "/photocard/dicon_volume_26.webp"
    },
]

const Photocard = () => {
    return (
        <div className='w-full h-full'>
            <div className='flex flex-col'>
                <div className='w-full h-[280px] bg-accent flex justify-center items-center'>
                    <h1 className='uppercase text-secondary font-bold'>Photocard</h1>
                </div>

                <div className='container mx-auto my-20'>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                        {photocards.map((item, index) => {
                            return (
                                <Link href={"/"} key={index}>
                                    <Card className="border-2 border-secondary rounded-sm">
                                        <CardHeader className="p-4 pb-0">
                                            <CardTitle className="text-3xl md:text-2xl xl:text-xl font-bold hover:text-secondary transition-all truncate">{item.title}</CardTitle>
                                            <CardDescription className="uppercase">{item.artist}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="p-0 overflow-hidden">
                                            <img alt="" src={item.image} className="object-cover hover:scale-125 transition-all" />
                                        </CardContent>
                                        <CardFooter className="flex flex-col items-start justify-center gap-2 p-4 pt-0">
                                            <span className="uppercase bg-accent w-full text-center">{item.release}</span>
                                            <span>Rp.{item.price}</span>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photocard