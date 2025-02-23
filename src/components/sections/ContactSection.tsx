
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SocialLink, LinkedInIcon, TwitterIcon } from "@/components/social/SocialLink";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-24 bg-gradient-to-br from-primary to-[#8b77e5] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <span className="text-white/80 font-medium mb-4 block">CONTACT US</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-base md:text-lg text-white/80 mb-8">
              Get in touch with us to learn more about our services and how we can help you with your AI startup or business.
            </p>
            <div className="flex space-x-4">
              <SocialLink
                href="https://www.linkedin.com/company/ai-venture-factory/"
                icon={<LinkedInIcon />}
              />
              <SocialLink
                href="mailto:info@aivf.io"
                icon={<Mail className="w-5 h-5 text-white" />}
              />
              <SocialLink
                href="https://x.com/AIVF_official"
                icon={<TwitterIcon />}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-xl"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
