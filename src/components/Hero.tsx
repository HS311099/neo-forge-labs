import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeBackground from './ThreeBackground';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  
  const phrases = [
    'Next-Gen Tech Solutions',
    'AI-Powered Innovation',
    'Full-Stack Excellence',
    'Cloud-Native Architecture',
    'Mobile-First Development'
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhraseText = phrases[currentPhrase];
    
    if (typedText.length < currentPhraseText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentPhraseText.slice(0, typedText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setTypedText('');
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [typedText, currentPhrase, phrases]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Animated Background */}
      <ThreeBackground />
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/60 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Animated Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="p-4 glass rounded-full neon-glow"
              >
                <Sparkles className="h-12 w-12 text-cyber-violet" />
              </motion.div>
              <div className="absolute inset-0 animate-ping">
                <div className="p-4 rounded-full border-2 border-cyber-cyan opacity-20" />
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-6 leading-tight"
          >
            <span className="block text-foreground">Crafting</span>
            <span className="block cyber-gradient-text neon-text">
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1 text-cyber-cyan"
              >
                |
              </motion.span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Multi-domain expertise in{' '}
            <span className="text-cyber-violet font-semibold">AI & Machine Learning</span>,{' '}
            <span className="text-cyber-cyan font-semibold">Cloud Architecture</span>,{' '}
            <span className="text-cyber-pink font-semibold">Full-Stack Development</span>, and{' '}
            <span className="text-cyber-green font-semibold">DevOps</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="group relative px-8 py-4 text-lg font-semibold bg-cyber-gradient hover:scale-105 transition-all duration-300 neon-glow"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="group px-8 py-4 text-lg font-semibold glass border-cyber-violet hover:bg-cyber-violet/10 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              View Our Work
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '5', label: 'Tech Domains' },
              { number: '99%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-center glass p-4 rounded-lg hover-3d"
              >
                <div className="text-2xl md:text-3xl font-orbitron font-bold cyber-gradient-text">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyber-violet rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyber-violet rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}