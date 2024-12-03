# rock-paper-scissors

This project is a simple game of Rock-Paper-Scissors played via browser prompts and alerts.
I have not (yet) made a UI for this project because the aim was to focus on creating the 
javascript logic for it.

<br>

A breakdown of the code in this project:

1. The html file is a blank one. Initially I had placed the script tags in the head. I soon realized the problem with it
because the browser prompt that starts the game was not being triggered automatically when the page was being opened or refreshed.
To rectify this, I moved the script tags to the body of the html file and added an additional script tag with an eventListener that waited for the 
DOM content to be loaded and then called playGame() which is the main function that runs the game. This made the game start everytime the page was loaded or refreshed.

2. The javascript file has a main function called playGame() that holds all the other functions making up the game.
<br>
Two variables - compScore and humanScore - are initialized to keep track of the scores.
<br>
Input from the user is taken through the function called getHumanChoice(). When called, a prompt appears, asking for the user's input.
Care is taken to handle variations in the capitalization of the inputs.
<br>
A randomized move or choice from the computer is acquired by using Math.random() within the function called getComputerChoice().
Since by default, the Math.random method chooses any value between 0 and 1, we assign different values to three different ranges between 0 and 1.
The function thus returns Rock, Paper or Scissors randomly.
<br>
The logic for each round is handled by playRound(), which in increments humanScore by 1 if the human wins the round, or increments compScore by 1 if the 
computer wins the round. At the end of each round, an alert box informs the user about who wins and how. This function returns an object containing
the resultant humanScore and compScore at the end of a particular round.
<br>
Finally, all these functions are connected together in the main logic of their parent function - playGame().
The game has five rounds. In the event of a tie in a particular round, that round is not counted and the user is then prompted to make another choice to break the tie.
A loop runs five times, representing five rounds. In each round, the results of getHumanChoice() and getComputerChoice() are stored in two different variables that act as
parameters for playRound(). The result of playRound() is stored in a different variable representing the result of each round.
Since the return value of playRound() is an object containing the humanScore and compScore for a particular round, we can easily access these two values, compare them and
declare the winner for that round.
<br>
As the rounds progress, the scores are recorded by humanScore and compScore. At the end of five rounds, the cumulative scores held by the two variables are compared to decide
the winner of the whole game.

<br>

The major challenge I faced while making this was making sure that everything was within appropriate scope. I ran into a lot of frustrating and silly errors in the 
process but they played a major role in improving my understanding of scope.
In all this was a fun project that added to my knowledge.
Thanks to anyone going through this!