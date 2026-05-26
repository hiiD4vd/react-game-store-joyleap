import React, { useContext } from 'react';
import GameCard from '../components/GameCard';
import { AppContext } from '../context/AppContext';

function MyBag({ active }) {
  const { bag } = useContext(AppContext);
  const total = bag.reduce((acc, game) => acc + (game.price || 0), 0);

  return (
    <section id="bag" className={`bag ${active ? 'active' : ''}`}>
      <div className="container-fluid mt-2">
        <div className="row mb-4">
          <div className="col-lg-6">
            <h1>My Bag</h1>
          </div>
          <div className="col-lg-6 d-flex justify-content-end align-items-center text-white">
            <h4>Total: ${total.toFixed(2)}</h4>
          </div>
        </div>
        <div className="row">
          {bag.length === 0 ? (
            <div className="col-12 text-center text-white-50 mt-5">
              <h4>Your bag is empty</h4>
              <p>Add some awesome games to your bag!</p>
            </div>
          ) : (
            bag.map(game => (
              <GameCard key={game._id} game={game} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default MyBag;
