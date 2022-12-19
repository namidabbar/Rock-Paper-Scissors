// computer choses rock paper or scissors

var options=['rock', 'paper', 'scissors'] 

const pointsPlayer=[];
const pointsComputer=[];

let playerSelection=document.getElementById('rock').addEventListener("click", () => { playRound('rock'); });

 playerSelection=document.getElementById('paper').addEventListener("click", () => { playRound('paper'); });

 playerSelection=document.getElementById('scissors').addEventListener("click", () => { playRound('scissors'); });


 const results = document.querySelector('#results');

   //function to play first round 
function playRound(playerSelection){


    function getComputerChoice(){
        const computerChoice= Math.floor(Math.random()*3)
        return (options[computerChoice]);
      }
      
      let computerSelection = getComputerChoice();
      console.log(computerSelection); //this printed computer's selection but could be used to cheat hence commented out.
      
      //player needs to select his choice, but we will use buttons now
      
      //let playerSelection= prompt('Please select rock, paper or scissors:').toLowerCase();
         //to make it non-case-sensitive
      
          console.log(playerSelection);

    if (playerSelection == computerSelection){

        console.log("it's a tie");
        document.
        return;

    }
   else if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('You lose! ' +computerSelection +" beats " +playerSelection +"!");
        
        return pointsComputer.push(1);
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('You won! ' +playerSelection +" beats " +computerSelection +"!");
        return pointsPlayer.push(1);
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('You lose! ' +computerSelection +" beats " +playerSelection +"!");
        return pointsComputer.push(1);
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('You won! ' +playerSelection +" beats " +computerSelection +"!");
        return pointsPlayer.push(1);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log('You lose! ' +computerSelection +" beats " +playerSelection +"!");
        return pointsComputer.push(1);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log('You won! ' +playerSelection +" beats " +computerSelection +"!");
        return pointsPlayer.push(1);
    }


}
//The following game code will not be used for the UI game, only for the game on the console
/*
function game(){
    for(let i=0; i<5; i++){
        playRound();
        console.log(points)
        
    }
let score = points[0]+points[1]+points[2]+points[3]+points[4];
if (score>=3){
    console.log('Well done, you won! Your score is ' + score);
}
else {
console.log("Oops! The Computer won! Your score was "+score);
}}*/
