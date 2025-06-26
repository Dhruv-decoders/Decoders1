'use client';

import { Circle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HomeHero1 = () => {
  const handleScroll = () => {
    const section = document.getElementById('mission');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center overflow-hidden bg-black">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center justify-center">
        <div className="w-full text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 md:gap-3 md:px-4 md:py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-10 mx-auto"
          >
            <Circle className="h-2 w-2 md:h-3 md:w-3 fill-accent" />
            <span className="text-sm md:text-lg text-white/60 tracking-wide">
              WoodenScale Ventures
            </span>
          </motion.div>

          {/* Headline */}
          <h1
            id="hero-headline"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
              Transform Your Ideas
            </span>
            <span className="hero-gradient-text bg-clip-text text-transparent bg-gradient-to-r from-accent-light via-accent to-accent-medium block">
              Into Successful Startups
            </span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-8 md:mb-10 leading-relaxed font-light tracking-wide max-w-xl md:max-w-2xl mx-auto"
          >
            We partner with passionate entrepreneurs and convert their ideas into successful startups.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center"
          >
            <Link
              href="/startup-studio"
              className="px-6 py-3 md:px-8 md:py-4 md:text-lg rounded-full bg-accent hover:bg-accent-medium text-background-dark font-medium transition-colors duration-300"
            >
              Build Your Startup with us
            </Link>
            <Link
              target="_blank"
              href="https://discord.gg"
              className="px-6 py-3 md:px-8 md:py-4 md:text-lg rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white font-medium transition-colors duration-300"
            >
              Join Founder&apos;s Community
            </Link>

          </motion.div>
        </div>
      </div>

      {/* Scroll Button */}
      <motion.button
        onClick={handleScroll}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 
          flex items-center justify-center w-12 h-12 rounded-full 
          bg-accent hover:bg-accent-medium cursor-pointer shadow-lg 
          transition-all duration-300 hover:scale-110"
      >
        <ArrowRight className="h-5 w-5 text-background-dark transform rotate-90" />
      </motion.button>
    </div>
  );
};

export default HomeHero1;
