"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function ProductPage() {
    const { addToCart } = useCart();

    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />

            <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-12">
                <div className="relative h-[600px] rounded-xl overflow-hidden bg-zinc-900">
                    <Image 
                       src="/products/shadow-hoodie.jpg"
                       alt="shadow Hoodie"
                       fill
                       className="object-cover"
                    />
                </div>

                <div>
                    <h1 className="text-5xl font-bold">Shadow Hoodie</h1>
                    <p className="text-2xl text-zinc-400 mt-4">Ksh 3,000</p>
                    <p className="mt-8 textg-zinc-400 leading-7">Premium heavyweight cotton hoodie designed with a minimalist luxury aesthetic. Crafted for everyday wear while maintaining a bold editorial look.</p>

                    <div className="mt-8 flex gap-4">
                        <button onClick={() => addToCart({
                            name: "Shadow Hoodie",
                            price: 3000,
                            quantity: 1,
                            image: "/products/shadow-hoodie.jpeg",
                            size: "M",
                        })
                    }
                    className="bg-white text-black px-8 py-4 hover:opacity-90 transition">ADD TO CART</button>
                    </div>

                    <div className="mt-12 border-t border-zinc-800 pt-8">
                        <h2 className="text-xl font-semibold mb-4">Product Details</h2>
                        <ul className="space-y-2 text-zinc-400">
                            <li>Premium heavyweight cotton</li>
                            <li>Relaxed oversized fit</li>
                            <li>Ribbed cuffs and hem</li>
                            <li>Designed by GOYADA</li>
                            <li>Machine washable</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}