import 'swiper/css/bundle';

import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';

export const swipers = () => {
  const swiperModules = [Autoplay, EffectFade];

  const swipersEl = document.querySelectorAll('[swiper-option]') as NodeListOf<HTMLElement>;
  if (!swipersEl) return;

  swipersEl.forEach((el) => {
    const elAttr = el.getAttribute('swiper-option');
    let settings = {};
    switch (elAttr) {
      case 'areas':
        settings = {
          slidesPerView: 3,
          spaceBetween: 32,
        };
        break;
      case 'testimonial': {
        settings = {
          slidesPerView: 1.5,
          spaceBetween: 32,
        };
        break;
      }
      case 'blog': {
        settings = {
          slidesPerView: 3,
          spaceBetween: 32,
        };
      }
      case 'products': {
        settings = {
          slidesPerView: 3,
          spaceBetween: 32,
        };
      }
    }

    const swiper = new Swiper(el, settings);
  });
};
