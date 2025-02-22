
import { useState } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/hackathon/HeroSection";
import { SponsorsSection } from "@/components/hackathon/SponsorsSection";
import { ThemesSection } from "@/components/hackathon/ThemesSection";
import { TimelineSection } from "@/components/hackathon/TimelineSection";
import { PrizesSection } from "@/components/hackathon/PrizesSection";
import { BannerSection } from "@/components/hackathon/BannerSection";
import { CTASection } from "@/components/hackathon/CTASection";

const Hackathon = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#0F1218]">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <SponsorsSection />
      <ThemesSection />
      <TimelineSection />
      <PrizesSection />
      <BannerSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Hackathon;
