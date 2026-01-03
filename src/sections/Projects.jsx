import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { fadeIn, staggerContainer, textVariant, scaleUp } from '../animations/variants';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and analytics dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      imageColor: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Machine learning platform for predictive analytics and data visualization.',
      tags: ['Python', 'TensorFlow', 'FastAPI', 'React', 'D3.js'],
      liveUrl: '#',
      githubUrl: '#',
      imageColor: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'Real-time Chat App',
      description: 'Scalable messaging application with voice/video calling and file sharing.',
      tags: ['Next.js', 'Socket.io', 'PostgreSQL', 'WebRTC', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      imageColor: 'from-teal-500/20 to-emerald-500/20',
    },
    {
      title: 'DevOps Dashboard',
      description: 'Centralized dashboard for monitoring and managing cloud infrastructure.',
      tags: ['React', 'Go', 'Docker', 'Kubernetes', 'Grafana'],
      liveUrl: '#',
      githubUrl: '#',
      imageColor: 'from-orange-500/20 to-amber-500/20',
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              variants={fadeIn('up', 0.2)}
              className="inline-block px-4 py-1 rounded-full bg-teal-400/10 text-teal-400 text-sm font-semibold mb-4"
            >
              My Work
            </motion.span>
            <motion.h2
              variants={textVariant(0.3)}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Here are some of my recent projects that showcase my skills and expertise.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeIn('up', 0.5 + index * 0.1)}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl glass-effect"
              >
                {/* Project Image/Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.imageColor} opacity-50`} />
                
                {/* Content */}
                <div className="relative p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <motion.h3
                        variants={scaleUp(0.1)}
                        className="text-2xl font-bold mb-2 group-hover:text-teal-400 transition-colors"
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-gray-400 mb-6">
                        {project.description}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      className="p-2 rounded-full bg-white/5 group-hover:bg-teal-400/20 transition-colors"
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-teal-400/10 text-teal-400 hover:bg-teal-400/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg glass-effect hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;