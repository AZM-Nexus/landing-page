import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { OperationsSection } from "@/components/OperationsSection";
import { TickerSection } from "@/components/TickerSection";
import { TeamSection } from "@/components/TeamSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <NavBar />
      <div id="about">
        <HeroSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <OperationsSection />
      <TickerSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
