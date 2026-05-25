import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import clsx from 'clsx';

export default function GameCard({ game }) {
  const { library, toggleLibrary, bag, addToBag } = useContext(AppContext);

  const isLiked = library.some(item => item.id === game.id);
  const isInBag = bag.some(item => item.id === game.id);

  return (
    <div className="relative bg-darkCard rounded-2xl p-4 shadow-neu-flat flex flex-col gap-3 group">
      {/* Heart Icon Top Right */}
      <button 
        onClick={() => toggleLibrary(game)}
        className="absolute top-6 right-6 z-10 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-colors"
      >
        <Heart size={16} className={clsx("transition-colors", isLiked ? "fill-primaryCyan text-primaryCyan" : "text-white")} />
      </button>

      {/* Image */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-2">
        <img 
          src={game.imgUrl} 
          alt={game.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Badge */}
        <div className="absolute bottom-3 left-3 px-3 py-1 bg-primaryCyan rounded-full text-xs font-bold text-white shadow-lg">
          {game.badge}
        </div>
        {/* Rating */}
        <div className="absolute bottom-3 right-3 flex gap-0.5 drop-shadow-md">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={i < game.rating ? "fill-primaryCyan text-primaryCyan" : "fill-slate-600 text-slate-600"} 
            />
          ))}
        </div>
      </div>

      {/* Details */}
      <h3 className="font-bold text-white uppercase text-sm truncate">{game.title}</h3>
      
      <div className="flex items-center gap-3 mt-auto">
        {game.discount > 0 && (
          <span className="px-2 py-0.5 bg-priceRed rounded-md text-xs font-black text-white">
            {game.discount}%
          </span>
        )}
        <span className="text-xs text-slate-400 font-medium line-through">
          ${game.originalPrice.toFixed(2)}
        </span>
        <span className="text-sm font-black text-white ml-auto">
          ${game.price.toFixed(2)}
        </span>
      </div>

      {/* Add to Bag Button Bottom Right */}
      <button 
        onClick={() => addToBag(game)}
        className={clsx(
          "absolute -bottom-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110",
          isInBag ? "bg-slate-500 cursor-not-allowed" : "bg-primaryCyan"
        )}
        disabled={isInBag}
      >
        <ShoppingBag size={18} className="text-white" />
      </button>
    </div>
  );
}
