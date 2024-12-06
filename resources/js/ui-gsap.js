gsap.to(".pink", { rotation: 360, x: 100, duration: 1 });

gsap.from(".orange", { rotation: -360, x: -100, duration: 1 });

gsap.fromTo(".green", { x: -100 }, { rotation: 360, x: 100, duration: 1 });

gsap.registerPlugin(ScrollTrigger);

let cocovidContainer = document.querySelector(".cocovid-container");

let tlCocovid = gsap.timeline({
    scrollTrigger: {
        trigger: ".cocovid", // 애니메이션 트리거 요소
        start: "top center", // 트리거 시작 위치
        end: "+=150", // 트리거 종료 위치
        scrub: 1, // 스크롤과 애니메이션 동기화
        pin: false, // 고정 여부 (false로 설정)
    }
});

// Reduced Motion 체크
let reduceMotionCB = document.querySelector("#motionToggle");
let reduceMotion = reduceMotionCB && reduceMotionCB.checked;

tlCocovid.to(".cocovid-container", {
    scale: reduceMotion ? 1.1 : 1.0, // 확대 배율 (Reduced Motion 조건에 따라 변경)
    duration: 10, // 애니메이션 지속 시간
    ease: "power1.out", // 애니메이션 이징
    borderRadius: reduceMotion ? "0px" : "20px", // 선택적 스타일 변경
});

