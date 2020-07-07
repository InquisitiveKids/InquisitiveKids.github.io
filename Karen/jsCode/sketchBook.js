
var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(600, 600);
        frameRate(30);
        // KA Javascript code goes here!

        // ----------  Begin   ------------ 

        background(110, 110, 110);

        //blank canvas
        var blankCanvasDraw = function () {
            fill(255, 255, 255);
            noStroke();
            rect(9, 12, 457, 457);
        };

        blankCanvasDraw();


        //color picker lines
        fill(255, 0, 0);
        rect(14, 511, 450, 6, 500);

        fill(0, 255, 0);
        rect(14, 538, 450, 6, 500);

        fill(0, 0, 255);
        rect(14, 565, 450, 6, 500);

        //color picker
        var redColorAmount = 255;
        var greenColorAmount = 0;
        var blueColorAmount = 0;
        var strokeSize = 7;

        fill(255, 255, 255);
        stroke(0, 0, 0);
        ellipse(redColorAmount, 513, 19, 19);

        fill(255, 255, 255);
        ellipse(greenColorAmount, 539, 19, 19);

        fill(255, 255, 255);
        ellipse(blueColorAmount, 568, 19, 19);

        //text
        noFill();
        stroke(0, 255, 247);
        rect(487, 26, 90, 90, 25);
        fill(0, 255, 247);
        textSize(49);
        text("T", 518, 91);

        var textRectPo = random(200, 400);

        if (mousePressed && mouseX > 487 && mouseY > 180 && mouseX < 577 && mouseY < 116) {
            rect(200, 200, 200, 200);
        }

        // new sketch
        noFill();
        rect(487, 132, 90, 90, 25);
        textSize(13);
        fill(255, 255, 255);
        text("New Sketch", 495, 181);

        if (mousePressed && mouseX > 487 && mouseY > 132 && mouseX < 577 && 270) {
            blankCanvasDraw();
        }

        //fill
        rect(487, 246, 90, 90, 25);
        fill(0, 0, 0);
        textSize(23);
        text("Fill 🎨", 498, 297);

        //drawing

        draw = function () {
            noStroke();
            fill(redColorAmount, greenColorAmount, blueColorAmount);
            if (mousePressed && mouseX > 9 && mouseY > 12 && mouseX < 466 && mouseY < 469) {
                rect(mouseX, mouseY, strokeSize, strokeSize);
            }
        };




        // ----------- End   ----------------

    }
};
