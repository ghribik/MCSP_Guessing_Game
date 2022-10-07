var userName = null; //Begin global variable list
var num = null;
var count = 0;
var end = false;
var guesses = [];
var scores = {};
var randomNumber = randomInt(1, 100);

function randomInt(min, max) { //Generate random integer between min and max *inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function play(){
    userName === null ? getUserName() :
    guess = prompt('Are you feeling lucky?', 'Guess a number between 1 and 100');
    num = parseInt(guess);
    
    if(num === randomNumber && end === true){ //Ends the game if user selected quit
        return
    }else if(num === randomNumber && count === 0){ //Correct on first try
        alert(`Amazing! ${userName}, you got it on the first try!`);
        storedScores();
    }else if(num === randomNumber){ //Correct on subsequent tries
        let text = guesses.join(', ');
        alert(`That's correct ${userName}! Your previous guesses were: ${text}!`);
        storedScores();
    }else if(num < randomNumber){ //User guess is too low
        alert(`Sorry ${userName}, guess higher`)
        guesses[count] = num;
        count++;
        playAgain();
    }else if(num > randomNumber){ //User guess is too high
        alert(`Sorry ${userName}, guess lower`)
        guesses[count] = num;
        count++;
        playAgain();
    }else{
        return 
    }
}

function getUserName(){ //Function to capture a user name
        userName = prompt('What are you called?', 'Enter Your Name Here');
        playAgain();
}

function storedScores(){
    if(count < scores[userName]){ //New high score condition
        alert(`${userName}, you beat your previous score by ${scores[userName] - count} attempts!`);
        scores[userName] = count;
        playAgainPrompt();
    }else if(scores[userName] === undefined){ //First time playing condition
        scores[userName] = count;
        playAgainPrompt();
    }else{ //Current score was not better than best score condition
        alert(`${userName}, you scored ${count}. Your current best score is ${scores[userName]}!`);
        playAgainPrompt();
    }
}

function playAgainPrompt(){ 
    replayPrompt = prompt(`${userName}, would you like to play again?`, `Options: yes, no, or close`);
    if(replayPrompt.toLowerCase() === "yes"){ //User wants to play again condition
        resetVariables();
        playAgain();
    } else if(replayPrompt.toLowerCase() === "no"){ //Different user wants to play
        alert(`Thanks for playing, ${userName}! Preparing for next user...`);
        userName = null;
        resetVariables();
        playAgain();
    }else{ //No user wants to play
        alert('Game is now closing');
        end = true;
    }
}

function resetVariables(){ //Wipe global variables for new game
    count = 0;
    guesses = [];
    randomNumber = randomInt(1, 100);
}

function playAgain(){ //Loop for game function, play(), again
    play();
    return
}

play(); // This is your main function that runs when the page loads