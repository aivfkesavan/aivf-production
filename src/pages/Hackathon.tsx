
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Trophy, Users, Code, Rocket } from "lucide-react";

const Hackathon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#0F1218]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NEgwdjJoNHY0aDJWNmg0VjRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Venture Factory Hackathon 2024
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Join us for a 48-hour innovation sprint to build the future of AI
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <button className="button-primary inline-flex items-center justify-center gap-2">
                Register Now <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2">
                Learn More <Code className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center gap-4">
                <Calendar className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <h3 className="font-semibold">Date</h3>
                  <p className="text-white/80">March 15-17, 2024</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center gap-4">
                <MapPin className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-white/80">Chennai, India</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center gap-4">
                <Trophy className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <h3 className="font-semibold">Prize Pool</h3>
                  <p className="text-white/80">₹5,00,000</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Hackathon Themes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <Rocket className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-4">AI for Social Impact</h3>
                <p className="text-white/80">
                  Build solutions that address social challenges using AI, from education to healthcare.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <Users className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise AI Solutions</h3>
                <p className="text-white/80">
                  Develop AI-powered tools to solve business challenges and improve efficiency.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Event Timeline</h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-32 text-primary font-semibold">Day 1</div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Kickoff & Team Formation</h3>
                  <p className="text-white/80">Registration, opening ceremony, and team building activities</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-32 text-primary font-semibold">Day 2</div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Build & Mentorship</h3>
                  <p className="text-white/80">Full day of coding, workshops, and mentor sessions</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-32 text-primary font-semibold">Day 3</div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Demo & Awards</h3>
                  <p className="text-white/80">Project presentations, judging, and closing ceremony</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Innovate?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join us for an exciting weekend of innovation, learning, and building the future of AI
            </p>
            <button className="button-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
              Register Now <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hackathon;
