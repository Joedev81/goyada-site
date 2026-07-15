"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="bg-black yexy-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <FadeIn>
      <section className={`pt-36 pb-24 px-6 transition-all duration-1000 ${
        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs mb-4">Contact</p>

        <h1 className="text-5xl md:text-7xl font-light tracking-[0.2em] uppercase">Let's Talk</h1>
        <p className="mt-8 text-zinc-400 max-w-2xl mx-auto leading-8">Whether you have a question, collaboration ideas or simply
          want to connect with GOYADA, we'd love to hear from you.
        </p>
      </div>
    </section>
    </FadeIn>

    {/* CONTACT INFO */}
    <FadeIn>
    <section className="px-6 pb-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Email",
            value: "contact@goyada.com",
            desc: "We'll reply within 24 hours.",
          },
          {
            title: "Phone",
            value: "+254 740 619 823",
            desc: "Monday - Saturday",
          },
          {
            title: "Location",
            value: "Nairobi, Kenya",
            desc: "Worldwide Shipping",
          },
        ].map((item, i) => (
          <div
            key={item.title}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-white hover:-translate-y-2 transition-all duration-700"
            style={{
              animation: "fadeup 0.8s ease forwards", 
              animationDelay: `${i * 0.2}s`, 
              opacity: 0,
            }}
          >
            <p className="text-sm tracking-[0.3em] text-zinc-500 uppercase">{item.title}</p>
            <h3 className="mt-6 text-xl">{item.value}</h3>
            <p className="text-zinc-500 mt-3 text-sm">{item.desc}</p>
          </div>
        ))}
        
      </div>
    </section>
    </FadeIn>

    {/* CONTACT FORM */}
    <FadeIn>
    <section className="px-6 pb-28">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-light tracking-[0.2em] uppercase">Send a Message</h2>

          <p className="mt-4 text-zinc-500">We'd love to hear from you.</p>
        </div>

        <div className="relative">
          <input
            type="text"
            id="name"
            className="peer w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 pt-6 pb-3 outline-none focus:border-white focus:shadow-[0_0_20px_rgba(255,255,255,0.08)] transition"/>

          <label
            htmlFor="name"
            className="absolute left-5 top-4 text-zinc-500 transition-all duration-300
            peer-focus:top-2
            peer-focus:text-xs
            peer-focus:text-white
            peer-[&:not(:placeholder-shown)]:top-2
            peer-[&:not(:placeholder-shown)]:text-xs"
          >Your Name
          </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="peer w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 pt-6 pb-3 outline-none focus:border-white focus:shadow-[0_0_20px_rgba(255,255,255,0.08)] transition"/>

            <label
              htmlFor="email"
              className="absolute left-5 top-4 text-zinc-500 transition-all duration-300
              peer-focus:top-2
              peer-focus:text-xs
              peer-focus:text-white
              peer-[&:not(:placeholder-shown)]:top-2
              peer-[&:not(:placeholder-shown)]:text-xs"
            >Email Address
            </label>
          </div>

          <div className="relative">
            <input
             type="email"
             id="subject"
             placeholder=" "
             className="peer w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 pt-6 pb-3 outline-none focus:border-white focus:shadow-[0_0_20px_rgba(255,255,255,0.08)] transition"/>

            <label
              htmlFor="subject"
              className="absolute left-5 top-4 text-zinc-500 transition-all duration-300
              peer-focus:top-2
              peer-focus:text-xs
              peer-focus:text-white
              peer-[&:not(:placeholder-shown)]:top-2
              peer-[&:not(:placeholder-shown)]:text-xs"
            >Subject 
            </label>

          </div>

        <div className="relative">
          <textarea
            id="message"
            rows={6}
            placeholder=" "
            className="peer w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 pt-6 pb-3 outline-none focus:border-white focus:shadow-[0_0_20px_rgba(255,255,255,0.08)] transition"/>

          <label
            htmlFor="message"
            className="absolute left-5 top-4 text-zinc-500 transition-all duration-300
            peer-focus:top-2
            peer-focus:text-xs
            peer-focus:text-white
            peer-[&:not(:placeholder-shown)]:top-2
            peer-[&:not(:placeholder-shown)]:text-xs"
          >Tell us more.... 
          </label>
        </div>

        <button
          type="submit"
          className="w-full border border-white bg-white text-black py-4 uppercase tracking-[0.3em] hover:bg-transparent hover:text-white transition duration-300">Send Message</button>


      </div>
    </section>
    </FadeIn>

    {/* SOCIALS */}
    <FadeIn>
    <section className="px-6 pb-24">
      <div className="max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs mb-8">Follow GOYADA</p>

        <div className="flex flex-wrap justify-center gap-8 text-lg">
          <a href="https://instagram.com/real_goyada"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-400 transition">Instagram</a>
          <a href="#"
          className="hover:text-zinc-400 transition">TikTok</a>
          <a href="#"
          className="hover:text-zinc-400 transition">X</a>

        </div>

      </div>
    </section>
    </FadeIn>

    {/* FLOATING WHATSAPP BUTTON */}
    <a
      href="https://wa.me/254740619823"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300">

        <svg 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-white">
            <path d="M16.001 3C8.832 3 3 8.732 3 15.781c0 2.489.744 4.9 2.156 6.969L3.75 29l6.438-1.375a13.08 13.08 0 005.813 1.375c7.168 0 13-5.732 13-12.781S23.169 3 16.001
             3zm0 23.406a10.8 10.8 0 01-5.5-1.5l-.394-.219-3.813.813.813-3.719-.25-.406a10.54 10.54 0 01-1.656-5.594c0-5.844 4.844-10.594 10.8-10.594 5.938 0 10.781 4.75 10.781 
             10.594s-4.843 10.625-10.781 10.625zm5.906-7.969c-.313-.156-1.844-.906-2.125-1s-.5-.156-.719.156c-.219.313-.813 1-.969 1.188s-.344.219-.656.063c-.313-.156-1.313-.469-2.5
             -1.5-.938-.813-1.563-1.813-1.75-2.125-.188-.313-.031-.469.125-.625.125-.125.313-.344.469-.531.156-.188.219-.313.344-.531.125-.219.063-.406-.031-.563-.094-.156-.719-1.719-
             .969-2.344-.25-.594-.531-.531-.719-.531h-.625c-.219 0-.563.094-.844.406-.281.313-1.094 1.063-1.094 2.594s1.125 3 1.281 3.219c.156.219 2.188 3.344 5.313 4.688.75.313 1.344.5 
             1.813.656.75.219 1.438.188 1.969.125.594-.094 1.844-.75 2.094-1.469.25-.719.25-1.344.188-1.469-.063-.125-.281-.188-.594-.344z" />
          </svg>
      </a>

     <Footer />
    </main>
  );
}