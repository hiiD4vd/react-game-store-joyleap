import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Trash2, CreditCard } from 'lucide-react';

export default function Bag() {
  const { bag, removeFromBag } = useContext(AppContext);

  const totalPrice = bag.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col h-full px-8 pb-10 overflow-y-auto hide-scrollbar">
      <h2 className="text-3xl font-black mb-8 mt-2">My Bag</h2>
      
      {bag.length > 0 ? (
        <div className="bg-darkBg shadow-neu-flat rounded-3xl p-6 md:p-8 flex-1 overflow-x-auto border border-slate-700/30">
          <table className="w-full text-left min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-700/50 text-slate-100 font-bold">
                <th className="py-4 px-2">No.</th>
                <th className="py-4 px-2">Preview</th>
                <th className="py-4 px-2">Game</th>
                <th className="py-4 px-2">Price</th>
                <th className="py-4 px-2">Discount</th>
                <th className="py-4 px-2">Payment</th>
                <th className="py-4 px-2 text-center">Remove</th>
              </tr>
            </thead>
            <tbody>
              {bag.map((game, idx) => (
                <tr key={game.id} className="border-b border-slate-700/30 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-2 font-bold">{idx + 1}</td>
                  <td className="py-4 px-2">
                    <img src={game.imgUrl} alt={game.title} className="w-24 h-16 object-cover rounded-lg shadow-md" />
                  </td>
                  <td className="py-4 px-2 font-medium">{game.title}</td>
                  <td className="py-4 px-2 text-slate-400 font-medium">${game.originalPrice.toFixed(2)}</td>
                  <td className="py-4 px-2">
                    {game.discount > 0 ? (
                      <span className="font-medium text-slate-300">{game.discount}%</span>
                    ) : (
                      <span className="text-slate-500">-</span>
                    )}
                  </td>
                  <td className="py-4 px-2 font-black">${game.price.toFixed(2)}</td>
                  <td className="py-4 px-2 text-center">
                    <button 
                      onClick={() => removeFromBag(game.id)}
                      className="w-10 h-10 inline-flex items-center justify-center rounded-xl hover:bg-slate-700 text-priceRed transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-700/50 pt-8">
            <span className="text-lg font-bold">Total Items: {bag.length}</span>
            <div className="flex items-center gap-6">
              <span className="text-2xl font-black">Total: <span className="text-primaryCyan">${totalPrice.toFixed(2)}</span></span>
              <button className="flex items-center gap-2 px-6 py-3 bg-darkBg shadow-neu-flat hover:shadow-neu-pressed rounded-xl font-bold transition-all text-white border border-slate-700/50">
                Check out <CreditCard size={18} className="text-primaryCyan" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center flex-1 text-slate-400">
          <p className="text-2xl font-bold mb-2">Your shopping bag is empty</p>
          <p>Go to Home or Categories to find games you'll love.</p>
        </div>
      )}
    </div>
  );
}
