import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const photocards = [
  {
    artist: "blackpink",
    title: "JENNIE - The 1st Studio Album RUBY (Photocard)",
    release: "2 Januari 2025",
    price: "290.000",
  },
  {
    artist: "blackpink",
    title: "JENNIE - The 1st Studio Album RUBY (Photocard)",
    release: "2 Januari 2025",
    price: "290.000",
  },
  {
    artist: "blackpink",
    title: "JENNIE - The 1st Studio Album RUBY (Photocard)",
    release: "2 Januari 2025",
    price: "290.000",
  },
  {
    artist: "blackpink",
    title: "JENNIE - The 1st Studio Album RUBY (Photocard)",
    release: "2 Januari 2025",
    price: "290.000",
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

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full flex flex-col gap-8">

        {/* sampul */}
        <div className="">
          sampul
        </div>

        {/* photocard */}
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-secondary uppercase">photocard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:flex xl:flex-row gap-8">
            {photocards.map((item, index) => {
              return (
                <Link href={"/"} key={index}>
                  <Card>
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
                  <Card>
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
                  <Card>
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
