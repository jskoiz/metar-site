import React from "react";
import { Shield, AlertTriangle, FileCode } from "lucide-react";

export default function DocsSection() {
    return (
        <section id="docs" className="py-24 bg-gray-50">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                        Documentation & Integration
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Detailed API specifications and security requirements for integrating Metar.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-24">
                    {/* API Specs */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-8">API Specifications</h3>

                        <div className="space-y-8">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-mono">GET</span>
                                    /.meter/price
                                </h4>
                                <div className="bg-[#1e1e1e] rounded-lg p-4 border border-gray-800 font-mono text-sm text-gray-300 overflow-x-auto">
                                    <pre>{`{
  "price": 0.03,
  "currency": "USDC",
  "mint": "EPjFWdd5...",
  "payTo": "7xKXtg2...",
  "routeId": "summarize:v1",
  "chain": "solana-devnet"
}`}</pre>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-900 mb-3">Required Payment Headers</h4>
                                <div className="bg-[#1e1e1e] rounded-lg p-4 border border-gray-800 font-mono text-sm text-gray-300 overflow-x-auto">
                                    <pre>{`{
  "x-meter-tx": "Solana transaction signature",
  "x-meter-route": "Route identifier",
  "x-meter-amt": "Payment amount",
  "x-meter-currency": "USDC",
  "x-meter-nonce": "Unique UUID v7",
  "x-meter-ts": "Unix timestamp (ms)",
  "x-meter-agent-kid": "Agent key ID",
  "Authorization": "TAP signature"
}`}</pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-8">Security Requirements</h3>
                        <div className="bg-white rounded-xl border border-gray-200 p-8 space-y-6">
                            <div className="flex gap-4">
                                <Shield className="w-6 h-6 text-gray-900 shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Private Key Management</h4>
                                    <p className="text-sm text-gray-600">Never expose private keys in client-side code. Use secure key storage and rotation policies.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Lock className="w-6 h-6 text-gray-900 shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">HTTPS Only</h4>
                                    <p className="text-sm text-gray-600">All production endpoints must use HTTPS. Payment headers contain sensitive information.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <AlertTriangle className="w-6 h-6 text-gray-900 shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Nonce Management</h4>
                                    <p className="text-sm text-gray-600">Nonces must be unique per agent. Implement proper storage (Redis/DB) to prevent replay attacks.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <FileCode className="w-6 h-6 text-gray-900 shrink-0" />
                                <div className="p-6 overflow-x-auto">
                                    <pre className="text-sm leading-relaxed text-gray-300 font-mono">
                                        <code>
                                            POST /api/generate HTTP/1.1
                                            Host: api.provider.com
                                            x-meter-tx: 5Kj3...9zXy
                                            x-meter-route: summarize:v1
                                            x-meter-amt: 0.03
                                            x-meter-currency: USDC
                                            x-meter-nonce: 018b...7f2a
                                            x-meter-ts: 1709...8821
                                            Authorization: Signature keyId="agent-1",...
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Lock(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    )
}
