import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Download, Check, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'success'>('idle');

  const handleDownload = async () => {
    if (downloadStatus !== 'idle') return;
    
    setDownloadStatus('downloading');
    
    // Simulate/ensure download logic
    try {
      const response = await fetch('/resume.pdf');
      if (!response.ok) throw new Error('File not found');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Muhammad_Ibtesaam_Aslam_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      setDownloadStatus('success');
      setTimeout(() => setDownloadStatus('idle'), 3000);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to direct link behavior if fetch fails (e.g. if I haven't fixed the file yet)
      const a = document.createElement('a');
      a.href = '/resume.pdf';
      a.download = 'Muhammad_Ibtesaam_Aslam_Resume.pdf';
      a.click();
      setDownloadStatus('success');
      setTimeout(() => setDownloadStatus('idle'), 3000);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Ambient background light */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent1 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent2 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-accent1/30 text-accent2 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent2 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent2"></span>
            </span>
            AI/ML Engineer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight leading-[1.1] mb-6 text-text">
            Building intelligent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-accent2">
              systems
            </span>
            <br /> that solve real problems.
          </h1>
          
          <p className="text-lg md:text-xl text-text-muted max-w-lg mb-10 leading-relaxed font-sans">
            I'm Muhammad Ibtesaam Aslam, an AI/ML Engineer specializing in applied machine learning, NLP, and computer vision. I build end-to-end AI products from data collection to deployment.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-text text-base font-medium rounded-lg overflow-hidden transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent1"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's talk
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent1 to-accent2 opacity-0 group-hover:opacity-10 transition-opacity" />
            </a>

            <a
              href="#work"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-text font-medium rounded-lg border border-white/10 hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-accent1"
            >
              <span className="relative z-10 flex items-center gap-2 text-text">
                View work
              </span>
            </a>
            
            <button
              onClick={handleDownload}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-text font-medium rounded-lg border border-white/10 hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-accent1 min-w-[200px]"
            >
              <AnimatePresence mode="wait">
                {downloadStatus === 'idle' && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    Download résumé
                    <Download className="w-4 h-4 text-text-muted group-hover:text-text transition-colors" />
                  </motion.div>
                )}
                {downloadStatus === 'downloading' && (
                  <motion.div
                    key="downloading"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-2"
                  >
                    <Loader2 className="w-4 h-4 animate-spin text-accent1" />
                    Processing...
                  </motion.div>
                )}
                {downloadStatus === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-2 text-accent2"
                  >
                    <Check className="w-4 h-4" />
                    Downloaded!
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:flex justify-center items-center"
          style={{
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Profile Image */}
          <div className="relative w-[400px] h-[400px]">
            <div className="absolute inset-0 glass-panel rounded-3xl rotate-3 scale-105 opacity-50" />
            <div className="absolute inset-0 glass-panel rounded-3xl -rotate-2 neon-border flex items-center justify-center overflow-hidden">
              <img 
                src="https://github.com/ibtesaamaslam.png" 
                alt="Muhammad Ibtesaam Aslam" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
