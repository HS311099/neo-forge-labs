import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Calendar,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
}

interface TeamMember {
  name: string;
  domain: string;
  availability: string;
  match: number;
}

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-greeting after 15 seconds
  useEffect(() => {
    if (!userInteracted) {
      const timer = setTimeout(() => {
        setShowGreeting(true);
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [userInteracted]);

  // Initial greeting when opening chat
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage: Message = {
        id: Date.now().toString(),
        content: "👋 Hi! I'm Jarvis, your AI assistant. I'm here to help you find the perfect tech solution for your project. What are you looking to build?",
        isBot: true,
        timestamp: new Date(),
        suggestions: [
          "I need an AI solution",
          "Looking for web development",
          "Cloud architecture help",
          "Mobile app development",
          "DevOps consultation"
        ]
      };
      setMessages([initialMessage]);
    }
  }, [isOpen, messages.length]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simulate bot responses
  const generateBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    let response = "";
    let suggestions: string[] = [];
    let recommendedTeam: TeamMember[] = [];

    // Simple NLU simulation
    if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('ml')) {
      response = "Great choice! AI and Machine Learning are our strongest domains. I can connect you with our AI specialists who have delivered 15+ successful projects with 95% expertise rating.";
      suggestions = ["What AI technologies do you use?", "Show me AI project examples", "Schedule consultation"];
      recommendedTeam = [
        { name: "Dr. Sarah Chen", domain: "AI/ML", availability: "Available this week", match: 98 },
        { name: "Marcus Rodriguez", domain: "Deep Learning", availability: "Available next week", match: 92 }
      ];
    } else if (lowerMessage.includes('web') || lowerMessage.includes('website') || lowerMessage.includes('full-stack')) {
      response = "Excellent! Full-stack web development is our most popular service with 35+ completed projects. We specialize in modern frameworks and scalable architectures.";
      suggestions = ["What frameworks do you use?", "Show web development portfolio", "Get project estimate"];
      recommendedTeam = [
        { name: "Alex Thompson", domain: "Full-Stack", availability: "Available now", match: 96 },
        { name: "Emma Wilson", domain: "Frontend", availability: "Available this week", match: 94 }
      ];
    } else if (lowerMessage.includes('cloud') || lowerMessage.includes('aws') || lowerMessage.includes('azure')) {
      response = "Perfect! Our cloud architecture team has extensive experience with AWS, Azure, and GCP. We've delivered 22+ cloud projects with 92% expertise rating.";
      suggestions = ["Which cloud platform is best for me?", "Show cloud architecture examples", "Discuss my infrastructure needs"];
      recommendedTeam = [
        { name: "David Kumar", domain: "Cloud Architecture", availability: "Available this week", match: 94 },
        { name: "Lisa Park", domain: "DevOps", availability: "Available next week", match: 89 }
      ];
    } else if (lowerMessage.includes('mobile') || lowerMessage.includes('app') || lowerMessage.includes('ios') || lowerMessage.includes('android')) {
      response = "Mobile development is a fantastic choice! We create both native and cross-platform apps with 18+ successful launches and 89% expertise rating.";
      suggestions = ["Native vs Cross-platform?", "Show mobile app portfolio", "Discuss app features"];
      recommendedTeam = [
        { name: "Jordan Lee", domain: "Mobile Dev", availability: "Available this week", match: 91 },
        { name: "Priya Sharma", domain: "UI/UX", availability: "Available now", match: 87 }
      ];
    } else if (lowerMessage.includes('schedule') || lowerMessage.includes('meeting') || lowerMessage.includes('consultation')) {
      response = "I'd be happy to schedule a consultation for you! Let me know your preferred time and I'll set up a meeting with the most suitable team member.";
      suggestions = ["This week", "Next week", "Show available slots"];
    } else if (lowerMessage.includes('budget') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
      response = "Our pricing is competitive and tailored to your specific needs. Let me understand your project scope better to provide an accurate estimate.";
      suggestions = ["Small project ($5K-$20K)", "Medium project ($20K-$50K)", "Enterprise project ($50K+)"];
    } else {
      response = "Thanks for reaching out! To better assist you, could you tell me more about your project requirements? I can then recommend the best team members and provide relevant information.";
      suggestions = ["I need technical consultation", "Looking for a development team", "Want to see your portfolio", "Schedule a call"];
    }

    return {
      id: Date.now().toString(),
      content: response,
      isBot: true,
      timestamp: new Date(),
      suggestions: suggestions.length > 0 ? suggestions : undefined
    };
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setUserInteracted(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = generateBotResponse(input);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const openChat = () => {
    setIsOpen(true);
    setShowGreeting(false);
    setUserInteracted(true);
  };

  return (
    <>
      {/* Greeting Notification */}
      <AnimatePresence>
        {showGreeting && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 100, y: 20 }}
            className="fixed bottom-32 right-6 z-50 max-w-sm"
          >
            <div className="glass p-4 rounded-lg border border-cyber-violet/50 cursor-pointer"
                 onClick={openChat}>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-cyber-violet/20 rounded-full">
                  <Bot className="h-5 w-5 text-cyber-violet" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium mb-1">Hi! I'm Jarvis 👋</p>
                  <p className="text-xs text-muted-foreground">
                    Need help with your tech project? I'm here to assist!
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowGreeting(false);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] z-50"
          >
            <div className="glass rounded-lg border border-cyber-violet/50 h-full flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-glass-border">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="p-2 bg-cyber-violet/20 rounded-full">
                      <Bot className="h-5 w-5 text-cyber-violet" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyber-green rounded-full animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Jarvis AI</h3>
                    <p className="text-xs text-muted-foreground">Your Tech Consultant</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    {message.isBot && (
                      <div className="p-1.5 bg-cyber-violet/20 rounded-full flex-shrink-0">
                        <Bot className="h-4 w-4 text-cyber-violet" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isBot
                          ? 'bg-muted/50 text-foreground'
                          : 'bg-cyber-gradient text-white'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      {message.suggestions && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {message.suggestions.map((suggestion, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="cursor-pointer hover:bg-cyber-violet/20 text-xs"
                              onClick={() => handleSuggestionClick(suggestion)}
                            >
                              {suggestion}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    {!message.isBot && (
                      <div className="p-1.5 bg-cyber-cyan/20 rounded-full flex-shrink-0">
                        <User className="h-4 w-4 text-cyber-cyan" />
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <div className="p-1.5 bg-cyber-violet/20 rounded-full">
                      <Bot className="h-4 w-4 text-cyber-violet" />
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-cyber-violet rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-cyber-violet rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-cyber-violet rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-glass-border">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                    placeholder="Ask me about your project..."
                    className="flex-1 bg-background/50"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-cyber-gradient hover:scale-105 transition-transform"
                    disabled={!input.trim() || isTyping}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="w-16 h-16 rounded-full bg-cyber-gradient hover:scale-105 transition-all duration-300 neon-glow relative"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Notification Badge */}
          {showGreeting && !isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-cyber-cyan rounded-full flex items-center justify-center"
            >
              <Zap className="h-3 w-3 text-background" />
            </motion.div>
          )}
        </Button>
      </motion.div>
    </>
  );
}