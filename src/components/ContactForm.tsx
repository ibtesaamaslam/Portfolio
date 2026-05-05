import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // In a real app, you would use fetch to send data to your API route
    // const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
    
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-text">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-accent2">Talk</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Got a project in mind or just want to chat? Drop me a line. I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
          className="space-y-6 glass-panel p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent1/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent2/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                placeholder="ibtesaam0@gmail.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-text-muted ml-1">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-base-muted/50 border border-white/10 rounded-xl px-4 py-3 text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent1 focus:border-transparent transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting' || status === 'success'}
            className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-text text-base font-medium rounded-xl overflow-hidden transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent1 focus:ring-offset-2 focus:ring-offset-base disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
          >
            <span className="relative z-10 flex items-center gap-2">
              {status === 'idle' && (
                <>
                  Send Message
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
              {status === 'submitting' && (
                <>
                  Sending...
                  <Loader2 className="w-4 h-4 animate-spin" />
                </>
              )}
              {status === 'success' && (
                <>
                  Message Sent!
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent1 to-accent2 opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
