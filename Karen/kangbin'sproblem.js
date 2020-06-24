   
   /*
   here is the problem when i click it it is suposed to change scenes but when i do click it the scene does not change i dont know why plz help me figur why its doing this!
   */
   
   
   
   
   
    draw = function() {
        var scene;
    
    var scene1 = function(){
        var scene = 1;
    background(255, 0, 0);
    
    textSize(20);
    fill(0, 34, 255);
    text("click",200,200);
    
    };
    
    var scene2 = function(){
        var scene = 2;
    background(255, 0, 0);
    noStroke();
    fill(184, 121, 184);
    if(mouseIsPressed){ ellipse(mouseX,mouseY,20,20); }
    
    };
    
    mouseClicked = function(){
    
    if(scene === 1){ scene2(); }
    else if(scene === 2 ){ scene1(); }
    
    };
    
    scene1();
    
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

