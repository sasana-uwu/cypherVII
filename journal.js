const context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 450;
context.canvas.width = 900;

var cat_url = "cat.png";
var image = new Image();

image.onload = function() {
    context.drawImage(image, 150, 0, 450, 450);
};
image.src = cactus_url;

meter.onload = function() {
    context.drawImage(meter, 25, 0, 300, 300);
};
meter.src = meter_url;