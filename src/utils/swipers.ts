import 'swiper/css/bundle';

import Swiper from 'swiper';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

export const swipers = () => {
  const swiperModules = [Autoplay, EffectFade, Navigation];

  const swipersEl = document.querySelectorAll('[swiper-option]') as NodeListOf<HTMLElement>;
  if (!swipersEl) return;

  swipersEl.forEach((el) => {
    const elAttr = el.getAttribute('swiper-option');

    let settings = {};
    switch (elAttr) {
      case 'areas':
        const elPrev = document.querySelector('[swiper-prev="areas"]');
        const elNext = document.querySelector('[swiper-next="areas"]');
        settings = {
          modules: swiperModules,
          slidesPerView: 3,
          spaceBetween: 32,
          navigation: {
            nextEl: elNext,
            prevEl: elPrev,
          },
          breakpoints: {
            320: {
              slidesPerView: 1.1,
            },
            480: {
              slidesPerView: 2.1,
            },
            992: {
              slidesPerView: 3,
            },
          },
        };
        break;
      case 'testimonial': {
        settings = {
          slidesPerView: 1.5,
          spaceBetween: 32,
          breakpoints: {
            320: {
              slidesPerView: 1.1,
            },
            // 768: {
            //   slidesPerView: 1.1,
            // },
            992: {
              slidesPerView: 1.5,
            },
          },
        };
        break;
      }
      case 'blog': {
        settings = {
          slidesPerView: 3,
          spaceBetween: 32,
          breakpoints: {
            320: {
              slidesPerView: 1.1,
            },
            480: {
              slidesPerView: 2.1,
            },
            992: {
              slidesPerView: 3,
            },
          },
        };
        break;
      }
      case 'products': {
        settings = {
          slidesPerView: 3,
          spaceBetween: 32,
          breakpoints: {
            320: {
              slidesPerView: 1.1,
            },
            768: {
              slidesPerView: 2.1,
            },
            992: {
              slidesPerView: 3,
            },
          },
        };
        break;
      }
      default:
        break;
    }

    const swiper = new Swiper(el, settings);
  });
};
