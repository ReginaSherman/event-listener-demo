/*
 * DOTS: Level One
 *
 */

let score = 0
const dot = document.querySelector('.js-dot');
const scoreElement = document.querySelector('.js-score')
dot.addEventListener('click', increaseScore);

function increaseScore () {
    score += 10
    scoreElement.innerHTML = score
};

