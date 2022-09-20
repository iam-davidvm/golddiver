const goldSpots = [18,83,16,88,53,88,77,13,11,63,53,26,70,60,87,15,33,6,43,95,80,48,90,25,36,8,3,54,81,25,42,91,26,37,51,52,22,24,13,45,33,75,92,9,48,87,73,94,95,28,97,75,71,76,38,29,92,2,82,57,11,35,56,68,44,46,75,59,42,65,92,79,99,99,47,90,99,17,83,88,54,73,81,24,92,57,15,22,31,46,98,21,11,54,27,51,13,83,75,12,78,5,23,83,8,38,57,89,6,92,9,48,0,2,21,88,96,73,60,19,3,33,80,84,96,26,11,0,89,46,69,2,9,81,60,7,79,99,52,92,34,40,42,75,6,88,94,48,28,65,45,15,53,77,97,47,47,81,59,63,64,5,39,44,53,59,40,73,5,21,46,38,70,5,79,12,40,82,71,12,39,83,54,34,12,68,43,52,93,11,32,83,95,33,98,37,65,97,21,49,84,88,58,84,31,78,20,68,98,1,51,85,58,66,42,80,25,21,73,3,6,72,15,92,66,70,42,90,28,85,87,94,14,56,97,25,7,14,51,97,96,30,30,54,90,52,3,28,57,25,61,30,85,85,40,32,74,66,37,8,65,22,14,31,36,82,85,5,76,31,58,68,70,70,25,62,72,59,78,55,23,36,86,84,1,28,69,66,50,65,84,89,83,30,81,11,5,83,57,34,32,10,45,81,8,79,39,94,60,29,43,28,33,27,43,34,26,53,69,45,80,44,26,66,43,68,33,61,51,12,57,72,44,30,93,19,92,82,38,48,94,19,31,86,56,19,57,81,30,47,92,70,67,34,85,66,3,72,44,93,35,95,19,31,31,66,95,61,24,77,84,61,82,17,33,59,13,75,96,99,99,35,26,77,2,75,15,52,64,86,95,81,61,12,20,96,57,40,49,1,3,50,6,27,45,33,83,66,49,7,13,86,66,59,7,54,18,37,90,4,57,21,84,66,40,90,49,24,59,6,3,79,69,79,20,43,2,82,95,86,76,57,87,28,99,25,87,77,16,61,62,21,38,4,20,20,71,89,61,21,84,93,14,83,50,97,62,14,84,12,29,87,90,85,72,97,77,39,71,33,50,67,17,79,34,35,5,75,50,11,54,65,20,24,47,54,26,2,46,50,1,17,11,33,92,51,55,31,87,14,67,42,14,39,69,97,42,72,23,91,38,59,79,25,89,44,94,35,72,9,76,51,37,59,27,23,22,20,44,75,96,8,22,62,17,12,47,6,0,68,20,93,8,27,13,20,82,54,48,73,23,92,98,51,1,38,86,49,11,67,36,67,95,96,45,70,13,85,42,48,37,50,6,2,58,89,52,47,96,7,78,34,86,7,15,52,78,11,89,88,1,51,42,6,76,30,41,21,66,51,43,44,8,60,2,65,22,82,19,26,49,17,10,18,49,72,20,85,45,40,54,32,17,85,95,74,32,38,43,47,51,2,5,99,53,41,35,94,42,19,77,57,94,52,61,13,45,47,69,3,96,60,40,22,3,62,49,86,27,35,90,32,79,46,43,43,89,24,47,45,83,99,77,40,65,24,76,47,39,54,1,47,40,80,67,7,42,94,29,22,15,12,38,49,51,6,41,94,44,98,73,74,68,59,78,20,75,6,46,23,96,88,78,36,45,35,25,61,48,10,64,32,70,47,78,79,40,78,24,4,55,27,11,29,49,25,92,72,35,14,75,52,20,67,31,27,62,97,9,83,46,65,52,69,2,68,84,94,53,72,17,55,71,59,44,40,47,2,0,31,43,89,42,53,1,16,16,15,25,10,21,67,28,71,76,3,33,1,96,59,24,49,44,17,1,14,21,85,93,75,86,39,27,64,46,20,46,11,68,56,84,29,7,68,33,78,90,14,80,28,91,91,8,14,42,43,65,24,38,69,28,82,60,69,65,43,19,96,70,76,23,77,93,10,77,6,1,36,36,35,21,16,73,49,62,99,74,75,63,78,82,66,44,73,63,70,95,32,10,85,14,12,55,22,18,38,85,97,28,14,45,52,75,2,19,69,11,34,64,45,79,16,73,99,65,65,53,5,63,83,73,49,28,28,32,43,82,49,81,55,78,49,65,4,46,22,13,95,47,8,84,61,29,62,86,62,36,4,14,40,32,99,87,27,64,24,23,75,94,44,13,25,24,77,57,96,25,34,17,68,79,19,91,68,9,96,82,57,22,40,83,5,12,53,10,32,26,35,36,5,47,58,73,38,97,71,36,0,40,28,2,5,33,94,90,47,80,24,6,58,6,3,59,21,87,23,47,96,41,64,22,9,78,50,31,85,64,45,95,14,68,92,17,41,79,98,47,5,6,71,65,38,9,45,98,84,94,97,63,61,22,22,60,81,96,88,40,8,72,80,71,15,50,7,11,65,84,55,69,10,23,12,18,5,34,91,75,10,58,64,53,19,13,66,36,97,61,85,72,89,67,59,80,17,28,57,62,48,86,46,71,69,21,73,70,10,77,17,28,61];

(new Image()).src = '../imgs/chest.svg';
(new Image()).src = '../imgs/skull.svg';
(new Image()).src = '../imgs/water.jpg';

const gameFrame = document.querySelector('.game-frame');
const gameTiles = document.getElementsByClassName('game-tile');
const gameGuessAmount = document.querySelector('.game-guess-amount');
const modal = document.querySelector('.modal');
const modalInfo = document.querySelector('.modal-info');
const modalSettings = document.querySelector('.modal-settings');
const modalStats = document.querySelector('.modal-stats');
const modalClose = document.getElementsByClassName('modal-close');
const timesClose = document.getElementsByClassName('fa-times');
const btnSettings = document.querySelector('.settings');

/* use of date for picking gold pot and defining if user have played today */
const dayZero = 1663452000;
const unixNow = Date.now() / 1000;
const unixDay = 86400;
const unixToday = unixNow - (unixNow % 86400);

let playedToday = false;

/* controls for default or non default game */
let isDefault = true;
let gridSize = 0;

/* getting localstorage if unknown create empty*/
const playerStats = window.localStorage.getItem('golddiver') !== null ? JSON.parse(window.localStorage.getItem('golddiver')) : {gamesPlayed: 0, gamesWon: 0, guessOne: 0, guessTwo: 0, guessThree: 0, lastPlayed: 0};


const showInfo = () => {
    modal.classList.remove('d-none');
    modalInfo.classList.remove('d-none');
    btnInfo = modalInfo.querySelector('button');
    btnInfo.addEventListener('click', () => {
        modal.classList.add('d-none');
        modalInfo.classList.add('d-none');
        playGame();
    })
}

// check if the modal has to be shown or not
if (!playedToday && playerStats.lastPlayed !== 0) {
    playGame();
} else if (playerStats.lastPlayed === 0) {
    showInfo();
}

playedToday = unixToday === playerStats.lastPlayed;

const todaysGold = goldSpots[parseInt((unixToday - dayZero) / 86400)];
let guesses = 1;
let foundGold = false;

gameGuessAmount.innerText = guesses;

const turnTile = (tile, isGold) => {
    tile.classList.toggle('turn-front');
    if (isGold){
        setTimeout(function() {
            tile.classList.toggle('game-pot-tile');
            tile.classList.toggle('game-open-tile');
            tile.classList.toggle('turn-back');
            tile.classList.toggle('turn-front');
        }, 600);
    } else {
        setTimeout(function() {
            tile.classList.toggle('game-bad-tile');
            tile.classList.toggle('game-open-tile');
            tile.classList.toggle('turn-back');
            tile.classList.toggle('turn-front');
        }, 600);
    }
}

const updateStats = () => {
    playerStats.gamesPlayed++;
    if (foundGold) {
        playerStats.gamesWon++;
        switch (guesses) {
            case 1:
                playerStats.guessOne++;
                break;
            case 2:
                playerStats.guessTwo++;
                break;
            case 3:
                playerStats.guessThree++;
                break;
        }
    }
    playerStats.lastPlayed = unixToday;
}

const renderStatBars = () => {
    const pixelPerPoint = 200 / Math.max(playerStats.guessOne, playerStats.guessTwo, playerStats.guessThree);

    const modalStatsOneBar = document.querySelector('.modal-stats-one-bar');
    const modalStatsTwoBar = document.querySelector('.modal-stats-two-bar');
    const modalStatsThreeBar = document.querySelector('.modal-stats-three-bar');

    if (playerStats.guessOne > 0) {
        modalStatsOneBar.style.width = `${pixelPerPoint * playerStats.guessOne}px`;
        modalStatsOneBar.innerHTML = `<span>${playerStats.guessOne}</span>`;
    }
    if (playerStats.guessTwo > 0) {
        modalStatsTwoBar.style.width = `${pixelPerPoint * playerStats.guessTwo}px`;
        modalStatsTwoBar.innerHTML = `<span>${playerStats.guessTwo}</span>`;
    }
    if (playerStats.guessThree > 0) {
        modalStatsThreeBar.style.width = `${pixelPerPoint * playerStats.guessThree}px`;
        modalStatsThreeBar.innerHTML = `<span>${playerStats.guessThree}</span>`;
    }
}

const gameOver = () => {
    /* update stats */
    console.log(playerStats);
    playedToday = true;

    document.querySelector('.modal-stats-outcome').innerHTML = `<p>You found ${foundGold ? 'gold!' : 'nothing..'}</p>`;
    modal.classList.remove('d-none');
    modalStats.classList.remove('d-none');

    const modalStatsQuests = document.querySelector('.modal-stats-quests');
    const modalStatsPots = document.querySelector('.modal-stats-pots');
    modalStatsQuests.innerText = playerStats.gamesPlayed;
    modalStatsPots.innerText = playerStats.gamesWon;

    if (playerStats.gamesWon > 0) {
        renderStatBars();
    }

}


const resetGame = () => {

    // 0 = default (also 100)
    gridSize = gridSize === 0 ? 100  : gridSize;
    html = '';
    
    for (let i = 0; i < gridSize; i++) {
        html += '<div class="game-tile game-open-tile"></div>';
    }

    gameFrame.innerHTML = html;
    guesses = 1;
    foundGold = false;
    gameGuessAmount.innerText = guesses;

    playGame();
}

/* gameplay function */
const playGame = () => {
    if (isDefault) {
        for (let i = 0; i < gameTiles.length; i++) {
            gameTiles[i].addEventListener('click', (e) => {
                if (!e.target.classList.contains('game-open-tile') || guesses > 3) {
                    return;
                }
                if (i === todaysGold) {
                    foundGold = true;
                    turnTile(e.target, foundGold)
                    if(!playedToday) {
                        console.log('run');
                        updateStats();
                    }
                    setTimeout(gameOver, 1200);
                } else {
                    turnTile(e.target, foundGold)
                    if (guesses === 3) {
                        if(!playedToday) {
                            console.log('run');
                            updateStats();
                        }
                        setTimeout(gameOver, 1200);   
                    }
                }  
                guesses++;
                if (guesses < 4) {
                    gameGuessAmount.innerText = guesses;
                }
            });
        }
    }
}
/* end of gameplay */


/* hiding and showing modals */
modal.addEventListener('click', (e) => {
    if (!modalStats.classList.contains('d-none')) {
        resetGame();
        modalStats.classList.add('d-none');
    }
    modalSettings.classList.add('d-none');
    if (modalInfo.classList.contains('d-none')) {
        modal.classList.add('d-none');
    }
});


for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', (e) => {
        if (e.target.parentElement.classList[1] === 'modal-stats') {
            resetGame();
            modalStats.classList.add('d-none');
        }
        modal.classList.add('d-none');
    });
}

for (let i = 0; i < timesClose.length; i++) {
    timesClose[i].addEventListener('click', (e) => {
        if (e.target.parentElement.parentElement.classList[1] === 'modal-stats') {
            resetGame();
            modalStats.classList.add('d-none');
        }
        modal.classList.add('d-none');
    });
}

btnSettings.addEventListener('click', () => {
    modal.classList.remove('d-none');
    modalSettings.classList.remove('d-none');
    modalStats.classList.add('d-none');
    modalInfo.classList.add('d-none');
})

/* end of modal */