import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import GameCard from '../components/GameCard';

export default function Library() {
  const { library } = useContext(AppContext);

  return (
    <div className="flex flex-col h-full px-8 pb-10 overflow-y-auto hide-scrollbar">
      <h2 className="text-3xl font-black mb-8 mt-2">My Library</h2>
      
      {library.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
          {library.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center flex-1 text-slate-400">
          <p className="text-2xl font-bold mb-2">Your library is empty</p>
          <p>Click the heart icon on any game to add it to your library.</p>
        </div>
      )}
    </div>
  );
}
