"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

type Product = {
  name: string;
  price: string;
  image: string;
  category: string;
};

type Props = {
  product: Product;
  open: boolean;
  onClose: () => void;
};

export default function ProductModal({
  product,
  open,
  onClose,
}: Props) {
  const [size, setSize] = useState("M");
  const { addToCart } = useCart();

 useEffect(() => {
  document.body.style.overflow = open ?
  "hidden" :  "auto";

  return () => {
    document.body.style.overflow = "auto";
  };
 }, [open]);
 
  if (!open) return null;

  const handleAddToCart = () => {
    addToCart({
      name: product.name,
      price: Number(product.price.replace(/[^\d]/g, "")), // converts "Ksh 3,000"
      image: product.image,
      size,
      quantity: 1,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="
      relative
      w-[95%]
      max-w-[900px]
      max-h-[90vh]
      overflow-y-auto
      bg-zinc-950
      text-white
      flex
      flex-col
      md:flex-row
      rounded-2xl
      shadow-2xl
      border
      border-zinc-800
      animate-fadeIn
      ">
        <button
           onClick={onClose}
           className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black transition text-white text-xl"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative w-full h-72 sm:h-96 md:h-auto md:min-h-[600px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        {/* Details */}
        <div className="w-full md:w-1/2 p-5 md:p-8 flex flex-col justify-between">

          <div>
            <h2 className="text-xl md:text-2xl tracking-wide uppercase">
              {product.name}
            </h2>

            <p className="text-zinc-400 mt-2">
              {product.price}
            </p>

            {/* Size Selector */}
            <div className="mt-6">
              <p className="text-xs text-zinc-500 mb-2">
                Select Size
              </p>

              <div className="flex gap-2">
                {["S", "M", "L", "XL"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-3 md:px-4 py-2 text-sm md:text-base border transition ${
                      size === s
                        ? "border-white bg-white text-black"
                        : "border-zinc-700 text-white hover:border-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 space-y-3">
            <button
              onClick={handleAddToCart}
              className="w-full bg-white text-black py-3 uppercase tracking-widest hover:bg-zinc-200 transition"
            >
              Add To Cart
            </button>

            <button
              onClick={onClose}
              className="w-full text-zinc-500 hover:text-white text-sm"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}