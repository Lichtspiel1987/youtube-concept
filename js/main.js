const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
  
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  });

/*Рекоммендации*/
  const swiperRecomendation = new Swiper('.channel-slider-recomendations', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
  
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-rec-next',
      prevEl: '.channel-button-rec-prev',
    },
  });

  /*Рекоммендации+*/
  const swiperFood = new Swiper('.channel-slider-fd', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
  
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-fd-next',
      prevEl: '.channel-button-fd-prev',
    },
  });