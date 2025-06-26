'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HomeHero2 = () => {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  return (
    <motion.section
      id="mission"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.4 }}
      className="relative py-16 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/30 via-transparent to-zinc-900/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Our Mission
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400 rounded-full" />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-xl">
            <p className="text-white text-lg leading-relaxed">
              What if you get a{' '}
              <span className="text-yellow-400 font-medium">co-founder who works alongside you</span>? An{' '}
              <span className="text-yellow-400 font-medium">expert co-founder</span> who has all the relevant skills to make your startup a success and takes the{' '}
              <span className="text-yellow-400 font-medium">right steps at every point</span>. Our mission at WoodenScale Ventures is to{' '}
              <span className="text-yellow-400 font-medium">build startups along with passionate entrepreneurs</span> in an{' '}
              <span className="text-yellow-400 font-medium">accelerated manner</span>, ensuring{' '}
              <span className="text-yellow-400 font-medium">success at every stage</span>.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeHero2;
