console.log('Hello! World!');

/* computer choses rock paper or scissors*/

var options=['rock', 'paper', 'scissors'] 

function getComputerChoice(){
  const computerChoice= Math.floor(Math.random()*3)
  return (options[computerChoice]);
}

let computerSelection = getComputerChoice();
console.log(computerSelection); //print computer's selection

//player needs to select his choice

let playerSelection= prompt('Please select rock, paper or scissors:').toLowerCase();
   //to make it non-case-sensitive

    console.log(playerSelection);
    
   //unction to play a round 
function playRound(playerSelection, computerSelection){

    if (playerSelection == computerSelection){

        alert("it's a tie")
    }
   else if (playerSelection === 'rock' && computerSelection === 'paper'){
        alert('You lose! ' +computerSelection +" beats " +playerSelection +"!");
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        alert('You won! ' +playerSelection +" beats " +computerSelection +"!");
    }
    


}