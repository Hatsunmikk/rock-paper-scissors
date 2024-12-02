
//Main function to play the game
//Function to get a random choice from the computer
function getComputerChoice(){
    let computerChoice = Math.random();
    
    if(computerChoice < 0.37){
        computerChoice = "Rock";
    } else if (computerChoice <= 0.67){
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return computerChoice;
};

//Function to get a choice from the human
function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?");

    if(humanChoice === "Rock"){
        alert("You chose Rock.")
    } else if (humanChoice === "Paper"){
        alert("You chose Paper.")
    } else if (humanChoice === "Scissors"){
        alert("You chose Scissors.")
    } else {
        alert("Please choose Rock, Paper or Scissors!");
        getHumanChoice();  //Using recursion to guide the user back to the initial prompt if they enter an invalid choice
    }

    
};

//Variables to keep track of the scores
let compScore = 0;
let humanScore = 0;

//Function for each round
function playRound (humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    //cases where the human wins
    if(humanChoice === "rock" && computerChoice === "scissors"){
        alert("You win! Rock beats Scissors.");
        humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        alert("You win! Scissors beat Paper.");
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        alert("You win! Paper beats Rock.");
        humanScore += 1;

    } else if(computerChoice === "rock" && humanChoice === "scissors"){     //cases where the computer wins
        alert("Computer wins! Rock beats Scissors.");
        compScore += 1;
    } else if(computerChoice === "scissors" && humanChoice === "paper"){    
        alert("Computer wins! Scissors beat Paper.");
        compScore += 1;
    } else if(computerChoice === "paper" && humanChoice === "rock"){    
        alert("Computer wins! Paper beats Rock.");
        compScore += 1;
    } else if(humanChoice === computerChoice){   //cases of tie
        alert("It's a tie! Break it by choosing again.");
        getHumanChoice();  //if there is a tie, break it by getting a new choice from the human, which starts a fresh round
    }
       
}

//Variables that will act as parameters for playRound()
const humanSelection = getHumanChoice();
const compSelection = getComputerChoice();

playRound(humanSelection, compSelection);