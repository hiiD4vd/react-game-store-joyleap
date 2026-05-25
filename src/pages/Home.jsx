import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { gamesData } from '../data/mockData';
import GameCard from '../components/GameCard';
import { Play, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

export default function Home() {
  const bannerGames = gamesData.filter(g => g.isBanner);
  // Fallback to all if no banner games, just for visual
  const swiperData = bannerGames.length > 0 ? bannerGames : gamesData.slice(0, 4);
  const promotionGames = gamesData.filter(g => g.isPromoted);

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="flex flex-col h-full overflow-y-auto hide-scrollbar pb-10">
      {/* Banner Carousel */}
      <div className="w-full relative h-[350px] mb-12 flex-shrink-0">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          navigation={true}
          modules={[EffectCoverflow, Navigation]}
          className="w-full h-full pb-8"
        >
          {swiperData.map((game) => (
            <SwiperSlide key={game.id} className="w-[600px] max-w-[80%] h-full">
              {({ isActive }) => (
                <div className={clsx(
                  "relative w-full h-full rounded-3xl overflow-hidden transition-all duration-500",
                  isActive ? "shadow-2xl ring-4 ring-primaryCyan/20" : "opacity-50 blur-[2px]"
                )}>
                  {activeVideo === game.id ? (
                    <iframe
                      src={`${game.trailerUrl}?autoplay=1`}
                      title="Trailer"
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <img src={game.imgUrl} alt={game.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end items-center p-8 text-center">
                        <h2 className="text-4xl sm:text-5xl font-black text-white mb-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">{game.title}</h2>
                        <p className="text-xs sm:text-sm text-slate-200 mb-6 max-w-lg drop-shadow-md">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non nobis, molestiae eum quod qui.
                        </p>
                        <div className="flex items-center gap-4">
                          <button className="px-6 py-2.5 bg-primaryCyan rounded-full text-white font-bold hover:bg-primaryCyanHover transition-colors shadow-neu-flat uppercase text-sm">
                            Order Now
                          </button>
                          <button 
                            onClick={() => setActiveVideo(game.id)}
                            className="w-11 h-11 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/60 transition-colors shadow-neu-flat"
                          >
                            <Play size={20} className="fill-white text-white ml-1" />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                  {activeVideo === game.id && (
                    <button 
                      onClick={() => setActiveVideo(null)}
                      className="absolute top-4 right-4 px-3 py-1 bg-black/60 text-white rounded-full text-xs hover:bg-black/80"
                    >
                      Close Trailer
                    </button>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Promotion Games */}
      <div className="px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold uppercase">Games On Promotion</h2>
          <button className="text-sm text-slate-400 flex items-center gap-1 hover:text-white transition-colors">
            View More Games <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 pb-10">
          {promotionGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}
