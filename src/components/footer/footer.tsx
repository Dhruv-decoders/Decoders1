'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-10">
          {/* Logo + Description + Social */}
          <div className="space-y-6 max-w-xs">
            <div className="relative h-12 w-48 mb-6 ml-[-60px]">
              <Image
                src="https://woodenscale-assets.s3.ap-south-1.amazonaws.com/logo/woodenscale-logo-without-bg.png"
                alt="WoodenScale Ventures"
                fill
                priority
                className="object-contain"
              />
            </div>
            <p className="text-white/70">
              We handpick passionate entrepreneurs and turn their startup dreams into reality, from transforming ideas into validated MVPs and securing funding.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="lucide lucide-instagram h-5 w-5 text-white/80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="lucide lucide-linkedin h-5 w-5 text-white/80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Columns */}
          <div className="flex flex-wrap md:flex-nowrap gap-16">
            {/* Programs */}
            <div className="w-full md:w-auto min-w-[160px]">
              <h3 className="text-white font-semibold mb-6 text-xl">Programs</h3>
              <ul className="space-y-4">
                <li>
                  <Link className="text-white/70 hover:text-accent transition-colors" href="/startup-studio" target="_blank">Startup Studio</Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-accent transition-colors" href="/webinars" target="_blank">Startup Masterclass</Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="w-full md:w-auto min-w-[160px]">
              <h3 className="text-white font-semibold mb-6 text-xl">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link className="text-white/70 hover:text-accent transition-colors" href="/contact-us" target="_blank">Contact Us</Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-accent transition-colors" href="/terms-and-conditions" target="_blank">Terms & Conditions</Link>
                </li>
                <li>
                  <Link className="text-white/70 hover:text-accent transition-colors" href="/privacy-policy" target="_blank">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="w-full md:w-auto min-w-[180px]">
              <h3 className="text-white font-semibold mb-6 text-xl">Contact Us</h3>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:contact@woodenscale.in" className="text-white/70 hover:text-accent transition-colors flex items-center gap-3" target="_blank" rel="noopener noreferrer">
                    <svg className="lucide lucide-mail h-5 w-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    devlopedByX@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/919548658828" className="text-white/70 hover:text-accent transition-colors flex items-center gap-3" target="_blank" rel="noopener noreferrer">
                    <svg className="lucide lucide-message-square h-5 w-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    +91 9548658828
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-white/10 pt-8 pb-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/50 text-sm">
            © 2025 WoodenScale Ventures. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
