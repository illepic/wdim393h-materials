function blink(){
    $('#semantic-blink img').delay(100).fadeTo(100,0).delay(100).fadeTo(100,1, blink);
}
$(function() {
	// Deck initialization
	$.deck('.slide');

	$("pre.htmlCode").snippet("html",{style:"acid"});

	blink();
});

