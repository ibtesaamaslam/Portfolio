import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Loader2, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Prepare Gmail link
    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `Hi Ibtesaam,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ibtesaam0@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
    
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-accent2">Talk</span>
            </h2>
            <p className="text-text-muted text-lg max-w-xl mb-12">
              Got a project in mind or just want to chat? Drop me a line. I'm always open to discussing new AI/ML opportunities or creative projects.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-accent1/10 flex items-center justify-center text-accent1 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-mono uppercase tracking-widest text-text-muted mb-1">Email</p>
                  <a href="mailto:ibtesaam0@gmail.com" className="text-lg font-medium text-text hover:text-accent1 transition-colors">
                    ibtesaam0@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-accent2/10 flex items-center justify-center text-accent2 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-mono uppercase tracking-widest text-text-muted mb-1">Contact</p>
                  <a href="tel:+923115616854" className="text-lg font-medium text-text hover:text-accent2 transition-colors">
                    +92-311-5616854
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-text-muted group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-mono uppercase tracking-widest text-text-muted mb-1">Location</p>
                  <p className="text-lg font-medium text-text">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 glass-panel p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent1/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent2/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-text-muted ml-1">Name</label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-base-muted/50 border border-white/10 rounded-xl px-4 py-3 text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent1 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-text-muted ml-1">Email</label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-base-muted/50 border border-white/10 rounded-xl px-4 py-3 text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent1 focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-text-muted ml-1">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-base-muted/50 border border-white/10 rounded-xl px-4 py-3 text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent1 focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-text text-base font-medium rounded-xl overflow-hidden transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent1 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center gap-2">
                {status === 'idle' && (
                  <>
                    Send via Gmail
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
                {status === 'submitting' && (
                  <>
                    Launching Gmail...
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                )}
                {status === 'success' && (
                  <>
                    Draft Opened!
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent1 to-accent2 opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
