function hello() {
	alert('hi');
}

$(document).ready(function() {
	//$('#btn-simple').on('click', function () {
	//	$('#simple-dialogBox').dialogBox({
	//		content: 'dialog content text,image,html file'
	//	});
//	});
//});
	window.hello = function() {
		alert('hi');
	}
});
