import React from 'react';

const NavListItem = ({ name, icon, target, active, onClick }) => {
  return (
    <li>
      <a href="#" className={active ? 'active' : ''} onClick={(e) => {
        e.preventDefault();
        onClick(target);
      }}>
        <i className={`bi ${icon}`}></i>
        <span className="navName">{name}</span>
      </a>
    </li>
  );
};

function SideMenu({ active, onNavClick, activeSection }) {
  return (
    <div className={`sideMenu ${active ? 'active' : ''}`}>
      <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Play</span>
      </a>
      <ul className="nav">
        <NavListItem name="Home" icon="bi-house-door" target="home" active={activeSection === 'home'} onClick={onNavClick} />
        <NavListItem name="Categories" icon="bi-window" target="categories" active={activeSection === 'categories'} onClick={onNavClick} />
        <NavListItem name="My Library" icon="bi-heart" target="library" active={activeSection === 'library'} onClick={onNavClick} />
        <NavListItem name="My Bag" icon="bi-bag" target="bag" active={activeSection === 'bag'} onClick={onNavClick} />
      </ul>
      <ul className="social">
        <li>
          <a href="#">
            <i className="bi bi-meta"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-twitter-x"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-youtube"></i>
          </a>
        </li>
        <li>
          <a href="#" className="share">
            <i className="bi bi-share"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
