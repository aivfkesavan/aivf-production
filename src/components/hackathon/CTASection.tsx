
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const navigate = useNavigate();

  const handleSubscribeClick = () => {
    navigate('/?scrollTo=contact');
  };

  return (
    <section className="py-12 md:py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 md:mb-6">Stay Updated</h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8">
            Subscribe to our newsletter to get updates about future No-Code AI events and opportunities
          </p>
          <button 
            onClick={handleSubscribeClick}
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            Subscribe Now <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
