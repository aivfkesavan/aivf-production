
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, GraduationCap, RocketIcon, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Index = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/7197ae48-0638-4e33-9ef3-4af7d8191ee9.png" 
                alt="AIVF Logo" 
                className="h-14 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hackathon" className="text-gray-600 hover:text-primary transition-colors">Hackathon</a>
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
              <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Testimonials</a>
              <button className="button-primary">Join Us</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A1F2C] to-[#221F26]">
        {/* Animated Wave Background */}
        <div className="absolute inset-0 hero-background"></div>

        {/* Content Container */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-8"
            >
              <BrainCircuit className="w-4 h-4" />
              India's First AI-Focused Technology Business Incubator
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Empowering the Future of{" "}
              <span className="text-primary-light">
                Artificial Intelligence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            >
              Join India's premier AI ecosystem where startups, founders, and students come together 
              to build the future of artificial intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 flex items-center gap-2 shadow-xl transition-colors"
              >
                Get Started <RocketIcon className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white border-2 border-white/40 rounded-full font-semibold hover:bg-white/10 flex items-center gap-2 transition-colors"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-white p-4 rounded-lg backdrop-blur-sm bg-white/10">
                  <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                  <p className="text-sm text-white/90">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#1e1b4b] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <Link to="/" className="block mb-4">
                <img 
                  src="/lovable-uploads/7197ae48-0638-4e33-9ef3-4af7d8191ee9.png" 
                  alt="AIVF Logo" 
                  className="h-16 w-auto"
                />
              </Link>
              <p className="text-gray-300 text-sm">
                AI Venture Factory is India's first AI-focused technology business incubator, fostering innovation and entrepreneurship.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://twitter.com/aiventurefactory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/company/aiventurefactory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-primary transition-colors">Services</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-primary transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-300 hover:text-primary transition-colors">Testimonials</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors">AI Incubation</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors">Startup Support</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors">Mentorship</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors">Resources Access</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
