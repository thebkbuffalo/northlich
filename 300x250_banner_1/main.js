$(document).ready(function(){

  var images = ['assets/300_bg1.png', 'assets/300_bg2.png', 'assets/300_bg3.png', 'assets/300_bg4.png', 'assets/300_bg5.png'];

  var index  = 0;
  var $top   = $('.banner');

  setInterval(function() {
     $top.animate({ opacity: 0 }, 500, function() {
       $top.css('background-image', 'url('+images[++index]+')');
       $top.animate({ opacity: 1 }, 500, function() {
         if(index == images.length - 1) index = 0;
       });
     });
  }, 2000);
});
