/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-01-19 09:59:56
 * @version $Id$
 */

$(document).ready(function(){
                 $("#Wrapper").height($(window).height());
                  $("#Wrapper").width($(window).width());
                   $(".qq").height($(window).height());
                  $('.nav button').click(function(){ var $a=$(this).index(); $('html,body').animate({scrollTop:$('.container').eq($a).offset().top}, 800);});
                   $('.right-main .gotop').click(function(){ $('html,body').animate({scrollTop:$('#1').offset().top}, 800);});
                   $('.main9 .con9').mouseover(function(event) {
                     var $b=$(this).index(); $(".con9").eq($b).removeClass('off').addClass('on');
                   });
                     $('.main9 .con9').mouseleave(function(event) {
                     var $b=$(this).index(); $(".con9").eq($b).removeClass('on').addClass('off');
                   });
                      $('.right-main .weixin').mouseover(function(event) {
                      $('.right-2').show();
                   });
                     $('.right-main .weixin').mouseleave(function(event) {
                     $('.right-2').hide();
                   });

});
    	
    $(document).ready(function(){
    	 
         
        $(".wel").animate({
        	top:"40%"
        },1000);
  
  });
  $(document).scroll(function(event) {
       var $num1=$(window).scrollTop();
      if ($num1 >= ($("#2").offset().top) + 500 && $num1 < ($("#3").offset().top) + 100){
        $(".pic1").animate({
        	left:"15%",
        	opacity:"1"
        },1000);
        $(".pic2").animate({
        	left:"33%",
        	opacity:"1"
        },1000);
         $(".pic3").animate({
        	right:"33%",
        	opacity:"1"
        },1000);
          $(".pic4").animate({
        	right:"15%",
        	opacity:"1"
        },1000);
        $(".pic5").animate({
          left:"15%",
          opacity:"1"
        },1000);
        $(".pic6").animate({
          left:"33%",
          opacity:"1"
        },1000);
         $(".pic7").animate({
          right:"33%",
          opacity:"1"
        },1000);
          $(".pic8").animate({
          right:"15%",
          opacity:"1"
        },1000);
    }
 if ($num1 >= ($("#1").offset().top) + 500 && $num1 < ($("#2").offset().top) + 100){
        $(".video-1").animate({
          left:"34%",
          opacity:"1"
        },1600);
    }


  // if ($num1 !== $("#1").offset().top){
  //       $(".wel").stop(true).animate({
  //       	top:"0px"
  //       },1000);
  //   }
  //   else{
  //   	 $(".wel").stop(true).animate({
  //       	top:"40%"
  //       },1000);
  //   }
 if ($num1 >= ($("#7").offset().top) - 100 && $num1 < ($("#7").offset().top) + 460){
        $(".pic6-1").animate({
          width:"15%",
          opacity:"1"
        },1600);
         $(".pic6-2").animate({
          width:"15%",
          opacity:"1"
        },1600);
          $(".pic6-3").animate({
          width:"15%",
          opacity:"1"
        },1600);
           $(".pic6-4").animate({
          width:"15%",
          opacity:"1"
        },1600);
            $(".pic6-5").animate({
          width:"15%",
          opacity:"1"
        },1600);
    }
  if ($num1 >= ($("#4").offset().top) - 100){
        $(".pic5-1").animate({
          opacity:"1"
        },1600);
         $(".pic5-2").animate({
        
          opacity:"1"
        },2600);
          $(".pic5-3").animate({
         
          opacity:"1"
        },4600);
           $(".pic5-4").animate({
        
          opacity:"1"
        },3600);
       
    }
      if ($num1 >= ($("#7").offset().top) + 420 && $num1 < ($("#7").offset().top) + 660){
        $(".pic7-1").animate({
          top:"40%",
          opacity:"1"
        },1600);
         $(".pic7-2").animate({
        top:"40%",
          opacity:"1"
        },1600);
          $(".pic7-3").animate({
         top:"40%",
          opacity:"1"
        },1600);
           $(".pic7-4").animate({
        top:"40%",
          opacity:"1"
        },1600);
          $(".pic7-5").animate({
        top:"40%",
          opacity:"1"
        },1600);
         $(".pic7-6").animate({
          top:"40%",
          opacity:"1"
        },1600);
    }
});