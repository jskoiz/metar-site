"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Terminal, Copy, Check, X, Minus, Square } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-50/50 via-white to-white pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="flex flex-col gap-16">
                    {/* Text Content (Top) */}
                    <div className="text-left max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-medium text-gray-600">v1.0.0 Public Beta</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-[68px] leading-[1.1] font-medium text-[#222222] mb-6 tracking-[-0.68px]"
                        >
                            One Line of Code. <br />
                            Instant API Monetization.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-[20px] leading-[28px] text-[#222222] max-w-2xl mb-8 font-normal tracking-[0.4px]"
                        >
                            A production-ready SDK for pay-per-call APIs using USDC micropayments. Perfect for AI agents, microservices, and any programmatic client that needs simple, automatic payments.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row justify-start gap-3"
                        >
                            <Button
                                className="h-10 px-6 bg-[#222222] text-white hover:bg-black rounded-full text-[15px] font-medium transition-all hover:scale-105 active:scale-95"
                                onClick={() => window.open('https://github.com/jskoiz/metar', '_blank')}
                            >
                                Start Building
                            </Button>
                            <Button
                                variant="outline"
                                className="h-10 px-6 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full text-[15px] font-medium transition-all hover:scale-105 active:scale-95"
                                onClick={() => document.getElementById('docs')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                View Documentation
                            </Button>
                        </motion.div>
                    </div>

                    {/* Code Snippets Visual (Below) */}
                    <div className="grid lg:grid-cols-2 gap-6 w-full">
                        {/* Provider Code Block */}
                        <div className="rounded-lg bg-[#1e1e1e] shadow-xl overflow-hidden border border-gray-800/50 ring-1 ring-white/5 flex flex-col font-mono text-sm">
                            <div className="flex items-center px-4 py-3 bg-[#252526] border-b border-black/20">
                                <div className="flex items-center gap-2 mr-4">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                                </div>
                                <div className="text-xs text-gray-400">provider.ts</div>
                            </div>
                            <div className="p-6 overflow-x-auto flex-1">
                                <pre className="leading-relaxed text-gray-300">
                                    <code>
                                        <span className="text-[#c586c0]">import</span> {"{"} createX402Middleware {"}"} <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">"@metar/metar-provider"</span>;{"\n\n"}
                                        app.<span className="text-[#dcdcaa]">post</span>(<span className="text-[#ce9178]">"/api/generate"</span>,{"\n"}
                                        {"  "}<span className="text-[#dcdcaa]">createX402Middleware</span>({"{"}{"\n"}
                                        {"    "}<span className="text-[#9cdcfe]">price</span>: <span className="text-[#b5cea8]">0.03</span>, <span className="text-[#6a9955]">// 0.03 USDC</span>{"\n"}
                                        {"    "}<span className="text-[#9cdcfe]">payTo</span>: <span className="text-[#ce9178]">"YOUR_WALLET..."</span>,{"\n"}
                                        {"    "}<span className="text-[#9cdcfe]">chain</span>: <span className="text-[#ce9178]">"solana-mainnet"</span>{"\n"}
                                        {"  "}{"}"}),{"\n"}
                                        {"  "}<span className="text-[#c586c0]">async</span> (req, res) ={">"} {"{"}{"\n"}
                                        {"    "}<span className="text-[#6a9955]">// Payment verified!</span>{"\n"}
                                        {"    "}res.<span className="text-[#dcdcaa]">json</span>({"{"} <span className="text-[#9cdcfe]">result</span>: <span className="text-[#ce9178]">"..."</span> {"}"});{"\n"}
                                        {"  "}{"}"}{"\n"}
                                        );
                                    </code>
                                </pre>
                            </div>
                        </div>

                        {/* Client Code Block */}
                        <div className="rounded-lg bg-[#1e1e1e] shadow-xl overflow-hidden border border-gray-800/50 ring-1 ring-white/5 flex flex-col font-mono text-sm">
                            <div className="flex items-center px-4 py-3 bg-[#252526] border-b border-black/20">
                                <div className="flex items-center gap-2 mr-4">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                                </div>
                                <div className="text-xs text-gray-400">client.ts</div>
                            </div>
                            <div className="p-6 overflow-x-auto flex-1">
                                <pre className="leading-relaxed text-gray-300">
                                    <code>
                                        <span className="text-[#c586c0]">import</span> {"{"} MetarClient {"}"} <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">"@metar/metar-client"</span>;{"\n\n"}
                                        <span className="text-[#569cd6]">const</span> client = <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">MetarClient</span>({"{"}{"\n"}
                                        {"  "}<span className="text-[#9cdcfe]">agentKey</span>: process.env.TAP_KEY,{"\n"}
                                        {"  "}<span className="text-[#9cdcfe]">wallet</span>: mySolanaWallet{"\n"}
                                        {"}"});{"\n\n"}
                                        <span className="text-[#6a9955]">// Auto-handles 402 & payment</span>{"\n"}
                                        <span className="text-[#569cd6]">const</span> res = <span className="text-[#c586c0]">await</span> client.<span className="text-[#dcdcaa]">request</span>(<span className="text-[#ce9178]">"generate"</span>, {"{"}{"\n"}
                                        {"  "}<span className="text-[#9cdcfe]">method</span>: <span className="text-[#ce9178]">"POST"</span>,{"\n"}
                                        {"  "}<span className="text-[#9cdcfe]">body</span>: JSON.<span className="text-[#dcdcaa]">stringify</span>({"{"} <span className="text-[#9cdcfe]">prompt</span>: <span className="text-[#ce9178]">"Hello world"</span> {"}"}){"\n"}
                                        {"}"});
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
