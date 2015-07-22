$(document).ready(function() {
	$('#btn-simple').on('click', function () {
		$('#simple-dialogBox').dialogBox({
			content: 'dialog content text,image,html file'
		});
	});
});
