import { shootBullet } from "./main-spaceship-bullets.js";
import { pxToNum } from "../utils/convert-px-to-number.js";
import { getMainSpaceshipX, getMainSpaceshipY } from "../utils/get-main-spaceship-coordinates.js";

class MainSpaceship{
  constructor(){
    this.spaceship = document.querySelector('.js-main-spaceship');
    this.x, this.y;
    this.engineFlame = new EngineFlame();
    this.lives = 3;

    this.setMainSpaceshipCoordinates();
    
    document.addEventListener('keydown',() => { this.moveMainSpaceship() });

    this.animateLivesId = undefined;
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
    else if(this.key === 'p'){
      shootBullet();
    }
  }

  decrementLives() { 
    this.changeLivesImg();
    this.lives--;
    this.changeSpaceshipImg(this.spaceship.firstChild.nextSibling)
  }

  changeSpaceshipImg(spaceshipImg) {
    if(this.lives == 2){
      spaceshipImg.src = "Main_Spaceship/Main Ship/Main Ship - Bases/Main spaceship (Improved)/Main Ship - Base - Slight damage.png"
    }
    else if(this.lives == 1){
      spaceshipImg.src = "Main_Spaceship/Main Ship/Main Ship - Bases/Main spaceship (Improved)/Main Ship - Base - Very damaged.png"
    }
    else{
      this.destroy();
    }
  }

  changeLivesImg(){
    const heartImg = document.querySelector(`.heart-img-${this.lives}`);
    
    heartImg.remove();

    this.animateLivesImg();
  }

  animateLivesImg(){
    let count = 0;
    const livesSection = document.querySelector('.lives-section');

    clearInterval(this.animateLivesId);

    this.animateLivesId = setInterval(() => { livesSection.classList.toggle('red-color'); }, 200);

    if(this.lives != 2){
      setTimeout(() => {
        if(livesSection.classList.contains('red-color')){
          livesSection.classList.toggle('red-color');
        } 
        clearInterval(this.animateLivesId); }, 1200);
    }
  }

  destroy() {
    this.animateDestruction(this.spaceship.firstChild.nextSibling);
    this.engineFlame.destroy();
    setTimeout(() => { 
      this.spaceship.remove();
     }, 300);
  }

  animateDestruction(spaceshipImg){
    animation1(spaceshipImg); 
    setTimeout(() => { animation2(spaceshipImg) }, 50);
    setTimeout(() => { animation3(spaceshipImg) }, 100);
    setTimeout(() => { animation4(spaceshipImg) }, 150);
    setTimeout(() => { animation5(spaceshipImg) }, 200);
    setTimeout(() => { animation6(spaceshipImg) }, 250);
    setTimeout(() => { animation7(spaceshipImg) }, 300);

    function animation1(spaceshipImg){
      spaceshipImg.src = "Enemy_Fleet_1/Kla'ed/Destruction/Fighter (improved)/destroy-1.png";
    }

    function animation2(spaceshipImg){
      spaceshipImg.src = "Enemy_Fleet_1/Kla'ed/Destruction/Fighter (improved)/destroy-2.png";
    }

    function animation3(spaceshipImg){
      spaceshipImg.src = "Enemy_Fleet_1/Kla'ed/Destruction/Fighter (improved)/destroy-3.png";
    }

    function animation4(spaceshipImg){
      spaceshipImg.src = "Enemy_Fleet_1/Kla'ed/Destruction/Fighter (improved)/destroy-4.png";
    }

    function animation5(spaceshipImg){
      spaceshipImg.src = "Enemy_Fleet_1/Kla'ed/Destruction/Fighter (improved)/destroy-5.png";
    }

    function animation6(spaceshipImg){
      spaceshipImg.src = "Enemy_Fleet_1/Kla'ed/Destruction/Fighter (improved)/destroy-6.png";
    }

    function animation7(spaceshipImg){
      spaceshipImg.src = "Enemy_Fleet_1/Kla'ed/Destruction/Fighter (improved)/destroy-7.png";
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

    this.animateFlameInterval = setInterval(() => { this.animateFlame()}, 600);
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

  destroy(){
    clearInterval(this.animateFlameInterval)
    this.engineFlameElement.remove();   
  }
}

export let mainSpaceship;

export function renderMainSpaceship(){
  mainSpaceship = new MainSpaceship();
}