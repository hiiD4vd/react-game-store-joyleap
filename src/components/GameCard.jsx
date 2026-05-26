import React from 'react';

function GameRating({ rating }) {
  const generateStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i key={i} className={`bi bi-star-fill ${i < rating ? 'active' : ''}`} style={{ color: i < rating ? 'var(--primary)' : '#555', fontSize: '10px', marginLeft: '2px' }}></i>
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
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gameCard">
        <img src={game.imgUrl} alt={game.title} className="img-fluid" />
        <a href="#" className="like">
          <i className="bi bi-heart-fill"></i>
        </a>
        <div className="gameFeature">
          <span className="gameType">{game.badge}</span>
          <GameRating rating={game.rating} />
        </div>
        <h4 className="gameTitle mt-4 mb-3">{game.title}</h4>
        <div className="gamePrice">
          {game.discount !== 0 && (
            <>
              <span className="discount">
                <i>{game.discount}%</i>
              </span>
              <span className="prevPrice">${game.originalPrice.toFixed(2)}</span>
            </>
          )}
          <span className="currentPrice">${game.price.toFixed(2)}</span>
        </div>
        <a href="#" className="addBag">
          <i className="bi bi-bag-plus-fill"></i>
        </a>
      </div>
    </div>
  );
}

export default GameCard;
