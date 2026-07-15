"use client";

import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartPage() {
    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useCart();

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />

            <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">

                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-12">
                    CART
                </h1>


                {cart.length === 0 ? (
                    <div className="text-zinc-400 text-lg">
                        Your cart is empty.
                    </div>
                ) : (

                    <div className="grid lg:grid-cols-3 gap-10">


                        {/* CART ITEMS */}

                        <div className="lg:col-span-2 space-y-6">

                            {cart.map((item) => (

                                <div
                                    key={`${item.name}-${item.size}`}
                                    className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 flex flex-col md:flex-row gap-6"
                                >

                                    <div className="relative w-full md:w-40 h-52 bg-zinc-900 rounded-xl overflow-hidden">

                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />

                                    </div>


                                    <div className="flex-1 flex flex-col justify-between">


                                        <div>

                                            <h2 className="text-2xl font-semibold">
                                                {item.name}
                                            </h2>

                                            <p className="text-zinc-400 mt-2">
                                                Size: {item.size}
                                            </p>

                                            <p className="mt-3 text-lg">
                                                KSh {item.price.toLocaleString()}
                                            </p>

                                        </div>



                                        <div className="flex items-center justify-between mt-6">


                                            <div className="flex items-center gap-4">

                                                <button
                                                    onClick={() => decreaseQuantity(item.name, item.size)}
                                                    className="w-9 h-9 border border-zinc-700 rounded-full hover:bg-white hover:text-black transition"
                                                >
                                                    -
                                                </button>


                                                <span className="text-lg">
                                                    {item.quantity}
                                                </span>


                                                <button
                                                    onClick={() => increaseQuantity(item.name, item.size)}
                                                    className="w-9 h-9 border border-zinc-700 rounded-full hover:bg-white hover:text-black transition"
                                                >
                                                    +
                                                </button>

                                            </div>



                                            <button
                                                onClick={() => removeFromCart(item.name, item.size)}
                                                className="text-red-400 hover:text-red-300 transition"
                                            >
                                                Remove
                                            </button>


                                        </div>


                                    </div>


                                </div>

                            ))}


                        </div>



                        {/* SUMMARY */}

                        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 h-fit">


                            <h2 className="text-2xl font-bold mb-8">
                                ORDER SUMMARY
                            </h2>


                            <div className="flex justify-between text-zinc-400 mb-4">
                                <span>
                                    Items
                                </span>

                                <span>
                                    {cart.length}
                                </span>

                            </div>



                            <div className="border-t border-zinc-800 pt-6 flex justify-between">

                                <span className="text-xl">
                                    Total
                                </span>

                                <span className="text-2xl font-bold">
                                    KSh {total.toLocaleString()}
                                </span>

                            </div>



                            <button
                                className="w-full mt-8 bg-white text-black py-4 rounded-full font-semibold hover:opacity-90 transition"
                            >
                                CHECKOUT
                            </button>


                        </div>


                    </div>

                )}

            </section>

        </main>
    );
}