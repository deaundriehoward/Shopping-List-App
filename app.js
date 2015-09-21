$(document).ready(function () {

	// Validate text box, then add value in text box to list

	$('#add-button').click(function() {
		if( $('input#add-item').val().trim().length == 0 ) {
				// alert("put something here");
				$('#alert').show();
				$('input#add-item').val("");
		} else { 

		$('ul').append('<li class="buy"><button class="item">X</button>' + $('input#add-item').val() + '</li>');
		$('input#add-item').val("");
		$('#alert').hide();

		};	
	
	});

	// Change class when user clicks Done button	

	$('ul').on('click', '.list', function() {
		$(this).closest('li').toggleClass('buy', 'bought');
		$(this).remove();
	});

});