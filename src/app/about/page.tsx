"use client"

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
    // Slideshow images (put these in /public folder)
    const images = [
        "/clothes/grey-wash-tee.jpeg",
        "/clothes/joggers.jpeg",
        "/clothes/night-jacket.jpeg",
        "/clothes/pink-knit.jpeg",
        "/clothes/shadow-hoodie.jpeg",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-black text-white pt-28 pb-20 px-5 md:px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl md:text-6xl font-bold tracking-tight">About GOYADA</h1>
                    <p className="mt-6 text-base md:text-xl text-gray-300">Redefining modern fashion with bold streetwear, premium quality and timeless design.</p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                        <p className="text-gray-600 leading-relaxed">
                            GOYADA was built with a vision to create clothing that speaks confidence, individuality
                            and culture. What started as a small idea quickly grew into a brand that represents streetwear
                            with meaning.
                            <br /><br />
                            We focus on quality materials, clean design and pieces that fit every lifestyle whether you're 
                            on the streets, at school or building your future.
                        </p>
                    </div>

            {/* Slideshow */}
            <div className="relative h-72 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">

                <img
                  src={images[index]}
                  alt="GOYADA clothing"
                  className="w-full h-full object-cover transition-all duration-700"/>

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/10"></div>

                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, i) => (
                    <div 
                      key={i}
                      className={`h-2 w-2 rounded-full ${
                        i === index ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                    </div>

            </div>
            </div>
            </section>

            {/* Mission Section */}
            <section className="bg-zinc-950 py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                    <p className="text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        To inspire confidence through fashion. We believe clothing is more than fabric expression.
                        GOYADA exists to help you wear yours proudly.
                    </p>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10">What We Stand For</h2> 
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900 hover:border-white transition">
                            <h3 className="font-semibold text-xl mb-2">Quality</h3>
                            <p className="text-zinc-400">
                                Every piece is created with durable materials and attention to detail.
                            </p>
                        </div>

                        <div className="p-6 border rounded-xl">
                            <h3 className="font-semibold text-xl mb-2">Identity</h3>
                            <p className="text-zinc-400">
                                We design for people who want to stand out and express themselves.
                            </p>
                        </div>

                        <div className="p-6 border rounded-xl">
                            <h3 className="font-semibold text-xl mb-2">Growth</h3>
                            <p className="text-zinc-400">
                                GOYADA is more than a brand. It's a movement that keeps evolving.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="bg-black text-white py-16 px-6 text-center">
                <h2 className="text-3xl font-bold">Join the GOYADA Movement</h2>
                <p className="text-gray-300 mt-3">Wear your identity. Build your style.</p>
                <Link href="/shop">
                <button className="mt-6 px-6 py-3 border border-white uppercase tracking-[0.2em] hover:bg-white hover:text-black transition">
                    Shop Now
                </button>
                </Link>
            </section>
          <Footer />
        </main>
    );
}