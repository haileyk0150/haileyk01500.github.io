// SNS 이미지
$(document).ready(function(){
  var $slideWrapper = document.querySelector('.design-container'),
      $slides = document.querySelector('.slider'),
      $slide = document.querySelectorAll('.slide'),
      $navPrev = document.getElementById('prev'),
      $navNext = document.getElementById('next'),
      $slideCount = $slide.length,
      $currentIndex = 0,
      $slideWidth = 360,
      $slideMargin = 30;

  // ul의 width 설정
  $slides.style.width = ($slideWidth + $slideMargin) * $slideCount - $slideMargin + 'px'; 

  // 슬라이드 이동 함수
  function moveSlide(num) {
    $slides.style.left = -num * 390 + 'px';
    $currentIndex = num;
    
  }

  // 좌우버튼 슬라이드 작동
  $navPrev.addEventListener('click', function(){
    if($currentIndex > 0 ){
      moveSlide($currentIndex - 1);
    } else {
      moveSlide($slideCount - 3);
    }
  });
  $navNext.addEventListener('click', function(){
    if($currentIndex < $slideCount - 3 ){
      moveSlide($currentIndex + 1);
      console.log($currentIndex);
    } else {
      moveSlide(0);
    }
  });
});

// 세로 이미지

$(document).ready(function(){
  var $slideWrapper = document.querySelector('.design-container2'),
      $slides = document.querySelector('.slider2'),
      $slide = document.querySelectorAll('.slide2'),
      $navPrev = document.getElementById('prev2'),
      $navNext = document.getElementById('next2'),
      $slideCount = $slide.length,
      $currentIndex = 0,
      $slideWidth = 280,
      $slideMargin = 30;

  // ul의 width 설정
  $slides.style.width = ($slideWidth + $slideMargin) * $slideCount - $slideMargin + 'px'; 

  // 슬라이드 이동 함수
  function moveSlide(num) {
    $slides.style.left = -num * 310 + 'px';
    $currentIndex = num;
    
  }

  // 좌우버튼 슬라이드 작동
  $navPrev.addEventListener('click', function(){
    if($currentIndex > 0 ){
      moveSlide($currentIndex - 1);
    } else {
      moveSlide($slideCount - 3);
    }
  });
  $navNext.addEventListener('click', function(){
    if($currentIndex < $slideCount - 3 ){
      moveSlide($currentIndex + 1);
      console.log($currentIndex);
    } else {
      moveSlide(0);
    }
  });
});

// 가로 이미지

$(document).ready(function(){
  var $slideWrapper = document.querySelector('.design-container3'),
      $slides = document.querySelector('.slider3'),
      $slide = document.querySelectorAll('.slide3'),
      $navPrev = document.getElementById('prev3'),
      $navNext = document.getElementById('next3'),
      $slideCount = $slide.length,
      $currentIndex = 0,
      $slideWidth = 900;

  // ul의 width 설정
  $slides.style.width = $slideWidth * $slideCount + 'px'; 

  // 슬라이드 이동 함수
  function moveSlide(num) {
    $slides.classList.add('animated');
    $slides.style.left = -num * 900 + 'px';
    $currentIndex = num;
    
  }

  // 좌우버튼 슬라이드 작동
  $navPrev.addEventListener('click', function(){
    if($currentIndex == 0) {
      moveSlide($slideCount - 1);
    } else {
      moveSlide($currentIndex - 1);
    }
  });
  $navNext.addEventListener('click', function(){
    
    if($currentIndex == $slideCount - 1) {
      moveSlide(0);
    } else {
      moveSlide($currentIndex + 1);
    }
  });
});

// 상세페이지

$(document).ready(function(){
  var $slideWrapper = document.querySelector('.design-container4'),
      $slides = document.querySelector('.slider4'),
      $slide = document.querySelectorAll('.slide4'),
      $navPrev = document.getElementById('prev4'),
      $navNext = document.getElementById('next4'),
      $slideCount = $slide.length,
      $currentIndex = 0,
      $slideWidth = 600;

  // ul의 width 설정
  $slides.style.width = $slideWidth * $slideCount + 'px'; 

  // 슬라이드 이동 함수
  function moveSlide(num) {
    $slides.classList.add('animated');
    $slides.style.left = -num * 600 + 'px';
    $currentIndex = num;
    
  }

  // 좌우버튼 슬라이드 작동
  $navPrev.addEventListener('click', function(){
    if($currentIndex == 0) {
      moveSlide($slideCount - 1);
    } else {
      moveSlide($currentIndex - 1);
    }
  });
  $navNext.addEventListener('click', function(){
    
    if($currentIndex == $slideCount - 1) {
      moveSlide(0);
    } else {
      moveSlide($currentIndex + 1);
    }
  });
});

// SNS 이미지 - 모바일

$(document).ready(function(){
  var $slideWrapper = document.querySelector('.design-container-m'),
      $slides = document.querySelector('.slider-m'),
      $slide = document.querySelectorAll('.slide-m'),
      $navPrev = document.getElementById('prev-m'),
      $navNext = document.getElementById('next-m'),
      $slideCount = $slide.length,
      $currentIndex = 0,
      $slideWidth = 250,
      $slideMargin = 30;

  // ul의 width 설정
  $slides.style.width = ($slideWidth + $slideMargin) * $slideCount - $slideMargin + 'px'; 

  // 슬라이드 이동 함수
  function moveSlide(num) {
    $slides.style.left = -num * 280 + 'px';
    $currentIndex = num;
    
  }

  // 좌우버튼 슬라이드 작동
  $navPrev.addEventListener('click', function(){
    if($currentIndex == 0) {
      moveSlide($slideCount - 1);
    } else {
      moveSlide($currentIndex - 1);
    }
  });
  $navNext.addEventListener('click', function(){
    
    if($currentIndex == $slideCount - 1) {
      moveSlide(0);
    } else {
      moveSlide($currentIndex + 1);
    }
  });
});

// 세로 매너 - 모바일

$(document).ready(function(){
  var $slideWrapper = document.querySelector('.design-container2-m'),
      $slides = document.querySelector('.slider2-m'),
      $slide = document.querySelectorAll('.slide2-m'),
      $navPrev = document.getElementById('prev2-m'),
      $navNext = document.getElementById('next2-m'),
      $slideCount = $slide.length,
      $currentIndex = 0,
      $slideWidth = 240,
      $slideMargin = 30;

  // ul의 width 설정
  $slides.style.width = ($slideWidth + $slideMargin) * $slideCount - $slideMargin + 'px'; 

  // 슬라이드 이동 함수
  function moveSlide(num) {
    $slides.style.left = -num * 270 + 'px';
    $currentIndex = num;
    
  }

  // 좌우버튼 슬라이드 작동
  $navPrev.addEventListener('click', function(){
    if($currentIndex == 0) {
      moveSlide($slideCount - 1);
    } else {
      moveSlide($currentIndex - 1);
    }
  });
  $navNext.addEventListener('click', function(){
    
    if($currentIndex == $slideCount - 1) {
      moveSlide(0);
    } else {
      moveSlide($currentIndex + 1);
    }
  });
});

// lightbox - SNS 이미지

// new LuminousGallery(document.querySelectorAll('.gallery'));
new LuminousGallery(document.querySelectorAll('.gallery'), {}, {
  caption: function(trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  }
});

// lightbox - 세로배너

new LuminousGallery(document.querySelectorAll('.gallery2'), {}, {
  caption: function(trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  }
});

// lightbox -가로배너

new LuminousGallery(document.querySelectorAll('.gallery3'), {}, {
  caption: function(trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  }
});