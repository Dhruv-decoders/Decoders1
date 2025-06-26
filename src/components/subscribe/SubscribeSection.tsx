'use client';

import React from 'react';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

const SubscribeSection = () => {
  return (
    <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        variants={fadeUp}
        className="relative py-10 md:py-16 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-black blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#171918] border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left Column: Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Never Miss a Post. Subscribe to our newsletters!
                </h2>
                <p className="text-white/70 mb-6">
                  Join our email list to get insights on startups, funding, building a team, scale and a lot more
                </p>
                <form className="space-y-4">
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="First Name*"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                    />
                    <input
                      type="email"
                      placeholder="Enter your email here*"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-400/80 text-black font-medium w-full md:w-auto px-6 py-3 rounded-full transition-colors disabled:opacity-70"
                  >
                    Subscribe Now
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>

              {/* Right Column: Contact & Reasons */}
              <div className="space-y-6">
                {/* Contact Card */}
                <div className="bg-[#171918] border border-white/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Reach out to us:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/60 text-sm">Email</p>
                        <a
                          href="mailto:contact@woodenscale.in"
                          className="text-white hover:text-yellow-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          devlopedByX@gmail.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MessageSquare className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/60 text-sm">WhatsApp</p>
                        <a
                          href="https://wa.me/919548658828"
                          className="text-white hover:text-yellow-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          +91 9548658828
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Reasons to Subscribe */}
                <div className="bg-[#171918] border border-white/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Why Subscribe?</h3>
                  <ul className="space-y-2">
                    {[
                      'Exclusive founder insights',
                      'Early access to events',
                      'Practical startup tips',
                    ].map((reason, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="text-yellow-400 min-w-4">•</div>
                        <span className="text-white/80">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SubscribeSection;
