'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const HomeHero4 = () => {
  return (
    <section className="relative pt-24 pb-10 bg-black overflow-hidden">
      {/* Accent Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-accent/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Build with us - WoodenScale Ventures{' '}
            <span className="text-yellow-400">Startup</span>
            <div className='text-yellow-400'>Studio</div>
          </motion.h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            The AI-powered Next-Generation Method for Building Successful Startups
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <div className="bg-black border border-white/10 rounded-xl overflow-hidden">
            <div className="p-6 md:p-8 lg:p-10">
              <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
                <div className="md:flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-12">
                    Transform your Idea into a Success Story with us 5x faster
                  </h3>
                  <div className="space-y-12">
                    {[
                      {
                        title: 'Build with Successful Founders',
                        desc: 'Launch your startup under the guidance of successful founders and experts.',
                      },
                      {
                        title: 'AI-powered Team of Experts',
                        desc: 'Our team of experts in tech, marketing, operations, sales etc delivers 5x faster results by leveraging their expertise and AI tools.',
                      },
                      {
                        title: 'Startup Masterclasses',
                        desc: 'We invite successful founders and CXOs to conduct masterclasses that provide you with the right foundation for becoming an entrepreneur.',
                      },
                      {
                        title: 'Industry Expertise & Investors',
                        desc: 'Whether you want to build a SaaS, AI/ML, Fintech, or any other business, we ensure you receive input from successful founders and investors in those fields to guarantee success at every step and make funding easier going ahead.',
                      },
                      {
                        title: 'Access to Tools to Save Tons of Money',
                        desc: 'We provide access to essential tools for founders that would otherwise burn a hole in your pocket, offering credits or heavily discounted prices to save you lakhs of rupees.',
                      },
                    ].map((item, idx) => (
                      <div className="flex items-start gap-4" key={idx}>
                        <div className="flex-shrink-0 w-10 h-10 bg-[#ffc44d]/20 rounded-full flex items-center justify-center mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="lucide lucide-check h-5 w-5 text-yellow-400"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                          <p className="text-white/70">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 invisible" />
                      <a
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent hover:bg-accent-medium text-black font-medium text-lg transition-colors duration-300"
                        href="/startup-studio"
                      >
                        Know More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-right h-5 w-5"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="hidden md:flex md:flex-1 items-center justify-center">
                  <div className="relative h-64 md:h-auto w-full min-h-[400px]">
                    <Image
                      src="https://woodenscale-assets.s3.ap-south-1.amazonaws.com/assets/startup-launchpad-hero-bg-1-photoaidcom-greyscale+(1).webp"
                      alt="Startup Studio"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero4;
