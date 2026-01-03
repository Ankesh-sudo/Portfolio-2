import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import { fadeIn } from '../animations/variants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav
      variants={fadeIn('down')}
      initial="hidden"
      animate="show"
      className="fixed top-0 left-0 right-0 z-50 glass-effect py-2"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          
        <motion.a
        href="#home"
        whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
        className="text-2xl font-bold font-mono"
        >
        <span className="text-teal-400">&lt;</span>
        <span className="text-gray-100">Ankesh</span>
        <span className="text-cyan-400">.</span>
        <span className="text-teal-500">Dev</span>
        <span className="text-teal-400">/&gt;</span>
        </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                variants={fadeIn('down', 0.1 * index)}
                href={`#${item.toLowerCase()}`}
                className="relative px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300 group overflow-hidden rounded-lg"
                >
                {item}
                <span className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </motion.a>
            ))}
            
            {/* Social Icons */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass-effect"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 p-4 rounded-xl glass-effect"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-gray-300 hover:text-teal-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;