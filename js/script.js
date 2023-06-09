/*var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });*/

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    breakpoints: {
        1000: {
            slidesPerView: 3,
            spaceBetween: 15,
        },

        768: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        484: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        280: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        100: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },


    navigation: {
        nextEl: "#swiper-button-next-1",
        prevEl: "#swiper-button-prev-1",
    },
});



