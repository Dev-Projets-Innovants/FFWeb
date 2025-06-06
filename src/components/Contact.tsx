
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, ExternalLink, Copy, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useState } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, {
      threshold: 0.1
    });
    
    const elements = document.querySelectorAll('[data-animate="true"]');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  const handleEmailClick = () => {
    navigator.clipboard.writeText("dev.projets.innovants@gmail.com");
    setCopied(true);
    toast({
      title: "Email copied to clipboard",
      description: "You can now paste it into your email client."
    });
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  return <section id="contact" className="py-20 px-4 bg-flutter-dark text-white">
      <div className="container mx-auto max-w-4xl text-center opacity-0" data-animate="true">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Build Your Next <span className="text-flutter-primary">Digital Project</span>?
        </h2>
        
        <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">
          Whether you need a website, landing page, or web application, let's create something amazing together with FlutterFlow!
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <Mail className="h-10 w-10 text-flutter-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Me</h3>
            <p className="opacity-80 mb-4">Ready to discuss your project?</p>
            <Button 
              onClick={handleEmailClick}
              variant="outline" 
              className="border-flutter-primary text-flutter-primary hover:bg-flutter-primary hover:text-white"
            >
              dev.projets.innovants@gmail.com
              {!copied ? (
                <Copy className="ml-2 h-4 w-4" />
              ) : (
                <Check className="ml-2 h-4 w-4" />
              )}
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <ExternalLink className="h-10 w-10 text-flutter-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">FlutterFlow Profile</h3>
            <p className="opacity-80 mb-4">More of my work on the FlutterFlow marketplace</p>
            <a href="https://marketplace.flutterflow.io/creator/a133be95dc6a2c59a0453dc15ac8dce90080c3d8" target="_blank" rel="noopener noreferrer">
              <Button className="bg-flutter-primary hover:bg-flutter-secondary">
                Visit FlutterFlow Profile
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>;
};

export default Contact;
