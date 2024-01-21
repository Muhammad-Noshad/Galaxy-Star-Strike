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

class EngineFlame{
  constructor(){
    this.engineFlameElement = document.createElement('img');
    this.engineFlameElement.src = "Main_Spaceship/Main Ship/Main Ship - Engine Effects/Engines/engine-fire-1.png";
    this.engineFlameElement.alt = "engine-flame.png";
    this.engineFlameElement.className = "main-spaceship-engine-flame";
    document.querySelector('.js-main-spaceship').appendChild(this.engineFlameElement);

    setInterval(() => { this.animateFlame()}, 600);
  }

  animateFlame(){
    setTimeout(() => { animation2(this.engineFlameElement) }, 100);
    setTimeout(() => { animation3(this.engineFlameElement) }, 300);
    setTimeout(() => { animation4(this.engineFlameElement) }, 500);
    setTimeout(() => { animation1(this.engineFlameElement) }, 700);

    function animation1(engineFlameElement){
      engineFlameElement.src = "Main_Spaceship/Main Ship/Main Ship - Engine Effects/Engines/engine-fire-1.png";
    }

    function animation2(engineFlameElement){
      engineFlameElement.src = "Main_Spaceship/Main Ship/Main Ship - Engine Effects/Engines/engine-fire-2.png";
    }

    function animation3(engineFlameElement){
      engineFlameElement.src = "Main_Spaceship/Main Ship/Main Ship - Engine Effects/Engines/engine-fire-3.png";
    }

    function animation4(engineFlameElement){
      engineFlameElement.src = "Main_Spaceship/Main Ship/Main Ship - Engine Effects/Engines/engine-fire-4.png";
    }
  }
}

new EngineFlame();