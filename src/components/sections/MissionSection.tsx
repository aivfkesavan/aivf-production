
import { motion } from "framer-motion";

export const MissionSection = () => {
  return (
    <section id="mission" className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-primary font-medium">ABOUT US</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1e1b4b] leading-tight">
              Our Mission and Vision
            </h2>
            <div className="space-y-6 text-gray-600">
              <p className="text-base md:text-lg leading-relaxed">
                At AI Venture Factory, our mission is to foster the growth of AI startups and upskill founders and students to help them ride the AI wave. Our vision is to become the leading AI-focused business incubator in India, providing startups with the resources they need to succeed in the field of AI.
              </p>
              <div className="h-px bg-gray-200 my-6"></div>
              <p className="text-base md:text-lg leading-relaxed">
                We are a Section 8 Non-Profit Entity with 12A and 80G filings. We run on research grants from people and organizations that want the local AI ecosystem to catch up with the latest in the world.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/a38cd3fd-a0c8-4dd8-879c-8bd032036f83.png"
                alt="AI Venture Factory Inauguration Ceremony"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 md:w-24 h-16 md:h-24 bg-primary/10 rounded-full"></div>
            <div className="absolute -top-6 -right-6 w-20 md:w-32 h-20 md:h-32 bg-primary/10 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
