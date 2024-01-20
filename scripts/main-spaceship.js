import { resetMainSpaceship } from "./reset-main-spaceship.js";
import { pxToNum } from "./utils/convert-px-to-number.js";
import { getMainSpaceshipX, getMainSpaceshipY } from "./utils/get-main-spaceship-coordinates.js";

const mainSpaceship = document.querySelector('.js-main-spaceship');
let x, y;

setMainSpaceshipCoordinates();

function setMainSpaceshipCoordinates(){
  // Getting x,y coordinates of ship
  x = getMainSpaceshipX();
  y = getMainSpaceshipY();

  // Converting px value to integer number
  x = pxToNum(x);   
  y = pxToNum(y);
}

console.log(x,y);

// Movement
document.addEventListener('keydown',() => {
  const key = event.key;
  console.log(key);

  if(key === 'ArrowUp'){
    mainSpaceship.style.setProperty('margin-top', `${y -= 10}px`);
  }
  else if(key === 'ArrowDown'){
    mainSpaceship.style.setProperty('margin-top', `${y += 10}px`);
  }
  else if(key === 'ArrowLeft'){
    mainSpaceship.style.setProperty('margin-left', `${x -= 10}px`);
  }
  else if(key === 'ArrowRight'){
    mainSpaceship.style.setProperty('margin-left', `${x += 10}px`);
  }
  else if(key === ' '){
    // Shoot bullet logic
  }
  else if(key === 'x'){   // Reset
    resetMainSpaceship();
    setMainSpaceshipCoordinates();
  }

  console.log(x,y);
});