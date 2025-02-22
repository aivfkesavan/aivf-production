
import { motion } from "framer-motion";
import { Stat } from "@/types/stats";

type AboutSectionProps = {
  stats: Stat[];
};

export const AboutSection = ({ stats }: AboutSectionProps) => {
  return (
    <section id="about" className="py-20 md:py-24 bg-[#1e1b4b] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">We are Experts in AI</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative">
                <h3 className="text-3xl md:text-6xl font-bold mb-2">{stat.number}</h3>
                {index < stats.length - 1 && (
                  <span className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-4xl text-primary hidden md:block">·</span>
                )}
              </div>
              <p className="text-sm md:text-base text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
