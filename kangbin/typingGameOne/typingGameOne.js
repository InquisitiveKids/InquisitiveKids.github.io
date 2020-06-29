var sketchProc = function(processingInstance) {
    with(processingInstance) {
        size(600, 600);
        frameRate(30);
        // KA Javascript code goes here!

        // ----------  Begin   ------------ 

        /**
        
         06/23/2020 10pm
         Welcome to Kangbin's typing game. 
        
        **/


        var scene = 'start';
        var mouseOver = false;
        var overText = false;
        var mouseGrab = false;
        var mouseGrabbing = false;
        var pressed = false;
        var username = '';
        var earnings = 10;
        var cpc = 10;
        var cps = 0;
        var moneyPrinters = 0;
        var moneyFarms = 0;
        var moneyFactories = 0;
        var goldMines = 0;
        var diamondMines = 0;
        var printerEarnings = 10;
        var farmEarnings = 50;
        var factoryEarnings = 500;
        var goldEarnings = 5000;
        var diamondEarnings = 100000;
        var money = 0;
        var font = createFont("arial black");
        var cursive = createFont("cursive");
        var basic = createFont("sans-serif");
        var Background;

        //var cmpn = ["k", "M", "B", "T", "q", "Q", "s", "S", "o", "n", "d", "aa", "ab", "ac", "ad", "ae", "af", "ag", "ah", "ai", "aj", "ak", "al", "am", "an", "ao", "ap", "aq", "ar", "as", "at", "au", "av", "aw", "ax", "ay", "az", "ba", "bb", "bc", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bk", "bl", "bm", "bn", "bo", "bp", "bq", "br", "bs", "bt", "bu", "bv", "bw", "bx", "by", "bz", "ca", "cb", "cc", "cd", "ce", "cf", "cg", "ch", "ci", "cj", "ck", "cl", "cm", "cn", "co", "cp", "cq", "cr", "cs", "ct", "cu", "cv", "cw", "cx", "cy", "cz", "da", "db", "dc", "dd", "de", "df", "dg", "dh", "di", "dj", "dk", "dl", "dm", "dn", "do", "dp", "dq", "dr", "ds", "dt", "du", "dv", "dw", "dx", "dy", "dz"];



        var PiggyBank = function(x, y, s) {
            this.x = x;
            this.y = y;
            this.S = s;
            this.s = this.S;
            this.r = 0;
            this.shakeTimer = 9999;

            this.draw = function() {
                pushMatrix();
                translate(this.x, this.y);
                rotate(this.r);
                popMatrix();
            };

            this.shake = function() {
                if (this.shakeTimer < 30) {
                    this.r += sin(frameCount * 40) * 5;
                    this.s = this.S * 1.1;
                } else {
                    this.r = 0;
                    this.s = this.S;
                }
                this.shakeTimer++;
            };

            this.pack = function() {
                this.draw();
                //this.shake();
            };
        };



        var titlePiggy = new PiggyBank(250, 150, 1);

        var Button = function(x, y, w, h, r, c1, c2, Text, TextSize, tf, tc) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.r = r;
            this.c1 = c1;
            this.c2 = c2;
            this.Text = Text;
            this.TextSize = TextSize;
            this.tc = tc;
            this.tf = tf;
            this.over = false;
            this.depth = 10;

            this.draw = function() {
                noStroke();
                fill(this.c2);
                for (var i = 0; i < this.depth; i++) {
                    rect(this.x - i, this.y - i, this.w, this.h, this.r);
                }
                fill(this.c1);
                rect(this.x - this.depth, this.y - this.depth, this.w, this.h, this.r);
                textAlign(CENTER, CENTER);
                textFont(this.tf, this.TextSize);
                fill(this.tc);
                text(this.Text, this.x - this.depth + this.w / 2, this.y - this.depth + this.h / 2);
            };

            this.update = function() {
                if (mouseX > this.x - 10 && mouseX < this.x - 10 + this.w && mouseY > this.y - 10 + this.r && mouseY < this.y - 10 + (this.h - this.r) || mouseX > this.x - 10 + this.r && mouseX < this.x - 10 + (this.w - this.r) && mouseY > this.y - 10 && mouseY < this.y - 10 + this.h || dist(this.x - 10 + this.r, this.y - 10 + this.r, mouseX, mouseY) < this.r || dist(this.x - 10 + this.r, this.y - 10 + (this.h - this.r), mouseX, mouseY) < this.r || dist(this.x - 10 + (this.w - this.r), this.y - 10 + this.r, mouseX, mouseY) < this.r || dist(this.x - 10 + (this.w - this.r), this.y - 10 + (this.h - this.r), mouseX, mouseY) < this.r) {
                    this.over = true;
                    mouseOver = true;
                } else {
                    this.over = false;
                }
                if (this.over) {
                    this.depth -= 0.75;
                } else if (!this.over) {
                    this.depth += 0.75;
                }
                if (this.depth > 10) {
                    this.depth = 10;
                }
                if (this.depth < 0) {
                    this.depth = 0;
                }
            };

            this.pack = function() {
                this.update();
                this.draw();
            };
        };

        var startButton = new Button(160, 420, 200, 50, 20, color(0, 255, 0), color(0, 100, 0), "Play", 30, font, color(255, 255, 255));

        // The reusable component that let you input your name. 
        var NameBlock = function(x, y, r) {
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

            this.draw = function() {
                fill(255, 255, 255);
                strokeWeight(2);
                if (this.selected) {
                    stroke(0);
                } else if (!this.selected && !this.wrong) {
                    stroke(200, 200, 200);
                } else if (this.wrong) {
                    stroke(255, 0, 0);
                }
                rect(this.x, this.y, this.w, this.h, this.r);
                if (!this.selected && !this.wrong) {
                    textFont(cursive, 30);
                    fill(200, 208, 200);
                    if (username.length === 0) {
                        textAlign(CENTER, CENTER);
                        text("Enter a name", this.x + this.w / 2, this.y + this.h / 2);
                    } else {
                        textAlign(LEFT, TOP);
                        fill(0);
                        textFont(font, 30);
                        text(username, this.x + 10, this.y + 10);
                    }
                } else if (this.selected) {
                    this.charsLeft = this.maxChars - username.length;
                    textAlign(LEFT, TOP);
                    textFont(font, 30);
                    fill(0);
                    text(username + this.end, this.x + 10, this.y + 10);
                    textFont(createFont("sans-serif"), 20);
                    textAlign(LEFT, TOP);
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
                    textFont(cursive, 30);
                    fill(255, 0, 0);
                    textAlign(CENTER, CENTER);
                    text("Enter a name", this.x + this.w / 2, this.y + this.h / 2);
                }
            };

            this.update = function() {
                if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y + this.r && mouseY < this.y + (this.h - this.r) || mouseX > this.x + this.r && mouseX < this.x + (this.w - this.r) && mouseY > this.y && mouseY < this.y + this.h || dist(this.x + this.r, this.y + this.r, mouseX, mouseY) < this.r || dist(this.x + this.r, this.y + (this.h - this.r), mouseX, mouseY) < this.r || dist(this.x + (this.w - this.r), this.y + this.r, mouseX, mouseY) < this.r || dist(this.x + (this.w - this.r), this.y + (this.h - this.r), mouseX, mouseY) < this.r) {
                    this.over = true;
                    overText = true;
                } else {
                    this.over = false;
                }
            };

            this.pack = function() {
                this.draw();
                this.update();
            };
        };

        var nameBlock = new NameBlock(100, 350, 20);

        var BMoney = function(x, y, dir) {
            this.x = x;
            this.y = y;
            this.dir = dir;

            this.draw = function() {
                noFill();
                stroke(166, 34, 199);
                strokeWeight(5);
                rectMode(CORNER);
                /*fill(0, 0, 255);
                rect(this.x, this.y, 50, 100);*/
                fill(0, 0, 255);
                textFont(font, 45);
                textAlign(CENTER, CENTER);
                pushMatrix();
                translate(this.x + 26, this.y + 52);
                if (this.dir === 'up') {
                    rotate(-90);
                } else if (this.dir === 'down') {
                    rotate(90);
                }
                text("😎", 5, 0);
                popMatrix();
            };

            this.move = function() {
                if (this.dir === 'up') {
                    this.y -= 2;
                    if (this.y < -105) {
                        this.y = 505;
                    }
                }
                if (this.dir === 'down') {
                    this.y += 2;
                    if (this.y > 505) {
                        this.y = -105;
                    }
                }
            };

            this.pack = function() {
                this.draw();
                this.move();
            };
        };

        var backgroundMoney = [];

        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 5; j++) {
                backgroundMoney.push(new BMoney(i * 150, j * 125, 'down'));
            }
        }
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 5; j++) {
                backgroundMoney.push(new BMoney(75 + i * 150, j * 125, 'up'));
            }
        }

        Background = function() {
            background(0, 0, 0);

            for (var i = 0; i < backgroundMoney.length; i++) {
                backgroundMoney[i].pack();
            }
        };



        var titleY = 500;
        var titleYVel = -20;
        var titleGravity = 0.3;
        var titleLanded = false;
        var start = function() {
            Background();

            pushMatrix();
            translate(0, titleY);
            titlePiggy.draw();
            textAlign(LEFT, TOP);

            pushMatrix();
            translate(50, 180);
            //rotate(10);
            fill(255, 255, 255);
            textFont(font, 50);
            text("Inquisitive Kids", 3, 3);
            textFont(font, 50);
            fill(79, 240, 98);
            text("Inquisitive Kids", 0, 0);
            popMatrix();


            pushMatrix();
            translate(80, 120);
            //rotate(10);
            fill(255, 255, 255);
            textFont(font, 50);
            text("Typing Game", 3, 3);
            textFont(font, 50);
            fill(255, 0, 0);
            text("Typing Game", 0, 0);
            popMatrix();

            
            pushMatrix();
            translate(80, 250);
            //rotate(10);
            fill(255, 255, 255);
            textFont(font, 50);
            text("Flash Card", 3, 3);
            textFont(font, 50);
            fill(16, 27, 230);
            text("Flash Card", 0, 0);
            popMatrix();

           

            if (titleY > 0 && titleYVel > 0) {
                if (titleYVel > 0 && titleYVel < 5) {
                    titleYVel = 0;
                    titleLanded = true;
                }
                titleYVel = -titleYVel * 0.5;
            }

            titleY += titleYVel;
            titleYVel += titleGravity;

            if (titleLanded) {
                nameBlock.pack();
                startButton.pack();
                textFont(basic, 10);
                textAlign(CENTER, CENTER);
                fill(255);
                text("Copyright 2019 by Mr. JS", 250, 490);
            }
        };


        var play = function() {
            scene = 'play';

            cps = printerEarnings * moneyPrinters + farmEarnings * moneyFarms + factoryEarnings * moneyFactories + goldEarnings * goldMines + diamondEarnings * diamondMines;
            //earnCPS();

            Background();
            fill(0, 255, 0);
            noStroke();
            rect(0, 0, 500, 100);
            fill(0, 0, 255);
            rect(0, 0, 500, 90);

            textAlign(CENTER, CENTER);
            fill(0, 0, 0);
            textFont(font, 13);
            //text("$" + cmp(money), 440, 40);
            textFont(font, 30);
            text(username + "'s Kangkang Bank", 210, 45);
            text("Cash per click: ", 255, 305);
            text("Cash per second: ", 255, 355);
            fill(255, 255, 255);
            text(username + "'s Kangkang Bank", 205, 40);
            text("Cash per click: ", 250, 300);
            text("Cash per second: ", 250, 350);
            //bottomBar();

            // for (var i = 0; i < acheivements.length; i++) {
            //     acheivements[i].notify();
            // }
        };


        draw = function() {
            switch (scene) {
                case 'play':
                    play();
                    break;

                    case "start":
                        start();
                        break;
            }

            if (overText) {
                cursor(TEXT);
            } else if (mouseOver) {
                cursor(HAND);
            } else if (mouseGrab) {
                cursor("grab");
            } else if (mouseGrabbing) {
                cursor("grabbing");
            } else {
                cursor(ARROW);
            }

            overText = false;
            mouseOver = false;
            mouseGrab = false;
            mouseGrabbing = false;
        };

        mouseClicked = function() {
            if (nameBlock.over) {
                nameBlock.selected = true;
                nameBlock.wrong = false;
            } else if (startButton.over && username.length === 0) {
                nameBlock.wrong = true;

            } else if (startButton.over && username.length > 0) {
                play();
                startButton.over = false;
            } else if (scene === 'start' && !startButton.over && !nameBlock.over) {
                nameBlock.selected = false;
            } else if (bigBux.over) {
                bigBux.pressed = true;
                earnings = cpc;
                for (var i = 0; i < 5; i++) {
                    cash.push(new Cash(mouseX, mouseY));
                }
            } else if (acheiveButton.over) {
                acheive();
            } else if (shopButton.over) {
                shop();
            } else if (earnButton.over) {
                play();
            }

        };


        keyPressed = function() {
            //we need to add code to handle backspace key pressed. -- Kangkang
            if (nameBlock.over) {
                if (keyCode === ENTER) {
                    nameBlock.over = false;
                } else if (keyCode === 8) {
                    username = username.substring(username, username.length - 1);
                } else if (keyCode !== 8 && keyCode !== 16) {
                    if (username.length < nameBlock.maxChars) {
                        username += key.toString(username);
                    }
                }
            }
        };
        //That's all, folks!



        // ----------- End   ----------------

    }
};