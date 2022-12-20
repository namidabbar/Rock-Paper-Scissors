// computer choses rock paper or scissors

var options=['rock', 'paper', 'scissors'] 

const pointsPlayer=[];
const pointsComputer=[];

let playerSelection=document.getElementById('rock').addEventListener("click", () => { playRound('rock'); });

 playerSelection=document.getElementById('paper').addEventListener("click", () => { playRound('paper'); });

 playerSelection=document.getElementById('scissors').addEventListener("click", () => { playRound('scissors'); });


 const results = document.getElementById('results');
 const computerRunningScore=document.getElementById('computerRunningScore');
 const playerRunningScore=document.getElementById('playerRunningScore');

//function to play a round 
function playRound(playerSelection){

    // computer choses rock paper or scissors
    function getComputerChoice(){
        const computerChoice= Math.floor(Math.random()*3)
        return (options[computerChoice]);
    }
      
    let computerSelection = getComputerChoice();

    if (playerSelection == computerSelection){
        results.textContent="It's a tie, try again!"
        return;
    }
   else if (playerSelection === 'rock' && computerSelection === 'paper'){
        pointsComputer.push(1);
        results.textContent="You lose, " +computerSelection +" beats " +playerSelection +"!";
        computerRunningScore.textContent="Computer's score: "+pointsComputer.length;
    winner();
        return;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        pointsPlayer.push(1);
        results.textContent= 'You won, ' +playerSelection +" beats " +computerSelection +"!";
        playerRunningScore.textContent="Players's score: "+pointsPlayer.length;
        winner();
        return;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        pointsComputer.push(1);
        results.textContent="You lose, " +computerSelection +" beats " +playerSelection +"!";
        computerRunningScore.textContent="Computer's score: "+pointsComputer.length;
        winner();
        return;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        pointsPlayer.push(1);
        results.textContent= 'You won, ' +playerSelection +" beats " +computerSelection +"!";
        playerRunningScore.textContent="Players's score: "+pointsPlayer.length;
        winner();
        return;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        pointsComputer.push(1);
        results.textContent="You lose, " +computerSelection +" beats " +playerSelection +"!";
        computerRunningScore.textContent="Computer's score: "+pointsComputer.length;
        winner();
        return;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        pointsPlayer.push(1);
        results.textContent= 'You won, ' +playerSelection +" beats " +computerSelection +"!" ;
        playerRunningScore.textContent="Players's score: "+pointsPlayer.length;
        winner();
        return;
    }
}

function winner(){
    if (pointsComputer.length===5 || pointsPlayer.length===5){
        if(pointsComputer.length===5){
        results.textContent="Oops! The Computer won 5 rounds!";
        } 
        else if(pointsPlayer.length===5){
        results.textContent="Well done, you won 5 rounds!";
        }
    }
    else {
        return;
    }
}
