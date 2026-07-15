import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LookbookPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />
            <section className="max-w-7xl mx-auto px-8 py-16">
            <h1 className="text-6xl font-bold mb-4">LOOKBOOK</h1>
            <p className="text-zinc-500 mb-12">GOYADA Editorial Collection 2026</p>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="h-[500px] bg-zinc-900 rounded-xl"></div>
                <div className="h-[500px] bg-zinc-800 rounded-xl"></div>
                <div className="h-[500px] bg-zinc-900 rounded-xl"></div>
                <div className="h-[500px] bg-zinc-800 rounded-xl"></div>
                <div className="h-[500px] bg-zinc-900 rounded-xl"></div>
                <div className="h-[500px] bg-zinc-800 rounded-xl"></div>

            </div>
            </section>
            <Footer />
        </main>
    );
}