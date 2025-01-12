let sequence = [];
let userInput = " ";
let round = 1;
let maxRounds = 5;
let difficulty = "easy";
let gameInProgress = false;
let incorrectAttempts = 0;
let allowSecondAttempt = false;

const keySets = {
    easy: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    medium: 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''),
    hard: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ...'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')]
    };

const container = document.createElement('div');
const title = document.createElement("h1");
const initialScreen = document.createElement('div');
const difficultySelector = document.createElement('select');
const startBtn = document.createElement('button');
const virtualKeyboard = document.createElement('div');
const gameScreen = document.createElement('div');
const difficultyLabel = document.createElement('span');
const roundCount = document.createElement('span');
const userInputField = document.createElement('div');
const repeatBtn = document.createElement('button');
const nextBtn = document.createElement('button');
const newGameBtn = document.createElement('button');
const feedbackMessage = document.createElement('div');
// const instructions = document.createElement('div');

function createElements() {
    container.classList.add('container');
    document.body.appendChild(container);
    title.classList.add("title")
    title.innerHTML = "Simon Says"
    container.appendChild(title);
    initialScreen.id = 'initial-screen';
    initialScreen.classList.add('initial-screen');
    difficultySelector.id = 'difficulty';
    difficultySelector.classList.add('difficulty-selector');
    difficultySelector.innerHTML = `
        <option value="easy">Easy (Numbers 0-9)</option>
        <option value="medium">Medium (Letters A-Z)</option>
        <option value="hard">Hard (Letters A-Z & Numbers 0-9)</option>
    `;
    startBtn.id = 'start-btn';
    startBtn.classList.add('btn');
    startBtn.textContent = 'Start';
    virtualKeyboard.id = 'virtual-keyboard';
    virtualKeyboard.classList.add('keyboard');
    createVirtualKeyboard();
    initialScreen.appendChild(difficultySelector);
    initialScreen.appendChild(startBtn);
    initialScreen.appendChild(virtualKeyboard);
    container.appendChild(initialScreen);
    gameScreen.id = 'game-screen';
    gameScreen.classList.add('game-screen');
    gameScreen.classList.add('hidden');
    difficultyLabel.id = 'difficulty-label';
    difficultyLabel.classList.add('difficulty-label');
    roundCount.id = 'round-count';
    roundCount.classList.add('round-count');
    userInputField.classList.add('input-sequence');
    repeatBtn.id = 'repeat-btn';
    repeatBtn.classList.add('btn');
    repeatBtn.textContent = 'Repeat the sequence';
    nextBtn.id = 'next-btn';
    nextBtn.textContent = 'Next';
    nextBtn.classList.add('btn');
    newGameBtn.id = 'new-game-btn';
    newGameBtn.classList.add('btn');
    newGameBtn.textContent = 'New Game';
    feedbackMessage.id = 'feedback-message';
    feedbackMessage.classList.add('feedback');
    // instructions.classList.add('instructions');
    container.appendChild(gameScreen);
    initialScreen.appendChild(difficultyLabel);
    gameScreen.appendChild(roundCount);
    gameScreen.appendChild(userInputField);
    gameScreen.appendChild(repeatBtn);
    gameScreen.appendChild(nextBtn);
    gameScreen.appendChild(newGameBtn);
    gameScreen.appendChild(feedbackMessage);
    // gameScreen.appendChild(instructions);
}

createElements();

function createVirtualKeyboard() {
    virtualKeyboard.innerHTML = '';
    const keys = keySets[difficulty];
    keys.sort(() => Math.random() - 0.5);

    keys.forEach(symbol => {
        const keyElement = document.createElement('div');
        keyElement.classList.add('key');
        keyElement.innerText = symbol;
        keyElement.addEventListener('click', () => handleKeyClick(symbol));
        virtualKeyboard.appendChild(keyElement);
    });
}

function addEventListeners() {
    startBtn.addEventListener('click', startGame);
    repeatBtn.addEventListener('click', repeatSequence);
    nextBtn.addEventListener('click', nextRound);
    newGameBtn.addEventListener('click', startNewGame);
    difficultySelector.addEventListener('change', changeDifficulty);
    document.addEventListener('keydown', handleKeydown);
}

addEventListeners();

function handleKeyClick(symbol) {
    if (!gameInProgress || incorrectAttempts > 2 || userInput.length >= sequence.length) return;
    userInput += symbol;
    userInputField.textContent = userInput;
    highlightKey(symbol);

    if (userInput === sequence.join('')) {
        feedback(true);
    } else if (sequence[userInput.length - 1] !== symbol) {
        feedback(false);
    }

    console.log(incorrectAttempts);
    console.log(gameInProgress);
}

function highlightKey(symbol) {
    const key = Array.from(virtualKeyboard.getElementsByClassName('key')).find(key => key.innerText === symbol);
    if (key) {
        key.classList.add('highlight');
        setTimeout(() => key.classList.remove('highlight'), 300);
    }
}

function feedback(correct) {
    if (correct) {
        // repeatBtn.classList.add('disabled-btn');
        // repeatBtn.disabled = true;
        repeatBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
        feedbackMessage.textContent = 'Correct! Move to the next round.';
    } else {
        incorrectAttempts += 1;
        if (incorrectAttempts === 1) {
            userInput = userInput.slice(0, -1);
            userInputField.textContent = userInput;
            feedbackMessage.textContent = 'Incorrect! You have one more attempt.';
        }
        if (incorrectAttempts === 2) {
            gameInProgress = false;
            userInput = userInput.slice(0, -1);
            userInputField.textContent = userInput;
            feedbackMessage.textContent = 'Game Over';
            feedbackMessage.style.color = 'red';
            // instructions.textContent = '';
            repeatBtn.classList.add('disabled-btn');
            repeatBtn.disabled = true;
        }
    }
}

function handleKeydown(event) {
    if (!gameInProgress || incorrectAttempts > 2 || userInput.length >= sequence.length) return;
    const key = event.key.toUpperCase();

    if (keySets[difficulty].includes(key)) {
        handleKeyClick(key);
    }
}

function startGame() {
    difficultySelector.classList.add('hidden');
    startBtn.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    difficultyLabel.classList.remove('hidden');
    gameInProgress = true;
    difficulty = difficultySelector.value;
    difficultyLabel.textContent = `Difficulty: ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`;
    createVirtualKeyboard();
    startRound();
}

function startRound() {
    sequence = generateSequence(round);
    displaySequence(sequence);
    roundCount.textContent = `Round: ${round}`;
    userInput = '';
    userInputField.textContent = '';
    incorrectAttempts = 0;
    allowSecondAttempt = true;
    feedbackMessage.textContent = '';
    repeatBtn.classList.remove('hidden');
    repeatBtn.classList.remove('disabled-btn');
    repeatBtn.disabled = false;
    repeatBtn.textContent = 'Repeat the sequence';
    nextBtn.classList.add('hidden');
    // instructions.textContent = 'Please wait while the sequence is shown...';
    gameInProgress = false;
    //         // Disable repeat and new game buttons during sequence typing simulation
    // repeatBtn.classList.add('disabled-btn');
    // repeatBtn.disabled = true;
    // newGameBtn.classList.add('disabled-btn');
    // newGameBtn.disabled = true;
}

// Обработать вторую попытку и гейм овер. если одна неверная попытка - последний символ убираем.

function generateSequence(round) {
    const symbols = keySets[difficulty];
    const seq = [];
    const symbolsCount = {
        1: 2,
        2: 4,
        3: 6,
        4: 8,
        5: 10,
    }
    for (let i = 0; i < symbolsCount[round]; i++) {
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        seq.push(randomSymbol);
    }
    return seq;
}

function displaySequence(seq) {
    gameInProgress = false;
    userInputField.textContent = '';
    let index = 0;
    const interval = setInterval(() => {
        if (index < seq.length) {
            highlightKey(seq[index]);
            index++;
            repeatBtn.classList.add('disabled-btn');
            repeatBtn.disabled = true;
            newGameBtn.classList.add('disabled-btn');
            newGameBtn.disabled = true;
        } else {
            clearInterval(interval);
            gameInProgress = true;
            // instructions.textContent = 'Now, repeat the sequence by clicking or pressing keys.';
            if (allowSecondAttempt) {
                repeatBtn.classList.remove('disabled-btn');
                repeatBtn.disabled = false;
            }
            newGameBtn.classList.remove('disabled-btn');
            newGameBtn.disabled = false;
        }
    }, 600);
}

function highlightKey(symbol) {
    const key = Array.from(virtualKeyboard.getElementsByClassName('key')).find(key => key.innerText === symbol);
    if (key) {
        key.classList.add('highlight');
        setTimeout(() => key.classList.remove('highlight'), 300);
    }
}

function repeatSequence() {
    if (incorrectAttempts > 2 && !allowSecondAttempt) return;
    userInput = '';
    userInputField.textContent = '';
    displaySequence(sequence);
    repeatBtn.classList.add('disabled-btn');
    repeatBtn.disabled = true;
    allowSecondAttempt = false; // Disable further attempts after second try
}

function nextRound() {
    if (round < maxRounds) {
        round ++;
        startRound();
    } else {
        feedbackMessage.textContent = 'Congratulations, you completed all rounds!';
        repeatBtn.classList.add('disabled-btn');
        repeatBtn.disabled = true;
    }
}

function startNewGame() {
    round = 1;
    gameInProgress = false;
    difficultySelector.classList.remove('hidden');
    startBtn.classList.remove('hidden');
    gameScreen.classList.add('hidden');
    difficultyLabel.classList.add('hidden');
    feedbackMessage.textContent = '';
    difficultySelector.value = 'easy';
    // difficultySelector.addEventListener('change', changeDifficulty);
    createVirtualKeyboard();
}

function changeDifficulty() {
    if (gameInProgress) return;
    difficulty = difficultySelector.value;
    createVirtualKeyboard();
}

// function gameOver() {
//     if (incorrectAttempts >= 2) {
//         gameInProgress = false;
//         feedbackMessage.textContent = 'Game Over';
//         instructions.textContent = '';
//         repeatBtn.classList.add('disabled-btn');
//         repeatBtn.disabled = true;
//     }
// }

// gameOver();




