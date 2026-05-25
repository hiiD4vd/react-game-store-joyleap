import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Library from './pages/Library';
import Bag from './pages/Bag';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home />;
      case 'categories': return <Categories />;
      case 'library': return <Library />;
      case 'bag': return <Bag />;
      default: return <Home />;
    }
  };

  return (
    <div className="w-screen h-screen flex p-4 bg-darkBg">
      {/* Main App Container with cubic shadow */}
      <main className="relative flex w-full h-full rounded-3xl bg-darkBg shadow-neu-flat border border-slate-700/30 overflow-hidden">
        
        {/* Sidebar */}
        <Sidebar activePage={activePage} setActivePage={setActivePage} />

        {/* Content Area */}
        <div className="flex-1 flex flex-col h-full overflow-hidden relative">
          <Header />
          
          {/* Page Content */}
          <div className="flex-1 overflow-hidden">
            {renderPage()}
          </div>
        </div>
      </main>
    </div>
  );
}
