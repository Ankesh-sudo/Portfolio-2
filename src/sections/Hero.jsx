import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Download, ArrowRight, Instagram } from "lucide-react";
import { fadeIn, staggerContainer } from "../animations/variants";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const socialIcons = [
    { Icon: Github, href: "https://github.com/Ankesh-sudo", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/ankesh-thakur-944909286/", label: "LinkedIn" },
    { Icon: Twitter, href: "https://x.com/AnkeshT79410706", label: "Twitter" },
    { Icon: Instagram, href: "https://www.instagram.com/ankesh_thakur1", label: "Instagram" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/img1.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/90 z-0" />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-teal-400/30 rounded-full z-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh]"
        >
          {/* LEFT */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.span
              variants={fadeIn("up", 0.2)}
              className="inline-block px-3 py-1 mb-4 sm:mb-6 rounded-full bg-teal-400/10 text-teal-400 text-xs sm:text-sm font-semibold"
            >
              Cyber Security • AI/ML
            </motion.span>
            
            {/* Heading Container */}
            <div className="mb-4 sm:mb-6">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight"
              >
                Hello, I'm
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold leading-tight mt-2 sm:mt-3"
              >
                <span className="gradient-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  <Typewriter
                    words={["Ankesh Thakur", "A Developer", "A Security Enthusiast"]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    cursorColor="#2DD4BF"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </motion.h1>
            </div>

            <motion.p
              variants={fadeIn("up", 0.4)}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              I build intelligent security systems that combine cutting-edge machine learning with robust cybersecurity practices.
              Specializing in threat detection, automation, and secure AI implementation for modern security challenges.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 justify-center lg:justify-start"
            >
              <a href="#projects" className="btn-primary flex items-center justify-center gap-2 py-3 px-6 text-sm sm:text-base">
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center gap-2 py-3 px-6 text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>My Resume</span>
              </a>
            </motion.div>

            {/* SOCIAL ICONS */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            >

              <div className="flex gap-4 sm:gap-5">
                {socialIcons.map(({ Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, -4, 0] }}
                    transition={{
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.25, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative p-3 sm:p-4 rounded-full glass-effect group"
                  >
                    <span className="absolute inset-0 rounded-full bg-teal-400/20 blur-lg opacity-0 group-hover:opacity-100 transition" />
                    <Icon className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 text-gray-200 group-hover:text-teal-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT – IMAGE */}
          <motion.div
            variants={fadeIn("left", 0.8)}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative w-80 h-88 sm:w-88 sm:h-96 md:w-[32rem] md:h-[36rem] lg:w-[38rem] lg:h-[42rem]">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-teal-400/20 blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[140px]" />

              <motion.img
                src="/hero.png"
                alt="Ankesh"
                className="relative z-10 w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;