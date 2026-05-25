import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { categories, gamesData } from '../data/mockData';
import GameCard from '../components/GameCard';
import { Search } from 'lucide-react';
import clsx from 'clsx';

export default function Categories() {
  const { searchTerm, setSearchTerm } = useContext(AppContext);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredGames = gamesData.filter(game => {
    const matchCategory = activeFilter === 'ALL' || game.category === activeFilter;
    const matchSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="flex flex-col h-full px-8 pb-10 overflow-y-auto hide-scrollbar">
      {/* Top Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 mt-2">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={clsx(
                "px-5 py-2 rounded-xl text-sm font-bold uppercase transition-all duration-300",
                activeFilter === cat 
                  ? "bg-primaryCyan text-white shadow-neu-pressed" 
                  : "bg-darkBg text-slate-400 shadow-neu-flat hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-11 pl-12 pr-4 bg-darkBg shadow-neu-pressed rounded-xl border-none outline-none text-white text-sm focus:ring-1 focus:ring-primaryCyan transition-all placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {filteredGames.length > 0 ? (
          filteredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-slate-400">
            <p className="text-xl font-bold">No games found.</p>
            <p>Try adjusting your filters or search term.</p>
          </div>
        )}
      </div>
    </div>
  );
}
