$(function(){
/* Sticky Nav Js Start */
$(window).on('scroll', function () {
  var scrollSize = $(this).scrollTop()
  if (scrollSize > 150) {
    $('#main_nav').addClass('nav_scroll_animate')
  } else {
    $('#main_nav').removeClass('nav_scroll_animate')
  }
})
/* Sticky Nav Js End */
/*banner slider start*/
$(".banner_slider").slick({
    arrows: true,
    speed: 1500,
    prevArrow: '<i class="fa-solid fa-chevron-left banner_slider_icon_left"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right banner_slider_icon_right"></i>',
    fade:true,
  });
/*banner slider end*/
/*about slider start*/
  $(".about_slider_section").slick({
    arrows: false,
    dots: true,
    dotsClass: "about_slider_dots"
  });
/*about slider end*/

/* About Slider Activation Js Start */
$(".about_slider_box").slick({
  arrows: false,
  dots: true,
  dotsClass: "about_slider_dots"
});
/* About Slider Activation Js End */

/* Course SliderStart */
$(".course_slider_container").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  prevArrow: '<i class="fas fa-chevron-left course_slide_btn_left"></i>',
  nextArrow: '<i class="fas fa-chevron-right course_slide_btn_right"></i>',
});
/* Course Slider End */


/* Events Slider Activation Start */
$(".events_schedule").slick({
  vertical: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<i class="fas fa-chevron-up events_slide_btn_top"></i>',
  nextArrow: '<i class="fas fa-chevron-down events_slide_btn_bottom"></i>',
});
/* Events Slider Activation End */


/* Testimonial Slider Activation Start */


$(".textimoni_slider").slick({
  prevArrow: '<i class="fas fa-chevron-left testi_slide_btn_left"></i>',
  nextArrow: '<i class="fas fa-chevron-right testi_slide_btn_right"></i>',
  arrows: true,
});
/* Testimonial Slider Activation End */


/* Teachers Slider Activation Start */
$(".teachers_slider").slick({
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
/* Teachers Slider Activation End */

/* Footer Slider Activation Start */
$('.footer_slider_container').slick({
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,

})
/* Footer Slider Activation End */


/* Event Calendar Js Start */


  $("#pb-calendar").pb_calendar({
    'next_month_button':'<i class="fa-solid fa-chevron-down"></i>',
    'prev_month_button':'<i class="fa-solid fa-chevron-up"></i>',
  });

  /* About Page Video Activation Start */
$('.about_video_btn').venobox()
/* About Page Video Activation End */
})

/* Event Calendar Js End */
