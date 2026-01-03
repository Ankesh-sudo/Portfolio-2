import { motion } from 'framer-motion';
import { Heart, Mail } from 'lucide-react';
import { fadeIn } from '../animations/variants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      variants={fadeIn('up')}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="border-t border-white/10 mt-20"
    >
      <div className="container mx-auto section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">© {currentYear} Portfolio</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span className="text-gray-400">All rights reserved.</span>
          </div>

          {/* Email */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:hello@portfolio.dev"
            className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>hello@portfolio.dev</span>
          </motion.a>

          {/* Back to Top */}
          <motion.a
            whileHover={{ y: -5 }}
            href="#home"
            className="px-6 py-2 rounded-full glass-effect hover:bg-teal-400/20 transition-colors"
          >
            Back to Top ↑
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;