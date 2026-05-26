import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import Home from './Home';
import Categories from './Categories';
import MyLibrary from './MyLibrary';
import MyBag from './MyBag';
import { gamesData } from '../data/mockData';

function Main() {
  const [active, setActive] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const handleToggleActive = () => {
    setActive(!active);
  };

  const handleSectionActive = (target) => {
    setActiveSection(target);
  };

  return (
    <main>
      <SideMenu active={active} onNavClick={handleSectionActive} activeSection={activeSection} />
      <div className={`banner ${active ? 'active' : ''}`}>
        <Header toggleActive={handleToggleActive} />
        <div className="container-fluid">
          <Home games={gamesData} active={activeSection === 'home'} onViewMore={() => handleSectionActive('categories')} />
          <Categories games={gamesData} active={activeSection === 'categories'} />
          <MyLibrary games={gamesData} active={activeSection === 'library'} />
          <MyBag games={gamesData} active={activeSection === 'bag'} />
        </div>
      </div>
    </main>
  );
}

export default Main;
