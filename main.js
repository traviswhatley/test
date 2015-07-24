//function hello() {
//	alert('hi');
//}

jQuery(document).ready(function() {
	jQuery('#btn-simple').on('click', function () {
		jQuery('#simple-dialogBox').dialogBox({
			content: 'dialog content text,image,html file'
		});
});
//});
//	window.hello = function() {
//		alert('hi');
//	}
//});

//jQuery.ajax({
  //  url: 'https://test.colorado.gov/pacific/useful/testing-styles',
    //type: 'GET',
    //success: function(data) {

      //  var dom = jQuery(data);

        //dom.filter('script').each(function(){
          //  jQuery.globalEval(this.text || this.textContent || this.innerHTML || '');
        //});

        $('#container').html(dom.find('#btn-simple').html());

    }
});
