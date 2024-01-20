import { pxToNum } from "./utils/convert-px-to-number.js";
import { getMainSpaceshipX, getMainSpaceshipY } from "./utils/get-main-spaceship-coordinates.js";

let bulletCounter = 0;
let bulletElements = [];

export function shootBullet(){
  let bulletHTML = 
  `
  <img src="Main_Spaceship/Main ship weapons/bullets/bullet-1.png" alt="bullets.png" class="main-spaceship-bullets-img js-bullet-${++bulletCounter}">
  `;

  document.querySelector('.main-spaceship-bullets').innerHTML += bulletHTML;

  const bulletElement = document.querySelector(`.js-bullet-${bulletCounter}`);

  bulletElements.push(bulletElement);

  let x = getMainSpaceshipX();
  let y = getMainSpaceshipY();

  x = pxToNum(x);
  y = pxToNum(y);

  // Adjusting the bullet spawn position
  x += 12;
  y -= 12;

  bulletElement.style.setProperty('margin-left', `${x}px`);
  bulletElement.style.setProperty('margin-top', `${y}px`);

  setInterval(() => { moveBullet() }, 50);

  function moveBullet(){
    bulletElement.style.setProperty('margin-top', `${y -= 10}px`);
  }
}