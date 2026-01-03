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
        { name: 'Node.js', level: 90, color: 'from-green-400 to-emerald-500' },
        { name: 'Python', level: 85, color: 'from-yellow-400 to-amber-500' },
        { name: 'PostgreSQL', level: 88, color: 'from-blue-400 to-indigo-500' },
        { name: 'MongoDB', level: 82, color: 'from-green-500 to-emerald-600' },
        { name: 'Redis', level: 80, color: 'from-red-400 to-rose-500' },
      ],
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Docker', level: 85, color: 'from-blue-400 to-cyan-500' },
        { name: 'AWS', level: 83, color: 'from-orange-400 to-amber-500' },
        { name: 'Git', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'CI/CD', level: 87, color: 'from-purple-400 to-violet-500' },
        { name: 'Linux', level: 90, color: 'from-yellow-500 to-amber-600' },
      ],
    },
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;