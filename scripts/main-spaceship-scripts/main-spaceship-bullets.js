import { pxToNum } from "../utils/convert-px-to-number.js";
import { getMainSpaceshipX, getMainSpaceshipY } from "../utils/get-main-spaceship-coordinates.js";
import { playBulletAudio } from "../audio-scripts/level-audio.js";

export let mainSpaceshipBullets = [];

class Bullet {
  constructor() {
    this.bulletElement = document.createElement('img');
    this.bulletElement.src = "Main_Spaceship/Main ship weapons/bullets (improved)/bullet-1.png";
    this.bulletElement.alt = "bullets.png";
    this.bulletElement.className = "main-spaceship-bullets-img";
    document.querySelector('.main-spaceship-bullets').appendChild(this.bulletElement);

    this.x = pxToNum(getMainSpaceshipX()) + 10;
    this.y = pxToNum(getMainSpaceshipY()) - 20;

    this.bulletElement.style.setProperty('margin-left', `${this.x}px`);
    this.bulletElement.style.setProperty('margin-top', `${this.y}px`);

    this.bulletInterval = setInterval(() => this.moveBullet(), 10);

    this.animateBullet();
    this.animateBulletInterval = setInterval(() => { this.animateBullet() }, 550);
  }

  moveBullet() {
    if (this.y <= -30) {
      this.destroy();
      return;
    }

    this.y -= 3;
    this.bulletElement.style.setProperty('margin-top', `${this.y}px`);
  }

  animateBullet(){
    setTimeout(() => { animation2(this.bulletElement) }, 100);
    setTimeout(() => { animation3(this.bulletElement) }, 300);
    setTimeout(() => { animation4(this.bulletElement) }, 500);
    setTimeout(() => { animation1(this.bulletElement) }, 700);

    function animation1(bulletElement){
      bulletElement.src = "Main_Spaceship/Main ship weapons/bullets (improved)/bullet-1.png";
    }

    function animation2(bulletElement){
      bulletElement.src = "Main_Spaceship/Main ship weapons/bullets (improved)/bullet-2.png";
    }

    function animation3(bulletElement){
      bulletElement.src = "Main_Spaceship/Main ship weapons/bullets (improved)/bullet-3.png";
    }

    function animation4(bulletElement){
      bulletElement.src = "Main_Spaceship/Main ship weapons/bullets (improved)/bullet-4.png";
    }
  }

  destroy() {
    this.bulletElement.remove();
    clearInterval(this.bulletInterval);
    clearInterval(this.animateBulletInterval);
    
    let mB = mainSpaceshipBullets.filter((element) => {
      if(element.bulletElement === this.bulletElement){
        return false;
      }
      else{
        return true;
      }
    });
    mainSpaceshipBullets = mB;
  }
}

export function shootBullet() {
  mainSpaceshipBullets.push(new Bullet());
  playBulletAudio();
}