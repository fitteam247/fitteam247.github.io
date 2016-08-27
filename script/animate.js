$(document).ready(function(){
	
	
/* Slider List Product */	

	var marginLeft = 0 ;
	var margin_Left = 0 ;
	var x = 0 , y = 0;
	$('#back').click(function(){
		margin_Left -= 150;
		$('#list_1 ,#title_1').animate({marginLeft:"-=100%"}, 1000, function(){
			marginLeft -= 150;
			$('#list_1, #title_1').css('display','none');
			$('#list_2, #title_2').css('display','block');
			$('.icon-1').css('background-color','#2c3e50');
			$('.icon-2').css('background-color','#bdc3c7');
			if(marginLeft <= -400) {
				$('#back').hide();
			}
		});
		
		$('#list_2 ,#title_2').animate({marginLeft:"-=100%"}, 2000, function(){
			marginLeft -= 150;
			$('#list_1, #title_1').css('display','none');
			if(marginLeft <= -150) {
				$('#back').hide();
			}
		});
		
		$('#next').show();
	});
	
	
	$('#next').hide();
	$('#next').click(function(){
		
		marginLeft += 150;
		$('#list_2 ,#title_2').animate({marginLeft:"+=100%"}, 1000, function(){
			margin_Left += 150;
			$('#list_2, #title_2').css('display','none');
			$('#list_1, #title_1').css('display','block');
			$('.icon-2').css('background-color','#2c3e50');
			$('.icon-1').css('background-color','#bdc3c7');
			if(margin_Left >= 150) {
				$('#next').hide();
			}
		});
		
		$('#list_1, #title_1').animate({marginLeft:"+=100%"},2000);
		$('#list_2, #title_2').css('display','block');
		
		
		$('#back').show();
	});


/*-------------------------------------------------------------------------*/	
	
})




/* Menu Fixed */
$(document).ready(function(){
	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.box-menu').addClass("menu-fixed");
			
		} else {
			$('.box-menu').removeClass("menu-fixed");
		}
	});
/*-------------------------------------------------------------*/	
	
	
/* Slide Show */	

	var width = 100+'%';
	var animationSpeed = 1000;
	var pause = 5000;
	var currentSlide = 1;
	
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');
	
	setInterval(function(){
		
			$slideContainer.animate({'margin-left': '-=' +width, opacity: 0.4} , animationSpeed, function(){
				currentSlide++;
				if (currentSlide === $slides.length){
					currentSlide = 1;
					$slideContainer.css('margin-left','0%');
					$slideContainer.fadeIn('slow');
				};
				 $slideContainer.css('opacity',1);
			});
		
	}, pause);
	
	
	$('#nextSlide').click(function(){
		$slideContainer.animate({'margin-left': '-=' +width, opacity: 0.4} , animationSpeed, function(){
			currentSlide++;
			if (currentSlide === $slides.length){
				currentSlide = 1;
				$slideContainer.css('margin-left','0%');
				$slideContainer.fadeIn('slow');
			};
			 $slideContainer.css('opacity',1);
		});
	
	});
		
	$('#backSlide').click(function(){
		
		$slideContainer.animate({'margin-left': '+=' +width, opacity: 0.4} , animationSpeed, function(){
			currentSlide--;
			if (currentSlide === 1){
				$('.slides:first-child').css('margin-left','0px');
				$slideContainer.fadeIn('slow');
			};
			
			 $slideContainer.css('opacity',1);
		});
	
	});
	
/*-----------------------------------------------------------------------*/
	
	
/* Gallery */

	
	var $gallery = $('#gallery');
	var $galleryContainer = $gallery.find('.run_gallery');
	var $gallerys = $galleryContainer.find('.frameGallery');
	
	
	$('#btn-Gallery-1').click(function(){
		$('#btn-Gallery-1').css('background-color','#2c3e50');
		$('#btn-Gallery-2, #btn-Gallery-3').css('background-color','#bdc3c7');
		$('#check_gallery_2').fadeOut(2000);
		$('#check_gallery_3').fadeOut(2000);
		$('#check_gallery_1').fadeIn(1000);
	});
	
	$('#btn-Gallery-2').click(function(){
		$('#btn-Gallery-2').css('background-color','#2c3e50');
		$('#btn-Gallery-3, #btn-Gallery-1').css('background-color','#bdc3c7');
		$('#check_gallery_1').fadeOut(2000);
		$('#check_gallery_3').fadeOut(2000);
		$('#check_gallery_2').fadeIn(1000);
	});
	
	$('#btn-Gallery-3').click(function(){
		$('#btn-Gallery-3').css('background-color','#2c3e50');
		$('#btn-Gallery-2, #btn-Gallery-1').css('background-color','#bdc3c7');
		$('#check_gallery_1').fadeOut(2000);
		$('#check_gallery_2').fadeOut(2000);
		$('#check_gallery_3').fadeIn(1000);
	});
	
	
	$('.gallery-opacity').css('display','none');
	$('.larg-img').css('display','none');
	
	$('#exit').click(function(){
		
		$('.gallery-opacity').fadeOut(500);
		$('.larg-img').fadeOut(500);
	});
	
	
	/*frame 1*/
	$('#img_1').click(function(){
		
		$('.gallery-opacity').slideDown(1000);
		$('.gallery-opacity').css('z-index','3');
		$('.gallery-opacity').css('opacity','0.8');
		$('.larg-img').slideDown(1000);
		$('#show-large-img').attr('src','images/gallery_1.JPG');
		
	});
	
	$('#img_2').click(function(){
		
		$('.gallery-opacity').slideDown(1000);
		$('.gallery-opacity').css('z-index','3');
		$('.gallery-opacity').css('opacity','0.8');
		$('.larg-img').slideDown(1000);
		$('#show-large-img').attr('src','images/gallery_2.JPG');
		
	});
	
	$('#img_3').click(function(){
		
		$('.gallery-opacity').slideDown(1000);
		$('.gallery-opacity').css('z-index','3');
		$('.gallery-opacity').css('opacity','0.8');
		$('.larg-img').slideDown(1000);
		$('#show-large-img').attr('src','images/gallery_3.JPG');
		
	});
	
	$('#img_4').click(function(){
		
		$('.gallery-opacity').slideDown(1000);
		$('.gallery-opacity').css('z-index','3');
		$('.gallery-opacity').css('opacity','0.8');
		$('.larg-img').slideDown(1000);
		$('#show-large-img').attr('src','images/gallery_4.JPG');
		
	});
	
	/*------------------------------*/
	
	
	/*frame 2*/
	$('#img_5').click(function(){
		
		$('.gallery-opacity').slideDown(1000);
		$('.gallery-opacity').css('z-index','3');
		$('.gallery-opacity').css('opacity','0.8');
		$('.larg-img').slideDown(1000);
		$('#show-large-img').attr('src','images/brand1.JPG');
		
	});
	
	$('#img_6').click(function(){
		
		$('.gallery-opacity').slideDown(1000);
		$('.gallery-opacity').css('z-index','3');
		$('.gallery-opacity').css('opacity','0.8');
		$('.larg-img').slideDown(1000);
		$('#show-large-img').attr('src','images/brand2.JPG');
		
	});
	
	$('#img_7').click(function(){
		
		$('.gallery-opacity').slideDown(1000);
		$('.gallery-opacity').css('z-index','3');
		$('.gallery-opacity').css('opacity','0.8');
		$('.larg-img').slideDown(1000);
		$('#show-large-img').attr('src','images/brand3.JPG');
		
	});
	
	$('#img_8').click(function(){
		
		$('.gallery-opacity').slideDown(1000);
		$('.gallery-opacity').css('z-index','3');
		$('.gallery-opacity').css('opacity','0.8');
		$('.larg-img').slideDown(1000);
		$('#show-large-img').attr('src','images/brand4.JPG');
		
	});
	
	/*------------------------------*/
	
	
	/*frame 3*/
	$('#img_9').click(function(){
		
		$('.gallery-opacity').slideDown(1000);
		$('.gallery-opacity').css('z-index','3');
		$('.gallery-opacity').css('opacity','0.8');
		$('.larg-img').slideDown(1000);
		$('#show-large-img').attr('src','images/brand5.JPG');
		
	});
	
	$('#img_10').click(function(){
		
		$('.gallery-opacity').slideDown(1000);
		$('.gallery-opacity').css('z-index','3');
		$('.gallery-opacity').css('opacity','0.8');
		$('.larg-img').slideDown(1000);
		$('#show-large-img').attr('src','images/brand3.JPG');
		
	});
	
	$('#img_11').click(function(){
		
		$('.gallery-opacity').slideDown(1000);
		$('.gallery-opacity').css('z-index','3');
		$('.gallery-opacity').css('opacity','0.8');
		$('.larg-img').slideDown(1000);
		$('#show-large-img').attr('src','images/brand1.JPG');
		
	});
	
	$('#img_12').click(function(){
		
		$('.gallery-opacity').slideDown(1000);
		$('.gallery-opacity').css('z-index','3');
		$('.gallery-opacity').css('opacity','0.8');
		$('.larg-img').slideDown(1000);
		$('#show-large-img').attr('src','images/brand2.JPG');
		
	});
	
	/*------------------------------*/

/*-----------------------------------------------------------*/	
	
});