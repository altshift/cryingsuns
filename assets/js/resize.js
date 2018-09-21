$(function() {
	$(window).resize(function() {
		applyWindowWidthFit();
	});
	
	applyWindowWidthFit();
});

function applyWindowWidthFit() {
	$('.fit-window-width').each(function() {
		var maxWidth = parseInt($(this).attr('width'));
		var aspectRatio = $(this).width() / $(this).height();
		
		var newWidth;
		if ($(window).width() < maxWidth) {
			newWidth = $(window).width();
		}
		else {
			newWidth = maxWidth;
		}
		var newHeight = newWidth / aspectRatio;
		
		$(this).width(newWidth);
		$(this).height(newHeight);
	});
}