"use client";

import React from "react";
import { Zap, Globe, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function OverviewSection() {
    return (
        <section id="overview" className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                        Payments should be simple.
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        <strong className="text-gray-900">Metar</strong> is a production-ready SDK that enables{" "}
                        <strong className="text-gray-900">pay-per-call monetization</strong> for any API.
                        It allows AI agents, microservices, and programmatic clients to pay for resources instantly using USDC on Solana.
                    </p>
                </div>

                {/* Value Props Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    <ValueProp
                        icon={<Zap className="w-6 h-6 text-gray-900" />}
                        title="For API Providers"
                        description="Monetize your API endpoints instantly. No subscription management, no invoicing, just direct USDC deposits for every valid request."
                    />
                    <ValueProp
                        icon={<Globe className="w-6 h-6 text-gray-900" />}
                        title="For Programmatic Clients"
                        description="Access premium APIs without credit cards or signups. Just fund a wallet and start making requests. Perfect for AI agents and microservices."
                    />
                    <ValueProp
                        icon={<Shield className="w-6 h-6 text-gray-900" />}
                        title="For Developers"
                        description="Integrate in minutes with a simple Express middleware and a type-safe client SDK. Built on standard HTTP 402 status codes."
                    />
                </div>

                {/* Project Overview & Problem/Solution */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                            The Problem with Subscriptions
                        </h3>
                        <div className="space-y-6">
                            <ProblemItem
                                title="Inefficient for Agents"
                                description="AI agents can't fill out credit card forms or manage monthly subscriptions. They need a programmatic way to pay for what they use."
                            />
                            <ProblemItem
                                title="High Overhead"
                                description="Managing Stripe integration, webhooks, and invoicing for micro-transactions is expensive and complex."
                            />
                            <ProblemItem
                                title="API Key Leakage"
                                description="Static API keys are a security risk. If leaked, you're liable for the bill. Metar uses cryptographic signatures for every request."
                            />
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                            The Metar Solution
                        </h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Metar standardizes the <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">HTTP 402 Payment Required</code> status code.
                            When a client makes a request, the provider responds with a 402 and a payment invoice.
                            The client SDK automatically signs and sends the payment, and the provider fulfills the request.
                        </p>
                        <div className="flex flex-col gap-4">
                            <SolutionItem text="Standard HTTP Status Codes" />
                            <SolutionItem text="Instant USDC Settlement on Solana" />
                            <SolutionItem text="Cryptographic Request Signing" />
                            <SolutionItem text="No Centralized Intermediary" />
                        </div>

                        <div className="mt-10 pt-8 border-t border-gray-200">
                            <Button variant="outline" className="w-full justify-between group hover:bg-white">
                                Read the Architecture Spec
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ValueProp({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
}

function ProblemItem({ title, description }: { title: string, description: string }) {
    return (
        <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1">
                <div className="w-2 h-2 rounded-full bg-red-500" />
            </div>
            <div>
                <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

function SolutionItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
            <span className="text-gray-700 font-medium">{text}</span>
        </div>
    );
}
