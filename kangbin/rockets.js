
var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(1400, 600);
        frameRate(30);
        // KA Javascript code goes here!

        // ----------  Begin   ------------ 

        /**
        
        Welcome to Rockets.io, a game where you can play with your favorite coders!
        
        @INSTRUCTIONS
        
        Arrow keys to turn, space bar to shoot
        Don't run into planets or any other players
        Collect gems to buy skins!
        
        @SUB_HERE for more games!
        
        https://khanacademy.org/cs/i/4953787015725056
        
        @MORE_PROGRAMS
        
        https://www.khanacademy.org/profile/MisterJavaScript/projects
        
        @CHECK_THIS_OUT
        
        https://khanacademy.org/cs/i/5736513643495424
        
        @LUCKY_SUBBER
        
        This program's lucky subscriber is Skye!
        Check their program's out here: https://www.khanacademy.org/profile/SkyeHaven/projects
        
        Subscribe for a chance of being the next lucky subber!
        
        @CREDITS
        
        I used an outlinedText function that I got from Enderhaven, but I did modify it.
        Everything else was done by me
        
        This is an official entry for the Futuristic/Medieval contest
        
        And btw, no, this is not based off of a real io game
        
        @Vote_Tracker (times are in CST)
        
        Created on 4/19/20 at 4:49 PM
        
        8:45 PM 4/19/20 - 23 votes and 3rd on the Hot List. Wow, not too bad for the first 4 hours! Thanks guys!
        
        10:15 AM 4/20/20 - 51 votes and 2nd on the Hotlist. It just got de-throned from 1000 Kelvin by Light Runner. Oh well, he did have a pretty cool graphic
        
        1:33 PM 4/20/20 - 75 votes, 2nd on the HL. Thanks for the votes guys! Can we hit 100?
        
        6:24 PM 4/20/20 - 100 votes, 2nd on the HL. Thanks for the votes, we hit 100! The 100th voter was Program Lover. Can we hit 150? O.o
        
        6:04 PM 4/21/20 - 151 votes, 2nd on the HL. Yaay! We hit 150! :D It would be CRAZY if we hit 200, can we make it happen??
        
        12:06 PM 4/23/20 - 200 votes, 11th on the Hotlist. WE GOT 200! Huge thanks to all of you, the 200th voter was The Viper Programmer
        
        */







        (function () {
            this[["KAInfiniteLoopCount"]] = -Infinity;
        })();


        var scene = 'logo';

        //{
        var normVector = function (vector) {
            var d = sqrt(vector[0] * vector[0] + vector[1] * vector[1] + vector[2] * vector[2]);
            return [vector[0] / d, vector[1] / d, vector[2] / d];
        };

        var subVectors = function (vectorA, vectorB) {
            return [[vectorA[0] - vectorB[0]], [vectorA[1] - vectorB[1]], [vectorA[2] - vectorB[2]]];
        };

        var planeNormal = function (faces, nodes) {
            var A = nodes[faces[0]];
            var B = nodes[faces[1]];
            var C = nodes[faces[2]];
            var a = subVectors(A, B);
            var b = subVectors(A, C);
            var c = [[a[1] * b[2] - a[2] * b[1]], [a[2] * b[0] - a[0] * b[2]], [a[0] * b[1] - a[1] * b[0]]];
            return c;
        };

        var dotProduct = function (vectorA, vectorB) {
            return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1] + vectorA[2] * vectorB[2];
        };

        var points = [
            [-125, -125, 20],
            [125, -125, 20],
            [100, 75, 20],
            [-100, 75, 20],
            [-125, -125, -20],
            [125, -125, -20],
            [100, 75, -20],
            [-100, 75, -20],
            [0, 125, 20],
            [0, 125, -20],
            [0, -100, -20],
            [0, 100, -20],
            [90, 60, -20],
            [110, -100, -20],
            [-30, -120, -20],
            [-30, -105, -20],
            [-25, -105, -20],
            [-25, -120, -20],
            [-5, -120, -20],
            [-5, -115, -20],
            [-30, -115, -20],
            [-20, -120, -20],
            [-15, -120, -20],
            [-15, -105, -20],
            [-20, -105, -20],
            [-10, -120, -20],
            [-5, -120, -20],
            [-5, -105, -20],
            [-10, -105, -20],
            [5, -120, -20],
            [10, -120, -20],
            [10, -105, -20],
            [5, -105, -20],
            [17, -120, -20],
            [17, -117, -20],
            [5, -117, -20],
            [14, -120, -20],
            [14, -114, -20],
            [17, -114, -20],
            [13, -105, -20],
            [17, -105, -20],
            [17, -109, -20],
            [13, -109, -20],
            [-40, -90, -20],
            [-10, -90, -20],
            [-10, 60, -20],
            [-40, 60, -20],
            [-10, 30, -20],
            [-80, 30, -20],
            [-80, 60, -20],
            [10, -90, -20],
            [80, -90, -20],
            [80, -60, -20],
            [10, -60, -20],
            [40, -90, -20],
            [40, -20, -20],
            [10, -20, -20],
            [10, 10, -20],
            [80, 10, -20],
            [80, -20, -20],
            [50, 10, -20],
            [50, 60, -20],
            [80, 60, -20],
            [10, 60, -20],
            [10, 30, -20],
            [80, 30, -20]
        ];

        var faces = [
            [0, 1, 2, 3],
            [7, 6, 5, 4],
            [4, 5, 1, 0],
            [0, 3, 7, 4],
            [5, 6, 2, 1],
            [6, 7, 9],
            [8, 3, 2],
            [6, 9, 8, 2],
            [3, 8, 9, 7],
            [10, 11, 12, 13],
            [14, 15, 16, 17],
            [20, 19, 18, 14],
            [24, 23, 22, 21],
            [28, 27, 26, 25],
            [32, 31, 30, 29],
            [29, 35, 34, 33],
            [34, 36, 37, 38],
            [39, 40, 41, 42],
            [46, 45, 44, 43],
            [45, 47, 48, 49],
            [53, 52, 51, 50],
            [56, 55, 54, 50],
            [56, 57, 58, 59],
            [58, 60, 61, 62],
            [65, 64, 63, 62],
        ];

        var light = [0.5, -0.2, -2];
        var backLighting = 0.1;
        var lightVector = normVector(light);

        var Shape = function () {
            this.x = -85;
            this.s = 1;
            this.p = points;
            this.f = faces;
            this.c = color(59, 177, 255);
            this.sVel = 0;
            this.flipped = false;

            this.rZ = function (a) {
                for (var i = 0; i < this.p.length; i++) {
                    var x = this.p[i][0] * sin(a);
                    this.p[i][0] = this.p[i][0] * cos(a) - this.p[i][1] * sin(a);
                    this.p[i][1] = x + this.p[i][1] * cos(a);
                }
            };

            this.rX = function (a) {
                for (var i = 0; i < this.p.length; i++) {
                    var y = this.p[i][1] * sin(a);
                    this.p[i][1] = this.p[i][1] * cos(a) - this.p[i][2] * sin(a);
                    this.p[i][2] = y + this.p[i][2] * cos(a);
                }
            };

            this.rY = function (a) {
                for (var i = 0; i < this.p.length; i++) {
                    var x = this.p[i][0] * sin(a);
                    this.p[i][0] = this.p[i][0] * cos(a) + this.p[i][2] * sin(a);
                    this.p[i][2] = this.p[i][2] * cos(a) - x;
                }
            };

            this.draw = function () {
                pushMatrix();
                translate(this.x, height / 2);
                scale(this.s, this.s);
                fill(0);
                textSize(20);
                textAlign(CENTER, CENTER);
                for (var i in this.f) {
                    var fn = planeNormal(this.f[i], this.p);
                    if (fn[2] < 0) {
                        var q = max(0, dotProduct(lightVector, normVector(fn)));
                        q = backLighting + (1 - backLighting) * q;
                        noStroke();
                        var c;
                        if (i < 9) {
                            c = lerpColor(color(0), this.c, q);
                        } else if (i > 8 && i < 10) {
                            c = lerpColor(color(0), color(0, 113, 150), q);
                        } else if (i > 9 && i < 18) {
                            c = lerpColor(color(0), color(50, 50, 50), q);
                        } else if (i > 17) {
                            c = lerpColor(color(0), color(255), q);
                        }
                        fill(c);
                        if (this.f[i].length === 3) {
                            triangle(this.p[this.f[i][0]][0], this.p[this.f[i][0]][1], this.p[this.f[i][1]][0], this.p[this.f[i][1]][1], this.p[this.f[i][2]][0], this.p[this.f[i][2]][1]);
                        } else {
                            quad(this.p[this.f[i][0]][0], this.p[this.f[i][0]][1], this.p[this.f[i][1]][0], this.p[this.f[i][1]][1], this.p[this.f[i][2]][0], this.p[this.f[i][2]][1], this.p[this.f[i][3]][0], this.p[this.f[i][3]][1]);
                        }
                    }
                }
                popMatrix();
                if (this.s > 1) {
                    this.sVel -= 0.003;
                    this.rX(-11);
                }
                this.s += this.sVel;
                if (this.s < 1) {
                    this.sVel = 0;
                    this.s = 1;
                }
            };
        };

        var logo = new Shape();

        var typer = 0;
        var typeSpeed = 2;
        var a = 0;
        var gridX = [];
        var gridY = [];
        for (var i = 0; i < width; i += 10) {
            gridX.push(i);
        }
        for (var i = 0; i < height; i += 10) {
            gridY.push(i);
        }
        var pos = [];
        var vel = 15;
        var g = 0.3;
        var x = -100;

        var codeString = function (x, y, t) {
            this.x = x;
            this.y = y;
            this.t = t;
        };

        codeString.prototype.draw = function () {
            fill(0, 255, 0, this.t);
            for (var i = 0; i < 5; i++) {
                textSize(10);
                text(floor(random(0, 2)), this.x, this.y + i * 20);
            }
        };

        codeString.prototype.float = function () {
            this.y -= 5;
            this.t -= random(1, 5);
        };

        codeString.prototype.loop = function () {
            if (this.y < random(-50, 50)) {
                this.y = random(450, 350);
                this.t = random(200, 255);
                this.x = random(0, width);
            }
        };

        codeString.prototype.all = function () {
            this.draw();
            this.float();
            this.loop();
        };

        var codeStrings = [];

        for (var i = 0; i < 200; i++) {
            codeStrings.push(new codeString(random(0, width), height - random(0, 400), 255));
        }

        var A = 255;
        var yVel = 0;
        var Logo = function () {
            background(0);
            for (var i = 0; i < codeStrings.length; i++) {
                codeStrings[i].all();
            }
            logo.draw();
            if (x !== 235) {
                logo.rY(10.5);
            }
            for (var i = 0; i < 15; i++) {
                fill(255 - i * 10, 255 - i * 10, 255);
                textAlign(CENTER, CENTER);
                textFont(createFont("cursive Italic"), 50);
                text("Presents!", x + i, 400);
            }
            textFont(createFont("arial black Italic"));
            logo.x += vel;
            x += vel;
            vel -= g;
            if (vel < 0 && x < 235) {
                x = 235;
                logo.x = 250;
                logo.sVel = logo.flipped ? logo.sVel : 0.05;
                logo.flipped = true;
            }
            fill(0, A);
            noStroke();
            rect(0, 0, width, height);
            A -= 5;
            if (frameCount > 200) {
                scene = 'home';
            }
        };
        //} Messy Logo code

        var username = '';

        var coders = ["JentGent", "Green Ghost", "The Anonymous", "Loyalty", "Legolas Greenleaf", "Chester Banks", "Light Runner", "Arrowhead Co.", "xacer", "Mojo 1000", "Mushy Avocado", "BB-8", "The Scythe", "Eragon Blaze", "Ender Haven", "Agent X", "Kruxe", "Xenon", "Isaac Emerald", "Random Programmer 24"];

        //var coders = ["Chester Banks"];

        var rndm = function (a) {
            return a[floor(random(a.length))];
        };

        var diedCrash = ["You crashed into\n", "Your spaceship got pummeled by\n", "You got rammed by\n"];

        var planCrash = ["You somehow didn't see a\nplanet coming", "You got too close to a\nhunk of space rock", "You got crushed by an\nextraterrestrial world"];

        var diedShoot = ["You got gunned down by\n", "You've been shot by\n", "You got targeted by\n"];

        var diedLaser = ["You really though it'd be a good\nidea to touch a laser?", "Apparently, highly concentrated\nrays of light are bad for your health", "You got vaporised by\na beam of energy"];

        var diedLaser = ["Apparently, highly concentrated\nrays of light are bad for your health"];

        var cam = {
            x: 0,
            y: 0
        };

        var sceneW = 4000;

        var Smooth = function (pos, des, time) {
            return (des - pos) / time;
        };

        textAlign(CENTER, CENTER);
        textFont(createFont("arial black Italic"));

        var keys = [];
        var nameBlock;
        keyPressed = function () {
            keys[keyCode] = true;
            if (nameBlock.selected) {
                if (keyCode === ENTER) {
                    nameBlock.selected = false;
                } else if (keyCode === 8) {
                    username = username.substring(username, username.length - 1);
                } else if (keyCode !== 20 && keyCode !== 16) {
                    if (username.length < nameBlock.maxChars) {
                        username += key.toString(username);
                    }
                }
            }
        };
        keyReleased = function () {
            keys[keyCode] = false;
        };

        var parts = [];

        var TrailPart = function (x, y) {
            this.x = x;
            this.y = y;
            this.s = 10;
            this.clr = random(1);
            if (this.clr < 0.5) {
                this.c = color(random(200, 255), 150, 0);
            } else {
                this.c = random(150, 220);
            }
            this.xVel = random(-1, 1);
            this.yVel = random(-1, 1);
            this.a = 255;

            this.draw = function () {
                noStroke();
                fill(this.c, this.a);
                ellipse(this.x, this.y, this.s, this.s);
                this.s -= 0.1;
                this.x += this.xVel;
                this.y += this.yVel;
                this.a -= 5;
            };
        };

        var ExpPart = function (x, y) {
            this.x = x;
            this.y = y;
            this.xVel = random(-5, 5);
            this.yVel = random(-5, 5);
            var r = random(1);
            if (r < 0.5) {
                this.c = color(random(150, 255), random(100, 255), 0);
            } else {
                this.c = random(50, 150);
            }
            this.a = 255;

            this.draw = function () {
                noStroke();
                fill(this.c, this.a);
                ellipse(this.x, this.y, 30, 30);
                this.a -= 10;
                this.x += this.xVel;
                this.y += this.yVel;
            };
        };

        var KillNotif = function (name) {
            this.x = 250;
            this.y = 400;
            this.a = 255;
            this.name = name;

            this.draw = function () {
                pushMatrix();
                translate(-cam.x, -cam.y);
                fill(200, 0, 0, this.a);
                textSize(20);
                text("Eliminated " + this.name, this.x, this.y);
                this.y -= 1;
                this.a -= 2;
                popMatrix();
            };
        };

        var GoldPart = function (x, y) {
            this.x = x;
            this.y = y;
            this.xVel = random(-5, 5);
            this.yVel = random(-5, 5);
            this.c = color(random(200, 255), random(200, 255), 0);
            this.s = random(5, 11);
            this.a = 255;

            this.draw = function () {
                noStroke();
                fill(this.c, this.a);
                pushMatrix();
                translate(-cam.x, -cam.y);
                ellipse(this.x, this.y, this.s, this.s);
                popMatrix();
                this.a -= 5;
                this.y += this.yVel;
                this.x += this.xVel;
            };
        };

        var AchNotif = function (ach) {
            this.ach = ach;
            this.x = 100;
            this.y = -75;
            this.a = 255;
            this.tA = 255;
            this.ta = 0;
            this.to = 0;
            this.l1 = 0;
            this.l2 = 0;
            this.t = 0;
            this.e = false;

            this.draw = function () {
                pushMatrix();
                translate(0, -60);
                stroke(255, 255, 0, this.a);
                strokeWeight(5);
                fill(255, this.a);
                rect(this.x, this.y, 300, 75, 20);
                fill(0, this.tA);
                textSize(20);
                text("Achievement Unlocked!", 250, this.y + 75 / 2);
                fill(0, this.ta);
                text(this.ach, 250 + this.to, this.y + 75 / 2);
                stroke(0, 200, 0, this.a);
                strokeWeight(5);
                if (this.l1 > 0) {
                    line(325 + this.l1, 137 + this.l1, 325, 137);
                }
                if (this.l2 > 0) {
                    line(343 + this.l2, 155 - this.l2, 343, 155);
                }
                popMatrix();
                this.y += Smooth(this.y, 100, 10);
                if (!this.e && this.y >= 93) {
                    for (var i = 0; i < 100; i++) {
                        parts.push(new GoldPart(250 + random(-100, 100), 100 + random(-25, 25)));
                    }
                    this.e = true;
                }
                if (this.y > 99) {
                    this.tA += Smooth(this.tA, 0, 5);
                    this.ta += Smooth(this.ta, 255, 10);
                }
                if (this.ta > 244) {
                    this.to += Smooth(this.to, -45, 10);
                }
                if (this.to < -24) {
                    this.l1 += Smooth(this.l1, 18, 5);
                }
                if (this.l1 > 17) {
                    this.l2 += Smooth(this.l2, 37, 5);
                }
                if (this.l2 > 36) {
                    this.t++;
                }
                if (this.t > 50) {
                    this.a += Smooth(this.a, -10, 10);
                    this.ta += Smooth(this.ta, -100, 5);
                }
            };
        };

        var ach = [];

        var drawShip = function (x, y, s, color) {
            pushMatrix();
            translate(x, y);
            scale(s, s);
            rotate(-45);
            noStroke();
            switch (color) {
                case 'yellow':
                    fill(235, 235, 0);
                    break;

                case 'blue':
                    fill(0, 0, 255);
                    break;

                case 'pink':
                    fill(255, 0, 255);
                    break;

                case 'white':
                    fill(170);
                    break;

                case 'orange':
                    fill(255, 150, 0);
                    break;

                case 'red':
                    fill(200, 0, 0);
                    break;

                case 'black':
                    fill(0);
                    break;

                case 'purple':
                    fill(97, 0, 181);
                    break;

                case 'brown':
                    fill(110, 74, 16);
                    break;

                case 'green':
                    fill(0, 150, 0);
                    break;
            }
            rectMode(CENTER);
            rect(0, 0, 40, 20);
            switch (color) {
                case 'yellow':
                    fill(255, 255, 150);
                    break;

                case 'blue':
                    fill(150, 150, 255);
                    break;

                case 'pink':
                    fill(255, 150, 255);
                    break;

                case 'white':
                    fill(230, 230, 230);
                    break;

                case 'orange':
                    fill(255, 150, 150);
                    break;

                case 'red':
                    fill(255, 50, 50);
                    break;

                case 'black':
                    fill(75);
                    break;

                case 'purple':
                    fill(179, 87, 255);
                    break;

                case 'brown':
                    fill(191, 147, 76);
                    break;

                case 'green':
                    fill(100, 200, 100);
                    break;
            }
            rect(0, -5, 40, 10);
            stroke(100);
            strokeWeight(3);
            fill(150, 255, 255);
            ellipse(10, 0, 10, 10);
            fill(100);
            noStroke();
            rectMode(CORNER);
            rect(-20, 0, 14, 2.5);
            fill(150);
            rect(-20, -2.5, 14, 2);
            fill(100);
            triangle(-20, 10, 0, 10, -20, 17);
            fill(150);
            triangle(-20, -10, 0, -10, -20, -17);
            triangle(20, -10, 20, 0, 35, 0);
            fill(100);
            triangle(20, 10, 20, 0, 35, 0);
            popMatrix();
        };

        var drawGem = function (x, y, s) {
            pushMatrix();
            translate(x, y);
            scale(s, s);
            fill(0, 255, 0);
            noStroke();
            beginShape();
            vertex(0, 0);
            vertex(50, 0);
            vertex(60, 10);
            vertex(25, 50);
            vertex(-10, 10);
            endShape();
            for (var i = 0; i < 7; i++) {
                fill(0, 115 + i * 20, 0);
                triangle(25, 50, -10 + i * 10, 10, 0 + i * 10, 10);
                quad(-10 + i * 10, 10, 0 + i * 10, 10, 10 + i * 6, 0, 0 + i * 6, 0);
            }
            popMatrix();
        };

        var Gem = function (x, y) {
            this.x = x;
            this.y = y;
            this.oX = this.x + random(-100, 100);
            this.oY = this.y + random(-100, 100);
            this.timer = 150;
            this.collected = false;

            this.draw = function () {
                drawGem(this.x, this.y, 0.5);
                this.timer--;
                this.x += Smooth(this.x, this.oX, 10);
                this.y += Smooth(this.y, this.oY, 10);
            };
        };

        var gems = [];

        var player;

        var ringedPlanet = function (x, y, s) {
            pushMatrix();
            translate(x, y);
            scale(s, s);
            rotate(-25);
            noFill();
            stroke(255, 213, 76);
            strokeWeight(15);
            arc(0, 0, 300, 50, 180, 360);
            noStroke();
            fill(255, 234, 163);
            ellipse(0, 0, 200, 200);
            fill(222, 201, 84);
            arc(0, -80, 100, 40, 180, 360);
            rect(-95, -40, 190, 20, 10);
            rect(-95, 20, 190, 20, 10);
            arc(0, 80, 100, 40, 0, 180);
            noFill();
            stroke(255, 213, 76);
            strokeWeight(15);
            arc(0, 0, 300, 100, 0, 180);
            popMatrix();
        };

        var lightGrayPlanet = function (x, y, s) {
            pushMatrix();
            translate(x, y);
            scale(s, s);
            fill(178, 216, 222);
            noStroke();
            ellipse(0, 0, 200, 200);
            fill(156, 180, 186);
            ellipse(-50, -20, 60, 60);
            ellipse(50, 10, 70, 70);
            ellipse(-65, 25, 20, 20);
            ellipse(30, -50, 20, 20);
            ellipse(-10, -60, 15, 15);
            ellipse(-15, 50, 45, 45);
            ellipse(20, 65, 20, 20);
            popMatrix();
        };

        var pinkPlanet = function (x, y, s) {
            pushMatrix();
            translate(x, y);
            scale(s, s);
            rotate(-25);
            noStroke();
            fill(255, 163, 255);
            ellipse(0, 0, 200, 200);
            fill(222, 84, 217);
            arc(0, -80, 100, 40, 180, 360);
            rect(-95, -40, 190, 20, 10);
            rect(-95, 20, 190, 20, 10);
            arc(0, 80, 100, 40, 0, 180);
            popMatrix();
        };

        var Planet = function (x, y, type) {
            this.x = x;
            this.y = y;
            this.type = type;
            this.s = random(0.25, 1);

            this.draw = function () {
                switch (this.type) {
                    case 0:
                        lightGrayPlanet(this.x, this.y, this.s);
                        break;

                    case 1:
                        ringedPlanet(this.x, this.y, this.s);
                        break;

                    case 2:
                        pinkPlanet(this.x, this.y, this.s);
                        break;
                }
            };
        };

        var planets = [];

        for (var i = 0; i < 50; i++) {
            planets.push(new Planet(random(-sceneW / 2, sceneW / 2), random(-sceneW / 2, sceneW / 2), floor(random(3))));
        }

        var Bullet = function (x, y, r, ind) {
            this.x = x;
            this.r = r;
            this.y = y;
            this.speed = 15;
            this.i = ind;
            this.pos = [];

            this.draw = function () {
                this.pos.push([this.x, this.y]);
                noStroke();
                fill(255, 0, 0);
                ellipse(this.x, this.y, 5, 5);
                stroke(255, 0, 0);
                if (this.pos.length >= 3) {
                    for (var i = 0; i < 3; i++) {
                        strokeWeight(5 - i * 1.5);
                        line(this.x, this.y, this.pos[this.pos.length - 1 - i][0], this.pos[this.pos.length - 1 - i][1]);
                    }
                }
                this.y += sin(this.r) * this.speed;
                this.x += cos(this.r) * this.speed;
            };
        };

        var bullets = [];

        var Achievement = function (x, y, name, des) {
            this.x = x;
            this.y = y;
            this.name = name;
            this.des = des;
            this.completed = false;

            this.draw = function () {
                noStroke();
                fill(this.completed ? color(255, 255, 0) : 100);
                arc(this.x, this.y, 50, 70, 0, 180);
                rect(this.x - 5, this.y, 10, 60);
                arc(this.x, this.y + 60, 30, 20, 180, 360);
                noFill();
                stroke(this.completed ? color(255, 255, 0) : 100);
                strokeWeight(5);
                arc(this.x + 20, this.y + 20, 30, 20, -90, 140);
                arc(this.x - 20, this.y + 20, 30, 20, 50, 270);
            };

            this.box = function () {
                noStroke();
                var off = 0;
                if (dist(this.x, this.y + 30, mouseX, mouseY) < 30) {
                    fill(200);
                    if (mouseX > 300) {
                        off = -100;
                        rect(mouseX - 200, mouseY, 200, 200);
                        fill(255);
                        textSize(15);
                        text(this.name, mouseX - 100, mouseY + 20);
                        rect(mouseX - 200, mouseY + 30, 200, 5);
                        text(this.des, mouseX - 200, mouseY, 200, 200);
                        if (this.completed) {
                            text("Completed", mouseX - 100, mouseY + 175);
                        } else {
                            text("Locked", mouseX - 100, mouseY + 175);
                        }
                    } else {
                        off = 100;
                        rect(mouseX, mouseY, 200, 200);
                        fill(255);
                        textSize(15);
                        rect(mouseX, mouseY + 30, 200, 5);
                        text(this.name, mouseX + 100, mouseY + 20);
                        text(this.des, mouseX, mouseY, 200, 200);
                        if (this.completed) {
                            text("Completed", mouseX + 100, mouseY + 175);
                        } else {
                            text("Locked", mouseX + 100, mouseY + 175);
                        }
                    }
                    var progress;
                    switch (this.name) {
                        case 'First Kill':
                            progress = player.totalKills + "/1";
                            break;

                        case 'Bounty Hunter':
                            progress = player.totalKills + "/15";
                            break;

                        case 'Assasin':
                            progress = player.totalKills + "/50";
                            break;

                        case 'New Style':
                            progress = player.skinsBought + "/1";
                            break;

                        case 'Shopping Spree':
                            progress = player.skinsBought + "/5";
                            break;

                        case 'Cosmetic King':
                            progress = player.skinsBought + "/10";
                            break;

                        case 'Gem Snatcher':
                            progress = player.totalGems + "/200";
                            break;

                        case 'Death of a Legend':
                            progress = player.skinsBought + "/1";
                            break;
                    }
                    fill(255);
                    if (!this.completed) {
                        text("Progress: " + progress, mouseX + off, mouseY + 150);
                    }
                }
            };

            this.check = function () {
                var req = null;
                switch (this.name) {
                    case 'First Kill':
                        req = player.totalKills >= 1;
                        break;

                    case 'Bounty Hunter':
                        req = player.totalKills >= 15;
                        break;

                    case 'Assasin':
                        req = player.totalKills >= 50;
                        break;

                    case 'New Style':
                        req = player.skinsBought >= 1;
                        break;

                    case 'Shopping Spree':
                        req = player.skinsBought >= 5;
                        break;

                    case 'Cosmetic King':
                        req = player.skinsBought >= 9;
                        break;

                    case 'Gem Snatcher':
                        req = player.totalGems >= 200;
                        break;

                    case 'Death of a Legend':
                        req = player.foundBanks === true;
                        break;
                }
                if (req && !this.completed) {
                    ach.push(new AchNotif(this.name));
                    this.completed = true;
                }
            };
        };

        var achievements = [new Achievement(100, 150, "First Kill", "Destroy your first spaceship"), new Achievement(200, 150, "Bounty Hunter", "Destroy 15 spaceships"), new Achievement(300, 150, "Assasin", "Destroy 50 spaceships"), new Achievement(400, 150, "New Style", "Buy your first skin"), new Achievement(100, 250, "Shopping Spree", "Buy five skins"), new Achievement(200, 250, "Cosmetic King", "Buy all skins"), new Achievement(300, 250, "Gem Snatcher", "Earn a total of 200 gems"), new Achievement(400, 250, "Death of a Legend", "Find and eliminate Chester Banks"),];

        var enemies = [];

        var colors = ["yellow", 'blue', 'pink', 'white', 'orange', 'red', 'black', 'purple', 'black', 'green'];

        var Enemy = function (index) {
            this.x = random(-sceneW / 2, sceneW / 2);
            this.y = random(-sceneW / 2, sceneW / 2);
            this.r = random(360);
            this.turnSpeed = 5;
            this.speed = 7;
            this.shootTimer = 0;
            this.dead = false;
            this.des = {
                x: random(-sceneW / 2 + 100, sceneW / 2 - 100),
                y: random(-sceneW / 2 + 100, sceneW / 2 - 100)
            };
            this.i = index;
            this.health = 100;
            this.name = rndm(coders);
            this.color = rndm(colors);

            this.draw = function () {
                if (!this.dead) {
                    pushMatrix();
                    translate(this.x, this.y);
                    rotate(this.r);
                    noStroke(); switch (this.color) {
                        case 'yellow':
                            fill(235, 235, 0);
                            break;

                        case 'blue':
                            fill(0, 0, 255);
                            break;

                        case 'pink':
                            fill(255, 0, 255);
                            break;

                        case 'white':
                            fill(170);
                            break;

                        case 'orange':
                            fill(255, 150, 0);
                            break;

                        case 'red':
                            fill(200, 0, 0);
                            break;

                        case 'black':
                            fill(0);
                            break;

                        case 'purple':
                            fill(97, 0, 181);
                            break;

                        case 'brown':
                            fill(110, 74, 16);
                            break;

                        case 'green':
                            fill(0, 150, 0);
                            break;
                    }
                    rectMode(CENTER);
                    rect(0, 0, 40, 20);
                    switch (this.color) {
                        case 'yellow':
                            fill(255, 255, 150);
                            break;

                        case 'blue':
                            fill(150, 150, 255);
                            break;

                        case 'pink':
                            fill(255, 150, 255);
                            break;

                        case 'white':
                            fill(230, 230, 230);
                            break;

                        case 'orange':
                            fill(255, 150, 150);
                            break;

                        case 'red':
                            fill(255, 50, 50);
                            break;

                        case 'black':
                            fill(75);
                            break;

                        case 'purple':
                            fill(179, 87, 255);
                            break;

                        case 'brown':
                            fill(191, 147, 76);
                            break;

                        case 'green':
                            fill(100, 200, 100);
                            break;
                    }
                    rect(0, -5, 40, 10);
                    stroke(100);
                    strokeWeight(3);
                    fill(150, 255, 255);
                    ellipse(10, 0, 10, 10);
                    fill(100);
                    noStroke();
                    rectMode(CORNER);
                    rect(-20, 0, 14, 2.5);
                    fill(150);
                    rect(-20, -2.5, 14, 2);
                    fill(100);
                    triangle(-20, 10, 0, 10, -20, 17);
                    fill(150);
                    triangle(-20, -10, 0, -10, -20, -17);
                    triangle(20, -10, 20, 0, 35, 0);
                    fill(100);
                    triangle(20, 10, 20, 0, 35, 0);
                    rotate(-this.r);
                    fill(255, 0, 0);
                    rect(-50, 50, 100, 10);
                    fill(0, 200, 0);
                    rect(-50, 50, this.health, 10);
                    fill(255);
                    textSize(15);
                    text(this.name, 0, -50);
                    popMatrix();
                }
            };

            this.die = function () {
                this.dead = true;
                for (var i = 0; i < 5; i++) {
                    gems.push(new Gem(this.x, this.y));
                }
                for (var i = 0; i < 100; i++) {
                    parts.push(new ExpPart(this.x, this.y));
                }
            };

            this.update = function () {
                for (var i in gems) {
                    if (dist(gems[i].x + 20, gems[i].y + 20, this.x, this.y) < 55 && !gems[i].collected) {
                        gems[i].collected = true;
                    }
                }
                if (!this.dead && frameCount % 2 === 0) {
                    parts.push(new TrailPart(this.x, this.y));
                }
                var theta = atan2(this.des.y - this.y, this.des.x - this.x);
                this.r = theta;
                for (var i in bullets) {
                    if (dist(this.x, this.y, bullets[i].x, bullets[i].y) < 25) {
                        this.health -= 25;
                        if (bullets[i].i === 'player' && this.health <= 0) {
                            player.kills++;
                            player.totalKills++;
                            if (this.name === 'Chester Banks' && !achievements[7].completed) {
                                player.foundBanks = true;
                            }
                            parts.push(new KillNotif(this.name));
                        }
                        if (this.health <= 0) {
                            this.die();
                        }
                        bullets.splice(i, 1);
                        continue;
                    }
                }
                if (dist(this.x, this.y, this.des.x, this.des.y) < 50) {
                    this.des = {
                        x: random(-sceneW / 2 + 100, sceneW / 2 - 100),
                        y: random(-sceneW / 2 + 100, sceneW / 2 - 100)
                    };
                }
                var r = random(1);
                if (this.shootTimer <= 0 && r < 0.1) {
                    bullets.push(new Bullet(this.x + cos(this.r) * 30, this.y + sin(this.r) * 30, this.r + random(-5, 5), this.i));
                    this.shootTimer = 15;
                }
                for (var i in planets) {
                    if (dist(this.x, this.y, planets[i].x, planets[i].y) < planets[i].s * 100 + 20 && scene === 'game') {
                        this.die();
                    }
                }

                this.shootTimer--;

                this.x += cos(this.r) * this.speed;
                this.y += sin(this.r) * this.speed;
                this.x = constrain(this.x, -sceneW / 2, sceneW / 2);
                this.y = constrain(this.y, -sceneW / 2, sceneW / 2);

                this.draw();
            };
        };

        for (var i = 0; i < 10; i++) {
            enemies.push(new Enemy(i));
        }

        var mouseIs = 'arrow';

        var outlinedText = function (message, x, y, weight, outline, main) {
            fill(outline);
            text(message, x - weight, y + weight);
            text(message, x + weight, y + weight);
            text(message, x - weight, y - 2);
            text(message, x + weight, y - weight);
            text(message, x, y + weight);
            text(message, x, y - weight);
            text(message, x - weight, y);
            text(message, x + weight, y);
            fill(main);
            text(message, x, y);
        };

        var Button = function (x, y, planet, txt, next, arrow) {
            this.x = x;
            this.y = y;
            this.planet = planet;
            this.txt = txt;
            this.next = next;
            this.arrow = arrow;
            this.r = 0;
            this.t = 0;

            this.draw = function () {
                pushMatrix();
                translate(this.x, this.y);
                rotate(this.r);
                this.planet(0, 0, 0.5);
                if (this.arrow) {
                    textSize(50);
                } else {
                    textSize(20);
                }
                outlinedText(this.txt, 0, 0, 1, color(0), color(255));
                popMatrix();
                this.r = sin(this.t * 5) * 20;
                if (dist(mouseX, mouseY, this.x, this.y) < 50) {
                    this.over = true;
                    this.t++;
                    mouseIs = 'hand';
                } else {
                    this.over = false;
                    this.t = 0;
                }
            };
        };

        var buttons = [new Button(250, 600, ringedPlanet, "Play", 'game'), new Button(150, 600, lightGrayPlanet, "Achievements", "acheive"), new Button(350, 600, pinkPlanet, "Shop", 'shop'), new Button(250, 430, ringedPlanet, "Home", 'home'), new Button(250, 370, ringedPlanet, "Home", 'home'), new Button(60, 250, pinkPlanet, "←", 'shop', true), new Button(440, 250, lightGrayPlanet, "→", 'shop', true),];

        var Player = function () {
            this.x = 0;
            this.y = 0;
            this.r = 0;
            this.turnSpeed = 5;
            this.speed = 7;
            this.shootTimer = 0;
            this.dead = false;
            this.resTimer = 0;
            this.kills = 0;
            this.totalKills = 0;
            this.health = 100;
            this.causeOD = null;
            this.deaths = 0;
            this.gems = 0;
            this.totalGems = 0;
            this.skinsBought = 0;
            this.foundBanks = false;
            this.color = 'yellow';

            this.draw = function () {
                if (!this.dead) {
                    pushMatrix();
                    translate(this.x, this.y);
                    rotate(this.r);
                    noStroke();
                    switch (this.color) {
                        case 'yellow':
                            fill(235, 235, 0);
                            break;

                        case 'blue':
                            fill(0, 0, 255);
                            break;

                        case 'pink':
                            fill(255, 0, 255);
                            break;

                        case 'white':
                            fill(170);
                            break;

                        case 'orange':
                            fill(255, 150, 0);
                            break;

                        case 'red':
                            fill(200, 0, 0);
                            break;

                        case 'black':
                            fill(0);
                            break;

                        case 'purple':
                            fill(97, 0, 181);
                            break;

                        case 'brown':
                            fill(110, 74, 16);
                            break;

                        case 'green':
                            fill(0, 150, 0);
                            break;
                    }
                    rectMode(CENTER);
                    rect(0, 0, 40, 20);
                    switch (this.color) {
                        case 'yellow':
                            fill(255, 255, 150);
                            break;

                        case 'blue':
                            fill(150, 150, 255);
                            break;

                        case 'pink':
                            fill(255, 150, 255);
                            break;

                        case 'white':
                            fill(230, 230, 230);
                            break;

                        case 'orange':
                            fill(255, 150, 150);
                            break;

                        case 'red':
                            fill(255, 50, 50);
                            break;

                        case 'black':
                            fill(75);
                            break;

                        case 'purple':
                            fill(179, 87, 255);
                            break;

                        case 'brown':
                            fill(191, 147, 76);
                            break;

                        case 'green':
                            fill(100, 200, 100);
                            break;
                    }
                    rect(0, -5, 40, 10);
                    stroke(100);
                    strokeWeight(3);
                    fill(150, 255, 255);
                    ellipse(10, 0, 10, 10);
                    fill(100);
                    noStroke();
                    rectMode(CORNER);
                    rect(-20, 0, 14, 2.5);
                    fill(150);
                    rect(-20, -2.5, 14, 2);
                    fill(100);
                    triangle(-20, 10, 0, 10, -20, 17);
                    fill(150);
                    triangle(-20, -10, 0, -10, -20, -17);
                    triangle(20, -10, 20, 0, 35, 0);
                    fill(100);
                    triangle(20, 10, 20, 0, 35, 0);
                    popMatrix();
                }
                if (this.resTimer <= 0 && this.dead) {
                    this.x = 0;
                    this.y = 0;
                    buttons[3].over = false;
                    this.dead = false;
                }
                this.UI();
            };

            this.UI = function () {
                pushMatrix();
                translate(-cam.x, -cam.y);
                if (this.resTimer > 0) {
                    fill(255);
                    textSize(50);
                    text("Respawning in...\n" + ceil(this.resTimer), 250, 250);
                    textSize(25);
                    text(this.causeOD, 250, 100);
                    buttons[4].draw();
                }
                fill(255);
                textSize(20);
                text("Kills: " + this.kills + " | Deaths: " + this.deaths, 250, 450);
                if (!this.dead) {
                    fill(255, 0, 0);
                    rect(200, 300, 100, 10);
                    fill(0, 200, 0);
                    rect(200, 300, this.health, 10);
                    fill(255);
                    text(username, 250, 200);
                }
                drawGem(360, 10, 1);
                textSize(40);
                fill(255);
                text(this.gems, 450, 35);
                popMatrix();
            };

            this.die = function () {
                this.dead = true;
                this.deaths++;
                this.resTimer = 5;
                this.health = 100;
                for (var i = 0; i < 5; i++) {
                    gems.push(new Gem(this.x, this.y));
                }
                for (var i = 0; i < 100; i++) {
                    parts.push(new ExpPart(this.x, this.y));
                }
            };

            this.update = function () {
                if (!this.dead) {
                    if (keys[LEFT]) {
                        this.r -= this.turnSpeed;
                    }
                    if (keys[RIGHT]) {
                        this.r += this.turnSpeed;
                    }
                    if (!this.dead) {
                        parts.push(new TrailPart(this.x, this.y));
                    }
                    if (keys[32] && this.shootTimer <= 0) {
                        bullets.push(new Bullet(this.x + cos(this.r) * 30, this.y + sin(this.r) * 35, this.r + random(-5, 5), "player"));
                        this.shootTimer = 15;
                    }
                    for (var i in bullets) {
                        if (dist(this.x, this.y, bullets[i].x, bullets[i].y) < 30 && bullets[i].i !== "player") {
                            this.health -= 25;
                            this.causeOD = rndm(diedShoot) + enemies[bullets[i].i].name;
                            bullets.splice(i, 1);
                            continue;
                        }
                    }
                    for (var i in gems) {
                        if (dist(gems[i].x + 20, gems[i].y + 20, this.x, this.y) < 55 && !gems[i].collected && !this.dead) {
                            gems[i].collected = true;
                            this.gems++;
                            this.totalGems++;
                        }
                    }
                    for (var i in planets) {
                        if (dist(this.x, this.y, planets[i].x, planets[i].y) < planets[i].s * 100 + 20) {
                            this.causeOD = rndm(planCrash);
                            this.die();
                        }
                    }
                    if (this.health <= 0) {
                        this.die();
                    }
                    for (var i in enemies) {
                        var e = enemies[i];
                        if (dist(this.x, this.y, e.x, e.y) < 30) {
                            this.causeOD = rndm(diedCrash) + enemies[i].name;
                            this.die();
                            e.die();
                        }
                    }

                    this.shootTimer--;
                    this.x += cos(this.r) * this.speed;
                    this.y += sin(this.r) * this.speed;

                    if (this.x > sceneW / 2 || this.y > sceneW / 2 || this.x < -sceneW / 2 || this.y < -sceneW / 2) {
                        this.causeOD = rndm(diedLaser);
                        this.die();
                    }
                }

                this.resTimer -= 0.02;
                this.x = constrain(this.x, -sceneW / 2, sceneW / 2);
                this.y = constrain(this.y, -sceneW / 2, sceneW / 2);

                this.draw();
            };
        };

        var player = new Player();

        var shopOff = 0;
        var isAt = 0;
        var goRight = false;
        var goLeft = false;
        var ShopButton = function (x, clr, price) {
            this.x = x + shopOff;
            this.y = 100;
            this.clr = clr;
            this.price = price;
            this.over = false;
            this.bought = false;
            this.equipped = false;
            this.canBuy = false;
            if (this.price === 0) {
                this.bought = true;
                this.equipped = true;
            }

            this.draw = function () {
                pushMatrix();
                translate(shopOff, 0);
                this.canBuy = player.gems >= this.price;

                drawShip(this.x + 130, this.y + 100, 3, this.clr);
                noFill();
                stroke(255);
                strokeWeight(5);
                rect(this.x, this.y, 260, 200, 50);

                noStroke();
                fill(this.canBuy ? color(0, 200, 0) : color(200, 0, 0));
                if (this.bought) {
                    fill(0, 100, 0);
                }
                this.over = mouseX > this.x + shopOff + 80 && mouseX < this.x + shopOff + 180 && mouseY > this.y + 210 && mouseY < this.y + 260;
                rect(this.x + 80, this.y + 210, 100, 50, 10);
                textSize(15);
                if (this.equipped) {
                    outlinedText("Equipped", this.x + 130, this.y + 235, 1, color(0), color(255));
                } else if (this.bought) {
                    outlinedText("Owned", this.x + 130, this.y + 235, 1, color(0), color(255));
                } else {
                    outlinedText("$" + this.price, this.x + 130, this.y + 235, 1, color(0), color(255));
                }
                if (this.over && this.canBuy && !this.bought || this.over && this.bought) {
                    mouseIs = 'hand';
                }
                popMatrix();
            };
        };

        var shopButtons = [new ShopButton(120, "yellow", 0), new ShopButton(620, "blue", 10), new ShopButton(1120, "pink", 25), new ShopButton(1620, "white", 25), new ShopButton(2120, "orange", 25), new ShopButton(2620, "red", 50), new ShopButton(3120, "black", 50), new ShopButton(3620, "purple", 100), new ShopButton(4120, "brown", 150), new ShopButton(4620, "green", 250)];

        var stars = [];

        for (var i = 0; i < 1000; i++) {
            stars.push([random(-sceneW / 2 - 500, sceneW / 2 + 500), random(-sceneW / 2 - 500, sceneW / 2 + 500), random(3, 10)]);
        }

        var trans = {
            active: false,
            x: -700,
            y: 1200,
            next: null,
            run: function () {
                if (this.active) {
                    pushMatrix();
                    translate(this.x, this.y);
                    scale(30, 30);
                    rotate(-45);
                    noStroke();
                    fill(235, 235, 0);
                    rectMode(CENTER);
                    rect(0, 0, 40, 20);
                    fill(255, 255, 150);
                    rect(0, -5, 40, 10);
                    stroke(100);
                    strokeWeight(3);
                    fill(150, 255, 255);
                    ellipse(10, 0, 10, 10);
                    fill(100);
                    noStroke();
                    rectMode(CORNER);
                    rect(-20, 0, 14, 2.5);
                    fill(150);
                    rect(-20, -2.5, 14, 2);
                    fill(100);
                    triangle(-20, 10, 0, 10, -20, 17);
                    fill(150);
                    triangle(-20, -10, 0, -10, -20, -17);
                    triangle(20, -10, 20, 0, 35, 0);
                    fill(100);
                    triangle(20, 10, 20, 0, 35, 0);
                    popMatrix();
                    this.x += 50;
                    this.y -= 50;
                    if (this.x > 250) {
                        scene = this.next;
                        for (var j in buttons) {
                            buttons[j].over = false;
                        }
                    }
                    if (this.x > 1000) {
                        this.active = false;
                        this.x = -700;
                        this.y = 1200;
                    }
                }
            }
        };

        var NameBlock = function (x, y, r) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.w = 300;
            this.h = 50;
            this.selected = false;
            this.wrong = false;
            this.end = '';
            this.endTimer = 0;
            this.blinkTime = 15;
            this.maxChars = 10;
            this.charsLeft = this.maxChars - username.length;

            this.draw = function () {
                fill(255, 255, 255);
                strokeWeight(2);
                if (this.selected) {
                    stroke(0);
                } else if (!this.selected && !this.wrong) {
                    stroke(200, 200, 200);
                } else if (this.wrong) {
                    stroke(200, 0, 0);
                }
                rect(this.x, this.y, this.w, this.h, this.r);
                if (!this.selected && !this.wrong) {
                    textSize(30);
                    fill(200, 208, 200);
                    if (username.length === 0) {
                        textAlign(CENTER, CENTER);
                        text("Enter a name", this.x + this.w / 2, this.y + this.h / 2);
                    } else {
                        textAlign(LEFT, TOP);
                        fill(0);
                        textSize(30);
                        text(username, this.x + 10, this.y + 10);
                    }
                } else if (this.selected) {
                    this.charsLeft = this.maxChars - username.length;
                    textAlign(LEFT, TOP);
                    textSize(30);
                    fill(0);
                    text(username + this.end, this.x + 10, this.y + 10);
                    textSize(20);
                    fill(255);
                    text("Characters left: " + this.charsLeft, this.x, this.y - 25);
                    if (this.endTimer <= this.blinkTime) {
                        this.end = '|';
                    } else if (this.endTimer > this.blinkTime) {
                        this.end = '';
                    }
                    if (this.endTimer > this.blinkTime * 2) {
                        this.endTimer = 0;
                    }
                    this.endTimer++;
                } else if (this.wrong) {
                    textAlign(CENTER, CENTER);
                    textSize(30);
                    fill(200, 0, 0);
                    textAlign(CENTER, CENTER);
                    text("Enter a name", this.x + this.w / 2, this.y + this.h / 2);
                }
                textAlign(CENTER, CENTER);
            };

            this.update = function () {
                this.r /= 2;
                if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y + this.r && mouseY < this.y + (this.h - this.r) || mouseX > this.x + this.r && mouseX < this.x + (this.w - this.r) && mouseY > this.y && mouseY < this.y + this.h || dist(this.x + this.r, this.y + this.r, mouseX, mouseY) < this.r || dist(this.x + this.r, this.y + (this.h - this.r), mouseX, mouseY) < this.r || dist(this.x + (this.w - this.r), this.y + this.r, mouseX, mouseY) < this.r || dist(this.x + (this.w - this.r), this.y + (this.h - this.r), mouseX, mouseY) < this.r) {
                    this.over = true;
                    mouseIs = 'text';
                } else {
                    this.over = false;
                }
                this.r *= 2;
            };

            this.run = function () {
                this.draw();
                this.update();
            };
        };

        nameBlock = new NameBlock(100, 550, 50);

        var title = {
            y: -500,
            x: 250,
            ioY: 550
        };

        var home = function () {
            player.resTimer = 0;
            player.kills = 0;
            player.deaths = 0;
            for (var i = 0; i < enemies.length; i++) {
                enemies[i].i = i;
            }
            background(0, 0, 50);
            cam.x = width / 2 - player.x;
            cam.y = height / 2 - player.y;
            pushMatrix();
            translate(cam.x, cam.y);
            noStroke();
            fill(255);
            for (var i in stars) {
                ellipse(stars[i][0], stars[i][1], stars[i][2], stars[i][2]);
            }
            for (var i = parts.length - 1; i >= 0; i--) {
                parts[i].draw();
                if (parts[i].s < 0 || parts[i].a <= 0) {
                    parts.splice(i, 1);
                    continue;
                }
            }
            for (var i in bullets) {
                bullets[i].draw();
                if (bullets[i].x < -sceneW / 2 || bullets[i].x > sceneW / 2 || bullets[i].y < -sceneW / 2 || bullets[i].y > sceneW / 2) {
                    bullets.splice(i, 1);
                    continue;
                }
            }
            for (var i in gems) {
                gems[i].draw();
                if (gems[i].timer <= 0 || gems[i].collected) {
                    gems.splice(i, 1);
                }
            }
            for (var i in enemies) {
                enemies[i].update();
                for (var j in enemies) {
                    if (i === j) {
                        continue;
                    }
                    var e = enemies[i];
                    var E = enemies[j];
                    if (dist(E.x, E.y, e.x, e.y) < 50) {
                        E.die();
                        e.die();
                    }
                }
                if (enemies[i].dead) {
                    enemies.push(new Enemy(enemies.length - 2));
                    enemies.splice(i, 1);
                    continue;
                }
            }
            popMatrix();
            textSize(65);
            outlinedText("ROCKETS", title.x, title.y, 3, color(255, 150, 0), color(255));
            textSize(65);
            outlinedText(".IO", 420, title.ioY, 3, color(255, 150, 0), color(255));
            title.y += Smooth(title.y, 80, 5);
            if (title.y > 79) {
                title.ioY += Smooth(title.ioY, 80, 5);
                title.x += Smooth(title.x, 200, 5);
            }
            if (title.x < 201) {
                nameBlock.y += Smooth(nameBlock.y, 225, 5);
                buttons[0].y += Smooth(buttons[0].y, 330, 5);
                buttons[1].y += Smooth(buttons[1].y, 430, 5);
                buttons[2].y += Smooth(buttons[2].y, 430, 5);
            }
            buttons[0].draw();
            buttons[1].draw();
            buttons[2].draw();
            nameBlock.run();
            for (var i = ach.length - 1; i >= 0; i--) {
                ach[i].draw();
                if (ach[i].a <= 0) {
                    ach.splice(i, 1);
                }
            }
        };

        var acheive = function () {
            for (var i = 0; i < enemies.length; i++) {
                enemies[i].i = i;
            }
            background(0, 0, 50);
            cam.x = width / 2 - player.x;
            cam.y = height / 2 - player.y;
            pushMatrix();
            translate(cam.x, cam.y);
            noStroke();
            fill(255);
            for (var i in stars) {
                ellipse(stars[i][0], stars[i][1], stars[i][2], stars[i][2]);
            }
            for (var i = parts.length - 1; i >= 0; i--) {
                parts[i].draw();
                if (parts[i].s < 0 || parts[i].a <= 0) {
                    parts.splice(i, 1);
                    continue;
                }
            }
            for (var i in bullets) {
                bullets[i].draw();
                if (bullets[i].x < -sceneW / 2 || bullets[i].x > sceneW / 2 || bullets[i].y < -sceneW / 2 || bullets[i].y > sceneW / 2) {
                    bullets.splice(i, 1);
                    continue;
                }
            }
            for (var i in gems) {
                gems[i].draw();
                if (gems[i].timer <= 0 || gems[i].collected) {
                    gems.splice(i, 1);
                }
            }
            for (var i in enemies) {
                enemies[i].update();
                for (var j in enemies) {
                    if (i === j) {
                        continue;
                    }
                    var e = enemies[i];
                    var E = enemies[j];
                    if (dist(E.x, E.y, e.x, e.y) < 50) {
                        E.die();
                        e.die();
                    }
                }
                if (enemies[i].dead) {
                    enemies.push(new Enemy(enemies.length - 2));
                    enemies.splice(i, 1);
                    continue;
                }
            }
            popMatrix();
            textSize(50);
            outlinedText("ACHIEVEMENTS", 250, 80, 3, color(255, 150, 0), color(255));
            buttons[3].draw();
            for (var i in achievements) {
                achievements[i].draw();
            }
            for (var i in achievements) {
                achievements[i].box();
            }
            for (var i = ach.length - 1; i >= 0; i--) {
                ach[i].draw();
                if (ach[i].a <= 0) {
                    ach.splice(i, 1);
                }
            }
        };

        var shop = function () {
            for (var i = 0; i < enemies.length; i++) {
                enemies[i].i = i;
            }
            background(0, 0, 50);
            cam.x = width / 2 - player.x;
            cam.y = height / 2 - player.y;
            pushMatrix();
            translate(cam.x, cam.y);
            noStroke();
            fill(255);
            for (var i in stars) {
                ellipse(stars[i][0], stars[i][1], stars[i][2], stars[i][2]);
            }
            for (var i = parts.length - 1; i >= 0; i--) {
                parts[i].draw();
                if (parts[i].s < 0 || parts[i].a <= 0) {
                    parts.splice(i, 1);
                    continue;
                }
            }
            for (var i in bullets) {
                bullets[i].draw();
                if (bullets[i].x < -sceneW / 2 || bullets[i].x > sceneW / 2 || bullets[i].y < -sceneW / 2 || bullets[i].y > sceneW / 2) {
                    bullets.splice(i, 1);
                    continue;
                }
            }
            for (var i in gems) {
                gems[i].draw();
                if (gems[i].timer <= 0 || gems[i].collected) {
                    gems.splice(i, 1);
                }
            }
            for (var i in enemies) {
                enemies[i].update();
                for (var j in enemies) {
                    if (i === j) {
                        continue;
                    }
                    var e = enemies[i];
                    var E = enemies[j];
                    if (dist(E.x, E.y, e.x, e.y) < 50) {
                        E.die();
                        e.die();
                    }
                }
                if (enemies[i].dead) {
                    enemies.push(new Enemy(enemies.length - 2));
                    enemies.splice(i, 1);
                    continue;
                }
            }
            popMatrix();
            textSize(75);
            outlinedText("SHOP", 200, 50, 3, color(255, 150, 0), color(255));

            for (var i in shopButtons) {
                shopButtons[i].draw();
            }
            if (goRight) {
                shopOff += Smooth(shopOff, isAt - 500, 10);
            } else if (goLeft) {
                shopOff += Smooth(shopOff, isAt + 500, 10);
            }


            drawGem(350, 25, 1);
            textSize(45);
            fill(255);
            text(player.gems, 440, 50);

            buttons[3].draw();
            buttons[5].draw();
            buttons[6].draw();
            for (var i = ach.length - 1; i >= 0; i--) {
                ach[i].draw();
                if (ach[i].a <= 0) {
                    ach.splice(i, 1);
                }
            }
        };

        var game = function () {
            for (var i = 0; i < enemies.length; i++) {
                enemies[i].i = i;
            }
            background(0, 0, 50);
            cam.x = width / 2 - player.x;
            cam.y = height / 2 - player.y;
            pushMatrix();
            translate(cam.x, cam.y);
            noStroke();
            fill(255);
            for (var i in stars) {
                ellipse(stars[i][0], stars[i][1], stars[i][2], stars[i][2]);
            }
            for (var i = parts.length - 1; i >= 0; i--) {
                parts[i].draw();
                if (parts[i].s < 0 || parts[i].a <= 0) {
                    parts.splice(i, 1);
                    continue;
                }
            }
            for (var i in bullets) {
                bullets[i].draw();
                if (bullets[i].x < -sceneW / 2 || bullets[i].x > sceneW / 2 || bullets[i].y < -sceneW / 2 || bullets[i].y > sceneW / 2) {
                    bullets.splice(i, 1);
                    continue;
                }
            }
            for (var i in gems) {
                gems[i].draw();
                if (gems[i].timer <= 0 || gems[i].collected) {
                    gems.splice(i, 1);
                }
            }
            for (var i in planets) {
                planets[i].draw();
                if (dist(planets[i].x, planets[i].y, 0, 0) < 200) {
                    planets[i].x = random(-sceneW / 2, sceneW / 2);
                    planets[i].y = random(-sceneW / 2, sceneW / 2);
                }
                for (var j in bullets) {
                    if (dist(bullets[j].x, bullets[j].y, planets[i].x, planets[i].y) < planets[i].s * 200 / 2) {
                        bullets.splice(j, 1);
                    }
                }
            }
            for (var i in enemies) {
                enemies[i].update();
                for (var j in enemies) {
                    if (i === j) {
                        continue;
                    }
                    var e = enemies[i];
                    var E = enemies[j];
                    if (dist(E.x, E.y, e.x, e.y) < 50) {
                        E.die();
                        e.die();
                    }
                }
                if (enemies[i].dead) {
                    enemies.push(new Enemy(enemies.length - 2));
                    enemies.splice(i, 1);
                    continue;
                }
            }
            stroke(255, 0, 0);
            strokeWeight(5);
            noFill();
            rect(-sceneW / 2, -sceneW / 2, sceneW, sceneW);
            player.update();
            popMatrix();
            for (var i = ach.length - 1; i >= 0; i--) {
                ach[i].draw();
                if (ach[i].a <= 0) {
                    ach.splice(i, 1);
                }
            }
        };

        var thumb = function () {
            noLoop();
            background(0, 0, 50);
            noStroke();
            fill(255);
            for (var i = 0; i < 50; i++) {
                var r = random(3, 10);
                ellipse(random(width), random(height), r, r);
            }
            ringedPlanet(150, 130, 0.8);
            lightGrayPlanet(350, 350, 0.5);
            noStroke();
            for (var i = 0; i < 50; i++) {
                fill(random(1) < 0.5 ? random(50, 150) : color(random(150, 255), random(150, 255), 0));
                ellipse(150 - i * random(5) + random(-50, 50), 350 + i * random(5) + random(-50, 50), 50, 50);
            }
            pushMatrix();
            translate(250, 250);
            scale(5, 5);
            rotate(-45);
            noStroke();
            fill(235, 235, 0);
            rectMode(CENTER);
            rect(0, 0, 40, 20);
            fill(255, 255, 150);
            rect(0, -5, 40, 10);
            stroke(100);
            strokeWeight(3);
            fill(150, 255, 255);
            ellipse(10, 0, 10, 10);
            fill(100);
            noStroke();
            rectMode(CORNER);
            rect(-20, 0, 14, 2.5);
            fill(150);
            rect(-20, -2.5, 14, 2);
            fill(100);
            triangle(-20, 10, 0, 10, -20, 17);
            fill(150);
            triangle(-20, -10, 0, -10, -20, -17);
            triangle(20, -10, 20, 0, 35, 0);
            fill(100);
            triangle(20, 10, 20, 0, 35, 0);
            popMatrix();
            noFill();
            stroke(255);
            strokeWeight(30);
            rect(0, 0, 500, 500);
            stroke(245, 0, 0);
            strokeWeight(20);
            rect(10, 10, 480, 480, 20);
            noStroke();
            fill(255, 50);
            ellipse(0, 0, 1000, 800);
            fill(0, 0, 200);
            quad(400, 500, 300, 500, 500, 300, 500, 400);
            pushMatrix();
            translate(350, 70);
            rotate(0);
            textSize(25);
            outlinedText("ONLY 1% CAN GET\nTO GREEN SKIN!", 0, 0, 1, color(0), color(255));
            popMatrix();
            pushMatrix();
            translate(425, 425);
            rotate(-45);
            textFont(createFont("cursive Bold Italic"), 65);
            outlinedText("New!", 0, 0, 5, color(0), color(255, 255, 0));
            popMatrix();
        };

        draw = function () {
            //this._clearLogs();
            frameRate(60);
            switch (scene) {
                case 'logo':
                    Logo();
                    break;

                case 'game':
                    game();
                    break;

                case 'home':
                    home();
                    break;

                case 'acheive':
                    acheive();
                    break;

                case 'shop':
                    shop();
                    break;
            }
            switch (mouseIs) {
                case 'arrow':
                    cursor(ARROW);
                    break;

                case 'hand':
                    cursor(HAND);
                    break;

                case 'text':
                    cursor(TEXT);
                    break;
            }
            trans.run();
            for (var i in achievements) {
                achievements[i].check();
            }
            mouseIs = 'arrow';
            if (keys[75] && !nameBlock.selected) {
                thumb();
            }
            shopOff = constrain(shopOff, -4500, 0);
        };

        mouseClicked = function () {
            var overSomething = false;
            if (nameBlock.over) {
                nameBlock.selected = true;
                nameBlock.wrong = false;
                overSomething = true;
            } else {
                nameBlock.selected = false;
            }
            for (var i in buttons) {
                if (buttons[i].over) {
                    overSomething = true;
                    if (buttons[5].over || buttons[6].over) {
                        continue;
                    }
                    if (buttons[0].over && username.length === 0) {
                        nameBlock.wrong = true;
                        continue;
                    }
                    trans.next = buttons[i].next;
                    trans.active = true;
                }
            }
            for (var i in shopButtons) {
                if (shopButtons[i].over) {
                    if (shopButtons[i].bought) {
                        player.color = shopButtons[i].clr;
                        for (var j in shopButtons) {
                            shopButtons[j].equipped = false;
                        }
                        shopButtons[i].equipped = true;
                    }
                    if (shopButtons[i].canBuy && !shopButtons[i].bought) {
                        shopButtons[i].bought = true;
                        player.gems -= shopButtons[i].price;
                        player.skinsBought++;
                    }
                }
            }
            if (buttons[5].over) {
                isAt = round(shopOff / 500) * 500;
                goRight = false;
                goLeft = true;
            }
            if (buttons[6].over) {
                isAt = round(shopOff / 500) * 500;
                goRight = true;
                goLeft = false;
            }
        };

        mouseOut = function () {
            nameBlock.selected = false;
        };

        //I did 90% of this in 2 days, how is it past 2000 lines lol



        // ----------- End   ----------------

    }
};
