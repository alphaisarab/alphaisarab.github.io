import React from 'react';
import { Smartphone, Zap, Lock, RefreshCw, Heart, Globe, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const featureItems = [
  {
    icon: <Smartphone className="text-blue" />,
    title: 'Responsive Design',
    description: 'Perfect on every device, from mobile to desktop.'
  },
  {
    icon: <Zap className="text-blue" />,
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance.'
  },
  {
    icon: <Lock className="text-blue" />,
    title: 'Secure by Default',
    description: 'Your data is protected with industry-leading security.'
  },
  {
    icon: <RefreshCw className="text-blue" />,
    title: 'Regular Updates',
    description: 'Continuous improvements and new features.'
  },
  {
    icon: <Heart className="text-blue" />,
    title: 'User-Friendly',
    description: 'Intuitive interface designed with users in mind.'
  },
  {
    icon: <Globe className="text-blue" />,
    title: 'Global Support',
    description: '24/7 support from our global team.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container-padding">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-light text-blue rounded-full mb-4">
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-5">Amazing Features</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Designed with precision and care to provide the best user experience. Here's what makes us different.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureItems.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "feature-card animate-fade-in", 
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-blue-light flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 glass p-10 md:p-12 rounded-2xl animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-5">
                Everything You Need in One Place
              </h3>
              <p className="text-foreground/80 mb-6">
                We've packaged all the essential features you need into one beautiful, easy-to-use application. No more switching between multiple tools.
              </p>
              
              <ul className="space-y-3">
                {['Advanced analytics', 'Cloud storage', 'Team collaboration', 'Premium support'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-blue mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-white/30 shadow-card">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-light via-white to-blue-light/30 opacity-80"></div>
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm shadow-soft flex items-center justify-center mx-auto mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue flex items-center justify-center">
                        <span className="text-white text-xl font-semibold">S</span>
                      </div>
                    </div>
                    <p className="text-foreground font-medium">Premium Quality</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue to-blue-dark rounded-full blur-3xl opacity-20 animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
