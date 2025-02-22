
import { motion } from "framer-motion";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h3 className="text-primary font-semibold mb-4">OUR CONTRIBUTIONS</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b]">Taking Your Startup to the Next Level</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title="AI Incubation Programs"
            description="Our AI Incubation Programs are designed to help startups build products that solve real-world problems. We provide mentorship, technical support, and funding to help bring your ideas to life."
            icon={<CircleIcon />}
          />
          <ServiceCard
            title="AI Talent Development"
            description="We offer various courses and training programs to upskill founders and students in the field of AI. Our courses are designed to help you learn the latest technologies and tools in AI."
            icon={<DiamondIcon />}
          />
          <ServiceCard
            title="AI Acceleration Services"
            description="We provide AI hardware & consulting services to businesses looking to leverage AI to solve complex problems. Our team of AI experts can help you identify the right AI solution for your business."
            icon={<SquareIcon />}
          />
        </div>
      </div>
    </section>
  );
};

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center px-4 md:px-6"
    >
      <div className="mb-6 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const CircleIcon = () => (
  <div className="relative">
    <div className="w-12 h-12 bg-primary rounded-full"></div>
    <div className="w-12 h-12 bg-primary/30 rounded-full absolute -bottom-2 -right-2"></div>
  </div>
);

const DiamondIcon = () => (
  <div className="relative">
    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-white rotate-45"></div>
    </div>
  </div>
);

const SquareIcon = () => (
  <div className="relative">
    <div className="w-8 h-8 bg-primary"></div>
    <div className="w-8 h-8 bg-primary/30 absolute -bottom-2 -right-2"></div>
  </div>
);
