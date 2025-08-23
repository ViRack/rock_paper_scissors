const PLAYER_CHOICE_FIELD = document.querySelector('.player-choice');
const COMPUTER_CHOICE_FIELD = document.querySelector('.computer-schoice');

const CHOICE = document.querySelectorAll('.choice');

const WIN_SCORE = document.querySelector('.win-score');
const LOSS_SCORE = document.querySelector('.loss-score');
const TIE_SCORE = document.querySelector('tie-score');
const RESET_SCORE_BUTTON  = document.querySelector('reset-score')

const NUMBER_OF_HANDS = 3;

choice.forEach(element => {
    element.addEventListener('click', () => {

        console.log (element.dataset.choice);

    });
});

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function getComputerHandInt(handsAvailable) {
    getRandomIntInclusive(1, NUMBER_OF_HANDS);
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

