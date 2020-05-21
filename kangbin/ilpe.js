background(130, 52, 130);

var X = ellipse;
noStroke();
var B = 1;

draw = function () {
    fill(mouseY, mouseX, 0);
    ellipse(mouseX, mouseY, 20, 20);
    textSize(B);
    text("W", 0, 321);
    B = B + 1;
};