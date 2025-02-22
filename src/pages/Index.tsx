
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
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
              <Link to="#features" className="text-gray-600 hover:text-primary transition-colors">Features</Link>
              <Link to="#about" className="text-gray-600 hover:text-primary transition-colors">About</Link>
              <Link to="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
              <button className="button-primary">Get Started</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-primary-light text-primary rounded-full text-sm font-medium mb-6">
              Revolutionizing IVF
            </span>
            <h1 className="heading-xl mb-6">
              Transforming IVF Success with AI Technology
            </h1>
            <p className="paragraph mb-8 max-w-2xl mx-auto">
              AIVF is pioneering the future of fertility treatment by combining artificial intelligence with medical expertise to improve IVF success rates.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button className="button-primary flex items-center">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="button-secondary">Learn More</button>
            </div>
          </motion.div>
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
              Our innovative technology combines with medical expertise to provide unparalleled results in fertility treatment.
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
                  <Check className="w-6 h-6 text-primary" />
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
            <h2 className="heading-lg mb-4">Ready to Transform IVF Success?</h2>
            <p className="paragraph mb-8">
              Join us in revolutionizing fertility treatment with AI technology. Contact us to learn more about how we can help you achieve success.
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
    title: "AI-Powered Analysis",
    description: "Advanced algorithms analyze embryo development to improve selection accuracy.",
  },
  {
    title: "Improved Success Rates",
    description: "Significantly higher pregnancy rates through precise embryo selection.",
  },
  {
    title: "Expert Support",
    description: "24/7 access to fertility experts and comprehensive support throughout your journey.",
  },
];

export default Index;
