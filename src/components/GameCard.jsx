import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function GameRating({ rating }) {
  const generateStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i key={i} className={`bi bi-star-fill ${i < rating ? 'active' : ''}`}></i>
      );
    }
    return stars;
  };

  return (
    <div className="gameRating">
      {generateStars()}
    </div>
  );
}

function GameCard({ game }) {
  const { library, toggleLibrary, bag, addToBag } = useContext(AppContext);

  const isLiked = library.find(item => item._id === game._id);
  const isInBag = bag.find(item => item._id === game._id);

  const handleLike = (e) => {
    e.preventDefault();
    toggleLibrary(game);
  };

  const handleBag = (e) => {
    e.preventDefault();
    addToBag(game);
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gameCard">
        <img src={game.img} alt={game.title} className="img-fluid" />
        <a href="#" className={`like ${isLiked ? 'active' : ''}`} onClick={handleLike}>
          <i className="bi bi-heart-fill"></i>
        </a>
        <div className="gameFeature">
          <span className="gameType">{game.level}</span>
          <GameRating rating={game.rating} />
        </div>
        <h4 className="gameTitle mt-4 mb-3">{game.title}</h4>
        <div className="gamePrice">
          {game.discount !== 0 && (
            <>
              <span className="discount">
                <i>{game.discount * 100}%</i>
              </span>
              <span className="prevPrice">${game.price.toFixed(2)}</span>
            </>
          )}
          <span className="currentPrice">${((1 - game.discount) * game.price).toFixed(2)}</span>
        </div>
        <a href="#" className={`addBag ${isInBag ? 'active' : ''}`} onClick={handleBag}>
          <i className="bi bi-bag-plus-fill"></i>
        </a>
      </div>
    </div>
  );
}

export default GameCard;
