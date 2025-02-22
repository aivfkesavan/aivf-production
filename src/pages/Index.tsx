import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, RocketIcon, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Index = () => {
  const stats = [
    { number: "50+", label: "AI Startups Incubated" },
    { number: "₹2Cr", label: "Funding Support" },
    { number: "100+", label: "Industry Mentors" },
    { number: "500+", label: "Student Innovators" }
  ];

  const testimonials = [
    {
      quote: "AI Venture Factory has been instrumental in helping me build & launch my AI startup",
      name: "Amith",
      position: "Co-Founder, Nidum"
    },
    {
      quote: "Without the hardware provided, we could not have afforded to train our models to benefit our customers",
      name: "Meyyappan",
      position: "Co-Founder, EdAI"
    },
    {
      quote: "We came with an idea, they helped us with end to end execution",
      name: "Rohan Vaidya",
      position: "Co-Founder, ElluminAI"
    }
  ];

  const partners = [
    { name: "Partner 1", logo: "/lovable-uploads/43929097-f84c-4d25-a7d7-24b8b2e466ad.png" },
    { name: "Partner 2", logo: "/lovable-uploads/4ed24c8b-b4fd-4dbb-bfa3-b3654a273446.png" },
    { name: "Partner 3", logo: "/lovable-uploads/80b0aaa1-3586-4a91-8295-89daf87a0dce.png" },
    { name: "Partner 4", logo: "/lovable-uploads/c9b6c032-048b-4ed2-85a9-f6eb189eb546.png" },
    { name: "Partner 5", logo: "/lovable-uploads/15226261-3911-4850-bd50-a450b1bbd4f4.png" },
    { name: "Partner 6", logo: "/lovable-uploads/1f33e550-7434-4985-bcbe-71f03ee8d40a.png" }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

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

      {/* Hero Section - Updated with darker background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A1F2C] to-[#0F1218]">
        {/* Enhanced Overlay for depth */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Wave Background */}
        <div className="absolute inset-0 hero-background opacity-30"></div>

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
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-8 border border-white/10"
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
              <span className="bg-gradient-to-r from-primary via-primary-light to-white bg-clip-text text-transparent">
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
                <div key={index} className="text-white p-4 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10">
                  <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                  <p className="text-sm text-white/90">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contributions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-primary font-semibold mb-4">OUR CONTRIBUTIONS</h3>
            <h2 className="text-4xl font-bold text-[#1e1b4b]">Taking Your Startup to the Next Level</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center px-6"
            >
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="w-12 h-12 bg-primary rounded-full"></div>
                  <div className="w-12 h-12 bg-primary/30 rounded-full absolute -bottom-2 -right-2"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Incubation Programs</h3>
              <p className="text-gray-600">
                Our AI Incubation Programs are designed to help startups build products that solve real-world problems. We provide mentorship, technical support, and funding to help bring your ideas to life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center px-6"
            >
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white rotate-45"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Talent Development</h3>
              <p className="text-gray-600">
                We offer various courses and training programs to upskill founders and students in the field of AI. Our courses are designed to help you learn the latest technologies and tools in AI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center px-6"
            >
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="w-8 h-8 bg-primary"></div>
                  <div className="w-8 h-8 bg-primary/30 absolute -bottom-2 -right-2"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Acceleration Services</h3>
              <p className="text-gray-600">
                We provide AI hardware & consulting services to businesses looking to leverage AI to solve complex problems. Our team of AI experts can help you identify the right AI solution for your business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-[#1e1b4b] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">We are Experts in AI</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative">
                  <h3 className="text-4xl md:text-6xl font-bold mb-2">{stat.number}</h3>
                  {index < stats.length - 1 && (
                    <span className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-4xl text-primary">·</span>
                  )}
                </div>
                <p className="text-sm md:text-base text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-primary font-medium">ABOUT US</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e1b4b] leading-tight">
                Our Mission and Vision
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  At AI Venture Factory, our mission is to foster the growth of AI startups and upskill founders and students to help them ride the AI wave. Our vision is to become the leading AI-focused business incubator in India, providing startups with the resources they need to succeed in the field of AI.
                </p>
                <div className="h-px bg-gray-200 my-6"></div>
                <p className="text-lg leading-relaxed">
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
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Updated Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-[#8b77e5] overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-white/80 text-lg font-medium mb-4">TESTIMONIALS</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white">What Our Founders Say</h2>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="relative">
              <div className="flex items-center justify-center">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: activeTestimonial === index ? 1 : 0,
                      scale: activeTestimonial === index ? 1 : 0.9,
                      x: `${(index - activeTestimonial) * 100}%`,
                      position: activeTestimonial === index ? "relative" : "absolute",
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12">
                      <div className="flex flex-col items-center">
                        <Quote className="w-12 h-12 text-white/30 mb-6" />
                        <p className="text-xl md:text-2xl text-white font-medium mb-8 text-center leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex flex-col items-center">
                          <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-white/80 mt-1">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center items-center space-x-3 mt-12">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeTestimonial === index 
                        ? "bg-white w-8" 
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Show testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Partners Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-primary font-semibold mb-4">INDUSTRY PARTNERSHIPS</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e1b4b]">Our Ecosystem Partners</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* First row - 3 logos */}
            <div className="grid grid-cols-3 gap-12 mb-12">
              {partners.slice(0, 3).map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-center p-8 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-24 w-auto object-contain filter hover:brightness-110 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Second row - 3 logos */}
            <div className="grid grid-cols-3 gap-12">
              {partners.slice(3).map((partner, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                  className="flex items-center justify-center p-8 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-24 w-auto object-contain filter hover:brightness-110 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-[#8b77e5] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <span className="text-white/80 font-medium mb-4 block">CONTACT US</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-lg text-white/80 mb-8">
                Get in touch with us to learn more about our services and how we can help you with your AI startup or business.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://twitter.com/aiventurefactory" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/company/aiventurefactory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
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
            </motion.div>
          </div>
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
