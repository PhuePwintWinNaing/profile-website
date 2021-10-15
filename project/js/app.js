
     let screenHeight = $(window).height();
        // console.log(screenHeight);

    $(window).scroll(function(){
        let currentPosition = $(this).scrollTop();
        // console.log(currentPosition);

        if(currentPosition >= screenHeight-300){
            $(".site-nav").addClass("site-nav-scroll");
        }else{
            $(".site-nav").removeClass("site-nav-scroll");
            setActive("home");
        }

    });

    $(".navbar-toggler").click(function(){
        let result = $(".navbar-collapse").hasClass("show");
   // console.log(result);

   if(result){
       $(".menu-icon").removeClass( "fa-close").addClass("fa-bars");
   }else{
       $(".menu-icon").removeClass( "fa-bars").addClass("fa-close");;
   }
    });

    new WOW().init();
$('.pricing-slide').slick({
  infinite: true,
      dots: true,
    arrows:false,
  slidesToShow: 3,
  slidesToScroll: 3,
    autoplay: true,
  autoplaySpeed: 2000,
        responsive: [
           {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

// var waypoints = $('#home').waypoint(function(direction) {
//   console.log("I am home");
//   $(".nav-link").removeClass("current-section");
//   $(".nav-link[href='#homoe']").addClass("current-section");
// }, {
//   offset: '0'
// });

// var waypoints = $('#about').waypoint(function(direction) {
//   console.log("I am about");
//   $(".nav-link").removeClass("current-section");
//   $(".nav-link[href='#about']").addClass("current-section");
// }, {
//   offset: '25%'
// });

// var waypoints = $('#services').waypoint(function(direction) {
//   console.log("I am services");
//   $(".nav-link").removeClass("current-section");
//   $(".nav-link[href='#services']").addClass("current-section");
// }, {
//   offset: '25%'
// });

// var waypoints = $('#pricing').waypoint(function(direction) {
//   console.log("I am pricing");
//   $(".nav-link").removeClass("current-section");
//   $(".nav-link[href='#pricing']").addClass("current-section");
// }, {
//   offset: '25%'
// });

// var waypoints = $('#contact').waypoint(function(direction) {
//   console.log("I am contact");
//   $(".nav-link").removeClass("current-section");
//   $(".nav-link[href='#contact']").addClass("current-section");
// }, {
//   offset: '25%'
// });

function setActive(current){
  $(".nav-link").removeClass("current-section");
  $(`.nav-link[href="#${current}"]`).addClass("current-section");
}

function navscroll(){
  let currentSection = $("section[id]");

  currentSection.waypoint(function(direction){

    if(direction == "down"){
      let currentSectionId = $(this.element).attr('id');
      console.log(currentSectionId);
      setActive(currentSectionId);
    }
  });

  currentSection.waypoint(function(direction){

    if(direction == "up"){
      let currentSectionId = $(this.element).attr('id');
      console.log(currentSectionId);
      setActive(currentSectionId);
    }
  });

}
navscroll();

$(window).on("load",function(){
  $(".loading-container").fadeOut(500,function(){
    $(this).remove();
  });

})









