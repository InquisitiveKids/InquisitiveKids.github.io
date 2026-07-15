var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(400, 400);
        frameRate(30);
        // KA Javascript code goes here!

        // ----------  Begin   ------------ 

        //behind the scenes
        var mainPageAnimationOriginal = 150;
        var mainPageAnimationSpeed = 1;
        var backgroundColor = 2;

        background(61, 140, 224);
        fill(0, 0, 0);
        textSize(30);
        text("*Click Anywhere to Start*", 130, 270);

        image(getImage("avatars/avatar-team"), mainPageAnimationOriginal, 40, 300, 180);

        //moving on
        mouseClicked = function () {

            if (backgroundColor === 2) {
                background(0, 0, 0);
                backgroundColor = 3;
            }
            else {
                background(61, 140, 224);
                backgroundColor = 2;
            }

            //header
            noFill();
            stroke(255, 255, 255);
            rect(100, 200, 380, 40);
        }




        // ----------- End   ----------------

    }
};




