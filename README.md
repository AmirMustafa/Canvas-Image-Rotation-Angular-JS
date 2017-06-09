# Canvas-Image-Rotation-Angular-JS

This project is developed in order to rotate any image with the help of slider by using Angular JavaScript Technology and HTML

## Installation

1. Download or Fork this repository.
2. Run this project through Web Browser (Open index.html)
3. Open the web console to see realtime angular rotation(whether positive or negative angle)
3. Try sliding the slider front and back. You will see image rotating in clockwise / anticlockwise as per your sliding and at the same time seeing real time angular rotation angle

## Snippet

1. index.html:

```
<!DOCTYPE html>
<html>
<head>
  <title></title> <!--Have added Angularjs, jquery and Angular Animate Libraries-->
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.0/angular-animate.js"></script>
</head>
<body ng-app="myApp" ng-controller="myApp"> <!--ss-->
  Straighten: <input type="range" id="rotateImage" value="0" min="-90" max="90" step="1" ng-model="rotateAngle"/>
	<div id="imageCanvas">
	    <canvas id="canvas"></canvas>
	</div>
</div>
</body>

<script type="text/javascript" src="main.js"></script>      <!--External Script-->
</html>

```

2.main.js:

```
var app = angular.module('myApp', [])                   //Created Angular Module

app.controller("myApp", function ($scope) {             //Angular Controller to watch realtime rotation angle
	$scope.$watch('rotateAngle', function(newVal, oldVal) {
if (newVal) {
    rotate(newVal)
}
})

function rotate(rotAngle) {
    console.log('rotate angle>> ', rotAngle);
    var canvas= document.getElementById("canvas");
    //console.log(canvas);

    context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height); //Clear the canvas first

    //console.log(context);
    var logoImg = new Image(); // Create instance of the Image class
    logoImg.src = "apple.jpg"; // Tell the Image's relative url - Image Added

    gridWidth = canvas.width,
    gridHeight = canvas.height;

    //console.log(gridHeight);

    var deg = Math.PI / 180;            //For Ratating - Maths

    //console.log(deg);

    logoImg.onload = function () {

                context.save();
                context.translate(gridWidth / 2, gridHeight / 2);

                context.rotate(rotAngle * Math.PI / 180);

                context.drawImage(logoImg, -(gridWidth / 2), -(gridHeight / 2));

                context.restore();
            };

    

}


$scope.Straighten = function() {
var imageCanvas = document.getElementById("canvas"),
    gridWidth = imageCanvas.width,
    canvasWidth = gridWidth,
    gridHeight = imageCanvas.height,
    canvasHeight = gridHeight,
    gridPadding = 1;

var gridCanvas = $('<canvas id=gridLayer></canvas>').attr({
    width: canvasWidth,
    height: canvasHeight
}).appendTo('#imageCanvas');
var context = gridCanvas.get(0).getContext("2d");
drawGridBoard(gridWidth, gridHeight, gridPadding, context);
}

function drawGridBoard(gridWidth, gridHeight, gridPadding, context) {
for (var x = 0; x <= gridWidth; x += 40) {
    context.moveTo(0.5 + x + gridPadding, gridPadding);
    context.lineTo(0.5 + x + gridPadding, gridHeight + gridPadding);
}


for (var x = 0; x <= gridHeight; x += 40) {
    context.moveTo(gridPadding, 0.5 + x + gridPadding);
    context.lineTo(gridWidth + gridPadding, 0.5 + x + gridPadding);
}

context.strokeStyle = "blue";

context.setLineDash([15, 5]);
context.stroke();
}
}) 

```

## Looks

![Screenshot of Canvas Image Rotation Angular JS](https://user-images.githubusercontent.com/15896579/26959081-e92c8d7c-4ceb-11e7-86fc-a9f80531ced3.png?raw=true "Screenshot of Canvas Image Rotation Angular JS")
<br/><br/><br/>

![Screenshot of Canvas Image Rotation Angular JS](https://user-images.githubusercontent.com/15896579/26959085-eadab0f4-4ceb-11e7-9402-72a969d954f5.png?raw=true "Screenshot of Canvas Image Rotation Angular JS")
<br/><br/><br/>

![Screenshot of Canvas Image Rotation Angular JS](https://user-images.githubusercontent.com/15896579/26959087-ecb05dde-4ceb-11e7-92d5-7aad1d6def5c.png?raw=true "Screenshot of Canvas Image Rotation Angular JS")
<br/><br/><br/>

## License

(The MIT License)

Copyright (c) 2016 Amir Mustafa

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
