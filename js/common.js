$(document).ready(function(){ // 실행틀 시작

  // gnb
  $(".depth2, .depth2-bg").hide();

  $(".gnb > li").mouseenter(function(){
    $(".depth2-bg").stop().fadeIn();
    $(this).children(".depth2").stop().fadeIn();
  });

  $(".gnb > li").mouseleave(function(){
    $(".depth2-bg").stop().fadeOut();
    $(this).children(".depth2").stop().fadeOut();
  });
  // gnb 끝

  // 모바일 메뉴
  $(".dim").hide();

  $(".ham").click(function(){
    $(".mgnb-wrap").animate({right : "0"});
    $(".dim").fadeIn();
  });

  $(".mgnb-close").click(function(){
    $(".mgnb-wrap").animate({right : "-100%"});
    $(".dim").fadeOut();
  });

  $(".mdepth2").hide();
  // 모바일 메뉴 끝

  // 모바일 2차 메뉴
  $(".mgnb > li").click(function(){
    /*$(this).children(".mdepth2").slideToggle();
    $(this).siblings().children(".mdepth2").slideUp();
    $(this).children(".arrow").addClass("active");
    $(this).siblings().children(".arrow").removeClass("active");*/

    if($(this).children(".mdepth2").css("display") == "none"){
      $(".mdepth2").slideUp(500);
      $(this).children(".mdepth2").slideDown(500);

      $(".mgnb > li").children(".arrow").removeClass("active");
      $(this).children(".arrow").addClass("active");
    }
    else{
      $(".mdepth2").slideUp(500);
      $(".mgnb > li").children(".arrow").removeClass("active");
    }
  });

}); // 실행틀 끝