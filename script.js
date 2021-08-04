let r=document.getElementById('im1');
let p=document.getElementById('im2');
let s=document.getElementById('im3');
let res=document.getElementById('result')
let usc=document.getElementById('user-score');
let coc=document.getElementById('comp-score');
let userScore=0;
let compScore=0;
let userChoice;
let compChoice;

function uc(userChoice) {
    return userChoice;
}
function cc() {
    let x=Math.floor(Math.random()*3);
     if (x==0) {
         userChoice='ROCK';
     }
     else if (x==1) {
         userChoice='PAPER';
     }
     else{
         userChoice='SCISSORS';
     }
     return userChoice;
 }

r.addEventListener('click', ()=>{
    compChoice=cc();
    userChoice= uc('ROCK');
    console.log(userChoice);
    console.log(compChoice);
    result();
})
p.addEventListener('click', ()=>{
    compChoice=cc();
    userChoice= uc('PAPER');
    console.log(userChoice);
    console.log(compChoice);
    result();
})
s.addEventListener('click', ()=>{
    compChoice=cc();
    userChoice= uc('SCISSORS');
    console.log(userChoice);
    console.log(compChoice);
    result();
})
    
function result() {
    switch (userChoice + compChoice) {
        case 'ROCKSCISSORS':
        case 'PAPERROCK':
        case 'SCISSORSPAPER':
            res.innerHTML=`${userChoice}(user) beats ${compChoice}(comp) .You win!!`;
            userScore++;
            usc.innerHTML=userScore;
            console.log("you win");
            break;
        case 'SCISSORSSCISSORS':
        case 'ROCKROCK':
        case 'PAPERPAPER':
            res.innerHTML="It's a draw"
            console.log("draw");
            break;
        case 'SCISSORSROCK':
        case 'ROCKPAPER':
        case 'PAPERSCISSORS':
            res.innerHTML=`${compChoice}(comp) beats ${userChoice}(user) .You lose `;
            compScore++;
            coc.innerHTML=compScore;
            console.log("you lose");
            break;
    
        default:
            break;
    }
}