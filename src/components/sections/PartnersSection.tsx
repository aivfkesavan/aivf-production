
import { motion } from "framer-motion";
import { Partner } from "@/types/stats";

type PartnersSectionProps = {
  partners: Partner[];
};

export const PartnersSection = ({ partners }: PartnersSectionProps) => {
  return (
    <section id="partners" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h3 className="text-primary font-semibold mb-4">INDUSTRY PARTNERSHIPS</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b]">Our Ecosystem Partners</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {partners.slice(0, 3).map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center p-4 md:p-8 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 md:h-24 w-auto object-contain filter hover:brightness-110 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mt-8">
            {partners.slice(3).map((partner, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="flex items-center justify-center p-4 md:p-8 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 md:h-24 w-auto object-contain filter hover:brightness-110 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
