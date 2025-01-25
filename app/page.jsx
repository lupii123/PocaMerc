import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { photocards, albums, fashions } from '@/components/DataDummy'
import ProductCard from "@/components/ProductCard";
import { TooltipTrigger, Tooltip, TooltipProvider, TooltipContent } from "@/components/ui/tooltip";

const sampul = [
  {
    src: "/sampul/sampul_awal.webp",
  },
  {
    src: "/sampul/sampul_kedua.webp",
  },
  {
    src: "/sampul/sampul_ketiga.webp",
  },
]

export default function Home() {
  return (
    <section className="h-full">
      {/* sampul */}
      <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
        <CarouselContent>
          {sampul.map((item, index) => {
            return (
              <CarouselItem key={index} className="pl-0">
                <div className="h-[460px] relative group flex justify-center items-center bg-primary">
                  <div className="relative w-full h-full">
                    <Image src={item.src} fill className="object-cover" alt="" />
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="container mx-auto h-full flex flex-col gap-20 my-20">

        {/* photocard */}
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-secondary uppercase">photocard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {photocards.slice(0, 4).map((item, index) => {
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
          <div>
            <Link href={"/photocard"}>
              <Button className="uppercase font-semibold">view all</Button>
            </Link>
          </div>
        </div>

        {/* album */}
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-secondary uppercase">album</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {albums.slice(0, 4).map((item, index) => {
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
          <div>
            <Link href={"/album"}>
              <Button className="uppercase font-semibold">view all</Button>
            </Link>
          </div>
        </div>

        {/* fashion */}
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-secondary uppercase">fashion</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {fashions.slice(0, 4).map((item, index) => {
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
          <div>
            <Link href={"/fashion"}>
              <Button className="uppercase font-semibold">view all</Button>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
