/* Here is the list of avatars:
1. avatars/aqualine-sapling
2. avatars/aqualine-seedling
3. avatars/aqualine-tree
4. avatars/aqualine-ultimate

and the rest all have the same suffixes but you could replace 'aqualine' with piceratops, starky, duskpin, leafers, primosaur
*/
var avatarImage = "avatars/aqualine-seed";

//background
background(242, 252, 255);

//avatars
stroke(255, 196, 0);
strokeWeight(2);
rect(529, 20, 52, 52, 5);
image(getImage(avatarImage), 535, 25, 40, 40);

//writing bar
stroke(201, 201, 201);
rect(53, 406, 497, 50, 19);

//write here!
var chattext = "你好";
var chattextX = 67;

//showchattext
fill(0, 0, 0); 
textSize(19);
text(chattext, chattextX, 443);

//send button
noStroke();
fill(0, 102, 255);
rect(120, 352, 349, 39, 200);
fill(255, 255, 255);
text("Send Message", 218, 377);

//sending!
if(mouseIsPressed && mouseX > 120 && mouseY > 352 && mouseX < 469 && mouseY < 391){
    fill(255, 255, 255);
    rect(200, 200, 200, 200);
}

