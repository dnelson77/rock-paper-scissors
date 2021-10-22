// Rock Paper Scissors Game

// User Inputs Rock, paper, or scissors

function userPick() {
    let pick = window.prompt("Choose rock, paper, or scissors!");
    pick = pick.toLowerCase();
    if (pick !="scissors" && pick !="rock" && pick!="paper") {
        alert("Invalid input! Please choose rock, paper, or scissors.");
        userPick();
    } 
    return pick;
}

// Computer randomly selects rock paper or scissors

function computerPlay() {
    pick = Math.floor(Math.random()*3)+1;
    console.log(pick)
    if (pick === 1) {
        return "rock"
    } else if (pick === 2) {
        return "paper"
    } else if (pick === 3) {
        return "scissors"
    }
}
// compare user input to computer selection
function game() {
    round = 0;
    compScore = 0;
    userScore = 0;
    draw = 0
    for (let round = 0; round < 5; round++) {
        let playerSelection = userPick();
        let computerSelection = computerPlay();
        alert(playRound(playerSelection, computerSelection),`Score: \nYou - ${userScore} \nComputer - ${compScore} \nDraw - ${draw}`)
    }
    if (userScore > compScore) {
        alert(`You win best of 5! \nFinal Score: \nYou - ${userScore} \nComputer - ${compScore} \nDraw - ${draw}`)
    } else if (userScore === compScore) {
        alert(`You tied. \nFinal Score: \nYou - ${userScore} \nComputer - ${compScore} \nDraw - ${draw}`)
    } else if (compScore > userScore) {
        alert(`You lose!!!! \nFinal Score: \nYou - ${userScore} \nComputer - ${compScore} \nDraw - ${draw}`)
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection,computerSelection)
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            draw++;
            return "Draw! Rock bumps rock. It's not very effective.";
        } else if (computerSelection === "paper") {
            compScore++;
            return "You lose! Paper covers rock.";
        } else if (computerSelection === "scissors") {
            userScore++;
            return "You win! Rock smashes scissors!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper suffocates rock.";
        } else if (computerSelection === "paper") {
            return "Draw! Paper lays upon paper.";
        } else if (computerSelection === "scissors") {
            return "You lose!! Scissors cut paper.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "you lose! Rock smashes scissors!";
        } else if (computerSelection === "paper") {
            return "You win! Scissors cut paper.";
        } else if (computerSelection === "scissors") {
            return "Draw! Scissors scissor each other. Maybe thats a win?!";
        }
    }
}

game();