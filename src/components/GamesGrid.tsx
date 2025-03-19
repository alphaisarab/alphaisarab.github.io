
import React from 'react';
import GameCard from './GameCard';

// Sample game data
const games = [
  { id: 1, title: "Pixel Adventure", category: "Platformer" },
  { id: 2, title: "Space Shooter", category: "Arcade" },
  { id: 3, title: "Puzzle Master", category: "Puzzle" },
  { id: 4, title: "Car Racing", category: "Racing" },
  { id: 5, title: "Memory Match", category: "Memory" },
  { id: 6, title: "Zombie Survival", category: "Action" },
  { id: 7, title: "Tetris Clone", category: "Puzzle" },
  { id: 8, title: "Snake Game", category: "Classic" },
];

const GamesGrid = () => {
  return (
    <section id="games" className="py-16 bg-gradient-to-b from-white to-blue-light dark:from-gray-950 dark:to-gray-900">
      <div className="container-padding">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Popular Games</span>
        </h2>
        <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
          Play the best unblocked games directly in your browser. No downloads required.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map(game => (
            <div key={game.id} className="fade-in-on-scroll">
              <GameCard 
                title={game.title}
                category={game.category}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesGrid;
