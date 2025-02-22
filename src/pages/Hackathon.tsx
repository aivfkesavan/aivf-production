
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Trophy, Users, Code, Rocket } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/navigation/Navbar";

const Hackathon = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#0F1218]">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      
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
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
              Event Completed
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              No-Code AI Venture Factory Hackathon 2024
            </h1>
            <p className="text-xl text-white/90 mb-8">
              India's First No-Code AI Hackathon where innovators built the future of AI without writing a single line of code
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <button className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2">
                View Winners <Trophy className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2">
                Event Gallery <Code className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center gap-4">
                <Calendar className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <h3 className="font-semibold">Date</h3>
                  <p className="text-white/80">Completed - March 15-17, 2024</p>
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

      {/* Sponsors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1F2C] mb-12">Our Sponsors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 h-32 md:h-40 flex items-center justify-center"
              >
                <img 
                  src="/lovable-uploads/246bd235-2cba-4908-8f40-8a6e3ef49e6b.png" 
                  alt="Sponsor Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 h-32 md:h-40 flex items-center justify-center"
              >
                <img 
                  src="/lovable-uploads/b461e009-41ca-4e02-a5ec-4b8127978361.png" 
                  alt="Sponsor Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 h-32 md:h-40 flex items-center justify-center"
              >
                <img 
                  src="/lovable-uploads/2406ef06-9572-4d6c-85b6-645fa3cda54c.png" 
                  alt="Sponsor Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 h-32 md:h-40 flex items-center justify-center"
              >
                <img 
                  src="/lovable-uploads/ef54d740-f41c-4794-a264-3ec174c05097.png" 
                  alt="Sponsor Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
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
                <h3 className="text-xl font-semibold text-white mb-4">No-Code AI for Social Impact</h3>
                <p className="text-white/80">
                  Built solutions that address social challenges using No-Code AI tools, from education to healthcare.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <Users className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise No-Code AI Solutions</h3>
                <p className="text-white/80">
                  Developed AI-powered tools to solve business challenges using No-Code platforms.
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Event Highlights</h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-32 text-primary font-semibold">Day 1</div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Kickoff & Team Formation</h3>
                  <p className="text-white/80">No-Code AI tools introduction, opening ceremony, and team building activities</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-32 text-primary font-semibold">Day 2</div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Build & Mentorship</h3>
                  <p className="text-white/80">Full day of No-Code development, workshops on AI tools, and mentor sessions</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-32 text-primary font-semibold">Day 3</div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Demo & Awards</h3>
                  <p className="text-white/80">Project presentations, judging, and successful closing ceremony</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Prizes</h2>
            <div className="space-y-8">
              {/* First Prize */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
              >
                <div className="space-y-6">
                  <h3 className="text-5xl md:text-7xl font-bold text-primary">1st Prize</h3>
                  <div className="text-white space-y-4">
                    <p className="text-xl font-semibold">Rs.1 Lakh Cash, an iPhone 15 and $1000 worth goodies</p>
                    <p className="text-white/80">
                      After considerations by our expert team of judges, based on criteria like meaningful use of AI, No-Code and Societal Impact, the team that tops all these parameters will grab the first prize!
                    </p>
                  </div>
                  <div className="mt-6">
                    <img 
                      src="/lovable-uploads/1d24d78f-2993-449d-829f-3691c197e08d.png" 
                      alt="First Prize Winners" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Second Prize */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
              >
                <div className="space-y-6">
                  <h3 className="text-5xl md:text-7xl font-bold text-primary">2nd Prize</h3>
                  <div className="text-white space-y-4">
                    <p className="text-xl font-semibold">Rs.50,000 Cash Prize, Meta Quest 3 and $1000 worth of goodies</p>
                    <p className="text-white/80">
                      Due to various reasons, even the next Google may have to settle for (Still a kickass) Second Prize.
                    </p>
                  </div>
                  <div className="mt-6">
                    <img 
                      src="/lovable-uploads/86b6e086-ee8e-4e03-9360-5df7383bd6a8.png" 
                      alt="Second Prize Winners" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Third Prize */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
              >
                <h3 className="text-5xl md:text-7xl font-bold text-primary mb-4">3rd Prize</h3>
                <div className="text-white space-y-4">
                  <p className="text-xl font-semibold">Rs.25,000 Cash Prize and $500 worth of goodies</p>
                  <p className="text-white/80">
                    The first step is always the hardest. Trying to meet the insane standards in our criteria is going to be excruciating and valuing your efforts we are setting you up to become future champions.
                  </p>
                </div>
              </motion.div>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter to get updates about future No-Code AI events and opportunities
            </p>
            <button className="button-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
              Subscribe Now <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hackathon;
