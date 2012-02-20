$(function() {
	// Deck initialization
	$.deck('.slide');

	$("pre.htmlCode").snippet("html",{style:"acid"});
  $("pre.cssCode").snippet("css",{style:"acid"});

  console.log($('#api-test'));
});

