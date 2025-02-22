
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, RocketIcon } from "lucide-react";
import { StatCard } from "../ui/StatCard";
import { Stat } from "@/types/stats";

type HeroSectionProps = {
  stats: Stat[];
  scrollToSection: (sectionId: string) => void;
};

export const HeroSection = ({ stats, scrollToSection }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A1F2C] to-[#0F1218]">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 hero-background opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 md:px-6 rounded-full text-white text-xs md:text-sm font-medium mb-6 md:mb-8 border border-white/10"
          >
            <BrainCircuit className="w-3 h-3 md:w-4 md:h-4" />
            India's First AI-Focused Technology Business Incubator
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
          >
            Empowering the Future of{" "}
            <span className="bg-gradient-to-r from-primary via-primary-light to-white bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto px-4"
          >
            Join India's premier AI ecosystem where startups, founders, and students come together 
            to build the future of artificial intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row justify-center gap-4 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 flex items-center justify-center gap-2 shadow-xl transition-colors"
            >
              Get Started <RocketIcon className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 py-4 bg-transparent text-white border-2 border-white/40 rounded-full font-semibold hover:bg-white/10 flex items-center justify-center gap-2 transition-colors"
            >
              Learn More <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-16 max-w-3xl mx-auto px-4"
          >
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
