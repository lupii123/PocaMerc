'use client';
import { Card, CardContent, CardTitle, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Link from "next/link";
import { useState } from "react";

const albums = [
    {
        artist: "seventeen",
        title: "SEVENTEEN - SEVENTEEN BEST ALBUM [17 IS RIGHT HERE] DEAR Ver.",
        release: "6 Oktober 2024",
        price: "320.000",
        image: "/album/seventeen-best.webp"
    },
    {
        artist: "seventeen",
        title: "SEVENTEEN - SEVENTEEN BEST ALBUM [17 IS RIGHT HERE] DEAR Ver.",
        release: "6 Oktober 2024",
        price: "320.000",
        image: "/album/seventeen-best.webp"
    },
    {
        artist: "seventeen",
        title: "SEVENTEEN - SEVENTEEN BEST ALBUM [17 IS RIGHT HERE] DEAR Ver.",
        release: "6 Oktober 2024",
        price: "320.000",
        image: "/album/seventeen-best.webp"
    },
    {
        artist: "seventeen",
        title: "SEVENTEEN - SEVENTEEN BEST ALBUM [17 IS RIGHT HERE] DEAR Ver.",
        release: "6 Oktober 2024",
        price: "320.000",
        image: "/album/seventeen-best.webp"
    },
    {
        artist: "blackpink",
        title: "(YG SELECT & KPOP MERCH Exclusive Benefit) JISOO - FIRST SINGLE ALBUM ME",
        release: "25 November 2024",
        price: "252.000",
        image: "/album/yg_select_bp.webp"
    },
    {
        artist: "blackpink",
        title: "(YG SELECT & KPOP MERCH Exclusive Benefit) JISOO - FIRST SINGLE ALBUM ME",
        release: "25 November 2024",
        price: "252.000",
        image: "/album/yg_select_bp.webp"
    },
    {
        artist: "blackpink",
        title: "(YG SELECT & KPOP MERCH Exclusive Benefit) JISOO - FIRST SINGLE ALBUM ME",
        release: "25 November 2024",
        price: "252.000",
        image: "/album/yg_select_bp.webp"
    },
    {
        artist: "blackpink",
        title: "(YG SELECT & KPOP MERCH Exclusive Benefit) JISOO - FIRST SINGLE ALBUM ME",
        release: "25 November 2024",
        price: "252.000",
        image: "/album/yg_select_bp.webp"
    },
    {
        artist: "LE SSERAFIM",
        title: "LE SSERAFIM - 4th Mini Album 'CRAZY' (BALACLAVA ver)",
        release: "1 Januari 2025",
        price: "505.000",
        image: "/album/lesserafim-album.webp"
    },
    {
        artist: "LE SSERAFIM",
        title: "LE SSERAFIM - 4th Mini Album 'CRAZY' (BALACLAVA ver)",
        release: "1 Januari 2025",
        price: "505.000",
        image: "/album/lesserafim-album.webp"
    },
    {
        artist: "LE SSERAFIM",
        title: "LE SSERAFIM - 4th Mini Album 'CRAZY' (BALACLAVA ver)",
        release: "1 Januari 2025",
        price: "505.000",
        image: "/album/lesserafim-album.webp"
    },
]



const Album = () => {

    const postPerPage = 8;
    const [data, setData] = useState(albums);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(postPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    let pages = [];
    for (let i = 1; i <= Math.ceil(data.length / postPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='w-full h-full'>
            <div className='flex flex-col'>
                <div className='w-full h-[280px] bg-accent flex flex-col justify-center items-center'>
                    <h1 className='uppercase text-secondary font-bold'>Album</h1>
                    <h3 className='uppercase text-secondary font-bold'>Collection</h3>
                </div>

                <div className='container mx-auto my-20'>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                        {data.slice(startIndex, endIndex).map((item, index) => {
                            return (
                                <Link href={"/"} key={index}>
                                    <Card className="border-0 shadow-lg">
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

                    <Pagination className={"mt-10"}>
                        <PaginationContent>
                            <PaginationItem className="cursor-pointer">
                                <PaginationPrevious
                                    className={startIndex === 0 ? "pointer-events-none opacity-50" : undefined}
                                    onClick={() => {
                                        setStartIndex(startIndex - postPerPage);
                                        setEndIndex(endIndex - postPerPage);
                                        setCurrentPage(currentPage - 1);
                                        window.scrollTo({ top: 100, behavior: "smooth" });
                                    }}
                                />
                            </PaginationItem>

                            {
                                pages.map((page, index) => {
                                    return (
                                        <PaginationItem key={index} className={currentPage === page ? "bg-neutral-100 rounded-md pointer-events-none" : "cursor-pointer"}>
                                            <PaginationLink
                                                onClick={() => {
                                                    setCurrentPage(page);
                                                    setStartIndex((page - 1) * postPerPage);
                                                    setEndIndex(page * postPerPage);
                                                    window.scrollTo({ top: 100, behavior: "smooth" });
                                                }}
                                            >
                                                {page}
                                            </PaginationLink>
                                        </PaginationItem>
                                    )
                                })
                            }

                            <PaginationItem className="cursor-pointer">
                                <PaginationNext
                                    className={endIndex >= data.length ? "pointer-events-none opacity-50" : undefined}
                                    onClick={() => {
                                        setStartIndex(startIndex + postPerPage);
                                        setEndIndex(endIndex + postPerPage);
                                        setCurrentPage(currentPage + 1);
                                        window.scrollTo({ top: 100, behavior: "smooth" });
                                    }}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div >
        </div >
    )
}

export default Album