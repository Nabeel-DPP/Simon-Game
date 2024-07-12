//This array is used to store the sequence of colors in the game
let gameseq=[];
//This array is used to store the sequence of colors entereed by the user in the game
let userseq=[];
//This is the Boolean Variable which indicates the starting of the game
let started=false;
//The Value of level will be incremented when the user sequence is matched with the game sequence
let level=0;



let btns=["red","blue","green","yellow"];

let h2=document.querySelector("h2");
let redBtn=document.querySelector(".red");
let blueBtn=document.querySelector(".blue");
let greenBtn=document.querySelector(".green");
let yellowBtn=document.querySelector(".yellow");


document.addEventListener("keypress", ()=>{
    if(started==false)
    {
        console.log("The Game is Started!");
        started=true;
        levelUp();

    }
}
);

function levelUp()
{ 
  
  
  userseq=[];
  level++;
  h2.innerText=`Level ${level}`;

let randIdx=Math.floor(Math.random() * 4);

let randColor=btns[randIdx];



let randBtn= document.querySelector(`.${randColor}`);

  gameseq.push(randColor);
  console.log(gameseq);
console.log(randIdx);
console.log(randColor);
 console.log(randBtn);

gameFlash(randBtn);

}



// function gameFlash(randBtn)
// {
//   if(randBtn==redBtn)
//   randBtn.classList.add("flash");
//   setTimeout(function ()
//   {
//     randBtn.classList.remove("flash");
//   },250);
 

// }





// function userFlash(randBtn)
// {
//   randBtn.classList.add("userflash");
//   setTimeout(function ()
//   {
//     randBtn.classList.remove("userflash");
//   },250);
 

// }






function gameFlash(randBtn)
{
  if(randBtn===redBtn)
   {
    randBtn.classList.add("redFlash");
    setTimeout(function ()
    {
      randBtn.classList.remove("redFlash");
    },250);
   
  
  }
  if(randBtn===blueBtn)
   {
    randBtn.classList.add("blueFlash");
    setTimeout(function ()
    {
      randBtn.classList.remove("blueFlash");
    },250);
   
  
  }
  if(randBtn===greenBtn)
   {
    randBtn.classList.add("greenFlash");
    setTimeout(function ()
    {
      randBtn.classList.remove("greenFlash");
    },250);
   
  
  }
  if(randBtn===yellowBtn)
   {
    randBtn.classList.add("yellowFlash");
    setTimeout(function ()
    {
      randBtn.classList.remove("yellowFlash");
    },250);
   
  
  }
  
}






function userFlash(randBtn)
{
  if(randBtn===redBtn)
   {
    randBtn.classList.add("redFlash");
    setTimeout(function ()
    {
      randBtn.classList.remove("redFlash");
    },250);
   
  
  }
  if(randBtn===blueBtn)
   {
    randBtn.classList.add("blueFlash");
    setTimeout(function ()
    {
      randBtn.classList.remove("blueFlash");
    },250);
   
  
  }
  if(randBtn===greenBtn)
   {
    randBtn.classList.add("greenFlash");
    setTimeout(function ()
    {
      randBtn.classList.remove("greenFlash");
    },250);
   
  
  }
  if(randBtn===yellowBtn)
   {
    randBtn.classList.add("yellowFlash");
    setTimeout(function ()
    {
      randBtn.classList.remove("yellowFlash");
    },250);
   
  
  }
  
}




function checkAns(idx)
{
  console.log("The Current Level of Game is : ",level);
  // let idx=level-1;
  
  if(gameseq[idx]==userseq[idx])
  {
    if(gameseq.length==userseq.length)
    {
      console.log("sequence is matched !");
    setTimeout(levelUp,1000);
    }
    
  }else
  {
    h2.innerHTML=`Oho! Game Over Your Score :<b> ${level} </b>  <br> Press Any Key to Start Again!`;
    document.querySelector("body").style.backgroundColor='red';
    setTimeout(function ()
    {
      document.querySelector("body").style.backgroundColor='white';
    } ,150)
    reset();
  }
}

function btnPress()
{
  console.log("The Button is Clicked!");
  let btn=this;
  userFlash(btn);
  console.log(btn);

  let userColor=btn.getAttribute("id");
  console.log(userColor);
  userseq.push(userColor);
  checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");

for (let btn of allBtns)
{
  btn.addEventListener("click",btnPress);
  
}

function reset()
{
  started=false;
  gameseq=[];
  userseq=[];
  level=0;
}