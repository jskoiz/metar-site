"use client";

import React from "react";
import { Package, Server, Database, Shield, Globe, Cpu } from "lucide-react";

export default function TechStackSection() {
    return (
        <section id="tech-stack" className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                        Built on modern standards.
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                        Metar is a monorepo designed for modularity and type safety.
                        It leverages the best-in-class tools for Solana development and Node.js services.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Core Technologies */}
                    <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-8 flex items-center gap-2">
                            <Cpu className="w-5 h-5 text-gray-400" />
                            Core Technologies
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <TechItem
                                icon={<Globe className="w-5 h-5" />}
                                title="Node.js & TypeScript"
                                description="Robust, type-safe runtime for high-performance API services."
                            />
                            <TechItem
                                icon={<Database className="w-5 h-5" />}
                                title="Solana Blockchain"
                                description="High-throughput, low-latency L1 for instant settlement."
                            />
                            <TechItem
                                icon={<Shield className="w-5 h-5" />}
                                title="USDC Stablecoin"
                                description="Digital dollar for stable, predictable pricing."
                            />
                            <TechItem
                                icon={<Server className="w-5 h-5" />}
                                title="Ed25519 Signatures"
                                description="Cryptographic verification for secure authentication."
                            />
                        </div>
                    </div>

                    {/* Package Structure */}
                    <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-8 flex items-center gap-2">
                            <Package className="w-5 h-5 text-gray-400" />
                            Package Structure
                        </h3>
                        <div className="space-y-4">
                            <PackageItem
                                name="@metar/metar-client"
                                description="Client SDK for agents to discover prices and make payments."
                            />
                            <PackageItem
                                name="@metar/metar-provider"
                                description="Express middleware for payment verification and replay protection."
                            />
                            <PackageItem
                                name="@metar/agent-registry"
                                description="Agent key registry and price service for centralized management."
                            />
                            <PackageItem
                                name="@metar/dashboard"
                                description="React/Vite dashboard for analytics and revenue tracking."
                            />
                            <PackageItem
                                name="@metar/shared-types"
                                description="TypeScript definitions for the TAP protocol and payment interfaces."
                            />
                            <PackageItem
                                name="@metar/shared-config"
                                description="Shared configuration constants (Solana networks, USDC mints)."
                            />
                            <PackageItem
                                name="@metar/facilitator"
                                description="Facilitator mode for delegated payment verification (optional)."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TechItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                {icon}
            </div>
            <div>
                <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

function PackageItem({ name, description }: { name: string, description: string }) {
    return (
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-mono font-semibold text-gray-900 text-sm mb-1">{name}</h4>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
}
