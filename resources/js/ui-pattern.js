
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
  const audioToggle = document.querySelectorAll(".cocovid__audio-toggle"); // 오디오 토글 버튼


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
});

/*-----------------------------------------------------------*/
/* MODEL video paly Cursor                                               */
/*-----------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.querySelector(".mod-playcircle");
  const video = document.querySelector(".mod-vid");
  const controlWrapper = document.querySelector(".tvid__control-wrapper");

  // Play 버튼 클릭 시 비디오 재생/일시정지
  playButton.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      video.muted = false; // 비디오 재생 시 소리를 기본적으로 활성화
      playButton.style.display = "none"; // Play 버튼 숨기기
      controlWrapper.style.display = "flex"; // 컨트롤 보이기
      updateAudioIcons(); // 아이콘 업데이트
    } else {
      video.pause();
      playButton.style.display = "block"; // Play 버튼 보이기
      controlWrapper.style.display = "none"; // 컨트롤 숨기기
    }
  });

  // 비디오가 끝났을 때 Play 버튼 보이고 컨트롤 숨기기
  video.addEventListener("ended", function () {
    playButton.style.display = "flex";
    controlWrapper.style.display = "none";
  });




  // 비디오 요소 및 replay div 선택
  const videoElement = document.querySelector('.cocovid-boxvid'); // 비디오 요소
  const replayDiv = document.querySelector('.cocovid__audio-toggle.replay'); // replay div


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

  // // cocovid-container와 비디오 요소 선택
  // const container = document.querySelector('.cocovid-container');
  // const videoStop = document.querySelector('.cocovid-boxvid');

  // // 이벤트 리스너 추가
  // container.addEventListener('click', () => {
  //   if (!videoStop.paused) {
  //     // 비디오가 재생 중이면 멈춤
  //     videoStop.pause();
  //   } else {
  //     // 비디오가 멈춰 있으면 재생
  //     videoStop.play();
  //   }
  // });

});

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

