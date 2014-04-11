$(document).ready(function(){
	$('div.toc').prepend( $('<div/>').attr('id','shit') );
	$('div.toc #shit').html('<p>点击收缩</p>');

	$('#shit p').click(function(){
		$('div.toc ul').slideToggle(1000);
	});
});