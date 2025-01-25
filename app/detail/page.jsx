"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FaPlus, FaMinus } from "react-icons/fa"
import React, { useState } from "react";

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
    const [value, setValue] = useState(1);

    const handleInput = (e) => {
        let inputValue = e.target.value;

        inputValue = inputValue.replace(/[^0-9]/g, "");

        if (inputValue.trim() === "") {
            inputValue = value;
        }

        if (inputValue > 100) {
            inputValue = 100;
        }

        setValue(parseInt(inputValue));
    }

    const increaseQuantity = () => {
        if (value < 100) {
            let newValue = value + 1;
            setValue(parseInt(newValue));
        }
    }

    const decreaseQuantity = () => {
        if (value > 1) {
            let newValue = value - 1;
            setValue(parseInt(newValue));
        }
    }

    return (
        <div className="container mx-auto flex flex-col my-20">
            <div className="flex flex-col lg:flex-row items-center justify-between flex-wrap gap-4 border-b-2 pb-10">
                <div className="flex-1 flex items-center justify-center group overflow-hidden">
                    <img alt="" src={data.image} className="object-cover group-hover:scale-125 transition-all" />
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
                                value={value}
                                onInput={handleInput}
                                className="appearance-none no-spinner text-lg font-bold text-secondary h-[50px] rounded-none border-x-0 border-black text-center w-[100px] z-10 focus:outline-none focus:border-2"
                            />
                            <Button onClick={decreaseQuantity} className="text-3xl h-[50px] w-[50px] rounded-none flex items-center justify-center border-[1px] border-black border-l-0 bg-primary text-secondary hover:bg-neutral-300/30">
                                <FaMinus />
                            </Button>
                        </div>
                    </div>

                    <Button className="w-full rounded-none text-xl mt-4 py-6">Add to Cart</Button>
                </div>
            </div>

            {/* description */}
            <div className="flex flex-col">
                <h2 className="text-center text-secondary py-10">Description</h2>
                <h3 className="text-center">{data.title}</h3>
                <p className="py-10 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}

export default Detail