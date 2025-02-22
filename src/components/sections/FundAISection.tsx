
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const FundAISection = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[#1A1F2C] to-[#0F1218] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Empower the Future of AI Innovation
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Your contribution fuels groundbreaking AI research, development of open-source frameworks, 
              and supports emerging AI startups. Join us in building the next generation of AI 
              infrastructure and making advanced AI technologies accessible to innovators.
            </p>

            <div className="space-y-6 mb-12 text-white/80">
              <p className="font-medium">Your support enables:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-semibold mb-2">AI Research & Development</h3>
                  <p className="text-sm">Supporting cutting-edge AI model development and research initiatives</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Infrastructure Growth</h3>
                  <p className="text-sm">Expanding computing resources and infrastructure for AI startups</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Startup Support</h3>
                  <p className="text-sm">Providing resources and mentorship to emerging AI ventures</p>
                </div>
              </div>
            </div>

            <a
              href="https://ms.aivf.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Fund Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
