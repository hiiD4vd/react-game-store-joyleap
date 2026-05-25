import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { SlidersHorizontal, Heart, ShoppingBag } from 'lucide-react';

export default function Header({ activePage }) {
  const { toggleSidebar, library, bag } = useContext(AppContext);

  return (
    <header className="flex items-center justify-between py-6 px-8">
      {/* Left side: Menu Toggle / Filter Icon */}
      <button 
        onClick={toggleSidebar}
        className="w-10 h-10 flex items-center justify-center rounded-xl bg-darkBg shadow-neu-flat text-slate-300 hover:text-white transition-all active:shadow-neu-pressed"
      >
        <SlidersHorizontal size={20} />
      </button>

      {/* Right side: Counters and Profile */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-darkBg shadow-neu-flat text-slate-300">
            <Heart size={18} className={library.length > 0 ? "text-primaryCyan" : ""} />
            {library.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primaryCyan text-[10px] font-bold text-white flex items-center justify-center">
                {library.length}
              </span>
            )}
          </div>
          
          <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-darkBg shadow-neu-flat text-slate-300">
            <ShoppingBag size={18} className={bag.length > 0 ? "text-primaryCyan" : ""} />
            {bag.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primaryCyan text-[10px] font-bold text-white flex items-center justify-center">
                {bag.length}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-darkBg shadow-neu-flat cursor-pointer hover:bg-slate-800 transition-colors">
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" 
            alt="User" 
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col pr-2">
            <span className="text-xs font-bold text-white leading-tight">User Name</span>
            <span className="text-[10px] text-slate-400">View Profile</span>
          </div>
        </div>
      </div>
    </header>
  );
}
