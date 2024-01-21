import { shootBullet } from "./main-spaceship-bullets.js";
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

// Movement
document.addEventListener('keydown',() => {
  const key = event.key;

  if(key === 'w'){
    mainSpaceship.style.setProperty('margin-top', `${y -= 10}px`);
  }
  else if(key === 's'){
    mainSpaceship.style.setProperty('margin-top', `${y += 10}px`);
  }
  else if(key === 'a'){
    mainSpaceship.style.setProperty('margin-left', `${x -= 10}px`);
  }
  else if(key === 'd'){
    mainSpaceship.style.setProperty('margin-left', `${x += 10}px`);
  }
  else if(key === ' '){
    // Shoot bullet logic
  }
  else if(key === 'x'){   // Reset
    resetMainSpaceship();
    setMainSpaceshipCoordinates();
  }
  else if(key === 'p'){
    shootBullet();
  }
});