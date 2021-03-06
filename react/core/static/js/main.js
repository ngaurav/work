// Hello.
//
// This is The Scripts used for ___________ Theme
//
//
var inputData = [NaN, NaN, NaN];
var right = "<p class = 'g-answer'>Yes!</p>", wrong = "<p class = 'g-answer'>No.</p>";
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

function show_sol() {
  $('#g-input').css("display", "none");
  $('.g-bottom-button-container').css("display", "none");
  $('.g-result').css("display", "block");
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

  $('#g-input').find('input').val('');

  $('#g-input').find(".g-instruction-hed")[0].innerHTML = "You can test another sequence if you want:";

  $('.g-guess-hed').css("display", "block");
  $('.g-bottom-button-container').css("display", "block");

  var rightWrong = (inputData[0] < inputData[1]) & (inputData[1] < inputData[2]) ? right : wrong;
  clone.find(".g-answer").remove();
  clone.append(rightWrong);

  guesses.append(clone);
  checkNumbers();
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
    $('.g-num').keyup(function(){
        checkNumbers();
    });
    $('#g-submit').attr('disabled',true);
    $('#g-sentence').keyup(function(){
        if($(this).val().length !=0)
            $('#g-submit').attr('disabled', false);
        else
            $('#g-submit').attr('disabled',true);
    });

	});

  $(".send-btn").click(function () {
    var csrf = $("#contact-form").attr("csrf");
    var name = $("#contact-form input[name='name']");
    var phone = $("#contact-form input[name='phone']");
    var email = $("#contact-form input[name='email']");
    var subject = $("#contact-form input[name='subject']");
    var message = $("#contact-form textarea[name='message']");

    $.ajax({
      url: '/ping/',
      data: {
        'name': $(name).val(),
        'phone': $(phone).val(),
        'email': $(email).val(),
        'subject': $(subject).val(),
        'message': $(message).val(),
        'csrfmiddlewaretoken': csrf
      },
      type: 'post',
      cache: false,
      success: function (data) {
        alert("Message Sent.");
        $(name).val('');
        $(phone).val('');
        $(email).val('');
        $(subject).val('');
        $(message).val('');
      },
      error: function () {
        alert("Could not send the message. Try again.");
      }
    });
  });


}());


}
main();
