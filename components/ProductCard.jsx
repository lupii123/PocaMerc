import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ProductCard = ({ href, artist, title, image, release, price }) => {
    return (
        <Link href={href}>
            <Card className="border-0 shadow-lg group">
                <CardHeader className="p-4 pb-0 text-start">
                    <CardTitle className="text-3xl md:text-2xl xl:text-xl font-bold group-hover:text-secondary transition-all truncate">{title}</CardTitle>
                    <CardDescription className="uppercase">{artist}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 overflow-hidden">
                    <img alt="" src={image} className="object-cover group-hover:scale-125 transition-all" />
                </CardContent>
                <CardFooter className="flex flex-col items-start justify-center gap-2 p-4 pt-0">
                    <span className="uppercase bg-accent w-full text-center">{release}</span>
                    <span>Rp.{price}</span>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default ProductCard