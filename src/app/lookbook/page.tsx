import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const lookbookImages = [
    "/lookbook/lookbook1.jpeg",
    "/lookbook/lookbook2.jpeg",
    "/lookbook/lookbook3.jpeg",
    "/lookbook/lookbook4.jpeg",
    "/lookbook/lookbook5.jpeg",
    "/lookbook/lookbook6.jpeg",
    "/lookbook/lookbook7.jpeg",
    "/lookbook/lookbook8.jpeg",
    "/lookbook/lookbook9.jpeg",
];

export default function LookbookPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />
            <section className="max-w-7xl mx-auto px-5 md:px-8 pt-28 pb-20">
                <div className="text-center mb-14">
                    <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs">
                        GOYADA
                    </p>

                    <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.2em] uppercase">
                        Lookbook
                    </h1>

                    <p className="mt-4 text-sm md:text-base text-zinc-500">
                        GOYADA Editorial Collection 2026
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lookbookImages.map((image, index) => (
                        <div
                           key={index}
                           className="group relative h-[380px] md:h-[500px] overflow-hidden rounded-2xl cursor-pointer">
                            <Image
                               src={image}
                               alt={`GOYADA Look ${index + 1}`}
                               fill
                               className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-xs tracking-[0.3em] uppercase text-zinc-300">
                                    Editorial {String(index + 1).padStart(2, "0")}
                                </p>

                                <h3 className="mt-2 text-xl font-light tracking-widest uppercase">
                                    GOYADA
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}