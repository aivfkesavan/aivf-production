
import { motion } from "framer-motion";

export const PrizesSection = () => {
  return (
    <section id="prizes" className="py-12 md:py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-8 md:mb-12 text-center">Prizes</h2>
          <div className="space-y-6 md:space-y-8">
            {/* First Prize */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8"
            >
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary">1st Prize</h3>
                <div className="text-white space-y-3 md:space-y-4">
                  <p className="text-lg md:text-xl font-semibold">Rs.1 Lakh Cash, an iPhone 15 and $1000 worth goodies</p>
                  <p className="text-white/80 text-sm md:text-base">
                    After considerations by our expert team of judges, based on criteria like meaningful use of AI, No-Code and Societal Impact, the team that tops all these parameters will grab the first prize!
                  </p>
                </div>
                <div className="mt-4 md:mt-6">
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
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8"
            >
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary">2nd Prize</h3>
                <div className="text-white space-y-3 md:space-y-4">
                  <p className="text-lg md:text-xl font-semibold">Rs.50,000 Cash Prize, Meta Quest 3 and $1000 worth of goodies</p>
                  <p className="text-white/80 text-sm md:text-base">
                    Due to various reasons, even the next Google may have to settle for (Still a kickass) Second Prize.
                  </p>
                </div>
                <div className="mt-4 md:mt-6">
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
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8"
            >
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary">3rd Prize</h3>
                <div className="text-white space-y-3 md:space-y-4">
                  <p className="text-lg md:text-xl font-semibold">Rs.30,000 Cash Prize and $500 worth of goodies</p>
                  <p className="text-white/80 text-sm md:text-base">
                    The first step is always the hardest. Trying to meet the insane standards in our criteria is going to be excruciating and valuing your efforts we are setting you up to become future champions.
                  </p>
                </div>
                <div className="mt-4 md:mt-6">
                  <img 
                    src="/lovable-uploads/56d4d370-52ae-42a5-b5f2-36c06fc370b1.png" 
                    alt="Third Prize Winners" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
