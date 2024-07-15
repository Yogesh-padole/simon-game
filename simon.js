let gameSeq=[];
let userSeq=[];

let btns=["red","green","orange","blue"];

let started = false;
let level=0;


let h2= document.querySelector("h2");


addEventListener("keypress",function (){
    if(started==false){
        console.log("Game started");
        started=true;
        levelUp();
    }
});

function levelUp(){
    level++;

    userSeq=[];

    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
   
    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
      btn.classList.remove("flash");  
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
      btn.classList.remove("userflash");  
    },250);
}

function checkAns(idx){
  
   if(gameSeq[idx]===userSeq[idx]){
    console.log("same value");

       if(gameSeq.length==userSeq.length){
        setTimeout(levelUp,1500);
       }
   }
   else{

    h2.innerHTML=`Game over !! <br><b>Your Score = ${level} </b><br> Press any key to start`;

    document.querySelector("body").style.backgroundColor="red";

    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";  
    },200);

    reset();
 
   }
}


function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let Allbtns=document.querySelectorAll(".btn");

for(btn of Allbtns){
    btn.addEventListener("click",btnPress);
}




function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

