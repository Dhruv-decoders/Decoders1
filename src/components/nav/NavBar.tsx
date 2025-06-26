'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface NavItem {
  href: string;
  label: string;
  icon: ReactNode;
  isHighlighted?: boolean;
}

const navItems: NavItem[] = [
  {
    href: '/',
    label: 'Home',
    isHighlighted: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house">
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
  },
  {
    href: '/startup-studio',
    label: 'Startup Studio',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap">
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    ),
  },
  {
    href: '/webinars',
    label: 'Startup Masterclass',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar">
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    ),
  },
  {
    href: '/blogs',
    label: 'Blog',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open">
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
      </svg>
    ),
  },
  {
    href: '/login',
    label: 'Login',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        <polyline points="10 17 15 12 10 7" />
        <line x1="15" x2="3" y1="12" y2="12" />
      </svg>
    ),
  },
  {
    href: '/signup',
    label: 'Sign Up',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-plus">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
  },
];

const NavBar = () => {
  return (
    <div className="absolute sm:top-0 left-1/2 -translate-x-1/2 z-10 mb-6 sm:pt-6">
      <nav className="flex items-center gap-2 bg-background/10 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg max-w-fit mx-auto">
        {navItems.map(({ href, label, icon, isHighlighted }) => (
          <div key={label} className="relative">
            <Link
              href={href}
              className={`flex items-center cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                isHighlighted
                  ? 'bg-white/10 text-white hover:text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <span className="hidden md:inline">{label}</span>
              <span className="md:hidden">{icon}</span>
            </Link>
            {isHighlighted && (
              <div className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                  <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                  <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                  <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
