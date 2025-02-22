
import { motion } from "framer-motion";

export const BannerSection = () => {
  return (
    <section className="relative w-full h-[40vh] md:h-[60vh] lg:h-[80vh]">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <img 
        src="/lovable-uploads/c5bb959c-daa6-425f-8ff1-d42bf689edaf.png"
        alt="Hackathon participants group photo"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center max-w-4xl"
        >
          Thank you for making this a massive success!
        </motion.h2>
      </div>
    </section>
  );
};
