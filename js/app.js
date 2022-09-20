const goldSpots = [39, 39, 26, 28, 43, 20, 17, 6, 22, 4, 26, 22, 39, 10, 12, 17, 26, 19, 18, 30, 40, 7, 40, 13, 7, 13, 36, 9, 1, 31, 3, 47, 33, 14, 13, 11, 40, 10, 7, 13, 15, 44, 15, 11, 10, 29, 47, 1, 5, 8, 47, 41, 33, 6, 11, 22, 25, 32, 17, 6, 47, 28, 1, 31, 20, 5, 8, 43, 47, 3, 49, 28, 44, 44, 12, 35, 19, 25, 46, 17, 13, 22, 2, 47, 8, 32, 41, 35, 12, 23, 17, 27, 12, 48, 47, 27, 5, 6, 26, 42, 27, 20, 40, 14, 6, 14, 32, 2, 21, 5, 30, 17, 35, 44, 44, 5, 31, 26, 31, 24, 29, 1, 9, 12, 42, 3, 22, 22, 36, 16, 21, 29, 27, 29, 38, 5, 13, 37, 35, 48, 7, 39, 18, 42, 29, 5, 2, 18, 37, 1, 1, 19, 47, 34, 8, 44, 17, 3, 36, 32, 43, 41, 44, 28, 11, 25, 48, 46, 28, 7, 4, 17, 15, 36, 10, 29, 18, 46, 19, 32, 16, 7, 23, 30, 11, 17, 7, 44, 46, 39, 44, 24, 33, 3, 4, 35, 20, 26, 37, 12, 16, 30, 8, 11, 40, 5, 42, 42, 21, 25, 48, 14, 4, 39, 41, 35, 12, 8, 8, 37, 28, 29, 4, 28, 7, 4, 27, 12, 31, 44, 28, 13, 12, 3, 20, 1, 28, 35, 22, 22, 40, 39, 34, 12, 26, 43, 3, 28, 46, 17, 44, 41, 4, 23, 25, 4, 17, 3, 36, 38, 48, 6, 44, 46, 20, 23, 28, 29, 46, 25, 3, 24, 17, 35, 4, 14, 25, 15, 47, 27, 5, 43, 49, 9, 37, 32, 3, 32, 39, 25, 2, 23, 28, 17, 20, 1, 49, 47, 28, 14, 8, 16, 33, 22, 32, 17, 44, 4, 46, 11, 22, 22, 12, 41, 48, 9, 46, 6, 17, 1, 43, 21, 22, 36, 39, 32, 25, 18, 47, 35, 29, 48, 39, 30, 23, 22, 2, 35, 19, 43, 28, 3, 31, 2, 25, 17, 9, 23, 28, 25, 8, 19, 33, 28, 26, 15, 47, 10, 22, 32, 28, 16, 10, 5, 16, 40, 47, 20, 7, 25, 2, 4, 5, 42, 8, 8, 9, 48, 20, 36, 3, 20, 35, 44, 14, 34, 16, 41, 46, 37, 19, 21, 27, 44, 26, 14, 25, 41, 12, 12, 19, 31, 38, 8, 49, 20, 27, 36, 26, 4, 19, 3, 15, 5, 1, 48, 3, 27, 20, 15, 29, 30, 14, 48, 25, 33, 39, 6, 19, 18, 34, 44, 38, 45, 49, 42, 41, 4, 8, 31, 26, 2, 3, 45, 43, 44, 35, 47, 48, 47, 47, 32, 16, 38, 22, 22, 22, 39, 5, 45, 27, 45, 42, 4, 33, 47, 43, 16, 48, 22, 41, 25, 31, 37, 1, 36, 4, 29, 47, 21, 48, 26, 43, 15, 34, 15, 9, 43, 30, 26, 43, 8, 15, 21, 21, 17, 5, 27, 19, 42, 44, 14, 6, 28, 1, 10, 3, 29, 39, 24, 23, 10, 49, 15, 45, 37, 10, 13, 8, 6, 38, 9, 44, 12, 48, 37, 39, 3, 3, 2, 28, 6, 23, 28, 24, 40, 6, 42, 21, 6, 48, 40, 8, 10, 32, 2, 26, 43, 28, 2, 48, 6, 37, 1, 33, 38, 40, 42, 46, 39, 39, 13, 47, 49, 44, 21, 30, 6, 9, 5, 26, 12, 23, 20, 15, 6, 22, 24, 38, 32, 22, 48, 37, 42, 25, 22, 13, 10, 27, 12, 9, 38, 18, 35, 2, 42, 47, 1, 15, 13, 17, 13, 47, 18, 38, 15, 30, 35, 30, 45, 19, 23, 5, 24, 31, 31, 32, 38, 28, 8, 49, 19, 45, 3, 46, 48, 26, 10, 40, 23, 23, 37, 4, 31, 44, 2, 19, 13, 15, 23, 35, 16, 14, 5, 21, 17, 20, 40, 18, 43, 41, 27, 12, 12, 6, 21, 1, 48, 38, 33, 34, 14, 42, 38, 22, 41, 44, 41, 33, 48, 20, 17, 6, 47, 7, 43, 31, 18, 37, 25, 3, 9, 25, 11, 11, 35, 7, 45, 45, 22, 45, 19, 38, 38, 28, 6, 38, 18, 6, 11, 28, 48, 6, 34, 10, 39, 21, 7, 28, 47, 30, 23, 14, 20, 13, 27, 35, 36, 14, 44, 20, 8, 2, 34, 23, 24, 26, 16, 18, 27, 43, 26, 4, 14, 45, 1, 31, 43, 37, 13, 37, 11, 11, 25, 27, 25, 23, 24, 24, 14, 6, 43, 17, 22, 49, 15, 15, 22, 17, 49, 38, 35, 12, 9, 32, 33, 29, 32, 46, 35, 44, 47, 15, 29, 22, 13, 10, 34, 43, 32, 9, 27, 33, 45, 3, 22, 31, 2, 31, 1, 25, 3, 37, 19, 43, 39, 31, 1, 31, 6, 21, 34, 36, 29, 9, 16, 1, 24, 13, 5, 49, 43, 19, 9, 42, 8, 9, 42, 26, 20, 15, 23, 25, 9, 3, 7, 32, 8, 8, 47, 3, 42, 45, 7, 2, 21, 16, 36, 43, 29, 36, 40, 31, 47, 8, 45, 17, 46, 2, 37, 43, 40, 37, 24, 23, 9, 21, 33, 32, 19, 42, 14, 49, 29, 43, 29, 30, 7, 39, 46, 7, 25, 11, 19, 26, 29, 10, 36, 24, 42, 31, 29, 3, 41, 12, 6, 10, 22, 37, 44, 13, 42, 29, 36, 27, 29, 48, 10, 45, 49, 5, 14, 39, 13, 17, 26, 14, 39, 20, 45, 44, 2, 43, 41, 44, 1, 6, 33, 25, 12, 10, 35, 14, 12, 29, 13, 38, 19, 13, 48, 18, 32, 20, 33, 18, 13, 17, 48, 32, 8, 28, 24, 27, 7, 35, 33, 36, 11, 13, 45, 8, 29, 24, 19, 36, 15, 20, 14, 35, 45, 45, 48, 43, 41, 32, 46, 45, 24, 28, 14, 43, 32, 23, 30, 35, 5, 11, 19, 33, 31, 39, 4, 44, 35, 30, 2, 9, 48, 27, 36, 10, 1, 12, 43, 35, 29, 33, 29, 9, 29, 31, 6, 11, 14, 1, 45, 26, 49, 22, 22, 27, 20, 46, 27, 30, 10, 43, 34, 40, 11, 26, 9, 43, 20, 19, 39, 33, 7, 37, 15, 1, 2, 27, 47, 37, 18, 12, 15, 22, 27, 6, 4, 3, 28, 23, 9, 23, 10, 44, 29, 39, 30, 35, 19, 44, 18, 20, 4, 46, 28, 10, 38, 40, 40, 29, 20, 33, 37, 11, 28, 18, 36, 2, 37, 2, 33, 24, 11, 27, 6, 48, 30, 12, 13, 48, 29, 10, 4, 35, 20, 16, 39, 28, 26, 24, 39, 21, 29, 16, 42, 11, 35];

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
let treasures = 0;
let gridSize = 0;

/* getting localstorage if unknown create empty*/
const playerStats = window.localStorage.getItem('golddiver') !== null ? JSON.parse(window.localStorage.getItem('golddiver')) : {gamesPlayed: 0, gamesWon: 0, guessOne: 0, guessTwo: 0, guessThree: 0, lastPlayed: 0};

/* show info for first time players */
const showInfo = () => {
    modal.classList.remove('d-none');
    modalInfo.classList.remove('d-none');
    btnInfo = modalInfo.querySelector('button');
    btnInfo.addEventListener('click', () => {
        modalInfo.classList.add('d-none');
        modal.classList.add('d-none');
        playGame();
    });
}
/* end of show info */


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

const generatePots = () => {
    let pots = [];
    for (let i = 0; i < treasures; i++) {
        pots.push(Math.ceil(Math.random() * gridSize));
    }
    return pots;
}

const gameOver = () => {
    /* update stats */

    document.querySelector('.modal-stats-outcome').innerHTML = `<p>You found ${foundGold ? 'gold!' : 'nothing..'}</p>`;
    modal.classList.remove('d-none');
    modalStats.classList.remove('d-none');

    const modalStatsQuests = document.querySelector('.modal-stats-quests');
    const modalStatsPots = document.querySelector('.modal-stats-pots');
    modalStatsQuests.innerText = playerStats.gamesPlayed;
    modalStatsPots.innerText = playerStats.gamesWon;

    localStorage.setItem('golddiver', JSON.stringify(playerStats));

    if (playerStats.gamesWon > 0) {
        renderStatBars();
    }

}


const resetGame = () => {

    const gameSection = document.querySelector('.game');
    gameSection.classList.remove('game-49');
    gameSection.classList.remove('game-100');

    // 0 = default (also 100)
    gridSize = gridSize === 0 ? 49 : gridSize;
    gameSection.classList.add(`game-${gridSize}`);

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
                        playedToday = true;
                        updateStats();
                    }
                    setTimeout(gameOver, 1200);
                } else {
                    turnTile(e.target, foundGold)
                    if (guesses === 3) {
                        if(!playedToday) {
                            playedToday = true;
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
    } else {
        const randomPots = generatePots();
        for (let i = 0; i < gameTiles.length; i++) {
            gameTiles[i].addEventListener('click', (e) => {
                if (!e.target.classList.contains('game-open-tile') || guesses > 3) {
                    return;
                }
                if (randomPots.indexOf(i) !== -1) {
                    foundGold = true;
                    turnTile(e.target, foundGold)
                    setTimeout(gameOver, 1200);
                } else {
                    turnTile(e.target, foundGold)
                    if (guesses === 3) {
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


// check if the modal has to be shown or not
if (playedToday || playerStats.lastPlayed !== 0) {
    playGame();
} else if (playerStats.lastPlayed === 0) {
    showInfo();
}

/* save settings */
const btnSaveSettings = modalSettings.querySelector('button');
btnSaveSettings.addEventListener('click', () => {
    const radiosPots = document.querySelectorAll('input[name="pots"]');
    for (let radioPots of radiosPots) {
        if (radioPots.checked) {
            treasures = parseInt(radioPots.value);
        }
    }
    const radiosSize = document.querySelectorAll('input[name="size"]');
    for (let radioSize of radiosSize) {
        if (radioSize.checked) {
            gridSize = parseInt(radioSize.value);
        }
    }
    if (treasures !== 0 || gridSize !== 0) {
        isDefault = false;
    }

    
    if (treasures === 0 && gridSize === 0) {
        isDefault = true;
    }

    resetGame();
    modal.classList.add('d-none');
    modalSettings.classList.add('d-none');
});
/* end of save setting */


/* hiding and showing modals */
modal.addEventListener('click', (e) => {
    if (!modalStats.classList.contains('d-none')) {
        resetGame();
        modalStats.classList.add('d-none');
        modal.classList.add('d-none');
    }
    if(!modalSettings.classList.contains('d-none')) {
        if (!e.target.classList.contains('radio-stats') && e.target.tagName !== 'BUTTON') {
            modalSettings.classList.add('d-none');
            modal.classList.add('d-none');
        }
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