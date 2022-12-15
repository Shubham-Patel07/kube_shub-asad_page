var myButton = document.getElementById("myButton");
var xPos = "600px";
var yPos = "300px";
var x = 600;
var y = 400;

var dx;
var dy;

onmousemove = function (e) {
  dx = x - e.clientX;
  dy = y - e.clientY;
  if (Math.sqrt(dx * dx + dy * dy) < 100) {
    x += Math.random() * 100 - 50;
    y += Math.random() * 100 - 50;
    xPos = x.toString() + "px";
    yPos = y.toString() + "px";
    myButton.style.left = xPos;
    myButton.style.top = yPos;
  }
};
