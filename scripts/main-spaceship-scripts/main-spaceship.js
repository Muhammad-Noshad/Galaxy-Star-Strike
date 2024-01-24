import { shootBullet } from "./main-spaceship-bullets.js";
import { resetMainSpaceship } from "./reset-main-spaceship.js";
import { pxToNum } from "../utils/convert-px-to-number.js";
import { getMainSpaceshipX, getMainSpaceshipY } from "../utils/get-main-spaceship-coordinates.js";

class MainSpaceship{
  constructor(){
    this.spaceship = document.querySelector('.js-main-spaceship');
    this.x, this.y;
    this.engineFlame = new EngineFlame();

    this.setMainSpaceshipCoordinates();

    document.addEventListener('keydown',() => { this.moveMainSpaceship() });
  }

  setMainSpaceshipCoordinates(){
    // Getting x,y coordinates of ship And
    // Converting px value to integer number
    this.x = pxToNum(getMainSpaceshipX());   
    this.y = pxToNum(getMainSpaceshipY());
  }

  moveMainSpaceship(){
    this.key = event.key;

    if(this.key === 'w'){
      this.spaceship.style.setProperty('margin-top', `${this.y -= 10}px`);
    }
    else if(this.key === 's'){
      this.spaceship.style.setProperty('margin-top', `${this.y += 10}px`);
    }
    else if(this.key === 'a'){
      this.spaceship.style.setProperty('margin-left', `${this.x -= 10}px`);
    }
    else if(this.key === 'd'){
      this.spaceship.style.setProperty('margin-left', `${this.x += 10}px`);
    }
    else if(this.key === 'x'){   // Reset
      resetMainSpaceship(this.spaceship);
      this.setMainSpaceshipCoordinates();
    }
    else if(this.key === 'p'){
      shootBullet();
    }
  }
}

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

export let mainSpaceship;

export function renderMainSpaceship(){
  mainSpaceship = new MainSpaceship();
}