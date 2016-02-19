var Shape = function(name){
	this.name = name;
	this.get_name = function(){
		return this.name
	}
	this.draw = function() {
    throw new Error("Arbitrary shapes cannot be drawn");
  }

}
//Inherits from Shape Object
var Circle = function(){
	this.name ="Circle"
	this.draw = function(){
	var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.arc(220,75,50,0,2*Math.PI);
ctx.stroke();
	}
}

Circle.prototype = new Shape();
var circle1 = new Circle();
circle1.draw();

//Encapsulates data and methods
var Rectangle = function(x,y,width,height){
	this.name = "Rectangle";
	//private variables
	var x = x;
	var y = y;
	var width = width;
	var height = height;
	//privileged method
	this.draw = function()
	{
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		ctx.rect(x,y, width, height);

		ctx.stroke();

	}

}

Rectangle.prototype = new Shape();
var rect1  = new Rectangle(150,270,150,100);
rect1.draw();
var name = rect1.get_name();
console.log(name);

