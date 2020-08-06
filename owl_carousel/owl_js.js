$(document).ready(function(){
$('#owl_id').owlCarousel({
            loop:true,
            // loop:false,
            mouseDrag: false,
            touchDrag: true,
            autoHeight:true,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            responsiveClass:true,            
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:true
                },
                1024:{
                    items:3,
                    nav:true,                    
                    touchDrag:false,
                    freeDrag:false
                }                
            }
        });
$('#screensort_section').owlCarousel({
            loop:true,
            // loop:false,
            margin:30,
            mouseDrag: false,
            touchDrag: true,
            autoHeight:true,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            responsiveClass:true,            
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                767:{
                    items:1,
                    nav:true
                },
                850:{
                    items:3,
                    nav:true,                    
                    touchDrag:false,
                    freeDrag:false
                }                
            }
        });
/*top menu button*/
    $(".button").click(function(){
      //insert code here
      if($(".button").text() == "☰"){
          $(".button").text("✖");
        }else{        
          $(".button").text("☰");      
        }
      });
    /*top meanu styling*/
        var scroll_start = 0;
       var startchange = $('#startchange');
       var offset = startchange.offset();
        if (startchange.length)
        {
           $(document).scroll(function() { 
              scroll_start = $(this).scrollTop();
              if(scroll_start > offset.top || $(window).width() < 980) {
                  $(".herosection_outer").css('background-color', '#6F6F6F');
                  $(".logo1").css('display','none');
                  $(".logo2").css('display','block');
                  $(".topnav").css('padding-top','21px');
               } else {
                  $('.herosection_outer').css('background-color', 'transparent');
                  $(".logo2").css('display','none');
                  $(".logo1").css('display','block');
                   $(".topnav").css('padding-top','35px');
               }
           });
        }
    
});