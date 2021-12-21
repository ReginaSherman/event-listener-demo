/*
 * DOTS: Level One
 *
 */

let score = 0
const body = document.body
const dot = document.querySelector('.js-dot');
const scoreElement = document.querySelector('.js-score')
dot.addEventListener('click', increaseScore);

function increaseScore () {
    score += 10
    scoreElement.innerHTML = score
    if (score == 100) {
        body.classList.add('game-over')
    }
};




