// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$( "document" ).ready(function() {
    $("#shoot").click(function() {
        let yourChoice = $("#input").val();
        let choices = ["Rock", "Paper", "Scissors"];

        let upperYourCh = yourChoice.toUpperCase();

        let compChoice = Math.random();
        let number = compChoice * 3;
        let newNumber = Math.floor(number);
        let computerChoice = choices[newNumber];

        let capComputerCh = computerChoice.toUpperCase();

        if (upperYourCh === "ROCK" && newNumber === 1) {
            $("#result").text("Computer wins!");
        }
        else if (upperYourCh === "PAPER" && newNumber === 2) {
            $("#result").text("Computer wins!");
        }
        else if (upperYourCh === "SCISSOR" && newNumber === 0) {
            $("#result").text("Computer wins!");
        }
        else if (upperYourCh === capComputerCh) {
            $("#result").text("You tied!");
        }
        else if (upperYourCh === "PAPER" && newNumber === 0) {
            $("#result").text("You win!");
        }
        else if (upperYourCh === "SCISSOR" && newNumber === 1) {
            $("#result").text("You win!");
        }
        else if (upperYourCh === "ROCK" && newNumber === 2) {
            $("#result").text("You win!");
        }
       else {
            $("#result").text("Please shoot either Rock, Paper, or Scissor!");
        }

        let yourChLowerCase = yourChoice.toLowerCase();
        let firstLetterYourCh = yourChLowerCase[0].toUpperCase();
        let restOfYourCh = yourChLowerCase.substr(1);

        $("#userChoice").text(firstLetterYourCh + restOfYourCh);
        $("#computerChoice").text(computerChoice);
        $("#input").val("");
    });
});


// DOCUMENT READY FUNCTION BELOW
