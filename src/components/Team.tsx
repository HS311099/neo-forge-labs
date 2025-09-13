import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin,
  Star,
  Award,
  TrendingUp,
  Users
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "AI/ML Director",
    domain: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    experience: "8+ years",
    projects: 15,
    rating: 4.9,
    skills: ["Deep Learning", "NLP", "Computer Vision", "TensorFlow", "PyTorch"],
    bio: "PhD in Computer Science, specialized in neural networks and AI systems. Led AI initiatives at Fortune 500 companies.",
    availability: "Available",
    location: "San Francisco, CA",
    social: {
      github: "#",
      linkedin: "#",
      email: "sarah@technova.ai"
    }
  },
  {
    name: "Alex Thompson",
    role: "Full-Stack Lead",
    domain: "Web Development",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    experience: "6+ years",
    projects: 35,
    rating: 4.8,
    skills: ["React", "Node.js", "GraphQL", "AWS", "TypeScript"],
    bio: "Senior full-stack developer with expertise in modern web technologies and scalable architectures.",
    availability: "Available",
    location: "Austin, TX",
    social: {
      github: "#",
      linkedin: "#",
      email: "alex@technova.ai"
    }
  },
  {
    name: "David Kumar",
    role: "Cloud Architect",
    domain: "Cloud Infrastructure",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    experience: "7+ years",
    projects: 22,
    rating: 4.9,
    skills: ["AWS", "Kubernetes", "Terraform", "Docker", "DevOps"],
    bio: "Certified cloud architect with extensive experience in designing scalable, secure cloud infrastructures.",
    availability: "Busy until Dec 15",
    location: "Seattle, WA",
    social: {
      github: "#",
      linkedin: "#",
      email: "david@technova.ai"
    }
  },
  {
    name: "Jordan Lee",
    role: "Mobile Dev Lead",
    domain: "Mobile Applications",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    experience: "5+ years",
    projects: 18,
    rating: 4.7,
    skills: ["React Native", "Flutter", "iOS", "Android", "UI/UX"],
    bio: "Mobile development specialist creating beautiful, performant apps for iOS and Android platforms.",
    availability: "Available",
    location: "New York, NY",
    social: {
      github: "#",
      linkedin: "#",
      email: "jordan@technova.ai"
    }
  },
  {
    name: "Lisa Park",
    role: "DevOps Engineer",
    domain: "DevOps & Security",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    experience: "6+ years",
    projects: 28,
    rating: 4.8,
    skills: ["Kubernetes", "CI/CD", "Security", "Monitoring", "Ansible"],
    bio: "DevOps engineer focused on automation, security, and reliable deployment pipelines.",
    availability: "Available",
    location: "Denver, CO",
    social: {
      github: "#",
      linkedin: "#",
      email: "lisa@technova.ai"
    }
  },
  {
    name: "Marcus Rodriguez",
    role: "Data Scientist",
    domain: "Data Science & Analytics",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    experience: "7+ years",
    projects: 20,
    rating: 4.9,
    skills: ["Python", "Machine Learning", "Analytics", "Visualization", "Statistics"],
    bio: "Data scientist with expertise in predictive modeling, analytics, and business intelligence solutions.",
    availability: "Available next week",
    location: "Miami, FL",
    social: {
      github: "#",
      linkedin: "#",
      email: "marcus@technova.ai"
    }
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 relative scroll-snap-start">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="cyber-gradient-text">Meet Our Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            World-class experts passionate about delivering cutting-edge solutions. 
            Each team member brings unique expertise and proven track records.
          </p>
          
          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { icon: Users, label: 'Team Members', value: '15+' },
              { icon: Award, label: 'Combined Experience', value: '50+ years' },
              { icon: TrendingUp, label: 'Success Rate', value: '99%' },
              { icon: Star, label: 'Avg Rating', value: '4.8/5' }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <IconComponent className="h-8 w-8 mx-auto mb-2 text-cyber-violet" />
                  <div className="text-2xl font-orbitron font-bold cyber-gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass p-6 rounded-xl hover-3d h-full">
                {/* Profile Image & Status */}
                <div className="relative mb-6">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-2 border-cyber-violet/50"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-background ${
                      member.availability === 'Available' ? 'bg-cyber-green' : 'bg-cyber-orange'
                    }`} />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-orbitron font-bold mb-1">{member.name}</h3>
                    <p className="text-cyber-violet font-semibold mb-2">{member.role}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      {member.location}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {member.availability}
                    </Badge>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-lg font-orbitron font-bold cyber-gradient-text">
                      {member.experience}
                    </div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                  <div>
                    <div className="text-lg font-orbitron font-bold cyber-gradient-text">
                      {member.projects}
                    </div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-lg font-orbitron font-bold cyber-gradient-text">
                      {member.rating}
                    </div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-cyber-violet/10 text-cyber-violet border-cyber-violet/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <Button variant="ghost" size="sm" className="hover:text-cyber-violet">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:text-cyber-cyan">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:text-cyber-pink">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold mb-4 cyber-gradient-text">
              Ready to Work with Us?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is ready to tackle your next big project. Let's discuss how we can help 
              bring your vision to life with cutting-edge technology and proven expertise.
            </p>
            <Button
              size="lg"
              className="bg-cyber-gradient hover:scale-105 transition-transform neon-glow"
            >
              Start Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}