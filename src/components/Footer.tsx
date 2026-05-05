import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-base-muted/20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a
            href="#"
            className="text-xl font-heading font-bold tracking-tighter hover:text-accent2 transition-colors focus:outline-none focus:ring-2 focus:ring-accent1 rounded"
          >
            <span className="text-accent1">/</span>
            <span className="text-text">ibtesaam</span>
          </a>
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Muhammad Ibtesaam Aslam. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ibtesaamaslam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text transition-colors focus:outline-none focus:ring-2 focus:ring-accent1 rounded-full p-2"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/ibtesaamaslam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text transition-colors focus:outline-none focus:ring-2 focus:ring-accent1 rounded-full p-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:ibtesaam0@gmail.com"
            className="text-text-muted hover:text-text transition-colors focus:outline-none focus:ring-2 focus:ring-accent1 rounded-full p-2"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
