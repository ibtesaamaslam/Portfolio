import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'EchoVerse',
    description: 'An AI-powered language learning assistant integrating speech recognition and transformer-based NLP for a gamified feedback system targeted at children.',
    impact: 'Deployed prototype with iterative user testing, providing real-time feedback and improving engagement.',
    tech: ['Transformers', 'Speech-to-Text', 'Flask', 'Python'],
    image: 'https://picsum.photos/seed/echoverse/1200/800?blur=2',
    demoUrl: 'https://github.com/ibtesaamaslam',
    githubUrl: 'https://github.com/ibtesaamaslam',
  },
  {
    title: 'Credit Card Fraud Detection',
    description: 'An end-to-end fraud detection pipeline for highly imbalanced transaction data using ensemble models.',
    impact: 'Achieved ~98% ROC-AUC with optimized recall through threshold tuning and SMOTE balancing.',
    tech: ['Python', 'XGBoost', 'LightGBM', 'SHAP'],
    image: 'https://picsum.photos/seed/fraud/1200/800?blur=2',
    demoUrl: 'https://github.com/ibtesaamaslam',
    githubUrl: 'https://github.com/ibtesaamaslam',
  },
  {
    title: 'Gym Management System',
    description: 'A web-based platform for member management, fee tracking, attendance analytics, and fitness content with role-based dashboards.',
    impact: 'Deployed as a production-ready application, streamlining administrative tasks and member tracking.',
    tech: ['Next.js', 'Tailwind CSS', 'Supabase', 'REST APIs'],
    image: 'https://picsum.photos/seed/gym/1200/800?blur=2',
    demoUrl: 'https://github.com/ibtesaamaslam',
    githubUrl: 'https://github.com/ibtesaamaslam',
  },
  {
    title: 'Customer Churn Prediction',
    description: 'An end-to-end Artificial Neural Network (ANN) pipeline to predict customer churn based on historical data.',
    impact: 'Achieved 92% validation accuracy, enabling proactive retention strategies.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Pandas'],
    image: 'https://picsum.photos/seed/churn/1200/800?blur=2',
    demoUrl: 'https://github.com/ibtesaamaslam',
    githubUrl: 'https://github.com/ibtesaamaslam',
  },
];

export function ProjectsGrid() {
  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-text">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-accent2">Work</span>
          </h2>
          <p className="text-text-muted max-w-2xl text-lg">
            A collection of recent projects focusing on complex interfaces, performance, and user experience.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
