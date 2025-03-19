
import React from 'react';
import { Github, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-secondary/50">
      <div className="container-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue to-blue-dark flex items-center justify-center">
                  <span className="text-white font-semibold text-xl">S</span>
                </div>
                <span className="font-medium text-xl">SideStyle</span>
              </div>
              <p className="text-foreground/80 mb-6 max-w-md">
                Crafting beautiful digital experiences with attention to detail and focus on simplicity.
              </p>
              <div className="flex space-x-5">
                <a href="#" className="text-foreground/70 hover:text-blue transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="text-foreground/70 hover:text-blue transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-foreground/70 hover:text-blue transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-foreground/70 hover:text-blue transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-5">Product</h5>
              <ul className="space-y-4">
                {['Features', 'Pricing', 'Download', 'Updates'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-foreground/70 hover:text-blue transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium mb-5">Company</h5>
              <ul className="space-y-4">
                {['About', 'Blog', 'Careers', 'Contact'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-foreground/70 hover:text-blue transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-foreground/70 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} SideStyle. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-foreground/70">
              <span>Made with</span>
              <Heart size={14} className="text-blue fill-blue" />
              <span>in the digital world</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
