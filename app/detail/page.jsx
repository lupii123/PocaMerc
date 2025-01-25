"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FaPlus, FaMinus } from "react-icons/fa"
import React, { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"
import { useToast } from "@/hooks/use-toast";


const data = {
    artist: "nct 127",
    title: "NCT 127 - BLACK STARFISH DOLL KEYRING ‘NEO CITY : SEOUL – THE MOMENTUM’",
    release: "5 Februari 2025",
    price: "450.000",
    status: "Pre-Order",
    image: "/fashion/nct-blk-star.webp",
    href: "/detail",
}

const Detail = () => {
    const [quantity, setQuantity] = useState(1);

    const handleInput = (e) => {
        let inputValue = e.target.value;

        inputValue = inputValue.replace(/[^0-9]/g, "");

        if (inputValue.trim() === "") {
            inputValue = quantity;
        }

        if (inputValue > 100) {
            inputValue = 100;
        }

        setQuantity(parseInt(inputValue));
    }

    const increaseQuantity = () => {
        if (quantity < 100) {
            let newValue = quantity + 1;
            setQuantity(parseInt(newValue));
        }
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            let newValue = quantity - 1;
            setQuantity(parseInt(newValue));
        }
    }

    const { toast } = useToast()

    return (
        <div className="container mx-auto flex flex-col my-20">
            <div className="flex flex-col lg:flex-row items-center justify-between flex-wrap gap-4 border-b-2 pb-10">
                <div className="flex-1 flex items-center justify-center group overflow-hidden">
                    <TooltipProvider delayDuration={200} skipDelayDuration={0}>
                        <Tooltip>
                            <TooltipTrigger>
                                <img alt="" src={data.image} className="object-cover group-hover:scale-125 transition-all" />
                            </TooltipTrigger>
                            <TooltipContent>
                                {data.title}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="flex-1 flex-flex-col">
                    <div className="flex flex-col border-b-2 border-neutral-300 py-4">
                        <span className="text-base lg:text-lg">{data.artist}</span>
                        <h2 className="text-4xl my-4">{data.title}</h2>
                        <h3 className="text-secondary text-3xl">Rp.{data.price}</h3>
                    </div>

                    <table className="text-xl w-7/12 my-6">
                        <tbody>
                            <tr>
                                <td className="py-2 font-bold text-secondary text-xl">Artist</td>
                                <td>{data.artist}</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-bold text-secondary text-xl">Release date</td>
                                <td>{data.release}</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-bold text-secondary text-xl">Status</td>
                                <td>{data.status}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="quantity" className="text-lg">Quantity:</Label>
                        <div className="flex flex-row">
                            <Button onClick={increaseQuantity} className="text-3xl h-[50px] w-[50px] rounded-none flex items-center justify-center border-[1px] border-black border-r-0 bg-primary text-secondary hover:bg-neutral-300/30">
                                <FaPlus />
                            </Button>
                            <Input
                                id="quantity"
                                type="number"
                                min="1"
                                value={quantity}
                                onInput={handleInput}
                                className="appearance-none no-spinner text-lg font-bold text-secondary h-[50px] rounded-none border-x-0 border-black text-center w-[100px] z-10 focus:outline-none focus:border-2"
                            />
                            <Button onClick={decreaseQuantity} className="text-3xl h-[50px] w-[50px] rounded-none flex items-center justify-center border-[1px] border-black border-l-0 bg-primary text-secondary hover:bg-neutral-300/30">
                                <FaMinus />
                            </Button>
                        </div>
                    </div>

                    <Button
                        className="w-full rounded-none text-xl mt-4 py-6"
                        onClick={() => {
                            toast({
                                description: `${data.title} x${quantity}`,
                                title: "Product successfully added to cart.",
                            })
                        }}
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>

            {/* description */}
            <div className="flex flex-col">
                <h2 className="text-center text-secondary py-10">Description</h2>
                <h3 className="text-center">{data.title}</h3>
                <p className="pt-10 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="pt-10 text-lg">
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </p>
            </div>
        </div>
    )
}

export default Detail