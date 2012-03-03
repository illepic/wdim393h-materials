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
});

