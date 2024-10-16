// select box and reset button
let boxes = document.querySelectorAll(".box");

let reset = document.querySelector(".reset");

let h3=document.querySelector("h3");

//x or o turn variable 
turnO=true;

// counter variable for clicks
let count=0; 

let winner=false;

// winning patterns
let patterns=[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]];

// add click event for box
for(box of boxes){
    box.addEventListener("click",function(){
        
        if(turnO){
            this.innerText="O";
            turnO=false;
            this.disabled=true;
            count++;
        } else{
            this.innerText="X";
            turnO=true;
            this.disabled=true;
            count++;
        }
    // console.log(count);
// checking winner
        checkWinner();
    });
};

function checkWinner(){
for(pattern of patterns){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
  
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            h3.innerHTML=`Winner is player ${pos1}`;
            winner=true;
            blocking();
        }
    }

   
}
// draw condition
if(count==9 && winner==false){
    h3.innerHTML=`No winner please reset the game`;
}
}
// blockin the entire boxes after winning
 blocking=()=>{
   for(box of boxes){
    box.disabled=true;
   }
}

//reseting the game 
reset.addEventListener("click",function(){
reseting();
});

function reseting(){
    count=0;
    turnO=true;
    for(box of boxes){
        box.innerText="";
        box.disabled=false;
    }
}




