
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-flutter-dark border-t border-white/10 text-white py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-flutter-primary font-bold text-2xl">
              FlutterFlow
              <span className="text-white">Gems</span>
            </span>
            <p className="mt-2 text-white/70 max-w-md">
              Premium web experiences built with FlutterFlow.
              Fast, beautiful, powerful websites for your business.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-white/70 hover:text-flutter-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-flutter-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-flutter-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} FlutterFlowGems. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
