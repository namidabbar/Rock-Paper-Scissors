// computer choses rock paper or scissors

var options=['rock', 'paper', 'scissors'] 

let points=[];

   //function to play first round 
function playRound(){


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

    if (playerSelection == computerSelection){

        console.log("it's a tie")
        return points=0;
    }
   else if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('You lose! ' +computerSelection +" beats " +playerSelection +"!");
        return points=0;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('You won! ' +playerSelection +" beats " +computerSelection +"!");
        return points=1;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('You lose! ' +computerSelection +" beats " +playerSelection +"!");
        return points=0;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('You won! ' +playerSelection +" beats " +computerSelection +"!");
        return points=1;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log('You lose! ' +computerSelection +" beats " +playerSelection +"!");
        return points=0;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log('You won! ' +playerSelection +" beats " +computerSelection +"!");
        return points=1;
    }


}

function game(){
    for(let i=0; i<5; i++){
        playRound();
        console.log(points)
        
    }


}