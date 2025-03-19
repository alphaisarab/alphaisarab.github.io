
import React, { useEffect, useRef } from 'react';
import { Gamepad2, Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import GameTitle from './GameTitle';

const Hero = () => {
  const deviceRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!deviceRef.current) return;
      
      const { left, top, width, height } = deviceRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      deviceRef.current.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen pt-28 pb-16 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -right-20 w-64 h-64 bg-blue/10 dark:bg-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-blue/10 dark:bg-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-padding relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-blue-light dark:bg-blue/20 text-blue rounded-full mb-6 animate-fade-in">
            <span className="text-sm font-medium flex items-center gap-2">
              <Gamepad2 size={16} />
              Play Anywhere, Anytime
            </span>
          </div>
          
          <GameTitle title="Unblocked Games" className="mb-6 animate-fade-in text-6xl md:text-7xl bg-gradient-to-r from-blue to-blue-dark bg-clip-text text-transparent" />
          
          <p className="text-lg md:text-xl text-foreground/80 dark:text-foreground/60 max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Play the best free online games without restrictions. No downloads, no installations - just play!
          </p>
          
          <div className="relative max-w-lg mx-auto mb-16 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search for games..." 
                className="pl-12 pr-4 py-6 rounded-full text-base shadow-md"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full h-10" size="sm">
                Search
              </Button>
            </div>
          </div>
        </div>
        
        <div 
          ref={deviceRef}
          className="max-w-3xl w-full mx-auto transition-all duration-300 animate-fade-in-fast" 
          style={{ animationDelay: "400ms" }}
        >
          <div className="bg-gradient-to-br from-blue-light to-white dark:from-blue/20 dark:to-gray-800/50 p-3 rounded-2xl shadow-card overflow-hidden">
            <div className="aspect-video bg-blue rounded-xl relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue to-blue-dark opacity-90"></div>
              <div className="absolute inset-0 grid place-items-center text-white">
                <div className="text-center">
                  <Gamepad2 size={48} className="mx-auto mb-2 opacity-80" />
                  <span className="text-2xl font-medium">Ready to Play?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
