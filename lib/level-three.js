/*
 * DOTS: Level Three
 *
 */

let score = 0
const body = document.body
const dots = document.querySelectorAll('.js-dot');
const scoreElement = document.querySelector('.js-score')

dots[0].addEventListener('click', addTwenty)
dots[1].addEventListener('click', addFive)
dots[2].addEventListener('click', addTen)

function addFive () {
    score += 5
    scoreElement.innerHTML = score
    if (score == 100) {
        body.classList.add('game-over')
    }
};
function addTen () {
    score += 10
    scoreElement.innerHTML = score
    if (score == 100) {
        body.classList.add('game-over')
    }
};
function addTwenty () {
    score += 20
    scoreElement.innerHTML = score
    if (score == 100) {
        body.classList.add('game-over')
    }
};