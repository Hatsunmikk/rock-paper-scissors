
//Main function to play the game
function playGame(){

    //Variables to keep track of the scores
     let compScore = 0;
     let humanScore = 0;

     //Get DOM elements:
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const result = document.getElementById("result");
const scores = document.getElementById("scores");

rockBtn.addEventListener('click', playRound());
paperBtn.addEventListener('click', playRound());
scissorsBtn.addEventListener('click', playRound());


     
    
    


    //Function to get a random choice from the computer
      function getComputerChoice(){
    let computerChoice = Math.random();
    
    if(computerChoice < 0.37){
        computerChoice = "rock";
    } else if (computerChoice <= 0.67){
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    };

    

    return computerChoice;
   
   
    
};




//Function for each round
function playRound (humanChoice){

    const computerChoice = getComputerChoice();

    let result = "";

   
    //cases where the human wins
    if(humanChoice === "rock" && computerChoice === "scissors"){
        result = "You win! Rock beats Scissors.";
        humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        result = "You win! Scissors beat Paper.";
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        result = "You win! Paper beats Rock.";
        humanScore += 1;

    } else if(computerChoice === "rock" && humanChoice === "scissors"){     //cases where the computer wins
        result = "Computer wins! Rock beats Scissors.";
        compScore += 1;
    } else if(computerChoice === "scissors" && humanChoice === "paper"){    
        result = "Computer wins! Scissors beat Paper.";
        compScore += 1;
    } else if(computerChoice === "paper" && humanChoice === "rock"){    
       result = "Computer wins! Paper beats Rock.";
        compScore += 1;
    } else if(humanChoice === computerChoice){   //cases of tie
        result = "It's a tie! Break it by choosing again.";
         return null;
    }

    //Show result and score:
    result.textContent = result;
    scores.textContent = `Human: ${humanScore}  |  Computer: ${compScore}`;
       
};


/*
//Main game logic:

for(let round = 0; round < 5; round++){
 
    //Variables that will act as parameters for playRound()
    const humanSelection = getHumanChoice();

    if(humanSelection === null){
        break;
    };

    const compSelection = getComputerChoice();

    const roundResult = playRound(humanSelection, compSelection);
    if(roundResult === null){
        round--;
        continue;
    }

    humanScore = roundResult.humanScore;
    compScore = roundResult.compScore;

    if(humanScore > compScore){
        alert(`You win! \n Human: ${humanScore} \n Computer: ${compScore}`);
    } else if (compScore > humanScore){
        alert(`Computer wins! \n Human: ${humanScore} \n Computer: ${compScore}`)
    };
  
};

//Deciding the winner at the end of the game and concluding with the score:

if(humanScore > compScore){
    alert(`You win the game! \n Human: ${humanScore} \n Computer: ${compScore}`);
} else if (compScore > humanScore){
    alert(`Computer wins the game! \n Human: ${humanScore} \n Computer: ${compScore}`)
};
 */




}










