gsap.registerPlugin(ScrollTrigger);




// cocovid - video REDUCED 적용 gsap
let cocovidContainer = document.querySelector(".cocovid-container");

let tlCocovid = gsap.timeline({
    scrollTrigger: {
        trigger: ".cocovid", // 애니메이션 트리거 요소
        start: "top 80%", // 트리거 시작 위치
        end: "top 30%", // 트리거 종료 위치
        // end: "+=150", // 트리거 종료 위치
        scrub: 1, // 스크롤과 애니메이션 동기화
        pin: false, // 고정 여부 (false로 설정)
    }
});

// Reduced Motion 체크
let reduceMotionCB = document.querySelector("#motionToggle");
let reduceMotion = reduceMotionCB && reduceMotionCB.checked;

tlCocovid.to(".cocovid-container", {
    scale: reduceMotion ? 1.1 : 1.0, // 확대 배율 (Reduced Motion 조건에 따라 변경)
    duration: 30, // 애니메이션 지속 시간
    ease: "power1.out", // 애니메이션 이징
    borderRadius: reduceMotion ? "0px" : "20px", // 선택적 스타일 변경
});





