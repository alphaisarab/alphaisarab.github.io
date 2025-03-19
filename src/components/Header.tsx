
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, Gamepad2 } from "lucide-react";
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 md:py-5", 
        isScrolled 
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container-padding flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue to-blue-dark flex items-center justify-center">
              <Gamepad2 className="text-white h-5 w-5" />
            </div>
            <span className="font-autumn text-2xl hidden sm:block">UnblockedGames</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-10">
          {['Games', 'Categories', 'New', 'Popular'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="link-item"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <a href="#games" className="button-primary">
            Play Now
          </a>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button 
            className="text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 shadow-md animate-fade-in">
          <div className="container-padding py-6 flex flex-col space-y-6">
            <nav className="flex flex-col space-y-4">
              {['Games', 'Categories', 'New', 'Popular'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="link-item text-lg py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
            <a href="#games" className="button-primary w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Play Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
