
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