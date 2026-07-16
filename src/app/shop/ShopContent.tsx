"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductModal from "@/components/ProductModal";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Product = {
  name: string;
  price: string;
  href: string;
  image: string;
  category: string;
};

export default function ShopContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialCategory = searchParams.get("category") || "All";

  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const urlCategory = searchParams.get("category") || "All";
    setCategory(urlCategory);
  }, [searchParams]);

  const products: Product[] = [
    {
      name: "Shadow Hoodie",
      price: "Ksh 3,000",
      href: "/shop/shadow-hoodie",
      image: "/products/shadow-hoodie.jpeg",
      category: "Hoodies",
    },
    {
      name: "Obsidian Tee",
      price: "Ksh 1,200",
      href: "#",
      image: "/products/obsidian-tee.jpeg",
      category: "T-Shirts",
    },
    {
      name: "Joggers",
      price: "Ksh 2,000",
      href: "#",
      image: "/products/joggers.jpeg",
      category: "Bottoms",
    },
    {
      name: "Night Jacket",
      price: "Ksh 3,000",
      href: "#",
      image: "/products/night-jacket.jpeg",
      category: "Jackets",
    },
    {
      name: "Grey Wash Tee",
      price: "Ksh 1,500",
      href: "#",
      image: "/products/grey-wash-tee.jpeg",
      category: "T-Shirts",
    },
    {
      name: "Pink Knit",
      price: "Ksh 2,300",
      href: "#",
      image: "/products/pink-knit.jpeg",
      category: "Knitwear",
    },
    {
      name: "Snow Hoodie",
      price: "Ksh 2,500",
      href: "#",
      image: "/products/snow-hoodie.jpeg",
      category: "Hoodies",
    },
    {
      name: "Beige Hoodie",
      price: "Ksh 2,500",
      href: "#",
      image: "/products/beige-hoodie.jpeg",
      category: "Hoodies",
    },
    {
      name: "Patched Hoodie",
      price: "Ksh 2,500",
      href: "#",
      image: "/products/patched-hoodie.jpeg",
      category: "Hoodies",
    },
    {
      name: "Void Tee",
      price: "Ksh 1,500",
      href: "#",
      image: "/products/tee.jpeg",
      category: "T-Shirts",
    },
  ];

  const categories = [
    "All",
    "Hoodies",
    "T-Shirts",
    "Bottoms",
    "Jackets",
    "Knitwear",
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, category, search]);

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProduct = () => {
    setSelectedProduct(null);
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section
        className={`text-center pt-24 md:pt-28 pb-12 md:pb-16 px-5 md:px-6 transition-all duration-700 ${
          loaded
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.18em] md:tracking-[0.3em] uppercase">
          Collection
        </h1>

        <p className="text-zinc-400 mt-4 px-4 max-w-xl mx-auto text-sm md:text-base">
          Premium streetwear built for identity and confidence.
        </p>
      </section>

      {/* SEARCH */}
      <section className="px-5 md:px-6 mb-8">
        <div className="max-w-6xl mx-auto">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="
              w-full
              px-4 md:px-5
              py-3 md:py-4
              rounded-xl
              bg-zinc-900
              border
              border-zinc-700
              outline-none
              text-sm md:text-base
              transition-all
              duration-300
              focus:border-white
            "
          />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 mb-10">
        <div className="max-w-6xl mx-auto flex gap-3 overflow-x-auto scrollbar-hide pb-2">
         {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);

                if (cat === "All") {
                  router.push("/shop");
                } else {
                  router.push(`/shop?category=${encodeURIComponent(cat)}`);
                }
              }}
              className={`
                px-4 md:px-5 py-2 text-sm md:text-base rounded-full whitespace-nowrap
                transition-all duration-300
                active:scale-95
                hover:scale-105
                ${
                  category === cat
                    ? "bg-white text-black"
                    : "bg-zinc-900 hover:bg-zinc-800"
                }
              `}
              style={{
                transitionDelay: `${i * 50}ms`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredProducts.map((product, i) => (
            <div
              key={product.name}
              onClick={() => openProduct(product)}
              className={`
                group cursor-pointer bg-zinc-900 rounded-xl overflow-hidden
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-black/40
                ${
                  loaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
              style={{
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <div className="relative h-56 sm:h-72 md:h-80 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                <div className="hidden md:flex absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 items-center justify-center">
                  <p className="opacity-0 group-hover:opacity-100 tracking-widest text-sm transition-all duration-500">
                    VIEW PRODUCT
                  </p>
                </div>
              </div>

              <div className="p-4 md:p-5">
                <h3 className="text-base md:text-lg">{product.name}</h3>
                <p className="text-zinc-400 mt-1 text-sm md:text-base">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl md:text-2xl text-zinc-500">No products found.</h3>
            <p className="mt-2 text-zinc-600">
              Try another category or search term.
            </p>
          </div>
        )}
      </section>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          open={true}
          onClose={closeProduct}
        />
      )}

      <Footer />
    </main>
  );
}