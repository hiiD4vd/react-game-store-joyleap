import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

function GameSwiper({ games }) {
  const [activeId, setActiveId] = useState(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  
  const handleToggleVideo = (id) => {
    setActiveId(prev => {
      const isActivating = prev !== id;
      if (swiperInstance && swiperInstance.autoplay) {
        if (isActivating) {
          swiperInstance.autoplay.stop();
        } else {
          swiperInstance.autoplay.start();
        }
      }
      return isActivating ? id : null;
    });
  };

  return (
    <Swiper
      onSwiper={setSwiperInstance}
      effect={'coverflow'}
      grabCursor={true}
      navigation={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className="gameSwiper"
    >
      {games.slice(0, 6).map(game => {
        const isActive = activeId === game._id;
        return (
          <SwiperSlide key={game._id}>
            <div className="gameSlider">
              <img src={game.img} alt={game.title} />
              <div className={`video ${isActive ? 'active' : ''}`}>
                <iframe
                  width="1280"
                  height="720"
                  src={game.trailer}
                  title={game.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="content">
                <h2>{game.title}</h2>
                <p>{game.description}</p>
                <div className="buttons">
                  <a href="#" className="orderBtn">Order Now</a>
                  <a href="#" className={`playBtn ${isActive ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleToggleVideo(game._id); }}>
                    <i className={`bi ${isActive ? 'bi-pause-fill' : 'bi-play-fill'}`}></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default GameSwiper;
