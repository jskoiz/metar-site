import React from "react";
import { Server, Smartphone, Shield, Zap, Database, Lock } from "lucide-react";

const features = [
    {
        title: "Provider Middleware",
        description: "Monetize in minutes. One-line middleware protects any Express route. Automatic on-chain verification and usage analytics included.",
        icon: Server,
    },
    {
        title: "Client SDK",
        description: "Zero human intervention. SDK handles price lookup, USDC payments, and TAP signatures automatically.",
        icon: Smartphone,
    },
    {
        title: "Enterprise Security",
        description: "Built on Visa's Trusted Agent Protocol. Ed25519 signatures, replay protection, and timestamp validation.",
        icon: Shield,
    },
    {
        title: "Solana Speed",
        description: "Sub-second finality and low fees. Built for high-frequency machine-to-machine transactions.",
        icon: Zap,
    },
    {
        title: "Usage Analytics",
        description: "Built-in SQLite tracking for payments and usage. Visualize revenue and request metrics in real-time.",
        icon: Database,
    },
    {
        title: "Replay Protection",
        description: "Nonces tracked per agent. Transaction signatures prevent double-spending and ensure idempotency.",
        icon: Lock,
    },
];

export default function FeatureSection() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                        Everything you need to monetize your API.
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                        Metar provides a complete toolkit for building pay-per-call APIs.
                        From the middleware that verifies payments to the client SDK that handles them automatically.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:border-gray-200 transition-colors"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-6 h-6 text-gray-900" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
