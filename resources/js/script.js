
$(document).ready(function(){
  
    
    /*Sticky navigation bar*/
    $('.js--section-features')
    .waypoint(function(direction) {
        if(direction=="down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');    
        }
    }, {
        offset: '60px'
    });

     /*Scroll on buttons*/
    
    
    /*When the button is clicked, we scroll to the top of js--selection-plans section
      within 1 second*/
    $('.js--scroll-to-plan').click(function () {
                                  
         $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);                         
                                  
    });
    
    $('.js--scroll-to-start').click(function () {
                                  
         $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);                         
                                  
    });
    
    
     /*Navigation scroll*/
    
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
    });
    
    
    /*Animations on scroll*/
    
    /*features fade in*/
    $('.js--wp-1').waypoint(function(direction) {
        
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    /*Iphone up*/
    $('.js--wp-2').waypoint(function(direction) {
        
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    /*cities fade in*/
    $('.js--wp-3').waypoint(function(direction) {
        
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    /*attention to first plan*/
    $('.js--wp-4').waypoint(function(direction) {
        
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
    /*Mobile navigation*/
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200); /*Js function to open and close a box (time in ms)*/
        
        if(icon.hasClass('ion-ios-menu')){
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        }else{
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');
        }
    });
    
    /*Google maps*/

    var map = new GMaps({
        div: '.map',
        lat: 38.7280314,
        lng: -9.05,
        zoom: 12
    });
    
    map.addMarker({
        lat: 38.7280314,
        lng: -9.1548866,
        title: 'Lisbon',
        infoWindow: {
          content: '<p>Our Lisbon HQ</p>'
        }
    });

    
});

/**/