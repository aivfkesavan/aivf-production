
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-20 md:pt-32 pb-12 md:pb-20 overflow-hidden px-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NEgwdjJoNHY0aDJWNmg0VjRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full mb-4 md:mb-6 text-sm md:text-base">
            Event Completed
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            No-Code AI Venture Factory Hackathon 2024
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 px-4">
            India's First No-Code AI Hackathon where innovators built the future of AI without writing a single line of code
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-4">
            <button 
              onClick={() => scrollToSection('prizes')} 
              className="w-full sm:w-auto px-4 md:px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              View Winners <Trophy className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button 
              onClick={() => navigate('/?scrollTo=contact')} 
              className="w-full sm:w-auto px-4 md:px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Learn More <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-white px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 flex items-center gap-3 md:gap-4">
              <Calendar className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-sm md:text-base">Date</h3>
                <p className="text-white/80 text-sm">Completed - March 15-17, 2024</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 flex items-center gap-3 md:gap-4">
              <MapPin className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-sm md:text-base">Location</h3>
                <p className="text-white/80 text-sm">Chennai, India</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 flex items-center gap-3 md:gap-4 sm:col-span-2 md:col-span-1">
              <Trophy className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-sm md:text-base">Prize Pool</h3>
                <p className="text-white/80 text-sm">₹5,00,000</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
