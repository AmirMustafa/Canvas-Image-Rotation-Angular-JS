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