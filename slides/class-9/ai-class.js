$(function() {
  // Deck initialization
  $.deck('.slide');

  $("pre.htmlCode").snippet("html",{style:"acid"});
  $("pre.cssCode").snippet("css",{style:"acid"});

  //pixel-buffers
  var img = new Image();
	img.onload = function() {
		//draw the image to the canvas
		var c = $('#pixel-buffers canvas').get(0).getContext('2d');
		c.drawImage(img,0,0);
		//get the canvas data
		var data = c.getImageData(0,0,c.width,c.height);
		//invert each pixel
		for(n=0; n<data.width*data.height; n++) {
			var index = n*4;
			data.data[index]   = 255-data.data[index];
			data.data[index+1] = 255-data.data[index];
			data.data[index+2] = 255-data.data[index];
			//don't touch the alpha
		}
		//set the data back
		c.putImageData(data,0,0);
	};
	img.src = "images/fire.jpg";
});

