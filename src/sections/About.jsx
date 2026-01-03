import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, Code, Lock, Brain } from "lucide-react";
import { fadeIn, staggerContainer, textVariant } from '../animations/variants';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Implementing secure-by-design principles in all projects',
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Leveraging machine learning for intelligent threat detection',
    },
    {
      icon: Zap,
      title: 'Clean-Code',
      description: 'Building scalable and maintainable security solutions',
    },
  ];

  return (
    <section id="about" className="relative py-20">
      {/* Background matching home page */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90 -z-10" />
      
      {/* Optional: Add some particles or texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHptLTQtNEgyOHY0aDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] -z-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              variants={fadeIn('up', 0.2)}
              className="inline-block px-4 py-1 rounded-full bg-teal-400/10 text-teal-400 text-sm font-semibold mb-4"
            >
              About Me
            </motion.span>
            <motion.h2
              variants={textVariant(0.3)}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Passionate Developer, <span className="gradient-text">Creative Thinker</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              With over 5 years of experience in web development, I specialize in creating 
              innovative digital solutions that drive business growth and user engagement.
            </motion.p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Image/Illustration */}
            <motion.div
              variants={fadeIn('right', 0.5)}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Animated Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border-2 border-teal-400/20 rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Right - Text */}
            <motion.div variants={fadeIn('left', 0.6)}>
              <h3 className="text-2xl font-bold mb-6"><span className="gradient-text">My Journey</span></h3>
              <p className="text-gray-400 mb-6">
                I'm Ankesh Kumar Thakur, a passionate BCA student at Centurion University specializing in Cybersecurity and Artificial Intelligence. My journey began with ethical hacking and has evolved into building intelligent security systems.
              </p>
              <p className="text-gray-400 mb-6">
                I believe in creating security solutions that are not just reactive, but predictive. By combining traditional cybersecurity practices with modern AI/ML techniques, I build systems that can anticipate threats before they happen.
              </p>
            </motion.div>
          </div>

          {/* Features Grid - Using only 3 features as defined */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeIn('up', 0.7 + index * 0.1)}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-xl p-6 hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-400/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;