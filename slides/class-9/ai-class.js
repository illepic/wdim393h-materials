$(function() {
  // Deck initialization
  $.deck('.slide');

  $("pre.htmlCode").snippet("html",{style:"acid"});
  $("pre.cssCode").snippet("css",{style:"acid"});
  $("pre.jsCode").snippet("css",{style:"acid"});

  //pixel-buffers
  var img = new Image();
	$(img).load(function(){
		var c = $('#pixel-buffers-ex canvas').get(0).getContext('2d');
		c.drawImage(img,0,0); //draw initial image
		var data = c.getImageData(0,0,img.width,img.height); //get the canvas data
		//invert each pixel by looping through array and subtracting from 255
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
	var c = $('#events canvas').get(0).getContext('2d');
	c.beginPath();
	c.arc(
		100, 100, 40,  //40 pix radius circle at 100,100
		0, Math.PI*2  //0 to 360 degrees for a full circle
	);
	c.closePath();
	c.stroke();
	var a = c.isPointInPath(110,110);
	console.log('Is point 110,110 in the circle? ' + a);// returns true
	var b = c.isPointInPath(200,100);
	console.log('Is point 200,11 in the circle? ' + b);  // returns false

	//animation 1
	var c3 = $('#animation-1 canvas').get(0).getContext('2d');
	c3.fillStyle = "red";
	var x = 0;
	function drawIt() {
		c3.fillRect(x,50,200,100);
		x+=5;
		// stop the timer once it's beyond the canvas
		if(x > c3.canvas.width){
			clearInterval(intervalID);
		}
	}
	var intervalID = setInterval(drawIt, 100);

	//animation 2
	var c4 = $('#animation-2 canvas').get(0).getContext('2d');
	c4.fillStyle = "red";
	var x2 = 0;
	function drawIt2() {
		//nuke it from orbit, it's the only way to be sure
		c4.clearRect(0,0,c4.canvas.width,c4.canvas.height);
		c4.fillRect(x2,50,200,100);
		x2+=5;
		// stop the timer once it's beyond the canvas
		if(x2 > c4.canvas.width){
			clearInterval(intervalID2);
		}
	}
	var intervalID2 = setInterval(drawIt2, 100);

	//animation 3
	var img2 = new Image();
	$(img2).load(function(){
		var c5 = $('#animation-3 canvas').get(0).getContext('2d');
		c5.drawImage(
			img2,       // the image of the sprite sheet
			96,0,48,48, // source coords inside sheet (x,y,w,h)
			0,0,48,48   // destination coordinates on canvas (x,y,w,h)
		);
	});
	img2.src = "images/explode.png";

	//animation 4
	var tick = 0; //every time we redraw, we'll increment this
	var c6 = $('#animation-4 canvas').get(0).getContext('2d');
	var img3 = new Image();
	$(img3).load(function(){
		function drawIt3() {
			var frame = tick % 7; //7 is the number of frames in the sprite sheet
			var x3 = frame * 48; //48 is the width of each frame
			c6.clearRect(0,0,c6.canvas.width,c6.canvas.height);
			c6.drawImage(
				img3,       // the image of the sprite sheet
				x3,0,48,48, // source coords inside sheet (x,y,w,h)
				0,0,48,48   // destination coordinates on canvas (x,y,w,h)
			);
			tick++;
		}
		var intervalID3 = setInterval(drawIt3, 100);
	});
	img3.src = "images/explode.png";
});

