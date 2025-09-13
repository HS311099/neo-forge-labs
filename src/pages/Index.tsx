import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import FloatingChatbot from '@/components/FloatingChatbot';
import ErrorBoundary from '@/components/ErrorBoundary';

const Index = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  // Apply theme to document
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground custom-scrollbar scroll-snap-y">
        {/* Navigation */}
        <Navigation isDark={isDark} setIsDark={setIsDark} />
        
        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero />
          
          {/* Services Section */}
          <Services />
          
          {/* Team Section */}
          <Team />
          
          {/* Projects Section */}
          <Projects />
          
          {/* Contact Section */}
          <Contact />
        </main>
        
        {/* Floating Chatbot */}
        <FloatingChatbot />
        
        {/* Footer */}
        <footer className="py-12 border-t border-glass-border">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="p-2 bg-cyber-violet/20 rounded-lg">
                  <div className="w-6 h-6 bg-cyber-gradient rounded-sm"></div>
                </div>
                <span className="text-xl font-orbitron font-bold cyber-gradient-text">
                  TechNova
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Crafting next-generation technology solutions across AI, Cloud, Web, Mobile, and DevOps domains.
              </p>
              <div className="flex justify-center gap-6 text-sm text-muted-foreground">
                <span>© 2024 TechNova. All rights reserved.</span>
                <span>•</span>
                <span>Made with 💜 and cutting-edge tech</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
};

export default Index;
