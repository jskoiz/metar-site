"use client";

import Link from "next/link";
import { Github, BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
            <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group z-50">
                    <div className="relative w-32 h-8">
                        <Image
                            src="/metar.png"
                            alt="Metar"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <NavLink href="#overview">Overview</NavLink>
                    <NavLink href="#architecture">Architecture</NavLink>
                    <NavLink href="#features">Features</NavLink>
                    <NavLink href="#tech-stack">Tech Stack</NavLink>
                    <NavLink href="#docs">Docs</NavLink>
                </nav>

                {/* Desktop Right Side */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="https://github.com/jskoiz/metar" className="text-gray-500 hover:text-black transition-colors">
                        <Github className="h-5 w-5" />
                    </Link>
                    <Button asChild variant="default" className="bg-black text-white hover:bg-gray-800 rounded-full px-5 h-10 text-[15px] flex items-center gap-2">
                        <Link href="#docs">
                            <BookOpen className="h-4 w-4" />
                            Read Docs
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 p-2 -mr-2 text-gray-600 hover:text-black"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute inset-x-0 top-0 bg-white border-b border-gray-100 p-6 pt-24 shadow-lg md:hidden flex flex-col gap-4"
                        >
                            <MobileNavLink href="#overview" onClick={() => setIsMenuOpen(false)}>Overview</MobileNavLink>
                            <MobileNavLink href="#architecture" onClick={() => setIsMenuOpen(false)}>Architecture</MobileNavLink>
                            <MobileNavLink href="#features" onClick={() => setIsMenuOpen(false)}>Features</MobileNavLink>
                            <MobileNavLink href="#tech-stack" onClick={() => setIsMenuOpen(false)}>Tech Stack</MobileNavLink>
                            <MobileNavLink href="#docs" onClick={() => setIsMenuOpen(false)}>Docs</MobileNavLink>

                            <div className="h-px bg-gray-100 my-2" />

                            <div className="flex items-center justify-between">
                                <Link href="https://github.com/jskoiz/metar" className="text-gray-500 hover:text-black transition-colors flex items-center gap-2">
                                    <Github className="h-5 w-5" />
                                    <span className="font-medium">GitHub</span>
                                </Link>
                                <Button asChild size="sm" className="bg-black text-white hover:bg-gray-800 rounded-full">
                                    <Link href="#docs">Read Docs</Link>
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            {children}
        </Link>
    );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="text-lg font-medium text-gray-900 py-2 border-b border-gray-50 hover:text-gray-600 transition-colors"
        >
            {children}
        </Link>
    );
}
