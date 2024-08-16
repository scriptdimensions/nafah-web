jQuery.noConflict();
jQuery(document).ready(function () {
	(function ($) {
		//-------------------------------
		// Mobile Nav Menu
		//-------------------------------
		if (jQuery("#mobile-nav").length) {
			jQuery('#mobile-nav').hcOffcanvasNav({
				maxWidth: 920
			});
		}


		jQuery(window).on("scroll", function () {
			if (jQuery(window).scrollTop()) {
				jQuery('header').addClass('shadow');
			}
			else {
				jQuery('header').removeClass('shadow');
			}
		});


		$('.head-sub').each(function () {
			let head = $(this),
				icon = head.find('.icon');
			icon.on('click', function () {
				head.toggleClass('show').siblings().removeClass('show')
			});
		});

		$('.menu-icon').on('click', function () {
			$('.sidebar').toggleClass('active');
			$('.s-navi .await').toggleClass('active');
		})

		function swithtab(data, offsidebar) {
			$('.content-tab').hide();
			$('.content-tab[data=' + data + ']').fadeIn(200);
			if (offsidebar) {
				$(".sidebar").removeClass("active");
			}
		}
		function changetab(index) {
			$('.sidebar .icons  > li').eq(index).addClass('active').siblings().removeClass('active');
			$('.sidebar .item-bar > ul > li').eq(index).addClass('active').siblings().removeClass('active');
			swithtab($('.sidebar .item-bar > ul > li').eq(index).find('.text').attr('data'), false)
		}





		$(document).on("click", function (e) {
			if ($(e.target).is(".popup") && !jQuery(e.target).is(".popup *") && !jQuery(e.target).is("[open-ch-popup]")) {
				$(".popup").removeClass("active");
			}
			if (!$(e.target).is(".head-sub") && !jQuery(e.target).is(".head-sub *")) {
				$(".head-sub").removeClass("show");
			}
		});
		$('*[open-ch-popup]').each(function (index) {
			var button = $(this);
			button.on('click', function () {
				$('*[ch-popup='+$(button).attr("open-ch-popup")+']').addClass('active')
			})
		})

		$('*[ch-popup]').each(function (index) {
			var popup = $(this);
			popup.find('.close').on('click', function () {
				popup.removeClass('active')
			})
		})
		$('.sidebar .item-bar .item').each(function (index) {
			var item = $(this),
				text = item.find('.text');
			subitem = item.find('.sub li');
			button = item.find('img');
			button.on('click', function () {
				item.siblings().removeClass('show').find('.sub').slideUp(200);
				item.find('.sub').toggle(200);
				item.toggleClass('show');
			});
			$('.sidebar .icons li ').eq(index).find('.tool').text(item.find('.text').text());
		})

		//

		$('.eye').each(function () {
			let eye = $(this);
			let input = eye.siblings('input');
			input.on('keyup', function () {
				if ($(this).val().length > 0) {
					eye.addClass('active')
				} else {
					eye.removeClass('active')
				}
			})
			$(this).on('click', function () {
				var $input = $(this).siblings('input');
				var type = $input.attr('type') === 'password' ? 'text' : 'password';
				$input.attr('type', type);
				$(this).toggleClass('show');
			});
		});

		//

		$('#filterInput').on('keyup', function () {
			var filterValue = $(this).val().toLowerCase();

			$('.tables > ul').each(function () {
				var $ul = $(this);
				var text = $ul.text().toLowerCase();

				if (text.indexOf(filterValue) > -1) {
					$ul.show();
				} else {
					$ul.hide();
				}
			});
		});


		
$('.testimonial .slider').slick({
	dots: false,
	infinite: false,
	arrows:false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
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
		//====
	})(jQuery);
});