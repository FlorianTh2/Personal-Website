import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React from "react";

interface Props {}

export const Gear: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="bg-white">
                <div className="pt-56 pb-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-headline">MY GEAR</h2>
                    <div className="text-base text-black pt-24">
                        Here I like to provide a list of my gear. Here the term gear covers software, general computer
                        and electronic stuff aswell as books, talks and papers I can recommend. Feel the to check some
                        of them out, especially some of the books.
                    </div>
                    <div className="pt-24 flex justify-between">
                        <div>
                            <h3 className="text-2xl text-black">Software</h3>
                            <div className="py-2">
                                <ul className="list-disc text-base text-black list-inside">
                                    <li>tmux</li>
                                    <li>Jetbrains suite</li>
                                    <li>Visual Studio Code</li>
                                    <li>Eclipse Suite</li>
                                    <li>Affinity Designer</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl text-black">Computer</h3>
                            <div className="py-2">
                                <ul className="list-disc text-base text-black list-inside">
                                    <li>
                                        Desktop
                                        <ul className="list-disc list-inside pl-4">
                                            <li>Created online presence</li>
                                            <li>intel core i5-4590</li>
                                            <li>nvidia gtx 750ti</li>
                                            <li>8 GB RAM</li>
                                            <li>Samsung SSD 860 EVO</li>
                                        </ul>
                                    </li>
                                    <li>Laptop (Lenovo 520s)</li>
                                    <li>Server (Zotac ZBOX)</li>
                                    <li>
                                        Headphone & Microphone
                                        <ul className="list-disc list-inside pl-4">
                                            <li>Beyerdynamic Custom One Pro Plus</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl text-black">Electronics</h3>
                            <div className="py-2">
                                <ul className="list-disc text-base text-black list-inside">
                                    <li>Raspberry pi 3</li>
                                    <li>
                                        Texas Instruments
                                        <ul className="list-disc list-inside pl-4">
                                            <li>MSP430G2553</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Alfa AWUS036ACH Dual Band
                                        <ul className="list-disc list-inside pl-4">
                                            <li>external WLAN antenna</li>
                                        </ul>
                                    </li>
                                    <li>Canon eos 2000d</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pt-24 flex justify-around">
                        <div>
                            <h3 className="text-2xl text-black">Books</h3>
                            <div className="py-2">
                                <ul className="list-disc text-base text-black list-inside">
                                    <li>
                                        “System Design Interview”
                                        <ul className="list-disc list-inside pl-4">
                                            <li>by Alex Xu</li>
                                        </ul>
                                    </li>
                                    <li>
                                        “grokking algorithms”
                                        <ul className="list-disc list-inside pl-4">
                                            <li>by Aditya Y. Bhargava</li>
                                        </ul>
                                    </li>
                                    <li>
                                        “The Hard Thing About Hard Things [...]”
                                        <ul className="list-disc list-inside pl-4">
                                            <li>by Ben Horowith</li>
                                        </ul>
                                    </li>
                                    <li>more (but mostly in german)</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl text-black">Papers & Talks</h3>
                            <div className="py-2">
                                <ul className="list-disc text-base text-black list-inside">
                                    <li>to many...</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
