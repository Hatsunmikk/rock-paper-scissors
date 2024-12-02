
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