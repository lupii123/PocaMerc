import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import Image from "next/image";
import Link from "next/link";

const photocards = [
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

const albums = [
  {
    artist: "aespa",
    title: "aespa - Savage 1st Mini Album (HALLUCINATION QUEST Ver.)",
    release: "6 Oktober 2024",
    price: "320.000",
  },
  {
    artist: "aespa",
    title: "aespa - Savage 1st Mini Album (HALLUCINATION QUEST Ver.)",
    release: "6 Oktober 2024",
    price: "320.000",
  },
  {
    artist: "aespa",
    title: "aespa - Savage 1st Mini Album (HALLUCINATION QUEST Ver.)",
    release: "6 Oktober 2024",
    price: "320.000",
  },
  {
    artist: "aespa",
    title: "aespa - Savage 1st Mini Album (HALLUCINATION QUEST Ver.)",
    release: "6 Oktober 2024",
    price: "320.000",
  },

]

const fashions = [
  {
    artist: "nct 127",
    title: "NCT 127 - BLACK STARFISH DOLL KEYRING ‘NEO CITY : SEOUL – THE MOMENTUM’",
    price: "450.000",
  },
  {
    artist: "aespa",
    title: "aespa - Savage 1st Mini Album (HALLUCINATION QUEST Ver.)",
    price: "450.000",
  },
  {
    artist: "aespa",
    title: "aespa - Savage 1st Mini Album (HALLUCINATION QUEST Ver.)",
    price: "450.000",
  },
  {
    artist: "aespa",
    title: "aespa - Savage 1st Mini Album (HALLUCINATION QUEST Ver.)",
    price: "450.000",
  },

]

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
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
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

      <div className="container mx-auto h-full flex flex-col gap-20 my-8">
        {/* photocard */}
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-secondary uppercase">photocard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {photocards.map((item, index) => {
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
          <div>
            <Link href={"/photocard"}>
              <Button className="uppercase font-semibold">view all</Button>
            </Link>
          </div>
        </div>

        {/* album */}
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-secondary uppercase">album</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:flex xl:flex-row gap-8">
            {albums.map((item, index) => {
              return (
                <Link href={"/"} key={index}>
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription className="uppercase">{item.artist}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      Photo
                    </CardContent>
                    <CardFooter className="flex flex-col items-start justify-center gap-2">
                      <span className="uppercase bg-accent w-full text-center">{item.release}</span>
                      <span>Rp.{item.price}</span>
                    </CardFooter>
                  </Card>
                </Link>
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:flex xl:flex-row gap-8">
            {albums.map((item, index) => {
              return (
                <Link href={"/"} key={index}>
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription className="uppercase">{item.artist}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      Photo
                    </CardContent>
                    <CardFooter className="flex flex-col items-start justify-center gap-2">
                      <span className="uppercase bg-accent w-full text-center">{item.release}</span>
                      <span>Rp.{item.price}</span>
                    </CardFooter>
                  </Card>
                </Link>
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
