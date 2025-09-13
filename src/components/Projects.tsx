import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  ArrowRight, 
  Filter,
  Brain,
  Cloud,
  Code,
  Smartphone,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: "AI-Powered Healthcare Platform",
    category: "AI/ML",
    description: "Advanced diagnostic system using computer vision and NLP to analyze medical data and provide real-time insights for healthcare professionals.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    technologies: ["TensorFlow", "Python", "React", "AWS", "Docker"],
    results: {
      before: "Manual diagnosis taking 2-3 hours",
      after: "Automated analysis in under 10 minutes",
      improvement: "85% faster diagnosis"
    },
    metrics: ["94% accuracy", "1000+ patients served", "60% cost reduction"],
    client: "MedTech Solutions",
    duration: "8 months",
    team: ["Dr. Sarah Chen", "Alex Thompson"],
    status: "Live",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 2,
    title: "Cloud-Native E-commerce Platform",
    category: "Cloud",
    description: "Scalable microservices architecture handling millions of transactions with auto-scaling and global CDN distribution.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["Kubernetes", "Node.js", "PostgreSQL", "Redis", "AWS"],
    results: {
      before: "Monolithic system with frequent downtime",
      after: "99.9% uptime with elastic scaling",
      improvement: "500% performance increase"
    },
    metrics: ["10M+ requests/day", "99.9% uptime", "40% cost savings"],
    client: "RetailMax Corp",
    duration: "6 months",
    team: ["David Kumar", "Lisa Park"],
    status: "Live",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 3,
    title: "Cross-Platform Finance App",
    category: "Mobile",
    description: "Secure financial management app with real-time analytics, AI-powered insights, and biometric authentication.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    technologies: ["React Native", "TypeScript", "Node.js", "MongoDB", "Stripe"],
    results: {
      before: "Multiple disconnected financial tools",
      after: "Unified dashboard with AI insights",
      improvement: "3x user engagement"
    },
    metrics: ["100K+ downloads", "4.8 app store rating", "50% user retention"],
    client: "FinanceFlow Inc",
    duration: "5 months",
    team: ["Jordan Lee", "Marcus Rodriguez"],
    status: "Live",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 4,
    title: "Enterprise Data Analytics Dashboard",
    category: "Web",
    description: "Real-time business intelligence platform with advanced visualization, predictive analytics, and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "D3.js", "Python", "Apache Spark", "PostgreSQL"],
    results: {
      before: "Manual report generation taking days",
      after: "Real-time insights with automated alerts",
      improvement: "90% faster decision making"
    },
    metrics: ["1TB+ data processed", "500+ dashboards", "20+ departments served"],
    client: "DataCorp Enterprise",
    duration: "7 months",
    team: ["Alex Thompson", "Marcus Rodriguez"],
    status: "Live",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 5,
    title: "DevOps Automation Pipeline",
    category: "DevOps",
    description: "Complete CI/CD automation with infrastructure as code, automated testing, and zero-downtime deployments.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    technologies: ["Jenkins", "Terraform", "Ansible", "Docker", "Kubernetes"],
    results: {
      before: "Manual deployments taking 4+ hours",
      after: "Automated deployments in under 15 minutes",
      improvement: "95% deployment time reduction"
    },
    metrics: ["Zero downtime", "50+ daily deployments", "99.9% success rate"],
    client: "TechStart Inc",
    duration: "4 months",
    team: ["Lisa Park", "David Kumar"],
    status: "Live",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 6,
    title: "AI Chatbot for Customer Service",
    category: "AI/ML",
    description: "Intelligent conversational AI with natural language understanding, sentiment analysis, and multi-language support.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    technologies: ["spaCy", "NLTK", "FastAPI", "React", "WebSocket"],
    results: {
      before: "24/7 human support required",
      after: "Automated 80% of customer queries",
      improvement: "60% cost reduction"
    },
    metrics: ["90% query resolution", "5s avg response", "15 languages supported"],
    client: "ServicePro Global",
    duration: "3 months",
    team: ["Dr. Sarah Chen", "Alex Thompson"],
    status: "Live",
    links: {
      demo: "#",
      github: "#"
    }
  }
];

const categories = [
  { name: "All", icon: Filter, count: projects.length },
  { name: "AI/ML", icon: Brain, count: projects.filter(p => p.category === "AI/ML").length },
  { name: "Cloud", icon: Cloud, count: projects.filter(p => p.category === "Cloud").length },
  { name: "Web", icon: Code, count: projects.filter(p => p.category === "Web").length },
  { name: "Mobile", icon: Smartphone, count: projects.filter(p => p.category === "Mobile").length },
  { name: "DevOps", icon: Settings, count: projects.filter(p => p.category === "DevOps").length }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative scroll-snap-start">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="cyber-gradient-text">Our Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming businesses with innovative solutions. Each project showcases our 
            commitment to excellence and cutting-edge technology implementation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.name}
                variant={activeCategory === category.name ? "default" : "outline"}
                onClick={() => setActiveCategory(category.name)}
                className={`group ${
                  activeCategory === category.name 
                    ? "bg-cyber-gradient neon-glow" 
                    : "glass border-cyber-violet/30 hover:border-cyber-violet/60"
                }`}
              >
                <IconComponent className="h-4 w-4 mr-2" />
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                <div className="glass rounded-xl overflow-hidden hover-3d h-full">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-cyber-violet/20 text-cyber-violet border-cyber-violet/50">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="outline" className="bg-background/20 backdrop-blur-sm">
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-orbitron font-bold mb-3 group-hover:text-cyber-violet transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-muted/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-muted/20">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Quick Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{project.duration}</span>
                      <span>{project.client}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {selectedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-glass-border p-6"
                      >
                        {/* Before/After Results */}
                        <div className="mb-6">
                          <h4 className="font-orbitron font-semibold mb-4 cyber-gradient-text">
                            Project Impact
                          </h4>
                          <div className="space-y-3">
                            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                              <p className="text-sm"><strong>Before:</strong> {project.results.before}</p>
                            </div>
                            <div className="p-3 rounded-lg bg-cyber-green/10 border border-cyber-green/20">
                              <p className="text-sm"><strong>After:</strong> {project.results.after}</p>
                            </div>
                            <div className="text-center">
                              <Badge className="bg-cyber-gradient text-white">
                                {project.results.improvement}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        {/* Key Metrics */}
                        <div className="mb-6">
                          <h4 className="font-orbitron font-semibold mb-3 cyber-gradient-text">
                            Key Metrics
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {project.metrics.map((metric, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 p-2 rounded-lg bg-muted/20"
                              >
                                <div className="w-2 h-2 rounded-full bg-cyber-violet" />
                                <span className="text-sm">{metric}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Team Members */}
                        <div>
                          <h4 className="font-orbitron font-semibold mb-3 cyber-gradient-text">
                            Team Members
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.team.map((member) => (
                              <Badge
                                key={member}
                                variant="outline"
                                className="bg-cyber-violet/10 text-cyber-violet border-cyber-violet/30"
                              >
                                {member}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold mb-4 cyber-gradient-text">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can bring your vision to life with the same level of 
              expertise and innovation showcased in our portfolio.
            </p>
            <Button
              size="lg"
              className="bg-cyber-gradient hover:scale-105 transition-transform neon-glow"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}