/* 
    Main Variables:

    howTo - the How-To page
*/
//Homepage! 
background(150, 117, 105);
textSize(100);
text("LandLord", 85, 150);
textSize(55);
text("How To", 180, 400);
text("Play", 180, 468);

//How-To Page
var howTo = function () {
    background(0, 0, 0);
    textSize(20);
    text("How to", 255, 54);

    fill(255, 255, 255);
    textSize(12);

    text("The goal of the game is to claim as much teiritory as posible without dying. ", 100, 100);
    text("to do that you have to get recourses around and you might have to defend your land from invaders", 55, 118);
    text("and then you might have to atack other people the more recourses the more powerfull you are. Use arrowkeys to move.", 39, 135);
};

mouseClicked = function () {
    if (mouseX > 180 && mouseY > 340 && mouseX < 370 && mouseY < 405) {
        howTo();
    }
};

//Play Page
mousePressed = function () {
    if (mouseX > 170 && mouseY > 417 && mouseX < 370 && mouseY < 482) {
        background(107, 142, 35);
        rect(200, 200, 200, 200);
    }
};