'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import React from 'react';
// import img 
const mentors = [
  {
    name: 'Mamta Kumari',
    title: 'Founder - WoodenScale Ventures',
    subtitle: 'Founder - PrepBytes (Acquired)',
    description: 'Angel Investor, EX-SDE Amazon',
    image: '',
    linkedin: 'https://linkedin.com/in/mentor1',
  },
  {
    name: 'Amrendra Singh',
    title: 'Co-Founder, Dehaat',
    subtitle: 'Angel Investor',
    description: 'lll',
    image: '/images/mentor-2.jpg',
    linkedin: 'https://linkedin.com/in/mentor2',
  },
  ...Array.from({ length: 18 }, (_, i) => ({
    name: `Mentor ${i + 3}`,
    title: `Title ${i + 3}`,
    subtitle: `Subtitle ${i + 3}`,
    description: `Description ${i + 3}`,
    image: `/images/mentor-${(i % 5) + 1}.jpg`,
    linkedin: `https://linkedin.com/in/mentor${i + 3}`,
  })),
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const HomeMentorsSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        variants={fadeUp}
        className="relative z-10 mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Our <span className="text-yellow-400">Mentors</span> &{' '}
          <span className="text-yellow-400">Investors</span>
        </h2>
        <p className="text-white/70 max-w-3xl mx-auto text-lg">
          Learn from industry leaders who have built and scaled successful startups
        </p>
      </motion.div>

      <div className="relative z-10 w-full overflow-hidden">
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {mentors.map((mentor, idx) => (
            <motion.div
              key={idx}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 w-64 mx-3 flex-shrink-0 flex flex-col items-center text-center hover:border-accent/30 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-3 border-2 border-accent/20 group-hover:border-accent/50 transition-colors">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold group-hover:text-accent transition-colors truncate w-full">
                {mentor.name}
              </h3>
              <p className="text-white/80 text-sm md:text-base mt-1 truncate w-full">{mentor.title}</p>
              <p className="text-white/60 text-xs md:text-sm mt-1 truncate w-full">{mentor.subtitle}</p>
              {mentor.description && (
                <p className="text-white/60 text-xs md:text-sm truncate w-full">{mentor.description}</p>
              )}
              <a
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-accent/20 transition-colors group"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-white/70 group-hover:text-accent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default HomeMentorsSection;
