import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    role: 'AI Lead Engineer',
    company: 'DAM TECHHUB',
    location: 'Rawalpindi, Pakistan',
    period: 'Jun 2025 – Aug 2025',
    description: [
      'Led AI strategy and managed a team of 6 AI/ML interns through code reviews, agile sprints, and mentorship programs.',
      'Delivered AI products from prototype to production using Docker containers and ONNX inference pipelines.',
      'Built and deployed scalable ML APIs with FastAPI and Flask frameworks.',
      'Collaborated cross-functionally to align ML solutions with key business KPIs and objectives.'
    ],
    icon: Briefcase
  },
  {
    role: 'AI Intern',
    company: 'Digital Empowerment Pakistan',
    location: 'Islamabad, Pakistan',
    period: 'Jun 2024 – Jul 2024',
    description: [
      'Implemented deep learning models for classification and object detection tasks.',
      'Built comprehensive evaluation workflows and prepared deployment-ready model artifacts.'
    ],
    icon: Briefcase
  }
];

const education = [
  {
    degree: 'Bachelor of Science in Artificial Intelligence',
    institution: 'NUML',
    location: 'Islamabad',
    period: '2022 – 2026',
    icon: GraduationCap
  }
];

const achievements = [
  {
    title: 'Certifications',
    items: [
      'ChatGPT Prompt Engineering',
      'Microsoft Azure AI Essentials (Microsoft & LinkedIn)',
      'Hands-On Generative AI with Multi-Agent LangChain'
    ]
  },
  {
    title: 'Languages',
    items: [
      'English (Fluent)',
      'Urdu (Fluent)',
      'Punjabi (Fluent)'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-text">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-accent2">Education</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-8 flex items-center gap-3">
              <Briefcase className="text-accent1 w-6 h-6" />
              Professional Experience
            </h3>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-white/10"
                >
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-accent2" />
                  <div className="mb-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h4 className="text-xl font-bold text-text">{exp.role}</h4>
                    <span className="text-sm text-accent1 font-mono">{exp.period}</span>
                  </div>
                  <div className="text-text-muted font-medium mb-4">
                    {exp.company} <span className="text-white/30 px-2">|</span> {exp.location}
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-text-muted text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="text-accent2 w-6 h-6" />
              Education
            </h3>
            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-white/10"
                >
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-accent1" />
                  <div className="mb-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h4 className="text-xl font-bold text-text">{edu.degree}</h4>
                    <span className="text-sm text-accent2 font-mono">{edu.period}</span>
                  </div>
                  <div className="text-text-muted font-medium">
                    {edu.institution} <span className="text-white/30 px-2">|</span> {edu.location}
                  </div>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-heading font-semibold mb-8 mt-16 flex items-center gap-3">
              <span className="text-accent1">★</span>
              Achievements & Certifications
            </h3>
            <div className="space-y-8">
              {achievements.map((ach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 rounded-xl p-6 border border-white/10"
                >
                  <h4 className="text-lg font-bold text-text mb-4">{ach.title}</h4>
                  <ul className="space-y-2">
                    {ach.items.map((item, i) => (
                      <li key={i} className="text-text-muted text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent2/50 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
