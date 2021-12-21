/*
 * DOTS: Level Three
 Level 3 also has 3 moving dots but of different sizes!
 Each dot is therefore worth a different amount of points.
 The number of points the user should get for each dot is saved inside of a data attribute
  on the dot HTML elements. 
  You can access the data attribute of an element from the event object by
   looking at the event target's dataset property. When the user clicks on a dot, 
   increment their score based on
   how many points that dot is worth until they reach 100.
 */

  const buttons = document.querySelectorAll('.js-dot')
  let score = 0
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
      event.preventDefault()
      console.log('buttons are being clicked')
      let attribute = parseInt(buttons[i].getAttribute('data-increment'))
      if (score < 100) {
        score += attribute
        console.log(score)
      }
      else if (score >= 100) {
        console.log("you win!")
      }
    })
  }

   
