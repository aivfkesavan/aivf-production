
import { motion } from "framer-motion";

export const TimelineSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-8 md:mb-12 text-center">Event Highlights</h2>
          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="w-full md:w-32 text-primary font-semibold text-lg">Day 1</div>
              <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Kickoff & Team Formation</h3>
                <p className="text-white/80 text-sm md:text-base">No-Code AI tools introduction, opening ceremony, and team building activities</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="w-full md:w-32 text-primary font-semibold text-lg">Day 2</div>
              <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Build & Mentorship</h3>
                <p className="text-white/80 text-sm md:text-base">Full day of No-Code development, workshops on AI tools, and mentor sessions</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="w-full md:w-32 text-primary font-semibold text-lg">Day 3</div>
              <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Demo & Awards</h3>
                <p className="text-white/80 text-sm md:text-base">Project presentations, judging, and successful closing ceremony</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
