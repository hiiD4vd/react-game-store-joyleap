import React, { useContext } from 'react';
import GameCard from '../components/GameCard';
import { AppContext } from '../context/AppContext';

function MyLibrary({ active }) {
  const { library } = useContext(AppContext);

  return (
    <section id="library" className={`library ${active ? 'active' : ''}`}>
      <div className="container-fluid mt-2">
        <div className="row mb-4">
          <div className="col-lg-12">
            <h1>My Library</h1>
          </div>
        </div>
        <div className="row">
          {library.length === 0 ? (
            <div className="col-12 text-center text-white-50 mt-5">
              <h4>Your library is empty</h4>
              <p>Explore games and click the heart icon to add them to your library.</p>
            </div>
          ) : (
            library.map(game => (
              <GameCard key={game._id} game={game} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default MyLibrary;
