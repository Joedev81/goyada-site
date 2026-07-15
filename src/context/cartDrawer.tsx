"use client";

import { useEffect } from "react";
import { useCart } from "@/context/CartContext";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function CartDrawer({ open, setOpen }: Props) {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          open ? "opacity-60 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[380px] bg-zinc-950 text-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-800">
          <h2 className="text-lg tracking-wide uppercase">Cart</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-zinc-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="p-5 space-y-5 overflow-y-auto h-[70%]">
          {cart.length === 0 ? (
            <p className="text-zinc-500">Your cart is empty.</p>
          ) : (
            cart.map((item, i) => (
              <div
                key={i}
                className="border-b border-zinc-800 pb-4"
              >
                {/* Name + Price */}
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm">{item.name}</p>
                    <p className="text-xs text-zinc-500">
                      Size: {item.size}
                    </p>
                  </div>

                  <p className="text-sm">
                    KES {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() =>
                      decreaseQuantity(item.name, item.size)
                    }
                    className="px-2 py-1 bg-zinc-800"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.name, item.size)
                    }
                    className="px-2 py-1 bg-zinc-800"
                  >
                    +
                  </button>

                  <button
                    onClick={() =>
                      removeFromCart(item.name, item.size)
                    }
                    className="ml-auto text-red-400 text-xs"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 w-full p-5 border-t border-zinc-800 bg-zinc-950">
          <div className="flex justify-between mb-4">
            <span className="text-zinc-400">Total</span>
            <span className="text-white font-medium">
              KES {total.toLocaleString()}
            </span>
          </div>

          <button className="w-full bg-white text-black py-3 uppercase tracking-wide hover:bg-zinc-200 transition">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}