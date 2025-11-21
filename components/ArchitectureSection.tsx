import React from "react";
import { ArrowRight, Server, Smartphone, Database, Lock, CreditCard } from "lucide-react";

export default function ArchitectureSection() {
    return (
        <section id="architecture" className="py-24 bg-gray-50">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                        Technical Architecture
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Metar orchestrates a secure, stateless payment flow between AI agents and API providers, verified on the Solana blockchain.
                    </p>
                </div>

                {/* High Level Flow Visual */}
                <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-24 shadow-sm">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        {/* Client */}
                        <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl border border-blue-100 w-full md:w-1/3">
                            <Smartphone className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="font-semibold text-gray-900 mb-2">Client (AI Agent)</h3>
                            <ul className="text-sm text-gray-600 space-y-2 text-left w-full">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" />Price Lookup</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" />USDC Transfer</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" />TAP Signature</li>
                            </ul>
                        </div>

                        <ArrowRight className="w-8 h-8 text-gray-300 rotate-90 md:rotate-0" />

                        {/* Provider */}
                        <div className="flex flex-col items-center p-6 bg-purple-50 rounded-xl border border-purple-100 w-full md:w-1/3">
                            <Server className="w-10 h-10 text-purple-600 mb-4" />
                            <h3 className="font-semibold text-gray-900 mb-2">Provider (API)</h3>
                            <ul className="text-sm text-gray-600 space-y-2 text-left w-full">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400" />Verify Headers</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400" />Check On-Chain</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400" />Log Usage</li>
                            </ul>
                        </div>

                        <ArrowRight className="w-8 h-8 text-gray-300 rotate-90 md:rotate-0" />

                        {/* Blockchain */}
                        <div className="flex flex-col items-center p-6 bg-green-50 rounded-xl border border-green-100 w-full md:w-1/3">
                            <Database className="w-10 h-10 text-green-600 mb-4" />
                            <h3 className="font-semibold text-gray-900 mb-2">Solana Blockchain</h3>
                            <ul className="text-sm text-gray-600 space-y-2 text-left w-full">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400" />Confirm Tx</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400" />USDC Settlement</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400" />Immutable Record</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Payment Flow Steps */}
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-8">Payment Flow</h3>
                        <div className="relative border-l-2 border-gray-200 ml-3 space-y-12">
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-4 border-gray-50" />
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Price Discovery</h4>
                                <p className="text-gray-600 text-sm">Client requests price from <code>GET /.meter/price</code>. Returns price (USDC), recipient, and token mint.</p>
                            </div>
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-4 border-gray-50" />
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Payment Transaction</h4>
                                <p className="text-gray-600 text-sm">Client creates and sends USDC transfer on Solana with a memo containing the route ID and nonce.</p>
                            </div>
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-4 border-gray-50" />
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">3. TAP Signature</h4>
                                <p className="text-gray-600 text-sm">Client generates HTTP Signature (RFC 9421) using Ed25519 to prove agent identity cryptographically.</p>
                            </div>
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-4 border-gray-50" />
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">4. API Request</h4>
                                <p className="text-gray-600 text-sm">Client makes request with <code>x-meter-*</code> headers and Authorization signature.</p>
                            </div>
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-4 border-gray-50" />
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">5. Verification</h4>
                                <p className="text-gray-600 text-sm">Provider middleware verifies timestamp, nonce, signature, and on-chain payment confirmation.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#1e1e1e] rounded-xl p-6 border border-gray-800 font-mono text-sm text-gray-300 overflow-hidden">
                        <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-4">
                            <Lock className="w-4 h-4 text-green-400" />
                            <span className="text-gray-400">Secure Headers Example</span>
                        </div>
                        <pre className="overflow-x-auto">
                            <code className="language-http">
                                <span className="text-blue-400">POST</span> <span className="text-green-400">/api/generate</span> HTTP/1.1{"\n"}
                                <span className="text-blue-300">Host:</span> api.provider.com{"\n"}
                                <span className="text-blue-300">x-meter-tx:</span> 5Kj3...9zXy{"\n"}
                                <span className="text-blue-300">x-meter-route:</span> summarize:v1{"\n"}
                                <span className="text-blue-300">x-meter-amt:</span> 0.03{"\n"}
                                <span className="text-blue-300">x-meter-currency:</span> USDC{"\n"}
                                <span className="text-blue-300">x-meter-nonce:</span> 018b...7f2a{"\n"}
                                <span className="text-blue-300">x-meter-ts:</span> 1709...8821{"\n"}
                                <span className="text-blue-300">Authorization:</span> Signature keyId="agent-1",...{"\n"}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
}
