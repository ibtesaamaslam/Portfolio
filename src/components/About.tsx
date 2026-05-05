import { motion } from 'motion/react';
import { 
  BrainCircuit, 
  Code2, 
  Database, 
  Rocket,
  Cpu,
  Flame,
  Network,
  Eye,
  Calculator,
  Terminal,
  Zap,
  Container,
  Component,
  Atom,
  Shield,
  Table,
  Binary,
  Box,
  Workflow,
  Globe,
  GitBranch,
  TrendingUp
} from 'lucide-react';

const skills = [
  { 
    name: 'AI & ML', 
    icon: BrainCircuit, 
    tools: [
      { name: 'TensorFlow', icon: Cpu },
      { name: 'PyTorch', icon: Flame },
      { name: 'Transformers', icon: Network },
      { name: 'OpenCV', icon: Eye },
      { name: 'Scikit-Learn', icon: Calculator }
    ] 
  },
  { 
    name: 'Engineering', 
    icon: Code2, 
    tools: [
      { name: 'Python', icon: Terminal },
      { name: 'FastAPI', icon: Zap },
      { name: 'Flask', icon: Container },
      { name: 'Next.js', icon: Component },
      { name: 'React', icon: Atom }
    ] 
  },
  { 
    name: 'Data & Cloud', 
    icon: Database, 
    tools: [
      { name: 'SQL', icon: Database },
      { name: 'Supabase', icon: Shield },
      { name: 'Firebase', icon: Flame },
      { name: 'Pandas', icon: Table },
      { name: 'NumPy', icon: Binary }
    ] 
  },
  { 
    name: 'Deployment', 
    icon: Rocket, 
    tools: [
      { name: 'Docker', icon: Box },
      { name: 'ONNX', icon: Workflow },
      { name: 'REST APIs', icon: Globe },
      { name: 'Git', icon: GitBranch },
      { name: 'Inference Pipelines', icon: TrendingUp }
    ] 
  },
];

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-base-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-text">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-accent2">Me</span>
          </h2>
          
          <div className="space-y-6 text-lg text-text-muted leading-relaxed font-sans">
            <p>
              I'm an AI/ML Engineer with hands-on experience in applied machine learning, NLP, speech processing, and computer vision. I thrive on building end-to-end AI products—from the initial data collection and model development to API deployment and production-ready systems.
            </p>
            <p>
              Recently, I worked as an AI Lead Engineer at DAM TECHHUB, where I managed a team of 6 AI/ML interns, led agile sprints, and delivered AI products using Docker and ONNX inference pipelines.
            </p>
            <p>
              I hold a Bachelor of Science in Artificial Intelligence from NUML, Islamabad. I believe in aligning ML solutions with real-world product requirements and ethical AI practices.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-heading font-bold text-text mb-2">15+</div>
              <div className="text-sm text-text-muted uppercase tracking-wider font-medium">Projects delivered</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-text mb-2">98%</div>
              <div className="text-sm text-text-muted uppercase tracking-wider font-medium">Model ROC-AUC</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="p-6 rounded-2xl glass-panel border border-white/5 hover:border-accent1/30 transition-colors group"
            >
              <skill.icon className="w-8 h-8 text-accent2 mb-4 group-hover:text-accent1 transition-colors" />
              <h3 className="text-xl font-heading font-semibold text-text mb-4">{skill.name}</h3>
              <ul className="space-y-2.5">
                {skill.tools.map((tool) => (
                  <li key={tool.name} className="text-sm text-text-muted flex items-center gap-3">
                    <tool.icon className="w-3.5 h-3.5 text-accent1/70" />
                    {tool.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
