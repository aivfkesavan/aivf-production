import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, GraduationCap, RocketIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">AIVF</Link>
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
      <section id="home" className="pt-32 section-padding hero-background">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-white text-primary rounded-full text-sm font-medium mb-6 shadow-md">
              India's First AI-Focused Technology Business Incubator
            </span>
            <h1 className="heading-xl mb-6 text-black">
              Welcome to AI Venture Factory
            </h1>
            <p className="paragraph mb-8 max-w-2xl mx-auto text-black">
              Join India's premier AI ecosystem where startups, founders, and students come together to build the future of artificial intelligence. We foster innovation, provide expert mentorship, and accelerate AI-driven success.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button className="button-primary bg-white text-primary hover:bg-white/90 flex items-center">
                Get in touch <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="button-secondary bg-transparent text-white border-white hover:bg-white/10">Learn More</button>
            </div>
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

      {/* Features Section */}
      <section id="features" className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">Why Choose AIVF?</h2>
            <p className="paragraph max-w-2xl mx-auto">
              We provide comprehensive support to help you succeed in the AI revolution, from ideation to market success.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-primary-light">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="heading-lg mb-4">Ready to Join India's AI Revolution?</h2>
            <p className="paragraph mb-8">
              Whether you're a startup founder, aspiring entrepreneur, or student passionate about AI, we're here to help you succeed. Get in touch to learn more about our programs and opportunities.
            </p>
            <button className="button-primary">Contact Us Today</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: <BrainCircuit className="w-6 h-6 text-primary" />,
    title: "AI Innovation Hub",
    description: "Access state-of-the-art AI resources, mentorship, and infrastructure to build cutting-edge solutions.",
  },
  {
    icon: <RocketIcon className="w-6 h-6 text-primary" />,
    title: "Startup Acceleration",
    description: "Comprehensive support for AI startups, from ideation to market success, backed by expert guidance.",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    title: "Learning & Development",
    description: "Intensive training programs and workshops to help founders and students master AI technologies.",
  },
];

export default Index;
