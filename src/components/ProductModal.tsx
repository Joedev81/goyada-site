"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

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
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
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
      <div className="relative w-[90%] md:w-[900px] bg-zinc-950 text-white flex flex-col md:flex-row overflow-hidden shadow-2xl border border-zinc-800 animate-fadeIn">

        {/* Image */}
        <div className="md:w-1/2 bg-zinc-900">
          <img
            src={product.image}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">

          <div>
            <h2 className="text-2xl tracking-wide uppercase">
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
                    className={`px-4 py-2 border transition ${
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
          <div className="mt-8">
            <button
              onClick={handleAddToCart}
              className="w-full bg-white text-black py-3 uppercase tracking-widest hover:bg-zinc-200 transition"
            >
              Add To Cart
            </button>

            <button
              onClick={onClose}
              className="w-full mt-3 text-zinc-500 hover:text-white text-sm"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}