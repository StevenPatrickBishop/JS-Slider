var leftArrow = document.querySelector("#left-arrow");
var rightArrow = document.querySelector("#right-arrow");
var menuBlock = document.querySelectorAll(".menu");

var menuCount = menuBlock.length;
var maxMoves = menuCount -1;
var multiplier = 800;
var postion = 0;


leftArrow.addEventListener("click",moveLeft);
rightArrow.addEventListener("click",moveRight);



function moveRight(){
    
    --postion
    if(postion < (maxMoves*-1)){
        ++postion
    } 
    var value = "translateY(" + postion * ( multiplier) + "px)";
    
        
    for (i = 0; i < menuCount; i++){
            menuBlock[i].style.transform = value;
        }

   console.log(maxMoves*-1);
   console.log(value);
   console.log(postion);
}



function moveLeft(){
    
    ++postion

    if(multiplier*postion > 0){
        --postion
    } 
    var value = "translateY(" + postion * ( multiplier) + "px)";
    
        
    for (i = 0; i < menuCount; i++){
            menuBlock[i].style.transform = value;
        }

   console.log("position: " + postion);
   console.log("max moves: " +maxMoves);
   console.log("Value: "+ value);
   
}
