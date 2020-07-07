var sketchProc = function(processingInstance) {
    with(processingInstance) {
        size(400, 400);
        frameRate(30);
        // KA Javascript code goes here!

        // ----------  Begin   ------------ 

        /*

Let's face it, no matter how nice they are they still put a hole in your beautiful lawn. And what better way to get rid of moles than a mallet? 

Other Games by BransfordC. you might like:
    The Adventurer's Jetpack:
https://www.khanacademy.org/computer-programming/the-adventurers-jetpack/5545990550
    Steamed Vegetables:
https://www.khanacademy.org/computer-programming/steamed-vegetables/4889270356

Log:
    8-24-16: By the end of the day this game had 17 Votes.
    8-25-16: 64 Votes.

*/

        var score = 0;

        var malletX = 200;
        var malletY = 200;

        var popUp = [0, 0, 0, 0, 0];
        var moleWait = [0, 500, 1000, 1500, 2000];
        var moleX = [200, 200, 200, 200, 200];
        var moleY = [200, 200, 200, 200, 200];
        var talk = [0, 0, 0, 0, 0];

        var mole = function(x, y, id) {

            if (moleWait[id] > 0) {
                moleWait[id]--;
            } else {
                popUp[id] += 1;
            }

            // Go Away
            if (popUp[id] > 500) {
                moleWait[id] = random(20, 300);
                moleX[id] = random(90, 310);
                moleY[id] = random(130, 380);
                popUp[id] = 0;
                score -= 50;
                talk[id] = random(0, 9);
            }

            //Whack!!!
            if (mousePressed && moleWait[id] < 1 && malletX > x - 40 && malletX < x + 40 && malletY > y - 50 && malletY < y + 13) {
                moleWait[id] = random(20, 300);
                moleX[id] = random(90, 310);
                moleY[id] = random(130, 380);
                popUp[id] = 0;
                score += 100;
                talk[id] = random(0, 11);
            }

            // Hole
            fill(0, 0, 0);
            if (popUp[id] < 25) {
                ellipse(x, y, popUp[id] * (16 / 5), popUp[id]);
            } else {
                ellipse(x, y, 80, 25);
            }

            // Mole
            fill(207, 124, 0);
            if (popUp[id] >= 25 && popUp[id] <= 33) {
                rect(x - 27, y + 3 - ((popUp[id] - 25) * 4), 54, 6 + ((popUp[id] - 25) * 4));
                arc(x, y, 80, 25, 45, 135);
                arc(x, y + 8 - ((popUp[id] - 25) * 4), 54, 30 + ((popUp[id] - 25) * 2), -180, 0);
                fill(0, 0, 0);
                ellipse(x - 5, y + 8 - ((popUp[id] - 25) * 4), 5, 5);
                ellipse(x + 5, y + 8 - ((popUp[id] - 25) * 4), 5, 5);
                if (popUp[id] >= 27.6) {
                    ellipse(x, y + 18 - ((popUp[id] - 25) * 4), 15, 10);
                }
            }
            if (popUp[id] > 33) {
                rect(x - 27, y - 25, 54, 33);
                arc(x, y, 80, 25, 45, 135);
                arc(x + 0.5, y - 23, 54, 46, -180, 0);
                fill(0, 0, 0);
                ellipse(x - 5, y + 8 - 32, 5, 5);
                ellipse(x + 5, y + 8 - 32, 5, 5);
                ellipse(x, y + 18 - 32, 15, 10);
                arc(x, y + 28 - 32, 15, 10, 0, 180);
                textAlign(CENTER);
                textSize(20);
                if (talk[id] >= 0 && talk[id] < 1) {
                    fill(255, 255, 255);
                    rect(x - 32, y - 75, 64, 25, 20);
                    fill(0, 0, 0);
                    text("Hello.", x - 100, y - 70, 200, 100);
                }
                if (talk[id] >= 1 && talk[id] < 2) {
                    fill(255, 255, 255);
                    rect(x - 20, y - 75, 40, 25, 20);
                    fill(0, 0, 0);
                    text("Hi.", x - 100, y - 70, 200, 100);
                }
                if (talk[id] >= 2 && talk[id] < 3) {
                    fill(255, 255, 255);
                    rect(x - 70, y - 75, 140, 25, 20);
                    fill(0, 0, 0);
                    text("I like your hair.", x - 100, y - 70, 200, 100);
                }
                if (talk[id] >= 3 && talk[id] < 4) {
                    fill(255, 255, 255);
                    rect(x - 52, y - 75, 104, 25, 20);
                    fill(0, 0, 0);
                    text("What's up!", x - 100, y - 70, 200, 100);
                }
                if (talk[id] >= 4 && talk[id] < 5) {
                    fill(255, 255, 255);
                    rect(x - 80, y - 75, 160, 25, 20);
                    fill(0, 0, 0);
                    text("What a nice day.", x - 100, y - 70, 200, 100);
                }
                if (talk[id] >= 5 && talk[id] < 6) {
                    fill(255, 255, 255);
                    rect(x - 60, y - 75, 120, 25, 20);
                    fill(0, 0, 0);
                    text("Cool mallet!", x - 100, y - 70, 200, 100);
                }

                if (talk[id] >= 6 && talk[id] < 7) {
                    fill(255, 255, 255);
                    rect(x - 90, y - 75, 180, 25, 20);
                    fill(0, 0, 0);
                    text("Wanna be friends?", x - 100, y - 70, 200, 100);
                }
                if (talk[id] >= 7 && talk[id] < 8) {
                    fill(255, 255, 255);
                    rect(x - 40, y - 75, 80, 25, 20);
                    fill(0, 0, 0);
                    text("Mama?", x - 100, y - 70, 200, 100);
                }
                if (talk[id] >= 8 && talk[id] < 9) {
                    fill(255, 255, 255);
                    rect(x - 50, y - 75, 100, 25, 20);
                    fill(0, 0, 0);
                    text("I love you.", x - 100, y - 70, 200, 100);
                }
                if (talk[id] >= 9 && talk[id] < 10) {
                    fill(255, 255, 255);
                    rect(x - 72, y - 75, 144, 25, 20);
                    fill(0, 0, 0);
                    text("My head hurts.", x - 100, y - 70, 200, 100);
                }
                if (talk[id] >= 10 && talk[id] < 11) {
                    fill(255, 255, 255);
                    rect(x - 66, y - 75, 132, 25, 20);
                    fill(0, 0, 0);
                    text("I forgive you.", x - 100, y - 70, 200, 100);
                }
            }

        };

        var draw = function() {
            background(25, 205, 50);
            cursor("none");
            frameRate(80);
            for (var a = 0; a < 400; a++) {
                if (moleY[0] >= a && moleY[0] < a + 1) {
                    mole(moleX[0], moleY[0], 0);
                }
                if (moleY[1] >= a && moleY[1] < a + 1) {
                    mole(moleX[1], moleY[1], 1);
                }
                if (moleY[2] >= a && moleY[2] < a + 1) {
                    mole(moleX[2], moleY[2], 2);
                }
                if (moleY[3] >= a && moleY[3] < a + 1) {
                    mole(moleX[3], moleY[3], 3);
                }
                if (moleY[4] >= a && moleY[4] < a + 1) {
                    mole(moleX[4], moleY[4], 4);
                }
            }
            fill(125, 255, 255);
            rect(-20, -20, 240, 70, 20);
            fill(0, 0, 0);
            textSize(30);
            textAlign(LEFT);
            text("Score: " + score, 10, 10, 400, 100);

            //Mallet

            if (malletX <= 200) {
                if (mousePressed) {
                    fill(255, 255, 0);
                    rect(malletX - 30, malletY - 50, 150, 20, 20);
                    rect(malletX - 30, malletY - 80, 60, 80);
                    fill(255, 0, 0);
                    rect(malletX - 30, malletY - 60, 60, 10);
                    rect(malletX - 30, malletY - 45, 60, 10);
                } else {
                    malletX = mouseX;
                    malletY = mouseY;
                    fill(255, 255, 0);
                    rect(malletX + 100, malletY - 180, 20, 150, 20);
                    rect(malletX + 70, malletY - 180, 80, 60);
                    ellipse(malletX + 70, malletY - 150, 20, 60);
                    arc(malletX + 150, malletY - 150, 20, 60, -90, 90);
                    fill(255, 0, 0);
                    rect(malletX + 105, malletY - 180, 10, 60);
                    rect(malletX + 120, malletY - 180, 10, 60);
                    stroke(255, 0, 0);
                    strokeWeight(2);
                    line(malletX, malletY - 30, malletX, malletY + 30);
                    line(malletX - 30, malletY, malletX + 30, malletY);
                    noFill();
                    ellipse(malletX, malletY, 40, 40);
                    stroke(0, 0, 0);
                    strokeWeight(1);
                }
            } else {
                if (mousePressed) {
                    fill(255, 255, 0);
                    rect(malletX - 120, malletY - 50, 150, 20, 20);
                    rect(malletX - 30, malletY - 80, 60, 80);
                    fill(255, 0, 0);
                    rect(malletX - 30, malletY - 60, 60, 10);
                    rect(malletX - 30, malletY - 45, 60, 10);
                } else {
                    malletX = mouseX;
                    malletY = mouseY;
                    fill(255, 255, 0);
                    rect(malletX - 120, malletY - 180, 20, 150, 20);
                    rect(malletX - 150, malletY - 180, 80, 60);
                    ellipse(malletX - 70, malletY - 150, 20, 60);
                    arc(malletX - 149, malletY - 150, 20, 60, 90, 270);
                    fill(255, 0, 0);
                    rect(malletX - 130, malletY - 180, 10, 60);
                    rect(malletX - 115, malletY - 180, 10, 60);
                    stroke(255, 0, 0);
                    strokeWeight(2);
                    line(malletX, malletY - 30, malletX, malletY + 30);
                    line(malletX - 30, malletY, malletX + 30, malletY);
                    noFill();
                    ellipse(malletX, malletY, 40, 40);
                    stroke(0, 0, 0);
                    strokeWeight(1);
                }
            }

        };





        // ----------- End   ----------------

    }
};