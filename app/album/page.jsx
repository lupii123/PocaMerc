'use client';
import { TooltipTrigger, Tooltip, TooltipProvider, TooltipContent } from "@/components/ui/tooltip";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Link from "next/link";
import { useState } from "react";
import { albums } from "@/components/DataDummy";
import ProductCard from "@/components/ProductCard";

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
                                <TooltipProvider delayDuration={200} skipDelayDuration={0} key={index}>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <ProductCard
                                                href={item.href}
                                                title={item.title}
                                                artist={item.artist}
                                                image={item.image}
                                                price={item.price}
                                                release={item.release}
                                            />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            {item.title}
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
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