
import { motion } from "framer-motion";

export const SponsorsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#1A1F2C] mb-8 md:mb-12">Our Sponsors</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-4 md:p-6 h-24 md:h-32 lg:h-40 flex items-center justify-center"
            >
              <img 
                src="/lovable-uploads/246bd235-2cba-4908-8f40-8a6e3ef49e6b.png" 
                alt="Sponsor Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-4 md:p-6 h-24 md:h-32 lg:h-40 flex items-center justify-center"
            >
              <img 
                src="/lovable-uploads/b461e009-41ca-4e02-a5ec-4b8127978361.png" 
                alt="Sponsor Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-4 md:p-6 h-24 md:h-32 lg:h-40 flex items-center justify-center"
            >
              <img 
                src="/lovable-uploads/2406ef06-9572-4d6c-85b6-645fa3cda54c.png" 
                alt="Sponsor Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-4 md:p-6 h-24 md:h-32 lg:h-40 flex items-center justify-center"
            >
              <img 
                src="/lovable-uploads/ef54d740-f41c-4794-a264-3ec174c05097.png" 
                alt="Sponsor Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
