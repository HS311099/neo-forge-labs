import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Code, 
  Smartphone, 
  Settings, 
  Database,
  Shield,
  Zap,
  Cpu,
  Globe
} from 'lucide-react';

const services = [
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description: 'Advanced AI solutions, neural networks, and intelligent automation',
    icon: Brain,
    color: 'cyber-violet',
    skills: [
      'Deep Learning & Neural Networks',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'MLOps & Model deployment',
      'TensorFlow & PyTorch'
    ],
    projects: 15,
    expertise: 95
  },
  {
    id: 'cloud',
    title: 'Cloud Architecture',
    description: 'Scalable cloud infrastructure and serverless solutions',
    icon: Cloud,
    color: 'cyber-cyan',
    skills: [
      'AWS, Azure, GCP',
      'Kubernetes & Docker',
      'Serverless Architecture',
      'Microservices Design',
      'Infrastructure as Code',
      'CI/CD Pipelines'
    ],
    projects: 22,
    expertise: 92
  },
  {
    id: 'web',
    title: 'Full-Stack Web',
    description: 'Modern web applications with cutting-edge frameworks',
    icon: Code,
    color: 'cyber-pink',
    skills: [
      'React, Vue, Angular',
      'Node.js, Python, Go',
      'GraphQL & REST APIs',
      'Database Design',
      'Performance Optimization',
      'Progressive Web Apps'
    ],
    projects: 35,
    expertise: 96
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications',
    icon: Smartphone,
    color: 'cyber-green',
    skills: [
      'React Native',
      'Flutter',
      'iOS (Swift)',
      'Android (Kotlin)',
      'Mobile UI/UX',
      'App Store Optimization'
    ],
    projects: 18,
    expertise: 89
  },
  {
    id: 'devops',
    title: 'DevOps & Security',
    description: 'Secure, automated deployment and infrastructure management',
    icon: Settings,
    color: 'cyber-orange',
    skills: [
      'Docker & Kubernetes',
      'Terraform & Ansible',
      'Monitoring & Logging',
      'Security Best Practices',
      'Automated Testing',
      'Performance Tuning'
    ],
    projects: 28,
    expertise: 91
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 relative scroll-snap-start">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="cyber-gradient-text">Our Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Five specialized domains, infinite possibilities. We combine cutting-edge technology 
            with deep expertise to deliver solutions that drive your business forward.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                <div className="glass p-8 rounded-xl hover-3d cursor-pointer h-full relative overflow-hidden">
                  {/* Background Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div
                    className="relative z-10"
                    animate={hoveredService === service.id ? { scale: 1.1, rotateY: 15 } : { scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`inline-flex p-4 rounded-lg bg-${service.color}/20 mb-6 group-hover:shadow-neon`}>
                      <IconComponent className={`h-8 w-8 text-${service.color}`} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-orbitron font-bold mb-4 group-hover:text-cyber-violet transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">
                        {service.projects} Projects
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-${service.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${service.expertise}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                        <span className="text-xs font-medium">{service.expertise}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Expand Indicator */}
                  <motion.div
                    className="absolute top-4 right-4"
                    animate={activeService === service.id ? { rotate: 45 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Zap className="h-5 w-5 text-muted-foreground" />
                  </motion.div>
                </div>

                {/* Expanded Skills Panel */}
                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 glass rounded-xl p-6 border-t-2 border-cyber-violet/50"
                    >
                      <h4 className="text-lg font-orbitron font-semibold mb-4 cyber-gradient-text">
                        Key Skills & Technologies
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                            className="flex items-center gap-2 p-2 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors"
                          >
                            <div className={`w-2 h-2 rounded-full bg-${service.color}`} />
                            <span className="text-sm">{skill}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass p-8 rounded-xl"
        >
          <h3 className="text-2xl font-orbitron font-bold mb-6 text-center cyber-gradient-text">
            Powered by Modern Technology
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: Code },
              { name: 'Python', icon: Database },
              { name: 'AWS', icon: Cloud },
              { name: 'Docker', icon: Settings },
              { name: 'AI/ML', icon: Brain },
              { name: 'Security', icon: Shield }
            ].map((tech, index) => {
              const TechIcon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, rotateY: -90 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotateY: 15 }}
                  className="text-center p-4 rounded-lg hover:bg-muted/20 transition-colors cursor-pointer"
                >
                  <TechIcon className="h-8 w-8 mx-auto mb-2 text-cyber-violet" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}