var swiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 800,
  grabCursor: true, // 마우스 커서가 '잡는 손 모양'으로 변경
  // mousewheel: true, // 마우스 휠로 슬라이드 가능
  simulateTouch: true,
  
  pagination: {
    el: ".swiper-pagination",
  },
  // autoplay: {
  //   delay: 3200,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // 페이지네이션 클릭 가능
  },
});
