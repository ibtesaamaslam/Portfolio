import { motion } from 'motion/react';
import { 
  BarChart3, 
  Code2, 
  Zap, 
  Terminal, 
  GitBranch, 
  Globe,
  Database,
  Cpu,
  Flame,
  Network,
  Eye,
  Component,
  Shield,
  Workflow,
  Box,
  Cloud,
  Layers
} from 'lucide-react';

const githubSkills = [
  { name: 'Machine Learning', score: 95, projects: 12, icon: BarChart3, color: 'text-accent2' },
  { name: 'FastAPI / Flask', score: 88, projects: 7, icon: Zap, color: 'text-accent1' },
  { name: 'Computer Vision', score: 92, projects: 5, icon: Terminal, color: 'text-accent2' },
  { name: 'Full Stack', score: 75, projects: 4, icon: Globe, color: 'text-accent1' },
  { name: 'DevOps / Docker', score: 82, projects: 6, icon: GitBranch, color: 'text-accent2' },
  { name: 'NLP', score: 94, projects: 8, icon: Code2, color: 'text-accent1' },
];

const techStack = [
  { name: 'PYTHON', icon: Terminal },
  { name: 'PYTORCH', icon: Flame },
  { name: 'TENSORFLOW', icon: Cpu },
  { name: 'TRANSFORMERS', icon: Network },
  { name: 'NEXT.JS', icon: Component },
  { name: 'POSTGRESQL', icon: Database },
  { name: 'SUPABASE', icon: Shield },
  { name: 'ONNX', icon: Workflow },
  { name: 'OPENCV', icon: Eye },
  { name: 'LANGCHAIN', icon: Layers },
  { name: 'DOCKER', icon: Box },
  { name: 'AWS', icon: Cloud }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative bg-base-muted/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-text">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-accent2">Intelligence</span>
          </h2>
          <p className="text-text-muted max-w-2xl text-lg">
            A real-time snapshot of technical expertise mapped across 40+ GitHub repositories and production deployments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Area */}
          <div className="lg:col-span-2 glass-panel p-8 rounded-3xl border border-white/5">
            <h3 className="text-xl font-heading font-bold mb-8 flex items-center gap-2">
              <Database className="w-5 h-5 text-accent1" />
              Expertise Distribution
            </h3>
            
            <div className="space-y-8">
              {githubSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-3">
                      <skill.icon className={`w-4 h-4 ${skill.color}`} />
                      <span className="font-sans font-medium text-text">{skill.name}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-mono text-text-muted">
                      <span>{skill.projects} Repos</span>
                      <span className="text-text">{skill.score}%</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, ease: "circOut" }}
                      className={`h-full bg-gradient-to-r ${index % 2 === 0 ? 'from-accent1 to-accent2' : 'from-accent2 to-accent1'}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar / Stats */}
          <div className="flex flex-col gap-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/5 flex-1">
              <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-accent2" />
                CORE STACK
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech) => (
                  <div 
                    key={tech.name} 
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-accent1/30 transition-all group"
                  >
                    <tech.icon className="w-4 h-4 text-accent1/70 group-hover:text-accent1 transition-colors" />
                    <span className="font-mono text-[10px] font-bold tracking-wider group-hover:text-text transition-colors">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
