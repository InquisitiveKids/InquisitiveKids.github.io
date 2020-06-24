var sketchProc = function(processingInstance) {
    with(processingInstance) {
        size(600, 600);
        frameRate(30);
        // KA Javascript code goes here!

        // ----------  Begin   ------------ 

        /**
        
        Welcome to the ultimate clicker game, Piggy Bank!
        
        If you want to be told when I release my next game, sub here:
        https://www.khanacademy.org/computer-programming/mr-js-sub-page/4953787015725056
        
        Vote Tracker: (All times are in CST)
        
        Released 9/21/19 10:12 PM
        1 Vote
        
        9/22/19 6:45 AM
        6 Votes
        
        9/22/19 4:10 PM
        150 votes!!! Wow, I left for school and it was at 6, when I come back it has 150 and 1000 Kelvin. Thanks guys!!!
        
        9/23/19 9:13 AM
        200 Votes!! This is crazy!! Thanks so much for all of the support!
        
        9/24/19 2:36 PM
        236 Votes! Wow, still 1000 Kelvin! Thanks again!
        
        9/24/19 8:34 PM
        253 Votes! Yay!! We broke 250!! :D
        
        9/25/19 11:52 AM
        301 Votes and 101 Spin offs!!!!! WE BROKE 300!! =D
        Thank you so much, you guys are incredible!!!
        
        9/25/19 1:28 PM
        Finally, after days of being 1000 Kelvin, this loses it's spot as #1 with 309 Votes.
        
        9/26/19 5:49 PM
        Whoah, even though it's going down the hot list, this got to 383 votes!!! Could we get to 400? =D
        
        9/27/19 5:56 PM
        WE GOT 409 VOTES!!! =D =D
        Wow, this is insane!! Thank you so much guys!!! =D
        
        9/29/19 10:02 AM
        After over a week on the hotlist, this finally is completely off the first page, with a crazy 424 votes! :)
        
        3/25/20 2:50 PM
        I haven't even touched this game in forever and have made way better stuff, but it still remains my most voted by far. Somehow it's gotten to 472 votes just sitting on my projects page 0.o
        
        4/26/20 10:55 AM
        Wow, this somehow got 501 votes, that's crazy! Thanks guys, I've always wanted to hit 500, and it finally happened :D
        
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

        var cmpn = ["k", "M", "B", "T", "q", "Q", "s", "S", "o", "n", "d", "aa", "ab", "ac", "ad", "ae", "af", "ag", "ah", "ai", "aj", "ak", "al", "am", "an", "ao", "ap", "aq", "ar", "as", "at", "au", "av", "aw", "ax", "ay", "az", "ba", "bb", "bc", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bk", "bl", "bm", "bn", "bo", "bp", "bq", "br", "bs", "bt", "bu", "bv", "bw", "bx", "by", "bz", "ca", "cb", "cc", "cd", "ce", "cf", "cg", "ch", "ci", "cj", "ck", "cl", "cm", "cn", "co", "cp", "cq", "cr", "cs", "ct", "cu", "cv", "cw", "cx", "cy", "cz", "da", "db", "dc", "dd", "de", "df", "dg", "dh", "di", "dj", "dk", "dl", "dm", "dn", "do", "dp", "dq", "dr", "ds", "dt", "du", "dv", "dw", "dx", "dy", "dz"];

        var cmp = function(num, f) {
            if (num.toString().toLowerCase() === "infinity") {
                return "Big Number";
            }
            if (num.toString().indexOf("e") !== -1) {
                var n = num.toString();
                var e = n.indexOf("e");
                var len = Number(n.substring(e + 2, n.length));
                var les = len % 3;
                var s = cmpn[((len - les) / 3) - 1];
                var n1 = n.substring(0, 1);
                if (e === 1) {
                    if (les === 0) {
                        return n1 + ".00" + s;
                    } else if (les === 1) {
                        return n1 + "0.00" + s;
                    } else {
                        return n1 + "00.00" + s;
                    }
                } else if (e === 3) {
                    var n2 = n.substring(2, 3);
                    if (les === 0) {
                        return n1 + "." + n.substring(2, 3) + "0" + s;
                    } else if (les === 1) {
                        return n1 + n.substring(2, 3) + ".00" + s;
                    } else {
                        return n1 + n.substring(2, 3) + "0.00" + s;
                    }
                } else if (e === 4) {
                    var n2 = n.substring(2, 3);
                    var n3 = n.substring(3, 4);
                    if (les === 0) {
                        return n1 + "." + n2 + n3 + s;
                    } else if (les === 1) {
                        return n1 + n2 + "." + n3 + "0" + s;
                    } else {
                        return n1 + n2 + n3 + ".00" + s;
                    }
                } else if (e === 5) {
                    var n2 = n.substring(2, 3);
                    var n3 = n.substring(3, 4);
                    var n4 = n.substring(4, 5);
                    if (les === 0) {
                        return n1 + "." + n2 + n3 + s;
                    } else if (les === 1) {
                        return n1 + n2 + "." + n3 + n4 + s;
                    } else {
                        return n1 + n2 + n3 + "." + n4 + "0" + s;
                    }
                } else {
                    var n2 = n.substring(2, 3);
                    var n3 = n.substring(3, 4);
                    var n4 = n.substring(4, 5);
                    var n5 = n.substring(5, 6);
                    if (les === 0) {
                        return n1 + "." + n2 + n3 + s;
                    } else if (les === 1) {
                        return n1 + n2 + "." + n3 + n4 + s;
                    } else {
                        return n1 + n2 + n3 + "." + n4 + n5 + s;
                    }
                }
            } else if (num < 1000) {
                return num.toFixed(f);
            } else {
                var n = num.toString();
                var fi = Number(num).toFixed(0).toString();
                var len = (fi.length - 1) / 3;
                var les = (fi.length - 1) % 3;
                var n1 = n.substring(0, 1 + les);
                var n2 = n.substring(1 + les, les + 3);
                return n1 + "." + n2 + cmpn[floor(len) - 1];
            }
        };

        var drawPiggyBank = function(x, y, s) {
            stroke(0, 0, 0);
            strokeWeight(2 * s);
            fill(250, 195, 202);
            pushMatrix();
            translate(10 * s, 0);
            arc(x - 100 * s, y - 40 * s, 50 * s, 40 * s, 20, 240);
            line(x - 100 * s, y - 40 * s, x - 80 * s, y - 38 * s);
            beginShape();
            vertex(x - 101 * s, y - 40 * s);
            vertex(x - 90 * s, y - 60 * s);
            vertex(x - 114 * s, y - 57 * s);
            endShape();
            popMatrix();
            pushMatrix();
            translate(5 * s, -10 * s);
            pushMatrix();
            translate(x + 30 * s, y + 50 * s);
            rotate(-20);
            noStroke();
            rect(0, 0, 40 * s, 40 * s);
            popMatrix();
            stroke(0, 0, 0);
            arc(x + 62 * s, y + 79 * s, 40 * s, 30 * s, -20, 160);
            line(x + 34 * s, y + 61 * s, x + 44 * s, y + 87 * s);
            line(x + 67 * s, y + 38 * s, x + 81 * s, y + 73 * s);
            popMatrix();
            pushMatrix();
            translate(25 * s, -10 * s);
            pushMatrix();
            translate(x - 70 * s, y + 40 * s);
            rotate(20);
            noStroke();
            rect(0, 0, 40 * s, 40 * s);
            popMatrix();
            stroke(0, 0, 0);
            arc(x - 65 * s, y + 82 * s, 40 * s, 30 * s, 20, 200);
            line(x - 70 * s, y + 40 * s, x - 84 * s, y + 77 * s);
            line(x - 35 * s, y + 58 * s, x - 46 * s, y + 88 * s);
            popMatrix();
            ellipse(x, y, 200 * s, 150 * s);
            pushMatrix();
            translate(x - 70 * s, y + 40 * s);
            rotate(20);
            noStroke();
            rect(0, 0, 40 * s, 40 * s);
            popMatrix();
            stroke(0, 0, 0);
            arc(x - 65 * s, y + 82 * s, 40 * s, 30 * s, 20, 200);
            line(x - 70 * s, y + 40 * s, x - 84 * s, y + 77 * s);
            line(x - 36 * s, y + 63 * s, x - 46 * s, y + 88 * s);
            pushMatrix();
            translate(-10 * s, 5 * s);
            pushMatrix();
            translate(x + 30 * s, y + 50 * s);
            rotate(-20);
            noStroke();
            rect(0, 0, 40 * s, 40 * s);
            popMatrix();
            stroke(0, 0, 0);
            arc(x + 62 * s, y + 79 * s, 40 * s, 30 * s, -20, 160);
            line(x + 34 * s, y + 61 * s, x + 44 * s, y + 87 * s);
            line(x + 67 * s, y + 38 * s, x + 81 * s, y + 73 * s);
            popMatrix();
            pushMatrix();
            translate(x + 80 * s, y + 11 * s);
            rotate(-10);
            ellipse(0, 0, 70 * s, 50 * s);
            ellipse(5 * s, 2 * s, 60 * s, 46 * s);
            popMatrix();
            beginShape();
            vertex(x + 20 * s, y - 25 * s);
            vertex(x + 25 * s, y - 50 * s);
            vertex(x + 35 * s, y - 40 * s);
            endShape();
            beginShape();
            vertex(x + 65 * s, y - 50 * s);
            vertex(x + 75 * s, y - 65 * s);
            vertex(x + 80 * s, y - 40 * s);
            endShape();
            noStroke();
            fill(0);
            ellipse(x + 50 * s, y - 20 * s, 10 * s, 10 * s);
            ellipse(x + 75 * s, y - 25 * s, 10 * s, 10 * s);
            ellipse(x + 100 * s, y + 10 * s, 10 * s, 20 * s);
            ellipse(x + 80 * s, y + 13 * s, 10 * s, 20 * s);
            noFill();
            stroke(0);
            strokeWeight(5 * s);
            strokeCap(SQUARE);
            arc(x, y - 40 * s, 100 * s, 50 * s, 255, 315);
        };

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
                drawPiggyBank(0, 0, this.s);
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
                this.shake();
            };
        };

        var TRpiggyBank = new PiggyBank(450, 40, 0.4);

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
                rect(this.x, this.y, 50, 100);
                fill(166, 34, 199);
                textFont(font, 45);
                textAlign(CENTER, CENTER);
                pushMatrix();
                translate(this.x + 26, this.y + 52);
                if (this.dir === 'up') {
                    rotate(-90);
                } else if (this.dir === 'down') {
                    rotate(90);
                }
                text("$", 0, 0);
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
            background(149, 15, 194);

            for (var i = 0; i < backgroundMoney.length; i++) {
                backgroundMoney[i].pack();
            }
        };

        var BottomButton = function(x, y, type) {
            this.x = x;
            this.y = y;
            this.type = type;
            this.over = false;
            this.on = false;
            this.notifs = 0;

            this.update = function() {
                if (mouseX > this.x && mouseX < this.x + 500 / 3 && mouseY > this.y && mouseY < 500 && !this.on) {
                    this.over = true;
                    mouseOver = true;
                } else {
                    this.over = false;
                }
                if (this.type === 'e' && scene === 'play' || this.type === 's' && scene === 'shop' || this.type === 'a' && scene === 'acheive') {
                    this.on = true;
                } else {
                    this.on = false;
                }
            };

            this.draw = function() {
                noStroke();
                rectMode(CORNER);
                fill(129, 2, 161);
                rect(this.x, this.y, 500 / 3, 110);
                fill(199, 46, 255);
                rect(this.x, this.y + 10, 500 / 3, 100);
                if (this.over || this.on) {
                    fill(255, 100);
                    rect(this.x, this.y + 10, 500 / 3, 100);
                }
                if (this.type === 'e') {
                    textFont(font, 30);
                    textAlign(CENTER, CENTER);
                    fill(129, 2, 161);
                    text("$", this.x + 500 / 3 / 2, this.y + 60);
                    noFill();
                    strokeWeight(5);
                    stroke(129, 2, 161);
                    rectMode(CENTER);
                    rect(this.x + 500 / 3 / 2, this.y + 60, 80, 40);
                    rectMode(CORNER);
                } else if (this.type === 'a') {
                    noStroke();
                    fill(129, 2, 161);
                    arc(this.x + 500 / 3 / 2, this.y + 90, 50, 30, 180, 360);
                    rectMode(CENTER);
                    rect(this.x + 500 / 3 / 2, this.y + 60, 10, 30);
                    rectMode(CORNER);
                    arc(this.x + 500 / 3 / 2, this.y + 20, 50, 80, 0, 180);
                    noFill();
                    strokeWeight(5);
                    stroke(129, 2, 161);
                    arc(this.x + 70, this.y + 38, 40, 30, 60, 270);
                    arc(this.x + 500 / 3 - 70, this.y + 38, 40, 30, -(360 - 270), 90);
                } else if (this.type === 's') {
                    noFill();
                    strokeWeight(5);
                    stroke(129, 2, 161);
                    strokeCap(ROUND);
                    quad(this.x + 50, this.y + 40, this.x + 60, this.y + 70, this.x + 110, this.y + 70, this.x + 120, this.y + 40);
                    strokeCap(SQUARE);
                    line(this.x + 60, this.y + 70, this.x + 60, this.y + 80);
                    line(this.x + 60, this.y + 80, this.x + 110, this.y + 80);
                    line(this.x + 55, this.y + 55, this.x + 115, this.y + 55);
                    line(this.x + 50, this.y + 40, this.x + 45, this.y + 30);
                    line(this.x + 45, this.y + 30, this.x + 35, this.y + 30);
                    line(this.x + 70, this.y + 40, this.x + 70, this.y + 70);
                    line(this.x + 85, this.y + 40, this.x + 85, this.y + 70);
                    line(this.x + 100, this.y + 40, this.x + 100, this.y + 70);
                    noStroke();
                    fill(129, 2, 161);
                    ellipse(this.x + 62, this.y + 89, 15, 15);
                    ellipse(this.x + 110, this.y + 89, 15, 15);
                }
                if (this.notifs > 0 && this.notifs <= 9) {
                    fill(255, 0, 0);
                    noStroke();
                    ellipse(this.x + 140, this.y + 30, 20, 20);
                    fill(255);
                    textFont(font, 15);
                    textAlign(CENTER, CENTER);
                    text(this.notifs, this.x + 140, this.y + 30);
                }
                if (this.notifs > 9) {
                    fill(255, 0, 0);
                    noStroke();
                    ellipse(this.x + 140, this.y + 30, 20, 20);
                    fill(255);
                    textFont(font, 13);
                    textAlign(CENTER, CENTER);
                    text("9+", this.x + 140, this.y + 30);
                }
            };

            this.pack = function() {
                this.update();
                this.draw();
            };
        };

        var acheiveButton = new BottomButton(0, 390, 'a');
        var earnButton = new BottomButton(500 / 3, 390, 'e');
        var shopButton = new BottomButton(500 / 3 * 2, 390, 's');

        var bottomBar = function() {
            acheiveButton.pack();
            earnButton.pack();
            shopButton.pack();
        };

        var Scroller = function(x, y, size) {
            this.x = x;
            this.startY = y;
            this.y = this.startY;
            this.size = size;
            this.end = this.startY + this.size;
            this.over = false;
            this.value = this.y - this.startY;
            this.selected = false;

            this.draw = function() {
                stroke(0, 0, 0);
                strokeWeight(5);
                line(this.x, this.startY, this.x, this.end);
                stroke(0, 0, 0);
                strokeWeight(1);
                rectMode(CENTER);
                fill(125, 125, 125);
                rect(this.x, this.y, 20, 50, 5);
                if (this.over || this.selected) {
                    fill(0, 50);
                    noStroke();
                    rect(this.x, this.y, 20, 50, 5);
                }
                rectMode(CORNER);
            };

            this.update = function() {
                this.value = this.y - this.startY;
                if (mouseX > this.x - 10 && mouseX < this.x + 10 && mouseY > this.y - 25 && mouseY < this.y + 25) {
                    this.over = true;
                } else {
                    this.over = false;
                }
                if (this.y < this.startY) {
                    this.y = this.startY;
                }
                if (this.y > this.end) {
                    this.y = this.end;
                }
                if (this.selected && mouseY > this.startY && mouseY < this.end) {
                    this.y = mouseY;
                }
                if (this.over && !this.selected) {
                    mouseGrab = true;
                }
                if (this.selected) {
                    mouseGrabbing = true;
                }
            };

            this.pack = function() {
                this.update();
                this.draw();
            };
        };

        var aScroller = new Scroller(475, 110, 250);
        var sScroller = new Scroller(475, 110, 250);

        var Package = function(amount) {
            this.x = 400;
            this.y = 450;
            this.Amount = amount;
            this.amount = 0;
            this.s = 0.1;
            this.going = true;
            this.landed = false;
            this.yVel = 0;
            this.jumpPower = 15;
            this.gravity = 0.3;
            this.yVel = -this.jumpPower;
            this.spin = 0;
            this.tSize = 50;
            this.openT = 0;
            this.opened = false;
            this.over = false;
            this.gone = false;
            this.done = false;

            this.draw = function() {
                background(149, 15, 194);
                noStroke();
                fill(255, 255, 255, 50);
                pushMatrix();
                translate(250, 250);
                rotate(this.spin);
                for (var i = 0; i < 360; i += 20) {
                    triangle(0, 0, sin(i) * 400, cos(i) * 400, sin(i + 10) * 400, cos(i + 10) * 400);
                }
                popMatrix();

                if (this.opened && this.y > 250) {
                    noStroke();
                    rectMode(CENTER);
                    stroke(3, 140, 16);
                    strokeWeight(10);
                    fill(126, 252, 128);
                    rect(250, 250, 300, 150);
                    noStroke();
                    fill(3, 140, 16);
                    arc(100, 175, 50, 50, 0, 90);
                    arc(400, 175, 50, 50, 90, 180);
                    arc(400, 325, 50, 50, 180, 270);
                    arc(100, 325, 50, 50, 270, 360);
                    rectMode(CORNER);
                    textFont(font, 100 * this.s);
                    textAlign(CENTER, CENTER);
                    text("$", 250, 250);
                    fill(0);
                    textFont(font, 50);
                    textAlign(CENTER, CENTER);
                    text("x" + cmp(this.amount), 255, 255);
                    fill(255);
                    text("x" + cmp(this.amount), 250, 250);
                    this.amount += this.Amount * 0.1;
                    if (this.amount > this.Amount) {
                        this.amount = this.Amount;
                    }
                    textFont(font, 30);
                    fill(0);
                    text("Click to continue", 255, 405);
                    fill(255);
                    text("Click to continue", 250, 400);
                }

                fill(173, 150, 75);
                quad(this.x, this.y, this.x + 100 * this.s, this.y, this.x + 80 * this.s, this.y + 40 * this.s, this.x - 20 * this.s, this.y + 40 * this.s);
                fill(196, 166, 100);
                quad(this.x - 20 * this.s, this.y + 40 * this.s, this.x + 80 * this.s, this.y + 40 * this.s, this.x + 80 * this.s, this.y + 100 * this.s, this.x - 20 * this.s, this.y + 100 * this.s);
                fill(143, 127, 44);
                quad(this.x + 80 * this.s, this.y + 40 * this.s, this.x + 100 * this.s, this.y, this.x + 100 * this.s, this.y + 60 * this.s, this.x + 80 * this.s, this.y + 100 * this.s);
                fill(235, 245, 157);
                quad(this.x - 9 * this.s, this.y + 17 * this.s, this.x + 92 * this.s, this.y + 17 * this.s, this.x + 89 * this.s, this.y + 22 * this.s, this.x - 11 * this.s, this.y + 22 * this.s);
                quad(this.x + 92 * this.s, this.y + 17 * this.s, this.x + 89 * this.s, this.y + 22 * this.s, this.x + 89 * this.s, this.y + 55 * this.s, this.x + 92 * this.s, this.y + 47 * this.s);
                textFont(font, 11 * this.s);
                textAlign(CENTER, CENTER);
                text("THIS SIDE UP", this.x + 30 * this.s, this.y + 90 * this.s);
                textFont(font, 35 * this.s);
                text("⇧", this.x + 30 * this.s, this.y + 62 * this.s);

                if (!this.opened) {
                    fill(0);
                    textFont(font, this.tSize);
                    text("New Package!", 247, 47);
                    fill(0, 255, 0);
                    textFont(font, this.tSize);
                    text("New Package!", 250, 50);
                }

                textFont(font, 20);
                fill(255, 255, 255, this.openT);
                text("(Click to open)", 250, 450);
                if (this.opened) {
                    fill(0);
                    textFont(font, this.tSize);
                    text("You Got...", 247, 47);
                    fill(0, 255, 0);
                    textFont(font, this.tSize);
                    text("You Got...", 250, 50);
                }
            };

            this.jump = function() {
                if (!this.landed) {
                    this.x -= 2.7;
                    this.s += 0.05;
                    if (this.s > 1.5) {
                        this.s = 1.5;
                    }
                }
                if (this.y > 170 && this.yVel > 0) {
                    this.landed = true;
                }
                if (this.landed) {
                    if (!this.opened) {
                        this.yVel = 0;
                        this.openT += sin(frameCount * 5) * 10;
                    }
                }

                this.spin++;

                if (mouseX > this.x - 20 * this.s && mouseX < this.x + 100 * this.s && mouseY > this.y && mouseY < this.y + 100 * this.s && this.landed && !this.opened) {
                    this.over = true;
                    mouseOver = true;

                } else {
                    this.over = false;
                }
                if (this.y > 500) {
                    this.going = false;
                    this.gone = true;
                }
                this.y += this.yVel;
                this.yVel += this.gravity;
            };

            this.deliver = function() {
                this.draw();
                this.jump();
            };
        };

        var packages = [];

        var Acheivement = function(y, id) {
            this.x = 20;
            this.id = id;
            this.offset = map(aScroller.value, 0, 250, -950, 0);
            this.startY = y;
            this.completed = false;
            this.collected = false;
            this.y = this.startY;
            this.even = 1060 - this.startY;
            this.over = false;
            this.title = '';
            this.req = '';
            this.reward = 0;
            this.notified = false;
            this.unNotifed = false;

            this.draw = function() {
                strokeWeight(1);
                stroke(0);
                if (!this.completed) {
                    fill(255);
                } else if (this.completed && !this.collected) {
                    fill(0, 255, 0);
                } else if (this.collected) {
                    fill(0, 100, 0);
                }
                rect(this.x, this.y, 420, 100, 20);
                fill(0);
                textAlign(CENTER, CENTER);
                textFont(font, 20);
                text(this.title, this.x + 210, this.y + 30);
                line(this.x + 100, this.y + 40, this.x + 320, this.y + 40);
                textFont(font, 15);
                text(this.req, this.x + 210, this.y + 70);
                if (this.over) {
                    noStroke();
                    fill(0, 50);
                    rect(this.x, this.y, 420, 100, 20);
                }
                if (this.collected) {
                    textFont(font, 40);
                    textAlign(CENTER, CENTER);
                    text("✔", this.x + 50, this.y + 50);
                }
                if (this.completed && !this.collected) {
                    textFont(font, 15);
                    textAlign(CENTER, CENTER);
                    fill(0);
                    text("Click to\ncollect\nreward", this.x + 50, this.y + 50);
                }
            };

            this.update = function() {
                this.offset = map(aScroller.value, 0, 250, -950, 0);
                this.y = this.startY - this.even - this.offset;

                if (mouseX > this.x && mouseX < this.x + 420 && mouseY > this.y && mouseY < this.y + 100 && this.completed && !this.collected && mouseY < 390) {
                    this.over = true;
                    mouseOver = true;
                } else {
                    this.over = false;
                }

                switch (this.id) {
                    case 0:
                        this.title = 'Starting off';
                        this.req = 'Get your balance to\n$1,000';
                        this.reward = 100;
                        if (money >= 1000) {
                            this.completed = true;
                        }
                        break;

                    case 1:
                        this.title = 'Getting Big';
                        this.req = 'Get your balance to\n$100,000';
                        this.reward = 10000;
                        if (money >= 100000) {
                            this.completed = true;
                        }
                        break;

                    case 2:
                        this.title = 'Millionaire';
                        this.req = 'Get your balance to\n$1,000,000';
                        this.reward = 100000;
                        if (money >= 1000000) {
                            this.completed = true;
                        }
                        break;

                    case 3:
                        this.title = 'Emperor';
                        this.req = 'Get your balance to\n$1,000,000,000,000';
                        this.reward = 100000000000;
                        if (money >= 1000000000000) {
                            this.completed = true;
                        }
                        break;

                    case 4:
                        this.title = 'Entrepreneur';
                        this.req = 'Get your cash per second\nto 100';
                        this.reward = 10000;
                        if (cps >= 100) {
                            this.completed = true;
                        }
                        break;

                    case 5:
                        this.title = 'Businessman';
                        this.req = 'Get your cash per second\nto 10,000';
                        this.reward = 10000000;
                        if (cps >= 10000) {
                            this.completed = true;
                        }
                        break;

                    case 6:
                        this.title = 'CEO';
                        this.req = 'Get your cash per second\nto 1,000,000';
                        this.reward = 100000000;
                        if (cps >= 1000000) {
                            this.completed = true;
                        }
                        break;

                    case 7:
                        this.title = 'Improvement';
                        this.req = 'Get your cash per click\nto 100';
                        this.reward = 1000;
                        if (cpc >= 100) {
                            this.completed = true;
                        }
                        break;

                    case 8:
                        this.title = 'Investor';
                        this.req = 'Get your cash per click\nto 1,000';
                        this.reward = 20000;
                        if (cpc >= 1000) {
                            this.completed = true;
                        }
                        break;

                    case 9:
                        this.title = 'Too easy';
                        this.req = 'Get your cash per click\nto 1,000,000';
                        this.reward = 20000000;
                        if (cpc >= 1000000) {
                            this.completed = true;
                        }
                        break;
                }
            };

            this.notify = function() {
                switch (this.id) {
                    case 0:
                        if (money >= 1000) {
                            this.completed = true;
                        }
                        break;

                    case 1:
                        if (money >= 100000) {
                            this.completed = true;
                        }
                        break;

                    case 2:
                        if (money >= 1000000) {
                            this.completed = true;
                        }
                        break;

                    case 3:
                        if (money >= 1000000000000) {
                            this.completed = true;
                        }
                        break;

                    case 4:
                        if (cps >= 1000) {
                            this.completed = true;
                        }
                        break;

                    case 5:
                        if (cps >= 10000) {
                            this.completed = true;
                        }
                        break;

                    case 6:
                        if (cps >= 1000000) {
                            this.completed = true;
                        }
                        break;

                    case 7:
                        if (cpc >= 100) {
                            this.completed = true;
                        }
                        break;

                    case 8:
                        if (cpc >= 1000) {
                            this.completed = true;
                        }
                        break;

                    case 9:
                        if (cpc >= 1000000) {
                            this.completed = true;
                        }
                        break;
                }

                if (this.completed && !this.collected && !this.notified) {
                    acheiveButton.notifs++;
                    this.notified = true;
                }
                if (this.collected && !this.unNotifed) {
                    acheiveButton.notifs--;
                    this.unNotifed = true;
                }
            };

            this.pack = function() {
                this.update();
                this.draw();
            };
        };

        var acheivements = [];

        for (var i = 0; i < 10; i++) {
            acheivements.push(new Acheivement(110 + 60 * i, i));
        }

        var sItemNum = 11;
        var ShopItem = function(y, id) {
            this.x = 20;
            this.id = id;
            this.offset = map(sScroller.value, 0, 250, -950, 0);
            this.startY = y;
            this.canBuy = false;
            this.price = 0;
            this.y = this.startY;
            this.totalLength = sItemNum * 100 + 60;
            this.even = this.totalLength - this.startY;
            this.wrongT = 0;
            this.title = '';
            this.des = '';
            this.bought = false;
            this.owned = 0;
            this.add = 0;

            switch (this.id) {
                case 0:
                    this.price = 1000;
                    break;

                case 1:
                    this.price = 5000;
                    break;

                case 2:
                    this.price = 50000;
                    break;

                case 3:
                    this.price = 500000;
                    break;

                case 4:
                    this.price = 5000000;
                    break;

                case 5:
                    this.price = 1000;
                    break;

                case 6:
                    this.price = 10000;
                    break;

                case 7:
                    this.price = 100000;
                    break;

                case 8:
                    this.price = 1000000;
                    break;

                case 9:
                    this.price = 10000000;
                    break;

                case 10:
                    this.price = 100000000;
                    break;
            }

            this.draw = function() {
                strokeWeight(1);
                stroke(0);
                fill(255, 255, 255);
                rect(this.x, this.y, 420, 100, 20);
                fill(0);
                textAlign(CENTER, CENTER);
                textFont(font, 20);
                text(this.title, this.x + 210, this.y + 30);
                line(this.x + 100, this.y + 40, this.x + 320, this.y + 40);
                textFont(font, 15);
                if (this.id < 5) {
                    text("You own\n" + cmp(this.owned) + "\nof these", this.x + 50, this.y + 50);
                }
                if (this.id === 8) {
                    textFont(font, 13);
                } else {
                    textFont(font, 15);
                }
                text(this.des, this.x + 210, this.y + 70);
                textFont(font, 15);
                fill(0);
                text('$' + cmp(this.price), this.x + 370, this.y + 30);
                fill(255, 0, 0, this.wrongT);
                text('$' + cmp(this.price), this.x + 370, this.y + 30);
            };

            this.update = function() {
                this.offset = map(sScroller.value, 0, 250, -this.totalLength + 110, 0);
                this.y = this.startY - this.even - this.offset;
                this.wrongT -= 5;
                switch (this.id) {
                    case 0:
                        this.title = 'Money Printer';
                        this.owned = moneyPrinters;
                        this.des = 'These earn you $' + cmp(printerEarnings) + '\nper second';
                        break;

                    case 1:
                        this.title = 'Money Farm';
                        this.owned = moneyFarms;
                        this.des = 'These earn you $' + cmp(farmEarnings) + '\nper second';
                        break;

                    case 2:
                        this.title = 'Money Factory';
                        this.owned = moneyFactories;
                        this.des = 'These earn you $' + cmp(factoryEarnings) + '\nper second';
                        break;

                    case 3:
                        this.title = 'Gold Mine';
                        this.owned = goldMines;
                        this.des = 'These earn you $' + cmp(goldEarnings) + '\nper second';
                        break;

                    case 4:
                        this.title = 'Diamond Mine';
                        this.owned = diamondMines;
                        this.des = 'These earn you $' + cmp(diamondEarnings) + '\nper second';
                        break;

                    case 5:
                        this.add = ceil(cpc * 0.2);
                        this.title = 'Bigger Clicks';
                        this.owned = 0;
                        this.des = 'You cash per click will\n equal $' + cmp((cpc + this.add));
                        break;

                    case 6:
                        this.add = ceil(printerEarnings * 0.3);
                        this.title = 'Faster Printers';
                        this.owned = 0;
                        this.des = 'Your money printers will\nprint $' + cmp((printerEarnings + this.add)) + ' per second';
                        break;

                    case 7:
                        this.add = ceil(farmEarnings * 0.3);
                        this.title = 'Miracle Fertilizer';
                        this.owned = 0;
                        this.des = 'Your money farms will\ngrow $' + cmp((farmEarnings + this.add)) + ' per second';
                        break;

                    case 8:
                        this.add = ceil(factoryEarnings * 0.3);
                        this.title = 'Cooler Machines';
                        this.owned = 0;
                        this.des = 'Your money factories will\nmanufacture $' + cmp((factoryEarnings + this.add)) + ' per second';
                        break;

                    case 9:
                        this.add = ceil(goldEarnings * 0.3);
                        this.title = 'Sharper Pickaxes';
                        this.owned = 0;
                        this.des = 'Your gold mines will\nmine $' + cmp((goldEarnings + this.add)) + ' per second';
                        break;

                    case 10:
                        this.add = ceil(diamondEarnings * 0.3);
                        this.title = 'Platinum Minecarts';
                        this.owned = 0;
                        this.des = 'Your diamond mines will\ncollect $' + cmp((diamondEarnings + this.add)) + ' per second';
                        break;
                }
            };

            this.pack = function() {
                this.update();
                this.draw();
            };
        };

        var shopItems = [];

        for (var i = 0; i < sItemNum; i++) {
            shopItems.push(new ShopItem(110 + 60 * i, i));
        }

        var btn = [];

        for (var i = 0; i < shopItems.length; i++) {
            btn.push(new Button(shopItems[i].x + 340, shopItems[i].y, 75, 40, 20, color(0, 255, 0), color(0, 100, 0), "Buy", 20, font, color(255)));
        }

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
            translate(107, 51);
            rotate(-40);
            fill(0, 0, 0);
            textFont(font, 50);
            text("P", 3, 3);
            textFont(font, 50);
            fill(247, 0, 132);
            text("P", 0, 0);
            popMatrix();
            pushMatrix();
            translate(143, 25);
            rotate(-30);
            fill(0, 0, 0);
            textFont(font, 50);
            text("I", 3, 3);
            textFont(font, 50);
            fill(247, 0, 132);
            text("I", 0, 0);
            popMatrix();
            pushMatrix();
            translate(172, 8);
            rotate(-15);
            fill(0, 0, 0);
            textFont(font, 50);
            text("G", 3, 3);
            textFont(font, 50);
            fill(247, 0, 132);
            text("G", 0, 0);
            popMatrix();
            pushMatrix();
            translate(224, -4);
            rotate(-5);
            fill(0, 0, 0);
            textFont(font, 50);
            text("G", 3, 3);
            textFont(font, 50);
            fill(247, 0, 132);
            text("G", 0, 0);
            popMatrix();
            pushMatrix();
            translate(275, -6);
            rotate(10);
            fill(0, 0, 0);
            textFont(font, 50);
            text("Y", 3, 3);
            textFont(font, 50);
            fill(247, 0, 132);
            text("Y", 0, 0);
            popMatrix();
            pushMatrix();
            translate(210, 250);
            rotate(10);
            fill(0, 0, 0);
            textFont(font, 50);
            text("B", 3, 3);
            textFont(font, 50);
            fill(79, 240, 98);
            text("B", 0, 0);
            popMatrix();
            pushMatrix();
            translate(250, 255);
            rotate(-5);
            fill(0, 0, 0);
            textFont(font, 50);
            text("A", 3, 3);
            textFont(font, 50);
            fill(79, 240, 98);
            text("A", 0, 0);
            popMatrix();
            pushMatrix();
            translate(290, 250);
            rotate(-15);
            fill(0, 0, 0);
            textFont(font, 50);
            text("N", 3, 3);
            textFont(font, 50);
            fill(79, 240, 98);
            text("N", 0, 0);
            popMatrix();
            pushMatrix();
            translate(330, 240);
            rotate(-30);
            fill(0, 0, 0);
            textFont(font, 50);
            text("K", 3, 3);
            textFont(font, 50);
            fill(79, 240, 98);
            text("K", 0, 0);
            popMatrix();
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

        var Cash = function(x, y) {
            this.startX = x;
            this.startY = y;
            this.x = this.startX;
            this.y = this.startY;
            this.destinationX = 450;
            this.destinationY = 40;
            this.theta = atan2(this.destinationY - this.y, this.destinationX - this.x);
            this.arrived = false;
            this.start = false;
            this.radius = 0;
            this.worth = earnings / 5;
            this.rotate = random(0, 360);
            this.vel = 0;
            this.speed = 0.5;
            this.size = 1;

            this.draw = function() {
                noStroke();
                fill(130, 250, 115);
                rectMode(CENTER);
                rect(this.x, this.y, 50 * this.size, 30 * this.size);
                noFill();
                stroke(6, 191, 34);
                strokeWeight(2);
                rect(this.x, this.y, 44 * this.size, 24 * this.size);
                noStroke();
                fill(6, 191, 34);
                ellipse(this.x, this.y, 18 * this.size, 18 * this.size);
                ellipse(this.x - 15 * this.size, this.y, 8 * this.size, 8 * this.size);
                ellipse(this.x + 15 * this.size, this.y, 8 * this.size, 8 * this.size);
                textAlign(CENTER, CENTER);
                textSize(15 * this.size);
                fill(130, 250, 115);
                text("$", this.x, this.y);
            };

            this.update = function() {
                if (!this.start) {
                    this.x = this.x + sin(this.rotate) * this.radius;
                    this.y = this.y + cos(this.rotate) * this.radius;
                    this.radius += 1;
                    if (this.radius > 10) {
                        this.start = true;
                    }
                } else if (this.start) {
                    this.theta = atan2(this.destinationY - this.y, this.destinationX - this.x);
                    this.x += cos(this.theta) * this.vel;
                    this.y += sin(this.theta) * this.vel;
                    this.vel += this.speed;
                    this.size -= 0.01;
                    if (dist(this.x, this.y, this.destinationX, this.destinationY) < 15) {
                        money += this.worth;
                        TRpiggyBank.shakeTimer = 0;
                        this.arrived = true;
                    }
                }
            };

            this.pack = function() {
                this.draw();
                this.update();
            };
        };

        var cash = [];

        var BigBux = function(x, y, s) {
            this.x = x;
            this.y = y;
            this.S = s;
            this.s = this.S;
            this.pressed = false;
            this.shrink = -0.05;

            this.draw = function() {
                noStroke();
                rectMode(CENTER);
                stroke(3, 140, 16);
                strokeWeight(10);
                fill(126, 252, 128);
                rect(this.x, this.y, 300 * this.s, 150 * this.s);
                noStroke();
                fill(3, 140, 16);
                arc(this.x - 150 * this.s, this.y - 75 * this.s, this.s * 50, this.s * 50, 0, 90);
                arc(this.x + 150 * this.s, this.y - 75 * this.s, this.s * 50, this.s * 50, 90, 180);
                arc(this.x + 150 * this.s, this.y + 75 * this.s, 50 * this.s, 50 * this.s, 180, 270);
                arc(this.x - 150 * this.s, this.y + 75 * this.s, 50 * this.s, 50 * this.s, 270, 360);
                rectMode(CORNER);
                textFont(font, 100 * this.s);
                textAlign(CENTER, CENTER);
                text("$", this.x, this.y);
            };

            this.update = function() {
                if (mouseX > this.x - 150 && mouseX < this.x + 150 && mouseY > this.y - 75 && mouseY < this.y + 75) {
                    this.over = true;
                    mouseOver = true;
                } else {
                    this.over = false;
                }

                if (this.pressed) {
                    if (this.s <= this.S * 0.95) {
                        this.shrink = 0.02;
                    }
                    if (this.s > this.S * 1.05 && this.shrink > 0) {
                        this.pressed = false;
                        this.shrink = -0.02;
                    }
                    this.s += this.shrink;
                }
                if (this.over && !this.pressed) {
                    this.s = this.S * 1.05;
                } else if (!this.over && !this.pressed) {
                    this.s = this.S;
                }
            };

            this.pack = function() {
                this.update();
                this.draw();
            };
        };

        var bigBux = new BigBux(250, 200, 1);

        var earnTimer = 0;
        var earnEasyMoney = function() {
            money += printerEarnings * moneyPrinters;
            money += farmEarnings * moneyFarms;
            money += factoryEarnings * moneyFactories;
            money += goldEarnings * goldMines;
            money += diamondEarnings * diamondMines;
        };

        var earnCPS = function() {
            earnTimer++;
            if (earnTimer > 10) {
                earnTimer = 0;
                earnEasyMoney();
            }
        };

        var play = function() {
            scene = 'play';

            cps = printerEarnings * moneyPrinters + farmEarnings * moneyFarms + factoryEarnings * moneyFactories + goldEarnings * goldMines + diamondEarnings * diamondMines;
            earnCPS();

            Background();
            fill(129, 2, 161);
            noStroke();
            rect(0, 0, 500, 100);
            fill(199, 46, 255);
            rect(0, 0, 500, 90);
            bigBux.pack();
            TRpiggyBank.pack();
            for (var i = 0; i < cash.length; i++) {
                cash[i].pack();
                if (cash[i].arrived) {
                    cash.splice(i, 1);
                    continue;
                }
            }
            textAlign(CENTER, CENTER);
            fill(0, 0, 0);
            textFont(font, 13);
            text("$" + cmp(money), 440, 40);
            textFont(font, 30);
            text(username + "'s Kangkang Bank", 210, 45);
            text("Cash per click: " + cmp(cpc), 255, 305);
            text("Cash per second: " + cmp(cps), 255, 355);
            fill(255, 255, 255);
            text(username + "'s Kangkang Bank", 205, 40);
            text("Cash per click: " + cmp(cpc), 250, 300);
            text("Cash per second: " + cmp(cps), 250, 350);
            bottomBar();

            for (var i = 0; i < acheivements.length; i++) {
                acheivements[i].notify();
            }
        };

        var acheive = function() {
            scene = 'acheive';

            cps = printerEarnings * moneyPrinters + farmEarnings * moneyFarms + factoryEarnings * moneyFactories + goldEarnings * goldMines + diamondEarnings * diamondMines;
            earnCPS();

            var packageBeingDelivered = false;
            for (var i = 0; i < packages.length; i++) {
                if (!packages[i].done) {
                    packageBeingDelivered = true;
                }
            }

            Background();
            if (!packageBeingDelivered) {
                for (var i = 0; i < acheivements.length; i++) {
                    acheivements[i].pack();
                }
            }
            fill(129, 2, 161);
            noStroke();
            rect(0, 0, 500, 80);
            fill(199, 46, 255);
            rect(0, 0, 500, 70);
            fill(0);
            textAlign(CENTER, CENTER);
            textFont(font, 30);
            text(username + "'s Acheivements", 255, 45);
            fill(255);
            text(username + "'s Acheivements", 250, 40);
            aScroller.pack();
            for (var i = 0; i < cash.length; i++) {
                if (!cash[i].arrived) {
                    cash[i].update();
                }
            }
            if (!packageBeingDelivered) {
                bottomBar();
            }
            for (var i = 0; i < packages.length; i++) {
                if (!packages[i].done) {
                    packages[i].deliver();
                }
            }
        };

        var shop = function() {
            scene = 'shop';

            cps = printerEarnings * moneyPrinters + farmEarnings * moneyFarms + factoryEarnings * moneyFactories + goldEarnings * goldMines + diamondEarnings * diamondMines;
            earnCPS();

            for (var i = 0; i < acheivements.length; i++) {
                acheivements[i].notify();
            }

            Background();
            for (var i = 0; i < shopItems.length; i++) {
                shopItems[i].pack();
            }

            for (var i = 0; i < btn.length; i++) {
                btn[i].y = shopItems[i].y + 50;
                if (!shopItems.bought) {
                    btn[i].pack();
                }
            }

            fill(129, 2, 161);
            noStroke();
            rect(0, 0, 500, 80);
            fill(199, 46, 255);
            rect(0, 0, 500, 70);
            fill(0);
            textAlign(CENTER, CENTER);
            textFont(font, 30);
            text("Shop", 255, 45);
            textFont(font, 20);
            text("$" + cmp(money), 425, 45);
            fill(255);
            textFont(font, 30);
            text("Shop", 250, 40);
            textFont(font, 20);
            text("$" + cmp(money), 420, 40);
            sScroller.pack();
            for (var i = 0; i < cash.length; i++) {
                if (!cash[i].arrived) {
                    cash[i].update();
                }
            }
            bottomBar();
        };

        draw = function() {
            switch (scene) {
                case 'play':
                    play();
                    break;

                case "acheive":
                    acheive();
                    break;

                case "shop":
                    shop();
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
            if (scene === 'acheive') {
                var packageBeingDelivered = false;
                for (var i = 0; i < packages.length; i++) {
                    if (!packages[i].done) {
                        packageBeingDelivered = true;
                    }
                }
                for (var i = 0; i < acheivements.length; i++) {
                    if (acheivements[i].over && !packageBeingDelivered) {
                        packages.push(new Package(acheivements[i].reward));
                        acheivements[i].collected = true;
                    }
                }
                for (var i = 0; i < packages.length; i++) {
                    if (packages[i].over) {
                        packages[i].opened = true;
                        packages[i].yVel = -7;
                        packages[i].openT = 0;
                    }
                    if (!packages[i].done && packages[i].gone) {
                        packages[i].done = true;
                        earnings = packages[i].Amount;
                        for (var i = 0; i < 5; i++) {
                            cash.push(new Cash(mouseX, mouseY));
                        }
                        play();
                    }
                }
            } else if (scene === 'shop' && mouseY < 390) {
                var buyPrinter = 0;
                var buyFarm = 1;
                var buyFactory = 2;
                var buyGold = 3;
                var buyDiamond = 4;
                var upClick = 5;
                var upPrinter = 6;
                var upFarm = 7;
                var upFactory = 8;
                var upGold = 9;
                var upDiamond = 10;
                var item = shopItems;
                var inflation = 1.2;
                var upUp = 1.5;

                if (btn[buyPrinter].over && money >= item[buyPrinter].price) {
                    money -= item[buyPrinter].price;
                    moneyPrinters++;
                    item[buyPrinter].price = ceil(item[buyPrinter].price * inflation);

                } else if (btn[buyPrinter].over && money < item[buyPrinter].price) {
                    item[buyPrinter].wrongT = 255;
                }

                if (btn[buyFarm].over && money >= item[buyFarm].price) {
                    money -= item[buyFarm].price;
                    moneyFarms++;
                    item[buyFarm].price = ceil(item[buyFarm].price * inflation);

                } else if (btn[buyFarm].over && money < item[buyFarm].price) {
                    item[buyFarm].wrongT = 255;
                }

                if (btn[buyFactory].over && money >= item[buyFactory].price) {
                    money -= item[buyFactory].price;
                    moneyFactories++;
                    item[buyFactory].price = ceil(item[buyFactory].price * inflation);

                } else if (btn[buyFactory].over && money < item[buyFactory].price) {
                    item[buyFactory].wrongT = 255;
                }

                if (btn[buyGold].over && money >= item[buyGold].price) {
                    money -= item[buyGold].price;
                    goldMines++;
                    item[buyGold].price = ceil(item[buyGold].price * inflation);

                } else if (btn[buyGold].over && money < item[buyGold].price) {
                    item[buyGold].wrongT = 255;
                }

                if (btn[buyDiamond].over && money >= item[buyDiamond].price) {
                    money -= item[buyDiamond].price;
                    diamondMines++;
                    item[buyDiamond].price = ceil(item[buyDiamond].price * inflation);

                } else if (btn[buyDiamond].over && money < item[buyDiamond].price) {
                    item[buyDiamond].wrongT = 255;
                }

                if (btn[upClick].over && money >= item[upClick].price) {
                    money -= item[upClick].price;
                    cpc += item[upClick].add;
                    item[upClick].price = ceil(item[upClick].price * inflation);

                } else if (btn[upClick].over && money < item[upClick].price) {
                    item[upClick].wrongT = 255;
                }

                if (btn[upPrinter].over && money >= item[upPrinter].price) {
                    money -= item[upPrinter].price;
                    printerEarnings += item[upPrinter].add;
                    item[upPrinter].price = ceil(item[upPrinter].price * inflation);

                } else if (btn[upPrinter].over && money < item[upPrinter].price) {
                    item[upPrinter].wrongT = 255;
                }

                if (btn[upFarm].over && money >= item[upFarm].price) {
                    money -= item[upFarm].price;
                    farmEarnings += item[upFarm].add;
                    item[upFarm].price = ceil(item[upFarm].price * inflation);

                } else if (btn[upFarm].over && money < item[upFarm].price) {
                    item[upFarm].wrongT = 255;
                }

                if (btn[upFactory].over && money >= item[upFactory].price) {
                    money -= item[upFactory].price;
                    factoryEarnings += item[upFactory].add;
                    item[upFactory].price = ceil(item[upFactory].price * inflation);

                } else if (btn[upFactory].over && money < item[upFactory].price) {
                    item[upFactory].wrongT = 255;
                }

                if (btn[upGold].over && money >= item[upGold].price) {
                    money -= item[upGold].price;
                    goldEarnings += item[upGold].add;
                    item[upGold].price = ceil(item[upGold].price * inflation);

                } else if (btn[upGold].over && money < item[upGold].price) {
                    item[upGold].wrongT = 255;
                }

                if (btn[upDiamond].over && money >= item[upDiamond].price) {
                    money -= item[upDiamond].price;
                    diamondEarnings += item[upDiamond].add;
                    item[upDiamond].price = ceil(item[upDiamond].price * inflation);

                } else if (btn[upDiamond].over && money < item[upDiamond].price) {
                    item[upDiamond].wrongT = 255;
                }
            }
        };

        mousePressed = function() {
            if (aScroller.over) {
                aScroller.selected = true;
            }
            if (sScroller.over) {
                sScroller.selected = true;
            }
        };

        mouseReleased = function() {
            aScroller.selected = false;
            sScroller.selected = false;
        };

        keyPressed = function() {
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