"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CollectionsPage() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    },[]);

    const collections = [
        {
            name: "Hoodies",
            image: "/products/shadow-hoodie.jpeg",
            href: "/shop?category=Hoodies",
            description: "Heavyweight comfort with premium streetwear aesthetics.",
        },
        {
             name: "T-Shirts",
            image: "/products/obsidian-tee.jpeg",
            href: "/shop?category=T-Shirts",
            description: "Minimal everyday essentials designed to stand out.",
        },
        {
             name: "Jackets",
            image: "/products/night-jacket.jpeg",
            href: "/shop?category=Jackets",
            description: "Luxury outwear built for every season.",
        },
        {
             name: "Bottoms",
            image: "/products/joggers.jpeg",
            href: "/shop?category=Bottoms",
            description: "Relaxed fits with elevated details.",
        },
        {
             name: "Knitwear",
            image: "/products/pink-knit.jpeg",
            href: "/shop?category=Knitwear",
            description: "Soft textures with timeless silhousettes.",
        },
        {
             name: "New Arrivals",
            image: "/products/grey-wash-tee.jpeg",
            href: "/shop",
            description: "Explore the newest GOYADA releases.",
        },
    ];

    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />

            {/* HERO */}
            <section
               className={`pt-28 pb-16 px-6 text-center transition-all duration-700 ${
                loaded
                  ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
               }`}
            >
                <p className="tracking-[0.4em] uppercase text-zinc-500 text-sm">GOYADA</p>
                <h1 className="mt-4 text-5xl md:text-7xl font-light tracking-[0.25em] uppercase">Collections</h1>

                <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-7">Explore every GOYADA collections. From essentials,
                    discover pieces crafted for modern streetwear.
                </p>
            </section>

            {/* COLLECTION GRID */}
            <section className="px-6 pb-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {collections.map((collection, i) => (
                        <Link
                          key={collection.name}
                          href={collection.href}
                          className={`group relative overflow-hidden rounded-2xl bg-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 ${
                            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                          }
                          `}
                          style={{transitionDelay: `${i * 80}ms`,}}
                        >
                            {/* Image */}
                            <div className="relative h-[480px] overflow-hidden">
                                <Image 
                                   src={collection.image}
                                   alt={collection.name}
                                   fill
                                   className="object-cover transition-transform duration-700 group-hover:scale-110"/>

                                   {/* Dark Overlay */}
                                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                   {/* Hover Overlay */}
                                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

                                   {/* Text */}
                                   <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h2 className="text-3xl font-light tracking-widest uppercase">{collection.name}</h2>
                                    <p className="mt-3 text-zinc-300 text-sm leading-6">{collection.description}</p>
                                    <div className="mt-6 inline-flex items-center gap-2 text-sm group-hover:translate-x-2 transition-transform duration-300">Explore →</div>
                                   </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="border-t border-zinc-800 py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="tracking-[0.3em] uppercase text-zinc-500 text-sm">GOYADA</p>
                    <h2 className="mt-5 text-4xl md:text-5xl font-light uppercase tracking-[0.15em]">Wear Confidence</h2>

                    <p className="mt-6 text-zinc-400 leading-7 max-w-2xl mx-auto">Every GOYADA collection is designed to combine minimal aesthetics,
                        premium craftmanship and everyday comfort. Find the pieces that define your style.
                    </p>

                    <Link
                      href="/shop"
                      className="inline-block mt-10 border border-white px-8 py-3 uppercase tracking-[0.25em] text-sm transition-all duration-300 hover:bg-white hover-text-black hover:scale-105">Shop All</Link>

                </div>
            </section>
            <Footer />
        </main>
    );
}