/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsGrid } from './components/ProjectsGrid';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { SkillsSection } from './components/SkillsSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { useEffect, useState } from 'react';

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-base text-text selection:bg-accent1/30 selection:text-text relative">
      <div className="grain-overlay" />
      {!isMobile && <CustomCursor />}
      
      <Header />
      
      <main>
        <Hero />
        <Experience />
        <ProjectsGrid />
        <SkillsSection />
        <About />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
