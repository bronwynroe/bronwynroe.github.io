$(function() { 
	const expandButton = $('#expand-cv');
	const cv = $('#cv');

	expandButton.on('click', function() {
		cv.toggleClass('hide');

		if (!cv.hasClass('hide')) {
			expandButton[0].textContent = "- Hide CV -";
		} else {
			expandButton[0].textContent = "+ View CV +";
		}
	}) 
});
