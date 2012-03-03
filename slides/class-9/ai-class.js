$(function() {
  // Deck initialization
  $.deck('.slide');

  $("pre.htmlCode").snippet("html",{style:"acid"});
  $("pre.cssCode").snippet("css",{style:"acid"});

  //pixel-buffers
  var img = new Image();
	$(img).load(function(){
		//draw the image to the canvas
		var canvas = $('#pixel-buffers-ex canvas');
		var c = canvas.get(0).getContext('2d');
		c.drawImage(img,0,0); //draw image 1
		c.drawImage(img,500,0); //draw image 2
		//get the canvas data
		var data = c.getImageData(500,0,img.width,img.height);
		//invert each pixel
		for(n=0; n<data.width*data.height; n++) {
			var index = n*4;
			data.data[index]   = 255-data.data[index];
			data.data[index+1] = 255-data.data[index+1];
			data.data[index+2] = 255-data.data[index+2];
			//don't touch the alpha
		}
		//set the recolored data back
		c.putImageData(data,500,0);
	});
	img.src = "images/fire.jpg";
});

