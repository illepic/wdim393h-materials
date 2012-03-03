$(function() {
  // Deck initialization
  $.deck('.slide');

  $("pre.htmlCode").snippet("html",{style:"acid"});
  $("pre.cssCode").snippet("css",{style:"acid"});

  //pixel-buffers
  var img = new Image();
	$(img).load(function(){
		var canvas = $('#pixel-buffers-ex canvas'); //draw the image to the canvas
		var c = canvas.get(0).getContext('2d');
		c.drawImage(img,0,0); //draw image 1
		var data = c.getImageData(0,0,img.width,img.height); //get the canvas data
		//invert each pixel
		for(n=0; n<data.width*data.height; n++) {
			var index = n*4; //jumps to next point in array after 4 colors
			data.data[index]   = 255-data.data[index];
			data.data[index+1] = 255-data.data[index+1];
			data.data[index+2] = 255-data.data[index+2];
			//don't touch the alpha
		}
		c.putImageData(data,500,0); //set the recolored data back
	});
	img.src = "images/fire.jpg";

	//events
	var canvas = $('#events canvas'); //draw the image to the canvas
	var c = canvas.get(0).getContext('2d');
	c.fillStyle = 'rgb(0,255,0)';
	c.beginPath();
	c.arc(
		100, 100, 40,  //40 pix radius circle at 100,100
		0, Math.PI*2  //0 to 360 degrees for a full circle
	);
	c.closePath();
	var a = c.isPointInPath(80,0);     // returns true
	console.log(a);
	var b = c.isPointInPath(200,100);
	console.log(b);  // returns false
});

