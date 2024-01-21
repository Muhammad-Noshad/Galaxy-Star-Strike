import { pxToNum } from "./utils/convert-px-to-number.js";
import { getMainSpaceshipX, getMainSpaceshipY } from "./utils/get-main-spaceship-coordinates.js";

class Bullet {
  constructor() {
    this.bulletElement = document.createElement('img');
    this.bulletElement.src = "Main_Spaceship/Main ship weapons/bullets/bullet-1.png";
    this.bulletElement.alt = "bullets.png";
    this.bulletElement.className = "main-spaceship-bullets-img";
    document.querySelector('.main-spaceship-bullets').appendChild(this.bulletElement);

    this.x = pxToNum(getMainSpaceshipX()) + 12;
    this.y = pxToNum(getMainSpaceshipY()) - 12;

    this.bulletElement.style.setProperty('margin-left', `${this.x}px`);
    this.bulletElement.style.setProperty('margin-top', `${this.y}px`);

    this.bulletInterval = setInterval(() => this.moveBullet(), 50);

    this.animateBulletInterval = setInterval(() => { this.animateBullet() }, 550);
  }

  moveBullet() {
    this.y -= 10;
    this.bulletElement.style.setProperty('margin-top', `${this.y}px`);

    if (this.y <= -30) {
      this.destroy();
    }
  }

  animateBullet(){
    setTimeout(() => { animation2(this.bulletElement) }, 100);
    setTimeout(() => { animation3(this.bulletElement) }, 300);
    setTimeout(() => { animation4(this.bulletElement) }, 500);
    setTimeout(() => { animation1(this.bulletElement) }, 700);

    function animation1(bulletElement){
      bulletElement.src = "Main_Spaceship/Main ship weapons/bullets/bullet-1.png";
    }

    function animation2(bulletElement){
      bulletElement.src = "Main_Spaceship/Main ship weapons/bullets/bullet-2.png";
    }

    function animation3(bulletElement){
      bulletElement.src = "Main_Spaceship/Main ship weapons/bullets/bullet-3.png";
    }

    function animation4(bulletElement){
      bulletElement.src = "Main_Spaceship/Main ship weapons/bullets/bullet-4.png";
    }
  }

  destroy() {
    clearInterval(this.bulletInterval);
    this.bulletElement.remove();
    clearInterval(this.animateBulletInterval);
  }
}

export function shootBullet() {
  new Bullet();
}
