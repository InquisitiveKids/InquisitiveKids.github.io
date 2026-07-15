
var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(400, 400);
        frameRate(30);
        // KA Javascript code goes here!

        // ----------  Begin   ------------ 


        draw = function() {
    
            background(41, 41, 41);
            fill(0, 255, 21);
            rect(mouseX-30, mouseY-30, 30, 30);
            
        };

        // ----------- End   ----------------

    }
};
