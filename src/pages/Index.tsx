
import { useState, useEffect } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Stat, Testimonial, Partner } from "@/types/stats";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { FundAISection } from "@/components/sections/FundAISection";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const stats: Stat[] = [
    { number: "2", label: "Startups Launched" },
    { number: "31", label: "Qualified Experts" },
    { number: "6", label: "AI Startups Incubated" },
    { number: "7", label: "Industry Partners" }
  ];

  const testimonials: Testimonial[] = [
    {
      quote: "AI Venture Factory has been instrumental in helping me build & launch my AI startup",
      name: "Amith",
      position: "Co-Founder, Nidum"
    },
    {
      quote: "Without the hardware provided, we could not have afforded to train our models to benefit our customers",
      name: "Meyyappan",
      position: "Co-Founder, EdAI"
    },
    {
      quote: "We came with an idea, they helped us with end to end execution",
      name: "Rohan Vaidya",
      position: "Co-Founder, ElluminAI"
    }
  ];

  const partners: Partner[] = [
    { name: "Partner 1", logo: "/lovable-uploads/43929097-f84c-4d25-a7d7-24b8b2e466ad.png" },
    { name: "Partner 2", logo: "/lovable-uploads/4ed24c8b-b4fd-4dbb-bfa3-b3654a273446.png" },
    { name: "StartupTN", logo: "/lovable-uploads/eacb4afc-d5e9-4ae7-86eb-ad98a7780dac.png" },
    { name: "Partner 4", logo: "/lovable-uploads/c9b6c032-048b-4ed2-85a9-f6eb189eb546.png" },
    { name: "Partner 5", logo: "/lovable-uploads/15226261-3911-4850-bd50-a450b1bbd4f4.png" },
    { name: "Partner 6", logo: "/lovable-uploads/1f33e550-7434-4985-bcbe-71f03ee8d40a.png" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <HeroSection stats={stats} scrollToSection={scrollToSection} />
      <ServicesSection />
      <AboutSection stats={stats} />
      <MissionSection />
      <FundAISection />
      <TestimonialsSection
        testimonials={testimonials}
        activeTestimonial={activeTestimonial}
        setActiveTestimonial={setActiveTestimonial}
      />
      <PartnersSection partners={partners} />
      <ContactSection />
      <FooterSection />
      <Toaster />
    </div>
  );
};

export default Index;
