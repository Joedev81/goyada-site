"use client";

import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useCart();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />

            <div className="max-w-5xl mx-auto px-8 py-16">
                <h1 className="text-6xl font-bold mb-10">CART</h1>

                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                    <div className="space-y-4">
                        {cart.map((item) => (
                            <div
                             key={item.name}
                             className="bg-zinc-900 p-6 rounded-xl"
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-xl font-semibold">{item.name}</h3>
                                        <p className="text-zinc-400">KSh{item.price.toLocaleString()}</p>
                                    </div>
                                <button onClick={() => removeFromCart(item.name)
                                }
                                className="text-red-400 hover:text-red-300">Remove</button>
                            </div>

                            <div className="flex items-center gap-4 mt-6">
                                <button onClick={() => decreaseQuantity(item.name)
                                }
                                className="border border-zinc-700 px-3 py-1">-</button>

                                <span>{item.quantity}</span>

                                <button onClick={() => increaseQuantity(item.name)}
                                className="border border-zinc-700 px-3 py-1">+</button>
                            </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 border-t border-zinc-800 pt-8">
                        <h2 className="text-3xl font-bold">Total: KSh{total.toLocaleString()}</h2>

                        <button className="mt-6 bg-white text-black px-8 py-4 hover:opacity-90">CHECKOUT</button>
                    </div>
                    </>
                )}
            </div>
        </main>
    );
}