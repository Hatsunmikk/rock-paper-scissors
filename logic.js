
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

rockBtn.addEventListener('click', function(){
    playRound('rock');
});

paperBtn.addEventListener('click', function(){
    playRound('paper');
} );

scissorsBtn.addEventListener('click', function(){
    playRound('scissors');
});


     
    
    


    //Function to get a random choice from the computer
      function getComputerChoice(){
    let computerChoice = Math.random();
    
    if(computerChoice < 0.37){
        return "rock";
    } else if (computerChoice <= 0.67){
        return "paper";
    } else {
        return "scissors";
    };
   
   
    
};




//Function for each round
function playRound (humanChoice){

    const computerChoice = getComputerChoice();

    let roundResult = "";

   
    //cases where the human wins
    if(humanChoice === "rock" && computerChoice === "scissors"){
        roundResult = "You win! Rock beats Scissors.";
        humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        roundResult = "You win! Scissors beat Paper.";
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        roundResult = "You win! Paper beats Rock.";
        humanScore += 1;

    } else if(computerChoice === "rock" && humanChoice === "scissors"){     //cases where the computer wins
        roundResult = "Computer wins! Rock beats Scissors.";
        compScore += 1;
    } else if(computerChoice === "scissors" && humanChoice === "paper"){    
        roundResult = "Computer wins! Scissors beat Paper.";
        compScore += 1;
    } else if(computerChoice === "paper" && humanChoice === "rock"){    
        roundResult = "Computer wins! Paper beats Rock.";
        compScore += 1;
    } else if(humanChoice === computerChoice){   //cases of tie
        roundResult = "It's a tie! Break it by choosing again.";
         displayResult(roundResult, humanScore, compScore);
         return;
    }

    //Show result and score:
    result.textContent = result;
    scores.textContent = `Human: ${humanScore}  |  Computer: ${compScore}`;

    //Checking for and deciding the winner:
    if(humanScore === 5){
        result.textContent = `You win! \n Human: 5  |  Computer: ${compScore} `;
        reset();
    } else if (compScore === 5){
        result.textContent = `Computer wins! \n Human: ${humanScore}  |  Computer: 5 `;
        reset();
    }
       
};

function displayResult(roundResult, humanScore, compScore){
    result.textContent = roundResult;
    scores.textContent = `Human: ${humanScore}  |  Computer: ${compScore}`;

};

//To disable buttons after the game is over:
function disableButtons(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;


};

//Reset Game:
function reset(){
    setTimeout(() => {
        humanScore = 0;
        compScore = 0;
        scores.textContent = "Human: 0  |  Computer: 0";
        result.textContent = "New game started. Have another go at it!";
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;


    
    }, 2000); //a delay of 2 seconds before resetting
}







};

playGame();











