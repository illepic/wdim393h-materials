$(function() {
	// Deck initialization
	$.deck('.slide');

	$("pre.htmlCode").snippet("html",{style:"acid"});
  $("pre.cssCode").snippet("css",{style:"acid"});

  $('#api-video').bind('timeupdate', function(){
    $('#timer').html($(this).get(0).currentTime);
  });
  $('#api-video').get(0).currentTime = 10;
  $('#api-video').get(0).play();
  
});

