
var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(400, 400);
        frameRate(30);
        // KA Javascript code goes here!

        // ----------  Begin   ------------ 

        background(130, 52, 130);
        
        fill(255, 0, 255);

        draw = function () {
            background(255, 255, 255);
            ellipse(mouseX, mouseY, 5, 5);
            var label = mouseX + "," + mouseY;

            text(label, mouseX, mouseY);

        };

        // ----------- End   ----------------

    }
};
