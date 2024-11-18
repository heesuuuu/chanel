
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

// product motion
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item-box, .item-btn");

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

// cocovideo play js

document.addEventListener("DOMContentLoaded", function () {
  // vid-playcircle 요소를 선택
  const playButton = document.querySelector(".vid-playcircle");
  const video = document.querySelector(".cocovid-boxvid");

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

  // 비디오가 끝났을 때 play 버튼 다시 보이기
  video.addEventListener("ended", function () {
    playButton.style.display = "flex";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.querySelector(".mod-playcircle");
  const video = document.querySelector(".mod-vid");
  const controlWrapper = document.querySelector(".tvid__control-wrapper");
  const audioOffIcon = document.querySelector(".audio-off");
  const audioOnIcon = document.querySelector(".audio-on");

  playButton.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      video.muted = false; // 비디오 재생 시 사운드 재생
      playButton.style.display = "none"; // Play 버튼 숨기기
      controlWrapper.style.display = "flex"; // 재생 중일 때만 컨트롤 보이기
      updateAudioIcons();
    } else {
      video.pause();
      playButton.style.display = "block"; // Play 버튼 다시 보이기
      controlWrapper.style.display = "none"; // 정지 시 컨트롤 숨기기
    }
  });

  // 비디오가 끝났을 때 play 버튼 보이고 컨트롤 숨기기
  video.addEventListener("ended", function () {
    playButton.style.display = "flex";
    controlWrapper.style.display = "none";
  });

  // 재생버튼 클릭시 음소거 아이콘 표시 및 음소거 상태 전환
  audioOffIcon.addEventListener("click", function () {
    if (!video.paused) {
      video.muted = false; // 비디오 음소거
      updateAudioIcons();
    }
  });
  // 음소거 해제 아이콘 클릭 시 음소거 적용 및 아이콘 전환
  audioOnIcon.addEventListener("click", function () {
    if (!video.paused) {
      video.muted = true; // 음소거 적용
      updateAudioIcons(); // 음소거 아이콘으로 전환
    }
  });

  // 음소거 해제 아이콘 클릭 시 비디오를 음소거 상태로 전환
  // 아이콘 업데이트 함수 정의
  function updateAudioIcons() {
    if (video.muted) {
      audioOffIcon.style.display = "none"; // 음소거 아이콘 숨기기
      audioOnIcon.style.display = "black"; // 음소거 해제 아이콘 표시
    } else {
      audioOffIcon.style.display = "block"; // 음소거 아이콘 숨기기
      audioOnIcon.style.display = "none"; // 음소거 해제 아이콘 표시
    }
  }
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
