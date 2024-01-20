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
  }

  moveBullet() {
    this.y -= 10;
    this.bulletElement.style.setProperty('margin-top', `${this.y}px`);

    if (this.y <= -30) {
      this.destroy();
    }
  }

  destroy() {
    clearInterval(this.bulletInterval);
    this.bulletElement.remove();
  }
}

export function shootBullet() {
  new Bullet();
}
