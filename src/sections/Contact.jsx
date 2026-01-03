import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { fadeIn, staggerContainer, textVariant } from '../animations/variants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'masterankesh664@gmail.com',
      link: 'mailto:masterankesh664@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9861579339',
      link: 'tel:+919861579339',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bhubaneswar, India',
      link: '#',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
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
              Get In Touch
            </motion.span>
            <motion.h2
              variants={textVariant(0.3)}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Let's <span className="gradient-text">Connect</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={fadeIn('right', 0.5)}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-white/10 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-white/10 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-white/10 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeIn('left', 0.6)}>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    variants={fadeIn('up', 0.7 + index * 0.1)}
                    href={info.link}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 p-6 rounded-2xl glass-effect hover:bg-white/5 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal-400/10 flex items-center justify-center group-hover:bg-teal-400/20 transition-colors">
                      <info.icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                variants={fadeIn('up', 1.0)}
                className="mt-8 rounded-2xl overflow-hidden glass-effect"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                      <p className="text-gray-400">San Francisco, California</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-white/10 rounded-2xl pointer-events-none" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;