// Create an Array of at least 3 losing messages
let losingMessage = ["Maybe next time!", "Try again!", "You lose, try again?"];
console.log(losingMessage);

// Create variables to count wins and losses
let winScore = 0;
let loseScore = 0;
console.log("Wins:", winScore);
console.log("Losses:", loseScore);

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
let message = document.getElementById("message");
let wins = document.getElementById("wins");
let losses = document.getElementById("losses");
console.log(message);
console.log(wins);
console.log(losses);

// target all .box elements and attach a click event listener to each one using a loop
var box = document.querySelectorAll('.box');
for (var i = 0; i <box.length; i++) {
    box[i].onclick = clickedBox
}

// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable
function clickedBox(event) {
    clickedBox.textContent = event.target.textContent;
    var numberBoxClicked = Number(event.target.textContent);
    console.log(event.target)


// create a random number between 1-3 and store it to a variable
// This number will represent the winning box
    var randomNumberWinningBox = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumberWinningBox);

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins

    if(numberBoxClicked === randomNumberWinningBox) {
        console.log("Winner!");
        message.textContent = "Winner";
        winScore += 1;
        wins.textContent = "Wins:" + winScore;
        console.log("Wins:", winScore);

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses

    } else {
        console.log(youLostMessage);
    message.textContent = youLostMessage[Math.floor(Math.random() *3)];
    loseScore +=1;
    losses.textContent = "Losses:" + loseScore;
    console.log("Losses:", loseScore);
    }
}