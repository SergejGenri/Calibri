$(document).ready(function () {
	$('.calibri-header').on('mousedown', function () {
		$('.calibri').draggable({
			containment: 'document',
			handle: '.calibri-header'
		});
	});

	$('.calibri').resizable({
		ghost: true,
		animate: true,
		maxHeight: 560,
		maxWidth: 640,
		minHeight: 370,
		minWidth: 270,
	});

	$('.close-talk-chat').on('mousedown', function () {
		$('.talk-chat').addClass('hiden');
	});

	$('.close-reg-chat').on('mousedown', function () {
		$('.reg-chat').addClass('hiden');
	});
});
