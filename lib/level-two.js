/*
 * DOTS: Level Two
 Level 2 has 3 moving dots that the user can click on to increment their score.
 Implement a single click handler to listen for when a user clicks on one of the dots,
  and increment their score until they reach 100.

You want to write only one event listener for all three dots!

 */

// const board = document.querySelector('.js-arena')
// board.addEventListener('click', () => console.log("clicked"))

const buttons = document.querySelectorAll('.js-dot')
let totalScore = 0

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        event.preventDefault()
        console.log("buttons are being clicked")
        if (totalScore < 100) {
            totalScore += 10
            console.log(totalScore)
        }
        else if (totalScore >= 100) {
            console.log("you win!")
        }
    })
}