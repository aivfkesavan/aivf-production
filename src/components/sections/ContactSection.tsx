
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

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

const ContactForm = () => {
  return (
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Leave us a message...
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  );
};

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
};

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
  >
    {icon}
  </a>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
