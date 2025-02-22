
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const FundAISection = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
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
