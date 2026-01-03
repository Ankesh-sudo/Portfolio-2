import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../animations/variants';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Cybersecurity',
      skills: [
        { name: 'Linux', level: 95, color: 'from-cyan-400 to-blue-500' },
        { name: 'Penetration Testing', level: 90, color: 'from-blue-400 to-indigo-500' },
        { name: 'Kali Linux', level: 88, color: 'from-gray-400 to-gray-600' },
        { name: 'Wireshark', level: 92, color: 'from-teal-400 to-cyan-500' },
        { name: 'Metasploit', level: 85, color: 'from-purple-400 to-pink-500' },
        { name: 'Nmap', level: 88, color: 'from-red-400 to-rose-500' },
        { name: 'Burp Suite', level: 80, color: 'from-yellow-400 to-amber-500' },
        { name: 'OWASP', level: 87, color: 'from-green-400 to-emerald-500' },
      ],
    },
    {
      category: 'AI/ML',
      skills: [
        { name: 'Python', level: 90, color: 'from-green-400 to-emerald-500' },
        { name: 'TensorFlow', level: 85, color: 'from-yellow-400 to-amber-500' },
        { name: 'PyTorch', level: 88, color: 'from-blue-400 to-indigo-500' },
        { name: 'Scikit-learn', level: 82, color: 'from-green-500 to-emerald-600' },
        { name: 'OpenCV', level: 80, color: 'from-red-400 to-rose-500' },
        { name: 'Keras', level: 84, color: 'from-purple-400 to-pink-500' },
        { name: 'Pandas', level: 89, color: 'from-teal-400 to-cyan-500' },
        { name: 'NumPy', level: 91, color: 'from-blue-400 to-indigo-500' },
        { name: 'Data Visualization', level: 86, color: 'from-yellow-400 to-amber-500' },
        { name: 'Natural Language Processing', level: 83, color: 'from-green-400 to-emerald-500' },
        { name: 'Deep Learning', level: 87, color: 'from-red-400 to-rose-500' },
        { name: 'Data analysis', level: 90, color: 'from-purple-400 to-pink-500' },
      ],
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Docker', level: 85, color: 'from-blue-400 to-cyan-500' },
        { name: 'AWS', level: 83, color: 'from-orange-400 to-amber-500' },
        { name: 'Git', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'MySQL', level: 87, color: 'from-purple-400 to-violet-500' },
        { name: 'Rest API', level: 90, color: 'from-yellow-500 to-amber-600' },
        { name: 'Bash Scripting', level: 88, color: 'from-green-400 to-emerald-500' },
        { name: 'Jupyter Notebooks', level: 92, color: 'from-pink-400 to-rose-500' },
        { name: 'VS Code', level: 94, color: 'from-blue-400 to-indigo-500' },
        { name: 'Postman', level: 86, color: 'from-red-400 to-rose-500' },
      ],
    },
  ];

  // Tech logo images - Using CDN URLs for popular tech logos
  const techLogos = [
    { name: 'Linux', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linux.svg', bg: 'bg-gray-800' },
    { name: 'Python', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg', bg: 'bg-blue-500/10' },
    { name: 'Java', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg', bg: 'bg-red-600/10' },
    { name: 'C++', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/cplusplus.svg', bg: 'bg-blue-700/10' },
    { name: '.NET', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/dotnet.svg', bg: 'bg-purple-600/10' },
    { name: 'Docker', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/docker.svg', bg: 'bg-blue-400/10' },
    { name: 'AWS', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/amazonaws.svg', bg: 'bg-orange-500/10' },
    { name: 'Git', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/git.svg', bg: 'bg-red-500/10' },
    { name: 'TensorFlow', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/tensorflow.svg', bg: 'bg-orange-400/10' },
    { name: 'PyTorch', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/pytorch.svg', bg: 'bg-red-400/10' },
    { name: 'VS Code', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/visualstudiocode.svg', bg: 'bg-blue-500/10' },
    { name: 'MySQL', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg', bg: 'bg-blue-300/10' },
    { name: 'Kubernetes', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/kubernetes.svg', bg: 'bg-blue-600/10' },
    { name: 'React', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg', bg: 'bg-cyan-500/10' },
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nodedotjs.svg', bg: 'bg-green-500/10' },
    { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/postgresql.svg', bg: 'bg-blue-700/10' },
    { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mongodb.svg', bg: 'bg-green-600/10' },
    { name: 'Redis', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/redis.svg', bg: 'bg-red-600/10' },
    { name: 'Nginx', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nginx.svg', bg: 'bg-green-700/10' },
    { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg', bg: 'bg-yellow-400/10' },
    { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/typescript.svg', bg: 'bg-blue-400/10' },
    { name: 'Jupyter', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/jupyter.svg', bg: 'bg-orange-300/10' },
    { name: 'Kali Linux', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/kalilinux.svg', bg: 'bg-blue-800/10' },
    { name: 'Wireshark', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/wireshark.svg', bg: 'bg-blue-600/10' },
    { name: 'OWASP', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/owasp.svg', bg: 'bg-red-700/10' },
    { name: 'Scikit-learn', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/scikitlearn.svg', bg: 'bg-green-500/10' },
    { name: 'Keras', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/keras.svg', bg: 'bg-purple-400/10' },
    { name: 'OpenCV', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/opencv.svg', bg: 'bg-blue-300/10' },
    { name: 'Pandas', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/pandas.svg', bg: 'bg-teal-400/10' },
    { name: 'NumPy', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/numpy.svg', bg: 'bg-blue-400/10' },
    { name: 'Postman', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/postman.svg', bg: 'bg-orange-400/10' },
    { name: 'Bash', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/gnu.svg', bg: 'bg-gray-700/10' },
    { name: 'Jupyter Notebooks', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/jupyter.svg', bg: 'bg-orange-300/10' },
  ];

  return (
    <section id="skills" className="section-padding">
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
              My Skills
            </motion.span>
            <motion.h2
              variants={textVariant(0.3)}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Technical <span className="gradient-text">Expertise</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Continuously learning and adapting to new technologies to deliver 
              cutting-edge solutions.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={fadeIn('up', 0.5 + categoryIndex * 0.1)}
                className="glass-effect rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-teal-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Horizontal Scrolling Tech Logos */}
          <motion.div
            variants={fadeIn('up', 0.8)}
            className="relative mt-20"
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              Technologies I Work With
            </h3>
            
            <div className="relative overflow-hidden py-4">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
              
              {/* First Row - Scroll Right */}
              <motion.div
                animate={{
                  x: [0, -1000],
                }}
                transition={{
                  x: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="flex gap-8 mb-8"
              >
                {[...techLogos, ...techLogos].map((tech, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 flex flex-col items-center justify-center group"
                  >
                    <div className={`w-20 h-20 rounded-xl ${tech.bg} flex items-center justify-center p-4 glass-effect group-hover:scale-110 transition-transform duration-300`}>
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-12 h-12 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                      />
                    </div>
                    <span className="mt-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Second Row - Scroll Left */}
              <motion.div
                animate={{
                  x: [-1000, 0],
                }}
                transition={{
                  x: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="flex gap-8"
              >
                {[...techLogos.reverse(), ...techLogos.reverse()].map((tech, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 flex flex-col items-center justify-center group"
                  >
                    <div className={`w-20 h-20 rounded-xl ${tech.bg} flex items-center justify-center p-4 glass-effect group-hover:scale-110 transition-transform duration-300`}>
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-12 h-12 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                      />
                    </div>
                    <span className="mt-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;