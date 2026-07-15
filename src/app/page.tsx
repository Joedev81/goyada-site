"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ProductModal from "@/components/ProductModal";
import { completeSoftNavigation } from "next/dist/client/components/segment-cache/navigation";


export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [offset, setOffset] = useState(0);

  type Product = {
    name: string;
    price: string;
    image: string;
    href: string;
    category: string;
  };

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const scrollLeft = () => {
    slideRef.current?.scrollBy({
      left: -340,
      behavior: "smooth",
    });
  };

  const ScrollRight = () => {
    slideRef.current?.scrollBy({
      left: 340,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setLoaded(true);

    const handleScroll = () => {
      setOffset(window.scrollY * 0.3);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center">

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-40"
          style={{
            transform: `translateY(${offset}px)`,
          }} />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />

        {/* Content */}
        <div className={`relative text-center transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >

          {/* Brand */}
          <h1 className="text-5xl md:text-7xl tracking-[0.3em] font-light uppercase">GOYADA</h1>
          <p className="mt-4 text-zinc-400 tracking-wide text-sm md:text-base">Minimal. Dark. Elevated fashion.</p>

          {/* CTA */}
          <button className="mt-10 px-8 py-3 border border-white/30 hover:border-white transition uppercase tracking-widest text-xs hover:bg-white hover:text-black">Shop Now</button>

        </div>
      </section>

      {/* FEATURE SECTION */}
      <FadeIn>
        <section className="py-24 px-6 md:px-20 bg-black">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-sm tracking-[0.3em] text-zinc-500">
              FEATURED PIECES
            </h2>

            <div className="flex gap-3">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full border border-zinc-700 hover:border-white hover:bg-white hover:text-black transition"
              >
                ←
              </button>

              <button
                onClick={ScrollRight}
                className="w-10 h-10 rounded-full border border-zinc-700 hover:border-white hover:bg-white hover:text-black transition"
              >
                →
              </button>
            </div>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-4">

            {/* Horizontal Swipeable Row */}
            <div
              ref={slideRef}
              className="
                  flex
                  gap-6
                  overflow-x-auto
                  snap-x
                  snap-mandatory
                  scroll-smooth
                  pb-4
                  scrollbar-hide
                  "
            >

              {/* Product 1 */}
              <div
                onClick={() =>
                  openProduct({
                    name: "Shadow Hoodie",
                    price: "Ksh 3000",
                    image: "/products/shadow-hoodie.jpeg",
                    href: "#",
                    category: "Hoodies",
                  })
                }
                className="group cursor-pointer min-w-[320px] md:min-w-[320px] flex-shrink-0 snap-start"
              >
                <div className="relative h-[420px] overflow-hidden rounded-xl bg-zinc-900">
                  <Image
                    src="/products/shadow-hoodie.jpeg"
                    alt="Shadow Hoodie"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-4 text-lg">Shadow Hoodie</h3>
                <p className="text-zinc-400">Ksh 3000</p>
              </div>

              {/* Product 2 */}
              <div
                onClick={() =>
                  openProduct({
                    name: "Void Tee",
                    price: "Ksh 1500",
                    image: "/products/tee.jpeg",
                    href: "#",
                    category: "T-Shirts",
                  })
                }
                className="group cursor-pointer min-w-[320px] md:min-w-[320px] flex-shrink-0 snap-start"
              >
                <div className="relative w-[320px] h-[420px] overflow-hidden rounded-xl bg-zinc-900">
                  <Image
                    src="/products/tee.jpeg"
                    alt="Void Tee"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-4 text-lg">Void Tee</h3>
                <p className="text-zinc-400">Ksh 2000</p>
              </div>


              {/* Product 3 */}
              <div
                onClick={() =>
                  openProduct({
                    name: "Blackline Joggers",
                    price: "Ksh 2800",
                    image: "/products/joggers.jpeg",
                    href: "#",
                    category: ""
                  })
                }
                className="group cursor-pointer min-w-[320px] md:min-w-[320px] flex-shrink-0 snap-start"
              >
                <div className="relative w-[320px] h-[420px] overflow-hidden rounded-xl bg-zinc-900">
                  <Image
                    src="/products/joggers.jpeg"
                    alt="Blackline Joggers"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-4 text-lg">Blackline Joggers</h3>
                <p className="text-zinc-400">Ksh 2800</p>
              </div>

              {/* Product 4 */}
              <div
                onClick={() =>
                  openProduct({
                    name: "Night Jacket",
                    price: "Ksh 2500",
                    image: "/products/night-jacket.jpeg",
                    href: "#",
                    category: "Jackets",
                  })
                }
                className="group cursor-pointer min-w-[320px] md:min-w-[320px] flex-shrink-0 snap-start"
              >
                <div className="relative w-[320px] h-[420px] overflow-hidden rounded-xl bg-zinc-900">
                  <Image
                    src="/products/night-jacket.jpeg"
                    alt="Night Jacket"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-4 text-lg">Night Jacket</h3>
                <p className="text-zinc-400">Ksh 3000</p>
              </div>

              {/* Product 5 */}
              <div
                onClick={() =>
                  openProduct({
                    name: "Pink Knit",
                    price: "Ksh 2500",
                    image: "/products/pink-knit.jpeg",
                    href: "#",
                    category: "Knitwear",
                  })
                }
                className="group cursor-pointer min-w-[320px] md:min-w-[320px] flex-shrink-0 snap-start"
              >
                <div className="relative w-[320px] h-[420px] overflow-hidden rounded-xl bg-zinc-900">
                  <Image
                    src="/products/pink-knit.jpeg"
                    alt="Pink Knit"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-4 text-lg">Pink Knit</h3>
                <p className="text-zinc-400">Ksh 2500</p>
              </div>

              {/* Product 6 */}
              <div
                onClick={() =>
                  openProduct({
                    name: "Grey Wash Tee",
                    price: "Ksh 1500",
                    image: "/products/grey-wash-tee.jpeg",
                    href: "#",
                    category: "T-Shirt",
                  })
                }
                className="group cursor-pointer min-w-[320px] md:min-w-[320px] flex--shrink-0 snap-start"
              >
                <div className="relative w-[320px] h-[420px] overflow-hidden rounded-xl bg-zinc-900">
                  <Image
                    src="/products/grey-wash-tee.jpeg"
                    alt="Gray Wash Tee"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-4 text-lg">Gray Wash Tee</h3>
                <p className="text-zinc-400">Ksh 1500</p>
              </div>


            </div>
          </div>
        </section>
      </FadeIn>

      <ProductModal
        product={selectedProduct!}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <Footer />
    </main>
  );
}