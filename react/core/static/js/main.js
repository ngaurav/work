// Hello.
//
// This is The Scripts used for ___________ Theme
//
//
var inputData = [NaN, NaN, NaN];
function checkNumbers() {
        $("#game input").each(function(i) {
            var val = $(this).val();
            inputData[i] = $.isNumeric(val) ? Number(val) : NaN;
        });

        var tot = inputData[0] + inputData[1] + inputData[2];

        var broken = isNaN(tot);
        $('.g-check').prop('disabled', broken);

        return broken;
    }

function main() {

(function () {
   'use strict';

   /*====================================
    Page a Link Smooth Scrolling
    ======================================*/
    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Menu Active Calling Scroll Spy
    ======================================*/
    $('body').scrollspy({
      target: '.navmenu',
      offset: 80,
    });


    /* ==============================================
	Testimonial Slider
	=============================================== */

	$(document).ready(function() {

	  $("#testimonial").owlCarousel({

	      navigation : false, // Show next and prev buttons
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem:true,
	      autoHeight : true

	      // "singleItem:true" is a shortcut for:
	      // items : 1,
	      // itemsDesktop : false,
	      // itemsDesktopSmall : false,
	      // itemsTablet: false,
	      // itemsMobile : false

	  });
    $('.check-btn').attr('disabled',true);
    $('.g-num').keyup(function(){
        if(checkNumbers())
            $('.sendButton').attr('disabled', false);
        else
            $('.sendButton').attr('disabled',true);
    })

	});





}());


}
main();
