(function($) {
  
  "use strict";  

  $(window).on('load', function() {

  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse c21').removeClass('cF');

        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse c21').addClass('cF');
        }
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
      });

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });
    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    // one page navigation 
    $('.navbar-nav').onePageNav({
            currentClass: 'active',
            changeHash: true,
            scrollChange: function($currentListItem) {
                changeStyle($($currentListItem).children('a').attr('href'));
            }
    });

  $( window ).on( 'hashchange', function( e ) {
      changeStyle(window.location.hash);
  } );


    function changeStyle(hash) {
        switch (hash){
            case '#inicio':
                $('.top-nav-collapse').css('background-color','transparent');
                $('.nav-link').css('color','#FFF').hover(
                function(){
                    $(this).css("color", "#50a9de");
                }, function(){
                    if ($(this).parent().hasClass('active')){
                        $(this).css("color", "#50a9de");
                    }else{
                        $(this).css("color", "#FFF");
                    }
                });
                $('li.active a.nav-link').css('color','#50a9de');
                $('.navbar-expand-lg .navbar-nav li > a:before').css('background-color','#50a9de');
                break;
            case '#paser':
                $('.top-nav-collapse').css('background-color','#FFF');
                $('.nav-link').css('color','#212121').hover(
                    function(){
                        $(this).css("color", "#50a9de");
                    }, function(){
                        if ($(this).parent().hasClass('active')){
                            $(this).css("color", "#50a9de");
                        }else{
                            $(this).css("color", "#212121");
                        }
                    });
                $('li.active a.nav-link').css('color','#50a9de');
                $('.navbar-expand-lg .navbar-nav li > a:before').css('background-color','#50a9de');
                break;
            case '#antano':
                $('.top-nav-collapse').css('background-color','#5c2124');
                $('.nav-link').css('color','#fff').hover(
                    function(){
                        $(this).css("color", "#b6b191");
                    }, function(){
                        if ($(this).parent().hasClass('active')){
                            $(this).css("color", "#b6b191");
                        }else{
                            $(this).css("color", "#fff");
                        }
                    });
                $('li.active a.nav-link').css('color','#b6b191');
                $('.navbar-expand-lg .navbar-nav li > a:before').css('background-color','#b6b191');
                break;
            case '#roma':
                $('.top-nav-collapse').css('background-color','#634724');
                $('.nav-link').css('color','#fff').hover(
                    function(){
                        $(this).css("color", "#c2ae76");
                    }, function(){
                        if ($(this).parent().hasClass('active')){
                            $(this).css("color", "#c2ae76");
                        }else{
                            $(this).css("color", "#fff");
                        }
                    });
                $('li.active a.nav-link').css('color','#c2ae76');
                $('.navbar-expand-lg .navbar-nav li > a:before').css('background-color','#c2ae76');
                break;
            case '#fucotti':
                $('.top-nav-collapse').css('background-color','#31459b');
                $('.nav-link').css('color','#fff').hover(
                    function(){
                        $(this).css("color", "#26a9e0");
                    }, function(){
                        if ($(this).parent().hasClass('active')){
                            $(this).css("color", "#26a9e0");
                        }else{
                            $(this).css("color", "#fff");
                        }
                    });
                $('li.active a.nav-link').css('color','#26a9e0');
                $('.navbar-expand-lg .navbar-nav li > a:before').css('background-color','#26a9e0');
                break;
            case '#contacto':
                $('.top-nav-collapse').css('background-color','#FFF');
                $('.nav-link').css('color','#212121').hover(
                    function(){
                        $(this).css("color", "#50a9de");
                    }, function(){
                        if ($(this).parent().hasClass('active')){
                            $(this).css("color", "#50a9de");
                        }else{
                            $(this).css("color", "#212121");
                        }
                    });
                $('li.active a.nav-link').css('color','#50a9de');
                $('.navbar-expand-lg .navbar-nav li > a:before').css('background-color','#50a9de');
                $('.top-nav-collapse .navbar-nav .nav-link:hover').css('color','#50a9de');
                break;
        }
    }

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

      $('.carr').owlCarousel({
        loop: true,
        autoplay:true,
        items:3,
          margin: 20
      });
      $('.carr-rtl').owlCarousel({
          loop: true,
          autoplay:true,
          items:3,
          margin: 20,
          rtl: true
      });

  });      

}(jQuery));