import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#work' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent',
        scrolled ? 'glass-panel border-white/5 py-4' : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-heading font-bold tracking-tighter hover:text-accent2 transition-colors focus:outline-none focus:ring-2 focus:ring-accent1 rounded"
        >
          <span className="text-accent1">/</span>
          <span className="text-text">ibtesaam</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-text transition-colors relative group focus:outline-none focus:ring-2 focus:ring-accent1 rounded"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent2 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
