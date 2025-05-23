
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-flutter-dark border-t border-white/10 text-white py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-flutter-primary font-bold text-2xl">
              FF<span className="text-white">Web</span>
            </span>
            <p className="mt-2 text-white/70 max-w-md">
              Premium web experiences built with FlutterFlow.
              Fast, beautiful, powerful websites for your business.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/Wambaforestin" className="text-white/70 hover:text-flutter-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/wambaforestin/" className="text-white/70 hover:text-flutter-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} FFWeb. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
