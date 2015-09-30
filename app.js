$(document).ready(function() {
	
	// When the user click the "Add Item" button
	$('.add-button').on('click', function() {
			var newItem = $('input.add-item').val();
			// Alert: When the user enters less than required 
			if (newItem == 0) {
			alert("Enter an item. Please and thank you!");
		} 
			// When the user enter a new item
			var newNote = $('input.note').val();
			var newCat = $('select.categories').val();

			$('.list').append('<p class="buy">' + newItem + newNote + newCat + $('.quantity') + '<button class="item"> Got it! </button>' + '</p>');
	});

		// When the user wants to remove or have bought an item
		$('ol').on('click', '.item', function() {
		$(this).closest('li').toggleClass('buy bought');
		$(this).remove();
	});
});