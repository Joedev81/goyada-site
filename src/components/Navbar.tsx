"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CartDrawer from "@/context/cartDrawer";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { cart } = useCart();
  const pathname = usePathname();


  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);



  const links = [
    { href: "/", label: "HOME" },
    { href: "/shop", label: "SHOP" },
    { href: "/collections", label: "COLLECTIONS" },
    { href: "/lookbook", label: "LOOKBOOK" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];



  return (
    <>

      <nav
        className={`
          fixed top-0 w-full z-50 text-white transition-all duration-500
          ${
            scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-zinc-900 py-4"
            : "bg-transparent py-6"
          }
        `}
      >

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10">


          {/* LOGO */}

          <Link
            href="/"
            className="text-xl md:text-2xl tracking-[0.35em] font-light"
          >
            GOYADA
          </Link>



          {/* DESKTOP LINKS */}

          <div className="hidden md:flex gap-8 text-xs tracking-[0.2em]">

            {links.map((link)=>{

              const active = pathname === link.href;

              return (

                <Link
                  key={link.href}
                  href={link.href}
                  className="relative hover:opacity-70 transition"
                >

                  {link.label}

                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[1px] bg-white transition-all
                      ${
                        active
                        ? "w-full"
                        : "w-0"
                      }
                    `}
                  />

                </Link>

              );

            })}

          </div>




          {/* RIGHT SIDE */}

          <div className="flex items-center gap-3">


            {/* CART */}

            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 border border-zinc-800 rounded-md"
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m2-9h10m0 0l2 9m-2-9H7"
                />

              </svg>


              {cartCount > 0 && (

                <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center">

                  {cartCount}

                </span>

              )}

            </button>



            {/* MOBILE MENU BUTTON */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 border border-zinc-800 rounded-md"
            >

              {menuOpen ? "✕" : "☰"}

            </button>


          </div>


        </div>

      </nav>




      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="fixed inset-0 z-40 bg-black text-white flex flex-col items-center justify-center gap-8 md:hidden">

          {links.map((link)=>(

            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg tracking-[0.3em] hover:opacity-60 transition"
            >

              {link.label}

            </Link>

          ))}

        </div>

      )}



      <CartDrawer
        open={cartOpen}
        setOpen={setCartOpen}
      />

    </>
  );
}