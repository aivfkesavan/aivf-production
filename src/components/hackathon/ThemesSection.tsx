
import { motion } from "framer-motion";
import { Rocket, Users } from "lucide-react";

export const ThemesSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-8 md:mb-12">Hackathon Themes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8">
              <Rocket className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">No-Code AI for Social Impact</h3>
              <p className="text-white/80 text-sm md:text-base">
                Built solutions that address social challenges using No-Code AI tools, from education to healthcare.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8">
              <Users className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Enterprise No-Code AI Solutions</h3>
              <p className="text-white/80 text-sm md:text-base">
                Developed AI-powered tools to solve business challenges using No-Code platforms.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
