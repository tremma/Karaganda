;(function () {

    'use strict';

    var owlCarousel = function(){

        $('#slider1').owlCarousel({
            loop: false,
            margin: 10,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });

        $('#slider2').owlCarousel({
            loop: false,
            margin: 10,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        $('#slider3').owlCarousel({
            loop: false,
            margin: 10,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

    };


    var videos = function() {


        $(document).ready(function () {
            $('#play-video').on('click', function (ev) {
                $(".fh5co_hide").fadeOut();
                $("#video")[0].src += "&autoplay=1";
                ev.preventDefault();

            });
        });


        $(document).ready(function () {
            $('#play-video_2').on('click', function (ev) {
                $(".fh5co_hide_2").fadeOut();
                $("#video_2")[0].src += "&autoplay=1";
                ev.preventDefault();

            });
        });

        $(document).ready(function () {
            $('#play-video_3').on('click', function (ev) {
                $(".fh5co_hide_3").fadeOut();
                $("#video_3")[0].src += "&autoplay=1";
                ev.preventDefault();

            });
        });


        $(document).ready(function () {
            $('#play-video_4').on('click', function (ev) {
                $(".fh5co_hide_4").fadeOut();
                $("#video_4")[0].src += "&autoplay=1";
                ev.preventDefault();

            });
        });
    };

    var googleTranslateFormStyling = function() {
        $(window).on('load', function () {
            $('.goog-te-combo').addClass('form-control');
        });
    };


    var contentWayPoint = function() {
        var i = 0;

        $('.animate-box').waypoint( function( direction ) {

            if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function(){

                    $('body .animate-box.item-animate').each(function(k){
                        var el = $(this);
                        setTimeout( function () {
                            var effect = el.data('animate-effect');
                            if ( effect === 'fadeIn') {
                                el.addClass('fadeIn animated-fast');
                            } else if ( effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated-fast');
                            } else if ( effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated-fast');
                            } else {
                                el.addClass('fadeInUp animated-fast');
                            }

                            el.removeClass('item-animate');
                        },  k * 50, 'easeInOutExpo' );
                    });

                }, 100);

            }

        } , { offset: '85%' } );
        // }, { offset: '90%'} );
    };


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'swing');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	
	$(function(){
		owlCarousel();
		videos();
        contentWayPoint();
		goToTop();
		googleTranslateFormStyling();
	});

}());
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

const outDate = document.querySelector('.out-date');

Data = new Date();
Year = Data.getFullYear();
Month = Data.getMonth();
Day = Data.getDate();


switch (Month)
{
  case 0: fMonth="01"; break;
  case 1: fMonth="02"; break;
  case 2: fMonth="03"; break;
  case 3: fMonth="04"; break;
  case 4: fMonth="05"; break;
  case 5: fMonth="06"; break;
  case 6: fMonth="07"; break;
  case 7: fMonth="08"; break;
  case 8: fMonth="09"; break;
  case 9: fMonth="10"; break;
  case 10: fMonth="11"; break;
  case 11: fMonth="12"; break;
}

// Вывод
outDate.innerHTML = Day + "/" + fMonth + "/" + Year + " г";


// rooms

const room = document.querySelector('.room-1');
const roomImg = 'images/room-9.jpg';

const room1 = new PANOLENS.ImagePanorama(roomImg);
const viewer = new PANOLENS.Viewer({
    container: room,
    autoRotate: true,
    autoRotateSpeed: 0.5
});
viewer.add(room1);
