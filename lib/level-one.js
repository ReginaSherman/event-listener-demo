/*
 * DOTS: Level One
 For level 1, implement a single event listener to the `.js-dot` element. When
 the user clicks on the dot, it should increment their score by 10 points. When
 the user reaches 100 points, they've beat the level and can move on!
 */


const dotListener = document.querySelector('.js-dot')
let score = 0

dotListener.addEventListener('click', () => {
    if (score < 100) {
        score += 10
        console.log(score)
    }
    else if (score >= 100) {
        console.log('Move on to the next level!')
    }
})
