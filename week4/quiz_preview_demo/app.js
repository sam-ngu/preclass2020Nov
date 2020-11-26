let timeRemaining = 75;

function startTimer() {
    setInterval(function () {
        // timeRemaining--;
        timeRemaining = timeRemaining - 1;
    }, 1000);
}
// when this start game button is clicked
// (add event listener to the start button)
// start the timer (set interval)
startTimer();

// update the dom with the first question
// and display the choices assoc with the question

// if user selected the correct ans
// load the next question + the assoc choices to the dom
// tell the user selected correct ans

// if user selected the wrong ans
// decrease the timer
// load the next question + the assoc choices to the dom
// tell the user selected wrong ans

// we also need a way to check for game over
// game over when
// 1. time becomes 0 or <0
// 2. user finished all the question

// what to do once game is finished
// 1. display result
// clear the dom
// ask for initial/username
// show the final score

// 2. prompt the user to start a new game
// store the result in local storage
