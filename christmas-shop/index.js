import gifts from './assets/gifts.json' with {type: 'json'};

// Burger-menu ------------------------------
const burgerButton = document.getElementById('menu-toggle')
const inactiveLink = document.querySelectorAll('.navigation li a')
const body = document.querySelector('body')
let unlock = true;

const toggleMenu = () => {
    document.querySelector('.navigation').classList.toggle('open')

    if (body.classList.contains('overflow-hidden')) {
        body.classList.remove('overflow-hidden') 
    }
    else {
        body.classList.add('overflow-hidden')
    }
}

burgerButton.addEventListener('click', toggleMenu)
document.getElementById('burger').addEventListener('click', toggleMenu)

inactiveLink.forEach(el => el.addEventListener('click', toggleMenu))

window.addEventListener('resize', () => {
    document.querySelector('.navigation').classList.remove('open')
    document.body.classList.remove('overflow-hidden')
})

// --------------------------------

// Slider -------------------------
const carousel = document.querySelector('.slider-row');
const buttonLeft = document.querySelector('.arrow.left');
const buttonRight = document.querySelector('.arrow.right');
const desktopMedia = window.matchMedia('(min-width: 769px)');
const mobileMedia = window.matchMedia('(min-width: 380px) and (max-width: 768px)');
let pageNumber = 1;
let countOfPages;

if (desktopMedia.matches) {
    countOfPages = 4;
} else if (mobileMedia.matches) {
    countOfPages = 7;
}

desktopMedia.addEventListener('change', (width) => {
    if (width.matches) {
        countOfPages = 4;
        resetSlider();
    }
});
mobileMedia.addEventListener('change', (width) => {
    if (width.matches) {
        countOfPages = 7;
        resetSlider();
    }
});

function moveLeft() {
    if (pageNumber > 1) {
        pageNumber -= 1;
        updateCarouselPosition();
    }
}

function moveRight() {
    if (pageNumber < countOfPages) {
        pageNumber += 1;
        updateCarouselPosition();
    }
}

function updateCarouselPosition() {
    if (desktopMedia.matches) {
        carousel.style.transform = `translateX(-${(pageNumber - 1) * 498.25}px)`;
    } else if (mobileMedia.matches) {
        carousel.style.transform = `translateX(-${(pageNumber - 1) * 284.71}px)`;
    }
    configureButtons();
}

function resetSlider() {
    pageNumber = 1; 
    updateCarouselPosition();
}

function configureButtons() {
    buttonLeft.disabled = (pageNumber === 1);
    buttonRight.disabled = (pageNumber === countOfPages);
}

function initializeButtons() {
    buttonLeft.addEventListener('click', moveLeft);
    buttonRight.addEventListener('click', moveRight);
}

initializeButtons();
configureButtons();

//-----------------------------------------------
// Countdown-------------------------------------
const daysEl = document.querySelector('.time.days h2');
const hoursEl = document.querySelector('.time.hours h2');
const minutesEl = document.querySelector('.time.minutes h2');
const secondsEl = document.querySelector('.time.seconds h2');
const currentYear = new Date().getFullYear();
const newYear = new Date(`Jan 1 ${currentYear + 1} 00:00:00 GMT+0000`);

function countdownTimer() {
    const todayDate = Date.now();
    const gap = newYear - todayDate;
    const days = Math.floor(gap / 1000 / 60 / 60 / 24);
    const hours = Math.floor((gap / 1000 / 60 / 60) % 24);
    const minutes = Math.floor((gap / 1000 / 60) % 60);
    const seconds = Math.floor((gap / 1000) % 60);
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}
setInterval(countdownTimer, 1000);

//-----------------------------------------------------
// Random cards----------------------------------------
const cardsContainer = document.querySelector('.cards-container');
const shuffledCards = Object.entries(shuffleArray(gifts)).slice(0,4).map(entry => entry[1]);


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateCards() {
    cardsContainer.innerHTML = '';
    for (let element of shuffledCards) {
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement("img");
        img.src = element.img;
        img.alt = element.name;
        card.appendChild(img);
        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');
        const categoryOfCard = document.createElement('h4');
        const category = element.category.toLowerCase().split(' ').join('.');
        categoryOfCard.classList.add(category);
        categoryOfCard.innerHTML= element.category.toUpperCase();
        const nameOfCard = document.createElement('p');
        nameOfCard.classList.add('subheading');
        nameOfCard.innerHTML = element.name.toUpperCase();
        textContainer.appendChild(categoryOfCard);
        textContainer.appendChild(nameOfCard);
        card.appendChild(textContainer);
        cardsContainer.appendChild(card);
    }
}

generateCards();
