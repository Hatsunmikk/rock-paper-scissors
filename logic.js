
//Main function to play the game
function playGame(){

    //Variables to keep track of the scores
     let compScore = 0;
     let humanScore = 0;

     
    //Function to get a choice from the human
    function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?");

    if(humanChoice === null){              //when user cancels or closes the prompt
        alert("You cancelled the game.");
        return null;
    };

    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"){
        alert(`You chose ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`);
        return humanChoice;
        
       
    } else {
        alert("Please choose Rock, Paper or Scissors!");
        return getHumanChoice(); 
        
    }
    
    
};

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

    alert(`The computer chose ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.`);

    return computerChoice;
   
   
    
};




//Function for each round
function playRound (humanChoice, computerChoice){

   
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
         return null;
    }

    return {humanScore, compScore};
       
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










