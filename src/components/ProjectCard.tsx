import { motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  impact: string;
  tech: string[];
  tags: string[];
  image: string;
  index: number;
  key?: string | number;
}

export function ProjectCard({ title, description, impact, tech, tags, image, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col md:flex-row gap-8 items-center py-12 border-b border-white/5 last:border-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden glass-panel aspect-video neon-border">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        
        <div className="absolute inset-0 bg-base/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h3 className="text-3xl font-heading font-bold mb-4 text-text group-hover:text-accent2 transition-colors">
          {title}
        </h3>
        
        <div className="space-y-3 mb-6">
          <p className="text-text-muted leading-relaxed">
            <strong className="text-text font-medium">Problem:</strong> {description}
          </p>
          <p className="text-text-muted leading-relaxed">
            <strong className="text-text font-medium">Impact:</strong> {impact}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={cn(
                "px-3 py-1 text-xs font-mono rounded-full border border-white/10 transition-colors",
                isHovered ? "bg-white/5 text-accent1 border-accent1/30" : "bg-transparent text-text-muted"
              )}
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Dynamic Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, i) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold rounded bg-accent2/10 text-accent2 border border-accent2/20"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
