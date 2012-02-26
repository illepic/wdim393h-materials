$(function() {
  // Deck initialization
  $.deck('.slide');

  $("pre.htmlCode").snippet("html",{style:"acid"});
  $("pre.cssCode").snippet("css",{style:"acid"});

  // #cod-2
  var c = $('#code-2 canvas').get(0).getContext('2d');
  c.fillStyle = 'red';
  c.fillRect(100,100,400,300);

  // #code-3
  var c = $('#code-3 canvas').get(0).getContext('2d');
  c.fillStyle = 'rgb(0,255,0)';
	c.beginPath();
	c.moveTo(50,50);
	c.lineTo(250,50);
	c.lineTo(300,200);
	c.closePath();
	c.fill();
	c.strokeStyle = "red";
	c.lineWidth = 5.0;
	c.stroke();

	// #code-4
	var c = $('#code-4 canvas').get(0).getContext('2d');
  var grad = c.createLinearGradient(0,0,200,200);
	grad.addColorStop(0, "blue");
	grad.addColorStop(1, "red");

	c.fillStyle = grad;
	c.fillRect(0,0,400,300);

	// #code-5
	var image = new Image();
	$(image).load(function(){
		var c = $('#code-5 canvas.first').get(0).getContext('2d');
		var pat = c.createPattern(image, 'repeat');
		c.fillStyle = pat;
		c.fillRect(10,10,560,300);

		var c = $('#code-5 canvas.second').get(0).getContext('2d');
		var pat = c.createPattern(image, 'repeat-y');
		c.fillStyle = pat;
		c.fillRect(10,10,560,300);

	});
	image.src = 'images/derp.png';

});

