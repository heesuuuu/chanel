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

document.addEventListener("DOMContentLoaded", function() {
  // vid-playcircle 요소를 선택
  const playButton = document.querySelector(".vid-playcircle");
  const video = document.querySelector(".cocovid-boxvid");

  // 클릭 이벤트 리스너 추가
  playButton.addEventListener("click", function() {
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
  video.addEventListener("ended", function() {
      playButton.style.display = "flex";
  });
});


//< -- mod-playbtn -- >

// document.addEventListener("DOMContentLoaded", function() {
//   // vid-playcircle 요소를 선택
//   const playButton = document.querySelector(".vid-playcircle");
//   const video = document.querySelector(".cocovid-boxvid");

//   // 클릭 이벤트 리스너 추가
//   playButton.addEventListener("click", function() {
//       // 비디오가 재생 중이 아니라면 재생
//       if (video.paused) {
//           video.play();
//           playButton.style.display = "none"; // play 버튼 숨기기
//       } else {
//           video.pause();
//           playButton.style.display = "block"; // play 버튼 다시 보이기
//       }
//   });

//   // 비디오가 끝났을 때 play 버튼 다시 보이기
//   video.addEventListener("ended", function() {
//       playButton.style.display = "flex";
//   });
// });





/*-----------------------------------------------------------*/
/* GSAP Cursor                                               */
/*-----------------------------------------------------------*/



let xDTo = gsap.quickTo(".crs", "left", {
  duration: 0.3,
  ease: "power3"
});
let yDTo = gsap.quickTo(".crs", "top", {
  duration: 0.3,
  ease: "power3"
});

let isVisible = false;

function mouseMove(e) {
  if (!isVisible) {
    setTimeout(function () {
      $(".crs, .crs-fast").addClass("visible")
    }, 300)
    isVisible = true;
  }

  xDTo(e.clientX);
  yDTo(e.clientY);

  $(".crs-fast").css({"transform": `translate(${e.clientX}px, ${e.clientY}px)`})

}

document.addEventListener("mousemove", mouseMove);

$(document).on({
  mouseenter: function () {
    $(".crs, .crs-fast").addClass("link-hover")
  },
  mouseleave: function () {
    $(".crs, .crs-fast").removeClass("link-hover")
  }
}, "a:not([cb-cursor-state=default]), [cb-cursor-state=link]");

$(document).on({
  mouseleave: function () {
    $(".crs, .crs-fast").removeClass("visible")
  },
  mouseenter: function () {
    $(".crs, .crs-fast").addClass("visible")
  },
});




/*-----------------------------------------------------------*/
/* GSAP Magnetic Elements                                    */
/*-----------------------------------------------------------*/



$(document).on({
  mousemove: function (e) {
    const el = $(this)
    const factor = parseInt(el.attr("cb-magnetic-factor") ?? 1)
    magneticMove(e, el, factor);
  },
  mouseleave: function (e) {
    TweenMax.to($(this).find("[cb-magnetic-element=target]"), 1, {
      x: 0,
      y: 0,
      ease: Power2.easeOut
    });
  }
}, '[cb-magnetic-element=wrapper]');



function magneticMove(e, wrapper, factor) {
  const target = wrapper.find("[cb-magnetic-element=target]")
  const relX = e.pageX - wrapper.offset().left;
  const relY = e.pageY - wrapper.offset().top;

  const width = wrapper.width()
  const height = wrapper.height()

  TweenMax.to(target, 1, {
    x: (relX - width / 2) / factor,
    y: (relY - height / 2) / factor,
    ease: Power2.easeOut
  });
}
