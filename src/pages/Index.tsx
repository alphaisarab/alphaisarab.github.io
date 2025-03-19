import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import GamesGrid from '../components/GamesGrid';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Add intersection observer for animation on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.fade-in-on-scroll');
    hiddenElements.forEach(el => observer.observe(el));

    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <GamesGrid />
      <Features />
      <section id="download" className="py-24 bg-gradient-to-b from-transparent to-secondary/50 dark:to-gray-900/50 overflow-hidden">
        <div className="container-padding relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue/10 dark:bg-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue/10 dark:bg-blue/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-5xl mx-auto text-center glass p-10 md:p-16 relative z-10 dark:bg-gray-900/30 dark:backdrop-blur-xl dark:border-white/10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-5 dark:text-white">Ready to Play Anytime?</h2>
            <p className="text-lg text-foreground/80 dark:text-foreground/60 max-w-2xl mx-auto mb-10">
              Join thousands of players who are already enjoying our games. No restrictions, no downloads, just pure fun!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#games" className="button-primary">
                Start Playing Now
              </a>
              <a href="#categories" className="button-secondary dark:bg-blue/20 dark:text-white">
                Browse Categories
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
