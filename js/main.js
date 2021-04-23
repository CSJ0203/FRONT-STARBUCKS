
const searchEl = document.querySelector('.search'); //search클래스 안에
const searchInputEl = searchEl.querySelector('input');//input

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
}); //searchEl에 click 이벤트 요소 추가

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');  
});   //만약에 포커스가 되면 인수 진행

searchInputEl.addEventListener('blur', function(){  //포커스 해제시
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');  
});   //만약에 포커스가 되면 인수 진행

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        //badgeEl.style.display="none";
        //gsap.to(요소, 지속시간,옵션);  애니메이션 효과 지정
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none' 
        });
        //버튼 보이기
        gsap.to(toTopEl, .2, {
            x: 0    
        });
    }else{
        //badgeEl.style.display="block";
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display:'block'
        });
        //버튼 보이기
        gsap.to(toTopEl, .2, {
            x: 100    
        });
    }
}, 300));
/*_.throttle 부하 주기, ms 단위로 시간 추가*/

toTopEl.addEventListener('click',function(){
    gsap.to(window, .7, {
        scrollTo: 0 //화면의 위치를 0px 지점으로 옮겨주겠다
    });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index+1) * .7,   /* 0.7, 1.4, 2.1 */
        opacity: 1
    }); /*gsap.to(요소, 지속시간, 옵션) 애니메이션 효과 지정*/
});

/*new Swiper(선택자, 옵션)*/ 
new Swiper('.notice-line .swiper-container',{
    direction: 'vertical',
    autoplay: true,
    loop: true
}); /*인수*/
new Swiper('.promotion .swiper-container',{
    slidesPerView: 3, //한번에 보여질 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000 // 5초
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});
new Swiper('.awards .swiper-container',{
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl : '.awards .swiper-prev',
        nextEl : '.awards .swiper-next'
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToogleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToogleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion // false일때
    if(isHidePromotion){ /*true 값이 들어오면*/
        //숨김처리
        promotionEl.classList.add('hide');
    }else{  
       //보임처리 
        promotionEl.classList.remove('hide');
    }
});

/**
 * 부유하는 요소 관리
 */
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 '문자 데이터'를,
    // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
  // 부유하는(떠 다니는) 요소를 만드는 함수
  function floatingObject(selector, delay, size) {
    gsap.to(
      selector, // 선택자
      random(1.5, 2.5), // 애니메이션 동작 시간
      {
        delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
        y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
        repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
        yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
        ease: Power1.easeInOut // Easing 함수 적용.
      }
    )
  }
  floatingObject('.floating1', 1, 15) 
  floatingObject('.floating2', .5, 15)
  floatingObject('.floating3', 1.5, 20)

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic // 스크롤 매직 자바라이브러리에 특정 요소 감시
     .Scene({
         triggerElement : spyEl, //triggerELement : 감시하고있는 섹션
         triggerHook: .8  //어디서 시작해서 어디서 끝나는지
     })
     .setClassToggle(spyEl, 'show') 
     .addTo(new ScrollMagic.Controller()); 
});

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()

