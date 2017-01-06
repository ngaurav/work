// Hello.
//
// This is The Scripts used for ___________ Theme
//
//
var inputData = [NaN, NaN, NaN];
var right = "<p class = 'g-answer g-yes'>Yes!</p>", wrong = "<p class = 'g-answer g-no'>No.</p>";
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

function add_guess() {
  // document.getElementById('pText').innerHTML = "You pressed " + value;
  var guesses = $('#g-guesses');
  var guess = $('#g-guess');
  var clone = guess.clone();
  var e = clone.find(".go-to-btn")[0];
  e.innerHTML = inputData[0];
  e.nextElementSibling.innerHTML = inputData[1];
  e.nextElementSibling.nextElementSibling.innerHTML = inputData[2];

  var rightWrong = (inputData[0] < inputData[1]) & (inputData[1] < inputData[2]) ? right : wrong;
  clone.find(".g-answer").remove();
  clone.append(rightWrong);
  guesses.append(clone);
}

function duplicate() {

        var oldDiv = $('#g-input');

        oldDiv.find(".g-next-probem-prompt").remove();

        var clone = oldDiv.clone();

        oldDiv.find('.g-check').remove();

        var rightWrong = (inputData[0] < inputData[1]) & (inputData[1] < inputData[2]) ? right : wrong;

        var rightWrongClass = (inputData[0] < inputData[1]) & (inputData[1] < inputData[2]) ? "g-yes-num-group" : "g-wrong-num-group";

        // pic.attr("src", NYTG_ASSETS2 + "neutral.gif");


        // if (rightWrong == right) {
        //     pic.attr("src", NYTG_ASSETS2 + "correct.gif");

        // }
        // if (rightWrong == wrong) {
        //     pic.attr("src", NYTG_ASSETS2 + "wrong.gif");

        // }


        oldDiv
            .attr('id', '')
            .attr('class', 'g-guess');

        oldDiv.find('.g-numbers')
            .append(rightWrong)
            .addClass(rightWrongClass);

        oldDiv.find("input").prop('disabled', true);

        clone.find('input').val('');
        clone.attr('class', 'g-again');

        $('.g-yours').append(clone);
        $('.g-check').prop('disabled', true);

        clone.prepend('<h5 class="g-next-probem-prompt">You can test another sequence if you want:</h5>');


        $('.g-first').focus();

        // unhide box
        $('.g-bottom-button-container').css("display", "block");

        // turn on submit button
        $('.g-submit').prop('disabled', false);
        // $('.g-submit').css('display', 'block');

        //hide the I dont want to play button
        // $('.g-justTellMe').css("display", "none");

        //change the style and text of first guess
        $('.g-first-guess-hed').text("Your guesses:")
            .addClass("g-first-guess-already-done");


        // move it down a little -- desktop only.
        if (magnum.device === "desktop") {
            $('html,body').animate({
               scrollTop: $(window).scrollTop() + 150
            }, 1000);
        }


        // move it down a little -- desktop only.
        if (magnum.device === "mobile") {
            $('html,body').animate({
               scrollTop: $(window).scrollTop() + 80
            }, 1000);
        }


        dance();

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
