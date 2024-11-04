let favNumber = 12;

let guess;
while (guess !== favNumber) {
    guess = parseInt(prompt("Guess my favorite number from 0-15."));

    if (guess < favNumber) {
        alert("Too low, try again!");
    } else if (guess > favNumber){
        alert("Too high, try again!")
    } else {
        console.log("Correct, you guessed my favorite number!");
        break;
    }
}