const PLAYER_CHOICE_FIELD = document.querySelector('.player-choice');
const COMPUTER_CHOICE_FIELD = document.querySelector('.computer-choice');

const CHOICE = document.querySelectorAll('.choice');

const WIN_SCORE = document.querySelector('.win-score');
const LOSS_SCORE = document.querySelector('.loss-score');
const TIE_SCORE = document.querySelector('.tie-score');
const RESET_SCORE_BUTTON  = document.querySelector('.reset-score')

const ROCK_IMAGE_UNICODE = '&#9994;';
const PAPER_IMAGE_UNICODE = '&#129306;';
const SCISSORS_IMAGE_UNICODE = '&#9996;';


const NUMBER_OF_HANDS = 3;
const PLAYER_ONE = 1;
const PLAYER_TWO = 2;
const TIE = 0;

let playerHand = '';
let computerHand = '';
let winner = 0;

let wins = 0;
let losses = 0;
let ties = 0;


CHOICE.forEach(element => {
    element.addEventListener('click', () => {

        playerHand = element.dataset.choice;

        removeBlinkers()
        initializeHands();

        displayHand(PLAYER_CHOICE_FIELD, playerHand);
        displayHand(COMPUTER_CHOICE_FIELD, computerHand);
        
        determineWinner();
        animateResult();
    });
});

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function getComputerHandInt(handsAvailable) {
    return getRandomIntInclusive(1, NUMBER_OF_HANDS);
}

function assignIntToHandType(intValue) {
    switch (intValue) {
        case 1: 
            return 'rock';
            break;
        case 2: 
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
        case intValue > NUMBER_OF_HANDS:
            return 'ERROR_EXCEEDED_HAND_VALUE';
            break;
    }
}

function getComputerHandString() {
    let handInt = getComputerHandInt(NUMBER_OF_HANDS);
    return assignIntToHandType(handInt);
}

function removeBlinkers() {
    PLAYER_CHOICE_FIELD.classList.remove('player-win');
    PLAYER_CHOICE_FIELD.classList.remove('player-loss');
} 

function initializeHands(e) {
    computerHand = getComputerHandString();
}

function displayHand(player, handType) {
    console.log("in displayhand");
    console.log(player);
    switch (handType) {
        case 'rock':
            player.innerHTML = ROCK_IMAGE_UNICODE;
            return;
            break;
        case 'paper':
            player.innerHTML = PAPER_IMAGE_UNICODE;
            return;
            break;
        case 'scissors':
            player.innerHTML = SCISSORS_IMAGE_UNICODE;
            return;
            break;
    }
}

function determineWinner() {
    if (playerHand === computerHand) {
        winner = TIE;
        setWinner(TIE);
    } else if (playerHand === 'rock') {
        if (computerHand === 'paper') {
            setWinner(PLAYER_TWO);
        } else {
            setWinner(PLAYER_ONE);
        }
    } else if (playerHand === 'paper') {
        if (computerHand === 'scissors') {
            setWinner(PLAYER_TWO);
        } else {
            setWinner(PLAYER_ONE);
        }
    } else if (playerHand === 'scissors') {
        if (computerHand === 'rock') {
            setWinner(PLAYER_TWO);
        } else {
            setWinner(PLAYER_ONE);
        }
    }
}

function animateResult() {
    console.log("in animateResult");
    console.log(winner);
    if (winner === PLAYER_ONE) {
        console.log('player wins')
        PLAYER_CHOICE_FIELD.classList.add('player-win');
    } else if (winner === PLAYER_TWO) {
        console.log('player loses')
        PLAYER_CHOICE_FIELD.classList.add('player-loss');
    } else {
        console.log('tie');
    }
}

function setWinner(newWinner) {
    winner = newWinner;
    incrementScore(newWinner);
}

function incrementScore(newWinner) {
    if (newWinner === PLAYER_ONE) {
        wins += 1;
        WIN_SCORE.innerHTML = wins;
    } else if (newWinner === PLAYER_TWO) {
        losses += 1;
        LOSS_SCORE.innerHTML = losses;
    } else if (newWinner === TIE) {
        ties += 1;
        TIE_SCORE.innerHTML = ties;
        console.log(ties);
    }
}