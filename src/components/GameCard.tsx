
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import GameTitle from './GameTitle';
import { Gamepad2 } from 'lucide-react';

interface GameCardProps {
  title: string;
  image?: string;
  category?: string;
  onClick?: () => void;
}

const GameCard = ({ title, image, category = 'Arcade', onClick }: GameCardProps) => {
  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-sidebar-accent dark:border-sidebar-border group"
      onClick={onClick}
    >
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-blue/10 dark:bg-blue/5">
            <Gamepad2 className="w-12 h-12 text-blue opacity-40" />
          </div>
        )}
        <div className="absolute top-2 right-2 bg-primary/10 backdrop-blur-sm text-xs py-1 px-2 rounded-full">
          {category}
        </div>
      </div>
      <CardContent className="p-4">
        <GameTitle title={title} className="text-2xl text-center" />
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-center">
        <button className="px-4 py-2 bg-blue hover:bg-blue-dark text-white rounded-full text-sm transition-colors">
          Play Now
        </button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
