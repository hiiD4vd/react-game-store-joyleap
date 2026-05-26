import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

function GameSwiper({ games }) {
  const [active, setActive] = useState(false);
  
  const handleToggleVideo = () => {
    setActive(!active);
  };

  return (
    <Swiper
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
      {games.filter(game => game.isBanner).map(game => (
        <SwiperSlide key={game.id}>
          <div className="gameSlider">
            <img src={game.imgUrl} alt={game.title} />
            <div className={`video ${active ? 'active' : ''}`}>
              <iframe
                width="1280"
                height="720"
                src={game.trailerUrl}
                title={game.title}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="content">
              <h2>{game.title}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non nobis, molestiae eum quod qui.</p>
              <div className="buttons">
                <a href="#" className="orderBtn">Order Now</a>
                <a href="#" className={`playBtn ${active ? 'active' : ''}`} onClick={handleToggleVideo}>
                  <i className={`bi ${active ? 'bi-pause-fill' : 'bi-play-fill'}`}></i>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default GameSwiper;
