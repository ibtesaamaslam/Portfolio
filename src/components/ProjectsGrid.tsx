import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'EchoVerse',
    description: 'An AI-powered language learning assistant integrating speech recognition and transformer-based NLP for a gamified feedback system targeted at children.',
    impact: 'Developed custom fine-tuned BERT for sentiment analysis and Wav2Vec2 for speech clarity scores.',
    tech: ['Transformers', 'Speech-to-Text', 'Flask', 'Python'],
    tags: ['NLP', 'EdTech', 'Final Year Project', 'Real-time'],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'SignSense',
    description: 'A sophisticated real-time sign language recognition system using computer vision and deep learning to bridge communication gaps.',
    impact: 'Achieved 97%+ accuracy in dynamic gesture recognition using MediaPipe and LSTM architectures.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'MediaPipe'],
    tags: ['Computer Vision', 'Deep Learning', 'Accessibility', 'AI'],
    image: '/signsensedashboard.png',
  },
  {
    title: 'Customer Churn Prediction',
    description: 'An end-to-end Artificial Neural Network (ANN) pipeline designed to predict customer attrition based on multi-dimensional historical data and behavioral patterns.',
    impact: 'Achieved 92% validation accuracy using custom tensor-based layers and dropout regularization to prevent overfitting in business-critical scenarios.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Pandas'],
    tags: ['Deep Learning', 'Business AI', 'Predictive Analytics', 'ANN'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Fraud Detection System',
    description: 'A robust anomaly detection pipeline for identifying fraudulent financial transactions in highly imbalanced datasets using ensemble learning techniques.',
    impact: 'Implemented a specialized resampling strategy and XGBoost architecture to identify suspicious patterns with 98% ROC-AUC precision.',
    tech: ['Python', 'Scikit-Learn', 'XGBoost', 'Seaborn'],
    tags: ['Security', 'Finance', 'Anomaly Detection', 'Data Science'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Gym Management System',
    description: 'A robust fitness management solution featuring member tracking, subscription management, and analytics for gym owners.',
    impact: 'Built dynamic dashboards for revenue tracking and member performance metrics with real-time notifications.',
    tech: ['Full Stack', 'Database Management', 'SaaS', 'Web Dev'],
    tags: ['Management UI', 'Business', 'Dashboard', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Intervex',
    description: 'An AI-driven technical interview simulator that provides real-time feedback and evaluation using tailored Large Language Models.',
    impact: 'Architected a RAG-based analysis engine to compare candidate answers against industry standard solutions and soft-skill metrics.',
    tech: ['React.js', 'Python', 'LLMs', 'FastAPI'],
    tags: ['EdTech', 'AI Agents', 'Automation', 'LLMs'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
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
            <ProjectCard 
              key={project.title} 
              title={project.title}
              description={project.description}
              impact={project.impact}
              tech={project.tech}
              tags={project.tags}
              image={project.image}
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
