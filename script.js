const choices=['rock','paper','scissors'];

let userChoice='';
let computerChoice=choices[Math.floor(Math.random() * 3)];


let root=document.getElementById("root");
let buttons=document.getElementById("buttons");
let startDiv=document.getElementById("startItems")
root.style.display = "none";
buttons.style.display = "none";
function startGame() {
    root.style.display = "block";
    buttons.style.display = "flex";
    startItems.style.display="none";
    logoMove();
}

function logoMove(){
    let result=document.getElementById('result');
    let logos=["🪨","📃","✂️"];
    setInterval(()=>{
            result.textContent=logos[Math.floor(Math.random() * 3)];
     
   },500)
}
let rockButton=document.getElementById("rock");
rockButton.addEventListener("click",()=>{
    computerChoice=choices[Math.floor(Math.random() * 3)];
    userChoice=choices[0];
    let result=document.getElementById('result');

    if((computerChoice=='rock' && userChoice=='paper') || (computerChoice=='scissors' && userChoice=='rock') || (computerChoice=='paper' && userChoice=='scissors')){
        result.textContent=`You WON!! Compter choose ${computerChoice} and you choose ${userChoice}`;
       
    }else if((computerChoice=='paper' && userChoice=='rock') || (computerChoice=='rock' && userChoice=='scissors') || (computerChoice=='scissors' && userChoice=='paper')){
        result.textContent=`You LOST!! Compter choose ${computerChoice} and you choose ${userChoice}`;
       
    }else{
        result.textContent=`Draw!! Compter choose ${computerChoice} and you choose ${userChoice}`;
       
    }
})
function userChoose(i){
    computerChoice=choices[Math.floor(Math.random() * 3)];
    userChoice=choices[i];
    let result=document.getElementById('result');

    if((computerChoice=='rock' && userChoice=='paper') || (computerChoice=='scissors' && userChoice=='rock') || (computerChoice=='paper' && userChoice=='scissors')){
        result.textContent=`You WON!! Compter choose ${computerChoice} and you choose ${userChoice}`;
       
    }else if((computerChoice=='paper' && userChoice=='rock') || (computerChoice=='rock' && userChoice=='scissors') || (computerChoice=='scissors' && userChoice=='paper')){
        result.textContent=`You LOST!! Compter choose ${computerChoice} and you choose ${userChoice}`;
       
    }else{
        result.textContent=`Draw!! Compter choose ${computerChoice} and you choose ${userChoice}`;
       
    }
}
