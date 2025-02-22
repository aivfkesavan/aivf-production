
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center p-4 md:p-8 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-full aspect-[3/2] relative">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="absolute inset-0 w-full h-full object-contain p-4"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
