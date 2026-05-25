import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [library, setLibrary] = useState([]);
  const [bag, setBag] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Load from localStorage if needed (optional)
  useEffect(() => {
    const savedLibrary = JSON.parse(localStorage.getItem('library')) || [];
    const savedBag = JSON.parse(localStorage.getItem('bag')) || [];
    setLibrary(savedLibrary);
    setBag(savedBag);
  }, []);

  useEffect(() => {
    localStorage.setItem('library', JSON.stringify(library));
    localStorage.setItem('bag', JSON.stringify(bag));
  }, [library, bag]);

  const toggleLibrary = (game) => {
    setLibrary((prev) => {
      if (prev.find((item) => item.id === game.id)) {
        return prev.filter((item) => item.id !== game.id);
      } else {
        return [...prev, game];
      }
    });
  };

  const addToBag = (game) => {
    setBag((prev) => {
      if (!prev.find((item) => item.id === game.id)) {
        return [...prev, game];
      }
      return prev;
    });
  };

  const removeFromBag = (gameId) => {
    setBag((prev) => prev.filter((item) => item.id !== gameId));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AppContext.Provider
      value={{
        library,
        toggleLibrary,
        bag,
        addToBag,
        removeFromBag,
        searchTerm,
        setSearchTerm,
        isSidebarOpen,
        toggleSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
