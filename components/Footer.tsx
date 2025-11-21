import React from "react";
import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Brand & Copyright */}
                <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6">
                        <img
                            src="/metar-light.png"
                            alt="Metar Logo"
                            className="object-contain w-full h-full"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <span className="font-semibold text-gray-900">Metar Protocol</span>
                    <span className="text-gray-400 text-sm ml-2">© 2025</span>
                </div>

                {/* Developer Links */}
                <div className="flex items-center gap-8">
                    <Link href="#docs" className="text-sm text-gray-600 hover:text-black transition-colors">
                        Documentation
                    </Link>
                    <Link href="https://github.com/jskoiz/metar" className="text-sm text-gray-600 hover:text-black transition-colors">
                        GitHub
                    </Link>
                    <Link href="https://www.npmjs.com/package/@metar/metar-client" className="text-sm text-gray-600 hover:text-black transition-colors">
                        NPM
                    </Link>
                </div>

                {/* Socials */}
                <div className="flex items-center gap-4">
                    <Link href="https://github.com/jskoiz/metar" className="text-gray-400 hover:text-black transition-colors">
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link href="https://twitter.com/metarprotocol" className="text-gray-400 hover:text-black transition-colors">
                        <Twitter className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
