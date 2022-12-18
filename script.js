const choices=['rock','paper','scissors'];

let userChoice='';
let computerChoice=choices[Math.floor(Math.random() * 3)];

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
