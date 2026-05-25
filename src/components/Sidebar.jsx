import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Home, LayoutGrid, Heart, ShoppingBag, Gamepad2, MessageCircle, Tv, Share2 } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'categories', icon: LayoutGrid, label: 'Categories' },
  { id: 'library', icon: Heart, label: 'My Library' },
  { id: 'bag', icon: ShoppingBag, label: 'My Bag' },
];

export default function Sidebar({ activePage, setActivePage }) {
  const { isSidebarOpen } = useContext(AppContext);

  return (
    <div
      className={clsx(
        "fixed md:relative z-20 h-full bg-darkBg transition-all duration-300 flex flex-col justify-between rounded-r-3xl shadow-neu-flat border-r border-slate-700/50 py-8",
        isSidebarOpen ? "w-64 translate-x-0" : "-translate-x-full w-0 md:w-20 md:translate-x-0 overflow-hidden"
      )}
    >
      <div>
        <div className="flex items-center justify-center gap-3 mb-12 text-white px-4">
          <Gamepad2 size={isSidebarOpen ? 36 : 28} className="text-white" />
          {isSidebarOpen && <span className="text-3xl font-black tracking-wider">PLAY</span>}
        </div>

        <nav className="flex flex-col gap-4 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={clsx(
                  "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 font-medium",
                  isActive
                    ? "text-primaryCyan shadow-neu-pressed"
                    : "text-slate-400 hover:text-white hover:shadow-neu-flat"
                )}
              >
                <Icon size={20} className={isActive ? "text-primaryCyan" : ""} />
                {isSidebarOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      <div className={clsx("flex justify-center gap-4 px-4", !isSidebarOpen && "flex-col items-center")}>
        <button className="text-slate-400 hover:text-white transition-colors">
          <Gamepad2 size={20} />
        </button>
        <button className="text-slate-400 hover:text-white transition-colors">
          <MessageCircle size={20} />
        </button>
        <button className="text-slate-400 hover:text-white transition-colors">
          <Tv size={20} />
        </button>
        <button className="w-8 h-8 rounded-full bg-primaryCyan flex items-center justify-center text-white shadow-neu-flat">
          <Share2 size={16} />
        </button>
      </div>
    </div>
  );
}
