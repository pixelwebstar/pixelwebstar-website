import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";
import HeroSection from "@/components/HeroSection";

// Components
import TextHook from "@/components/TextHook";
import ChartSection from "@/components/ChartSection";
import ValueGrid from "@/components/ValueGrid";
import ServiceCarousel from "@/components/ServiceCarousel";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Awards from "@/components/Awards";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-[#121212]">
            <Header />

            {/* 1. HERO */}
            <HeroSection />

            {/* 2. HOOK */}
            <TextHook />

            {/* 3. CHART */}
            <div className="relative z-20 bg-[#121212]">
                <ChartSection />
            </div>

            {/* 4. VALUE GRID */}
            <ValueGrid />

            {/* 5. SERVICES */}
            <ServiceCarousel />

            {/* 6. PROJECTS */}
            <div className="relative z-30 bg-[#121212] py-24">
                <Projects />
            </div>

            {/* 7. PROCESS */}
            <Process />

            {/* 8. AWARDS */}
            <Awards />

            {/* 9. FAQ */}
            <FAQ />

            {/* 10. CTA */}
            <FinalCTA />

            <Footer />
            <FloatingChat />
        </main>
    );
}
