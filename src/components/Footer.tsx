import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 mt-24 bg-black">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

                    {/* BRAND */}
                    <div className="text-left">
                        <h2 className="text-4xl tracking-[0.35em] font-light">GOYADA</h2>
                        <p className="text-zinc-500 mt-5 leading-relaxed max-w-sm">
                            Dark luxury streetwear built around minimal design, identity and elevated
                            everyday fashion.
                        </p>
                    </div>

                    {/* NAVIGATION */}
                    <div className="text center">
                        <h3 className="text-xs tracking-[0.3em] text-zinc-500 mb-6">
                            EXPLORE
                        </h3>
                        <div className="flex flex-col items-center gap-4 text-sm">
                            <Link 
                              href="/"
                              className="hover:text-zinc-400 transition">
                                HOME
                              </Link>

                              <Link
                                href="/shop"
                                className="hover:text-zinc-400 transition">
                                    SHOP
                                </Link>

                                <Link
                                  href="/collections"
                                  className="hover:text-zinc-400 transition">
                                    COLLECTIONS
                                  </Link>

                                  <Link
                                    href="/lookbook"
                                    className="hover:text-zinc-400 transition">
                                        LOOKBOOK
                                    </Link>

                                    <Link
                                      href="/about"
                                      className="hover:text-zinc-400 transition">
                                        ABOUT
                                      </Link>

                                      <Link
                                        href="/contact"
                                        className="hover:text-zinc-400 transition">
                                            CONTACT
                                        </Link>

                        </div>
                    </div>

                    {/* SOCIAL */}
                    <div className="text-right">
                        <h3 className="text-xs tracking-[0.3em] text-zinc-500 mb-6">
                            FOLLOW
                        </h3>
                        <div className="flex flex-col items-end gap-4 text-sm">
                            <a
                              href="https://instagram.com/real_goyada"
                              target="_blank"
                              className="hover:text-zinc-400 transition"
                            >
                                INSTAGRAM
                            </a>

                             <a className="hover:text-zinc-400 transition">
                                TIKTOK
                            </a>

                             <a className="hover:text-zinc-400 transition">
                                X / TWITTER
                            </a>
                        </div>
                    </div>
                </div>

                
                {/* BOTTOM BAR */}
                <div className="text-center border-t border-zinc-900 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4">
                    <p className="text-zinc-600 text-sm">
                         © 2026 GOYADA. All rights reserved.
                    </p>
                    <p className="text-zinc-600 text-sm">
                        Minimal. Dark. Elevated.
                    </p>
                </div>
            </div>
        </footer>
    );
}