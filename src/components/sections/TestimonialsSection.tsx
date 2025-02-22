import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Testimonial } from "@/types/stats";

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
  activeTestimonial: number;
  setActiveTestimonial: (index: number) => void;
};

export const TestimonialsSection = ({
  testimonials,
  activeTestimonial,
  setActiveTestimonial
}: TestimonialsSectionProps) => {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-gradient-to-br from-primary to-[#8b77e5] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h3 className="text-white/80 text-lg font-medium mb-4">TESTIMONIALS</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-white">What Our Founders Say</h2>
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
                  className="w-full px-4"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-12">
                    <div className="flex flex-col items-center">
                      <Quote className="w-8 h-8 md:w-12 md:h-12 text-white/30 mb-6" />
                      <p className="text-lg md:text-2xl text-white font-medium mb-8 text-center leading-relaxed">
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

            <div className="flex justify-center items-center space-x-3 mt-8 md:mt-12">
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
  );
};
