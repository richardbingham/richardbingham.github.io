// FADE IN

	$(document).ready(function() {
		$('#centre').hide();
		$('.banner').ready(function() {
			$('#centre').fadeIn(750);
		});
	});

// SIDENOTES

	$(document).ready(function() {			
		
		// Place sidenotes
		function placeNotes() {				
			if ($(window).width() >= 768) {
				$('.ref_active').hide();
				$('.ref_inactive').show();
				var noteNum = $('.citation').last().text();	
				var ref = document.getElementsByClassName('note');
				var cite = document.getElementsByClassName('citation');
				var i = 0;
				while (i < noteNum) {
					var refLoc = $(cite[i]).position();
					$(ref[i]).css({
						'top': refLoc.top - 20,
						'z-index': 100 - i
					});
					i++;
				}							
			} else {
				$('.ref_active').show();
				$('.ref_inactive').hide();
			}
		}

		$('main').ready(function() {
			placeNotes();
		});

		//Open/collapse sidenotes
		var refNo = 0;
		$('.ref').click(function() {						
			if ($(window).width() >= 768) {
				var refCheck = $(this).text().split('.')[0];
				if (refNo != refCheck) {
					$(this).find('.ref_inactive').hide();
					$(this).find('.ref_active').fadeIn(350);
					$('.ref').not(this).each(function() {
						$(this).find('.ref_active').fadeOut();
						$(this).find('.ref_inactive').delay(350).fadeIn();
					});
					refNo = refCheck;
				} else {
					$('.ref_active').fadeOut();
					$('.ref_inactive').delay(350).fadeIn();
					refNo = 0;
				}
			}
		});

		$(window).resize(function() {
			placeNotes();

		});

	});