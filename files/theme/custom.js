jQuery(function($) {

  // Define Theme specific functions
  var Theme = {
    // Swiping mobile galleries wwith Hammer.js
    swipeGallery: function() {
      setTimeout(function() {
        var touchGallery = document.getElementsByClassName("fancybox-wrap")[0];
        var mc = new Hammer(touchGallery);
        mc.on("panleft panright", function(ev) {
          if (ev.type == "panleft") {
            $("a.fancybox-next").trigger("click");
          } else if (ev.type == "panright") {
            $("a.fancybox-prev").trigger("click");
          }
          Theme.swipeGallery();
        });
      }, 500);
    },
    swipeInit: function() {
      if ('ontouchstart' in window) {
        $("body").on("click", "a.w-fancybox", function() {
          Theme.swipeGallery();
        });
      }
    },
    // Toggle class on click
    toggleClick: function(click, target, classname){
      $(click).click(function(){
        $(target).toggleClass(classname);
      });
    },
    // Mobile Accordion
    accordion: function(menu) {
      $(menu).each(function(){
        var submenu = $(this);
        submenu.addClass("accordion");
        submenu.prepend(submenu.prev("a"));
        submenu.children('.wsite-menu').prepend('<li>');
        var clickable = submenu.children("a").clone(true, true);
        clickable.appendTo(submenu.children('.wsite-menu').children('li').first());
        $('<span class="expand"></span>').appendTo(submenu.children("a"));
        submenu.children("a").unbind()
        submenu.children("a").click(function(e){
          e.preventDefault();
          submenu.toggleClass('open');
          submenu.find('.accordion').removeClass('open');
        });
      });      
    },
    // Hide minicart better on mobile
    hideCart: function(container){
      if ('ontouchstart' in window) {
        $(container).on('click touchend mouseenter', function () {
            $('#wsite-mini-cart').fadeOut("fast");
        });
      }
    },
    interval: function(condition, action, duration, limit) {
      var counter = 0;
      var looper = setInterval(function(){
        if (counter >= limit || Theme.checkElement(condition)) {
          clearInterval(looper);
        } else {
          action();
          counter++;
        }
      }, duration);
    },
    checkElement: function(selector) {
      return $(selector).length;
    },
    moveCartLink: function() {
      if ($("#wsite-nav-cart-num").text() != "-") {
        var cart = $(".wsite-nav-cart").detach();
        $("#logo").after(cart);
        $(".wsite-nav-cart a").on("click touchend mouseenter", function(e) {
          $("#mobile-input").prop("checked", false);
        });
      }
    },
    moveMinicart: function() {
      var move = $("#wsite-mini-cart").detach();
      $(".row2").append(move);
    },
    moveFlyout: function() {
      var move = $("#wsite-menus").detach();
      $(".row2").append(move);
    },
    moveLogin: function() {
      var login = $('#member-login').detach();
      $("#navmobile .wsite-menu-default li:last-child").after(login);
    },
    navHeight: function(){
      $("#navmobile").css({ "padding-bottom": ($(".row2").outerHeight() + 40) + "px" });
    }
  }

  $(document).ready(function() {
    $("body").addClass("postload");
    Theme.swipeInit();
     // Timeout for benefit of iframe editor 
    setTimeout(function(){
      Theme.accordion("#navmobile .wsite-menu-wrap");
      $("body:not(.wsite-native-mobile-editor) #header .row2").waypoint('sticky');
    }, 600);
    Theme.hideCart('#banner, #main, #footer');
    Theme.interval(".row2 #wsite-mini-cart", Theme.moveMinicart, 800, 5);
    Theme.interval(".row2 #wsite-menus", Theme.moveFlyout, 800, 5);
    if ($(window).width() <= 992) {
      Theme.interval(".row2 .container > .wsite-nav-cart", Theme.moveCartLink, 800, 5);
      Theme.navHeight();
      Theme.toggleClick(".wsite-com-sidebar", ".wsite-com-sidebar", "open");
      Theme.toggleClick("#wsite-search-sidebar", "#wsite-search-sidebar", "open");
      Theme.toggleClick(".hamburger", "body", "menu-open");
      Theme.interval("#navmobile #member-login", Theme.moveLogin, 800, 5);
    }
  });

});