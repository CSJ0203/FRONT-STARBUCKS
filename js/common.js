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

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()