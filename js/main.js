$(document).ready(function(){
  AOS.init();

  //main-visual pencil
  $(".visual-wrap img").mouseenter(function(){
    $(".pencil").stop().animate({rotate : "30deg"});
  });

  $(".visual-wrap img").mouseleave(function(){
    $(".pencil").stop().animate({rotate : "0deg"});
  });

  //funtion bg-pen2
  file = $('#funtion').position().top;

  $(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll > file) 
  {
    $("#funtion").addClass("active");
  } 

  });

  //library swiper
  var library_list = new Swiper(".library-list", {
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop : true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    centeredSlides : true,
    breakpoints: {
      768: {
        slidesPerView: 5,
        spaceBetween: 25,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
    }
  });

  //library bg-pen3
  library = $('#library').position().top;

  $(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll > library) 
  {
    $("#library").addClass("active");
  } 

  });

  // question slide
  $(".a-list").hide();

  $(".q-list > li").click(function(){
		if($(this).children(".a-list").css("display") == "none"){
			$(".a-list").slideUp(500);
			$(this).children(".a-list").slideDown(500);
		
			$(".q-list > li").children(".chevron_right").removeClass("active");
			$(this).children(".chevron_right").addClass("active");
		}
		else{
			$(".a-list").slideUp(500);
			$(".q-list > li").children(".chevron_right").removeClass("active");
		}
  });


  // down-link bg-pen4
  down_link = $('#down-link').position().top;

  $(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll > down_link) 
  {
    $("#down-link").addClass("active");
    $(".iphone").animate({rotate : "-12deg"});
  } 

  });
  
});