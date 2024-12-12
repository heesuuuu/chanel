
/*-----------------------------------------------------------*/
/* MAIN DESC                                               */
/*-----------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector(".desc-title");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        target.classList.add("visible"); // 요소가 보이면 클래스 추가
      } else {
        target.classList.remove("visible"); // 요소가 벗어나면 클래스 제거
      }
    },
    {
      threshold: 0.5, // 요소가 50% 보일 때 동작
    }
  );

  if (target) {
    observer.observe(target);
  }
});

// product | category motion
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item-box, .item-btn");
  const ctgMenuBoxes = document.querySelectorAll(".ctg-menu__box");
  const handleScroll = () => {
    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        const delay = `${index * 0.2}s`; // 각 요소에 0.2초씩 딜레이 추가
        item.style.setProperty("--delay", delay);
        item.classList.add("motion-visible");
      } else {
        item.classList.remove("motion-visible");
        item.style.removeProperty("--delay");
      }
    });
    ctgMenuBoxes.forEach((box, index) => {
      const rect = box.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;


      if (isVisible) {
        const delay = `${index * 0.2}s`; // 각 박스 딜레이
        box.style.setProperty("--delay", delay);
        box.classList.add("motion-visible");
      } else {
        box.classList.remove("motion-visible");
        box.style.removeProperty("--delay");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  // 초기에 실행
  handleScroll();
});



// .all-menu 를 클릭했을 때
// #nav-all 에게 .active 클래스를 추가한다.
$(".all-menu").click(function () {
  $("#nav-all").addClass("active");
});

// #nav-all .close 를 클릭했을 때
// #nav-all 에게 .active 클래스를 제거한다.
$("#nav-all .close").click(function () {
  $("#nav-all").removeClass("active");
});

$("#gnb").mouseenter(function () {
  $("#header").addClass("active");
});

$("#gnb").mouseleave(function () {
  $("#header").removeClass("active");
});

$(".lang__btn").click(function () {
  $(".lang__lst").show();
});

$(".lang__lst li").click(function () {
  $(".lang__lst").hide();
});


/*-----------------------------------------------------------*/
/*cocovideo play js                                              */
/*-----------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  // vid-playcircle 요소를 선택
  const playButton = document.querySelector(".vid-playcircle");
  const video = document.querySelector(".cocovid-boxvid");
  const audioOffIcon = document.querySelector(".audio-off"); // 음소거 아이콘
  const audioOnIcon = document.querySelector(".audio-on"); // 소리 켜짐 아이콘
  const audioToggle = document.querySelectorAll(".sound"); // 오디오 토글 버튼


  video.muted = true; //초기 상태: 음소거 및 음소거 아이콘 표시
  audioOffIcon.style.display = "block";
  audioOnIcon.style.display = "none";


  // 클릭 이벤트 리스너 추가
  playButton.addEventListener("click", function () {
    // 비디오가 재생 중이 아니라면 재생
    if (video.paused) {
      video.play();
      playButton.style.display = "none"; // play 버튼 숨기기
    } else {
      video.pause();
      playButton.style.display = "block"; // play 버튼 다시 보이기
    }
  });

  // 음소거 상태 전환 (음소거 -> 소리 켜기, 소리 켜기 -> 음소거)
  audioToggle.forEach(function (toggleButton) {
    toggleButton.addEventListener("click", function () {
      if (video.muted) {
        video.muted = false; // 음소거 해제
        audioOffIcon.style.display = "none"; // 음소거 아이콘 숨김
        audioOnIcon.style.display = "block"; // 소리 켜기 아이콘 표시
      } else {
        video.muted = true; // 음소거 활성화
        audioOffIcon.style.display = "block"; // 음소거 아이콘 표시
        audioOnIcon.style.display = "none"; // 소리 켜기 아이콘 숨김
      }
    });
  });

  // 비디오가 끝났을 때 play 버튼 다시 보이기
  video.addEventListener("ended", function () {
    playButton.style.display = "flex";
  });

  // 비디오 요소 및 replay div 선택
  const videoElement = document.querySelector('.cocovid-boxvid'); // 비디오 요소
  const replayDiv = document.querySelector('.replay'); // replay div


  // 이벤트 리스너 추가
  replayDiv.addEventListener('click', () => {
    // 비디오를 처음부터 다시 재생
    videoElement.currentTime = 0; // 동영상 재생 시간을 0초로 설정
    videoElement.play(); // 동영상 재생 시작

    // 페이지 새로고침
    setTimeout(() => {
      location.reload(); // 0초 후 페이지 새로고침
    }, 0);
  });
});

/*-----------------------------------------------------------*/
/* MODEL video paly Cursor                                               */
/*-----------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.querySelector(".mod-playcircle");
  const video = document.querySelector(".tvid__video-container video");
  const controlWrapper = document.querySelector(".tvid__control-wrapper");
  const replayDiv = document.querySelector('.modvid-audio__toggle.replay');
  const audioOffIcon = document.querySelector(".modvid-audio__icon.audio-off");
  const audioOnIcon = document.querySelector(".modvid-audio__icon.audio-on");
  const audioToggle = document.querySelectorAll(".sound");
  const navItems = document.querySelectorAll('.tvid__nav__item');

  // 첫 번째 nav item의 비디오 설정
  const firstNavItem = navItems[0];
  const firstVideoSrc = firstNavItem.getAttribute("data-video-src");

  // 초기 상태: 첫 번째 비디오를 표시하고 음소거 활성화
  if (firstVideoSrc) {
    video.src = firstVideoSrc;
    video.muted = true; // 비디오 음소거 상태로 시작
    audioOffIcon.style.display = "block"; // 음소거 아이콘 표시
    audioOnIcon.style.display = "none";  // 소리 켜기 아이콘 숨김
  }

  function setActiveItem(targetItem) {
    navItems.forEach((item) => item.classList.remove("active"));
    targetItem.classList.add("active");
  }

  // 모든 동영상이 종료되었는지 확인하는 함수
  function areAllVideosPlayed() {
    return Array.from(navItems).every((item) => item.classList.contains("played"));
  }

  // 다음 동영상으로 이동
  function playNextVideo() {
    const currentIndex = Array.from(navItems).findIndex((item) =>
      item.classList.contains("active")
    );
    const nextIndex = currentIndex + 1;

    if (nextIndex < navItems.length) {
      const nextNavItem = navItems[nextIndex];
      const nextVideoSrc = nextNavItem.getAttribute("data-video-src");

      if (nextVideoSrc) {
        video.src = nextVideoSrc;
        video.play();
        setActiveItem(nextNavItem);

        // Play 버튼 숨기기
        playButton.style.display = "none";
        controlWrapper.style.display = "flex";
      }
    } else {
      // 모든 동영상 재생 후 첫 번째 비디오로 돌아가기
      video.src = firstVideoSrc;
      setActiveItem(firstNavItem);
      playButton.style.display = "flex";
      controlWrapper.style.display = "none";

      navItems.forEach((item) => item.classList.remove("played")); // played 상태 초기화
    }
  }

  // Play 버튼 클릭 시 첫 번째 nav item 활성화 및 비디오 재생
  playButton.addEventListener("click", function () {
    if (firstVideoSrc) {
      video.src = firstVideoSrc;
      video.play();

      playButton.style.display = "none";
      controlWrapper.style.display = "flex";

      setActiveItem(firstNavItem);
    }
  });

  // nav item 클릭 시 해당 비디오 재생 및 active 적용
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const videoSrc = item.getAttribute('data-video-src');

      if (videoSrc) {
        video.src = videoSrc;
        video.play();

        playButton.style.display = "none";
        controlWrapper.style.display = "flex";

        setActiveItem(item);
      }
    });
  });

  // 비디오 종료 시 다음 비디오 자동 재생
  video.addEventListener("ended", function () {
    const currentItem = Array.from(navItems).find((item) =>
      item.classList.contains("active")
    );

    if (currentItem) {
      currentItem.classList.add("played"); // 현재 재생된 동영상 마킹
    }

    playNextVideo();
  });

  // 비디오 정지 상태 처리
  video.addEventListener("pause", function () {
    if (!areAllVideosPlayed()) {
      playButton.style.display = "none";
    } else {
      playButton.style.display = "block";
    }
    controlWrapper.style.display = "none";
  });

  // 음소거 상태 전환
  audioToggle.forEach(function (toggleButton) {
    toggleButton.addEventListener("click", function () {
      video.muted = !video.muted;
      audioOffIcon.style.display = video.muted ? "block" : "none";
      audioOnIcon.style.display = video.muted ? "none" : "block";
    });
  });

  // Replay 버튼 클릭 시 비디오 재생 초기화
  replayDiv.addEventListener('click', () => {
    video.currentTime = 0;
    video.play();
    playButton.style.display = "none";
    controlWrapper.style.display = "flex";
  });
});


/*-----------------------------------------------------------*/
/* Model Video TEXT                                               */
/*-----------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".tvid__video-container video");
  const navItems = document.querySelectorAll(".tvid__nav__item");
  const mainHeadings = document.querySelectorAll(".tvid__heading");

  let currentIndex = 0; // 현재 재생 중인 인덱스

  // tvid__nav__item과 tvid__main-heading을 연결하는 함수
  function updateHeading(index) {
    mainHeadings.forEach((heading, idx) => {
      heading.style.opacity = idx === index ? "1" : "0"; // 해당 헤딩만 표시
    });

    navItems.forEach((item, idx) => {
      item.classList.toggle("active", idx === index); // active 클래스 업데이트
    });
  }

  // nav item 클릭 시 비디오와 헤딩 업데이트
  navItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      const videoSrc = item.getAttribute("data-video-src");
      if (videoSrc) {
        currentIndex = index; // 현재 인덱스 업데이트
        video.src = videoSrc;
        video.play();
        updateHeading(currentIndex);
      }
    });
  });

  // 비디오 재생 종료 시 다음 비디오 및 헤딩 자동 업데이트
  video.addEventListener("ended", function () {
    currentIndex += 1; // 다음 인덱스로 이동

    if (currentIndex < navItems.length) {
      const nextNavItem = navItems[currentIndex];
      const nextVideoSrc = nextNavItem.getAttribute("data-video-src");

      if (nextVideoSrc) {
        video.src = nextVideoSrc;
        video.play();
        updateHeading(currentIndex);
      }
    } else {
      // 모든 동영상이 끝난 경우 초기화 또는 멈춤 처리
      currentIndex = 0; // 순환하려면 0으로 초기화
      updateHeading(currentIndex);
    }
  });

  // 초기 상태: 첫 번째 헤딩 활성화
  updateHeading(currentIndex);
});

/*-----------------------------------------------------------*/
/* img motion                                               */
/*-----------------------------------------------------------*/

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    // halfway through the image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }

    console.log(slideInAt);
  });
}

window.addEventListener('scroll', debounce(checkSlide));

/*-----------------------------------------------------------*/
/* GSAP Cursor                                               */
/*-----------------------------------------------------------*/

let xDTo = gsap.quickTo(".crs", "left", {
  duration: 0.3,
  ease: "power3",
});
let yDTo = gsap.quickTo(".crs", "top", {
  duration: 0.3,
  ease: "power3",
});

let isVisible = false;

function mouseMove(e) {
  if (!isVisible) {
    setTimeout(function () {
      $(".crs, .crs-fast").addClass("visible");
    }, 300);
    isVisible = true;
  }

  xDTo(e.clientX);
  yDTo(e.clientY);

  $(".crs-fast").css({ transform: `translate(${e.clientX}px, ${e.clientY}px)` });
}

document.addEventListener("mousemove", mouseMove);

$(document).on(
  {
    mouseenter: function () {
      $(".crs, .crs-fast").addClass("link-hover");
    },
    mouseleave: function () {
      $(".crs, .crs-fast").removeClass("link-hover");
    },
  },
  "a:not([cb-cursor-state=default]), [cb-cursor-state=link]"
);

$(document).on({
  mouseleave: function () {
    $(".crs, .crs-fast").removeClass("visible");
  },
  mouseenter: function () {
    $(".crs, .crs-fast").addClass("visible");
  },
});



/*-----------------------------------------------------------*/
/* GSAP Magnetic Elements                                    */
/*-----------------------------------------------------------*/

$(document).on(
  {
    mousemove: function (e) {
      const el = $(this);
      const factor = parseInt(el.attr("cb-magnetic-factor") ?? 1);
      magneticMove(e, el, factor);
    },
    mouseleave: function (e) {
      TweenMax.to($(this).find("[cb-magnetic-element=target]"), 1, {
        x: 0,
        y: 0,
        ease: Power2.easeOut,
      });
    },
  },
  "[cb-magnetic-element=wrapper]"
);

function magneticMove(e, wrapper, factor) {
  const target = wrapper.find("[cb-magnetic-element=target]");
  const relX = e.pageX - wrapper.offset().left;
  const relY = e.pageY - wrapper.offset().top;

  const width = wrapper.width();
  const height = wrapper.height();

  TweenMax.to(target, 1, {
    x: (relX - width / 2) / factor,
    y: (relY - height / 2) / factor,
    ease: Power2.easeOut,
  });
}

