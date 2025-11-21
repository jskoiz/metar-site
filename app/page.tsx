import Hero from "@/components/Hero";
import OverviewSection from "@/components/OverviewSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import FeatureSection from "@/components/FeatureSection";
import TechStackSection from "@/components/TechStackSection";
import DocsSection from "@/components/DocsSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      <FadeIn>
        <OverviewSection />
      </FadeIn>

      <FadeIn>
        <ArchitectureSection />
      </FadeIn>

      <FadeIn>
        <FeatureSection />
      </FadeIn>

      <FadeIn>
        <TechStackSection />
      </FadeIn>

      <FadeIn>
        <DocsSection />
      </FadeIn>

      {/* Final CTA */}
      <section className="py-24 bg-black text-white">
        <FadeIn>
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Ready to monetize your APIs?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join the first payment protocol built for the programmatic economy.
              Start integrating Metar today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                className="h-12 px-8 bg-white text-black hover:bg-gray-100 rounded-full text-[15px] font-medium"
              >
                <Link href="https://github.com/jskoiz/metar" target="_blank">
                  Get Started
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 px-8 border-gray-700 text-white hover:bg-gray-900 rounded-full text-[15px] font-medium"
              >
                <Link href="#docs">
                  Read the Docs
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
