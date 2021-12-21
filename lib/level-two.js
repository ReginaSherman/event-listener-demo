/*
 * DOTS: Level Two
 *
 */

let score = 0
const body = document.body
const dots = document.querySelectorAll('.js-dot');
const scoreElement = document.querySelector('.js-score')

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', increaseScore)
}

function increaseScore () {
    score += 10
    scoreElement.innerHTML = score
    if (score == 100) {
        body.classList.add('game-over')
    }
};