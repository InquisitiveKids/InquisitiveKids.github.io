
var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(400, 400);
        frameRate(30);
        // KA Javascript code goes here!

        // ----------  Begin   ------------ 


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

        // ----------- End   ----------------

    }
};
