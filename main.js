//function hello() {
//	alert('hi');
//}

//$(document).ready(function() {
	//$('#btn-simple').on('click', function () {
	//	$('#simple-dialogBox').dialogBox({
	//		content: 'dialog content text,image,html file'
	//	});
//	});
//});
//	window.hello = function() {
//		alert('hi');
//	}
//});

$.ajax({
    url: 'https://cdn.rawgit.com/traviswhatley/test/master/main.js',
    type: 'GET',
    success: function(data) {

        var dom = $(data);

        dom.filter('script').each(function(){
            $.globalEval(this.text || this.textContent || this.innerHTML || '');
        });

        $('#container').html(dom.find('#btn-simple').html());

    }
});
