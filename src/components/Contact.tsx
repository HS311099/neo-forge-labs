import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Calendar,
  MessageSquare,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  company: string;
  project: string;
  budget: string;
  timeline: string;
  message: string;
  domains: string[];
}

const projectDomains = [
  { id: 'ai', label: 'AI & Machine Learning', color: 'cyber-violet' },
  { id: 'cloud', label: 'Cloud Architecture', color: 'cyber-cyan' },
  { id: 'web', label: 'Full-Stack Web', color: 'cyber-pink' },
  { id: 'mobile', label: 'Mobile Development', color: 'cyber-green' },
  { id: 'devops', label: 'DevOps & Security', color: 'cyber-orange' }
];

const budgetRanges = [
  '$5K - $20K',
  '$20K - $50K',
  '$50K - $100K',
  '$100K+'
];

const timelines = [
  '1-2 months',
  '3-6 months',
  '6-12 months',
  '12+ months'
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    timeline: '',
    message: '',
    domains: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDomainToggle = (domainId: string) => {
    setFormData(prev => ({
      ...prev,
      domains: prev.domains.includes(domainId)
        ? prev.domains.filter(d => d !== domainId)
        : [...prev.domains, domainId]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        budget: '',
        timeline: '',
        message: '',
        domains: []
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 relative scroll-snap-start">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="glass p-12 rounded-xl">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-20 h-20 mx-auto mb-6 bg-cyber-green/20 rounded-full flex items-center justify-center"
              >
                <CheckCircle className="h-10 w-10 text-cyber-green" />
              </motion.div>
              
              <h2 className="text-3xl font-orbitron font-bold mb-4 cyber-gradient-text">
                Message Sent Successfully!
              </h2>
              <p className="text-muted-foreground mb-8">
                Thank you for reaching out! Our team will review your project requirements 
                and get back to you within 24 hours. In the meantime, feel free to chat 
                with Jarvis for immediate assistance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="glass border-cyber-violet/50"
                >
                  Send Another Message
                </Button>
                <Button className="bg-cyber-gradient">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 relative scroll-snap-start">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="cyber-gradient-text">Let's Build Something Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Our team of experts is here to help 
            you navigate the future of technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-orbitron font-bold mb-6 cyber-gradient-text">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyber-violet/20 rounded-lg">
                    <Mail className="h-6 w-6 text-cyber-violet" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">hello@technova.ai</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyber-cyan/20 rounded-lg">
                    <Phone className="h-6 w-6 text-cyber-cyan" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyber-pink/20 rounded-lg">
                    <MapPin className="h-6 w-6 text-cyber-pink" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-xl">
              <h3 className="text-xl font-orbitron font-bold mb-4 cyber-gradient-text">
                Quick Start Options
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-cyber-green" />
                  <span className="text-sm">Chat with Jarvis AI (bottom-right)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-cyber-violet" />
                  <span className="text-sm">Send us your requirements</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-cyber-cyan" />
                  <span className="text-sm">Get your project started in 24h</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-6">
              <h3 className="text-2xl font-orbitron font-bold mb-6 cyber-gradient-text">
                Start Your Project
              </h3>

              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <Input
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    placeholder="Web app, mobile app, etc."
                    className="bg-background/50"
                  />
                </div>
              </div>

              {/* Project Domains */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Areas of Interest (select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectDomains.map((domain) => (
                    <Badge
                      key={domain.id}
                      variant={formData.domains.includes(domain.id) ? "default" : "outline"}
                      className={`cursor-pointer transition-all ${
                        formData.domains.includes(domain.id)
                          ? "bg-cyber-gradient neon-glow"
                          : "hover:border-cyber-violet/60"
                      }`}
                      onClick={() => handleDomainToggle(domain.id)}
                    >
                      {domain.label}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Budget and Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                    className="w-full p-3 rounded-lg bg-background/50 border border-input"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                    className="w-full p-3 rounded-lg bg-background/50 border border-input"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Details *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your project, requirements, and goals..."
                  rows={4}
                  required
                  className="bg-background/50"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyber-gradient hover:scale-105 transition-all neon-glow"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our terms of service and privacy policy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}