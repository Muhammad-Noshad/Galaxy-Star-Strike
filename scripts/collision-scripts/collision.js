import { enemyFighters } from "../enemy-spaceship-scripts/enemy-fighter.js";
import { mainSpaceshipBullets } from "../main-spaceship-scripts/main-spaceship-bullets.js";

export function checkCollisions(){
  mainSpaceshipBullets.forEach((bullet) => {
    enemyFighters.forEach((fighter) => {
      mainSpaceshipbulletVsEnemySpaceship(bullet, fighter);
    });
  });
  
  function mainSpaceshipbulletVsEnemySpaceship(bullet, spaceship){
    // const a = getComputedStyle(bullet).marginTop;
    // const b = getComputedStyle(spaceship).marginTop
    // if(a === b){
    //   console.log('hit');
    // }

    // const rect1 = bullet.getBoundingClientRect();
    // const rect2 = spaceship.getBoundingClientRect();
    // if(rect1.top === rect2.top){
    //   console.log(rect.top);
    // }

    var aRect = bullet.getBoundingClientRect();
    var bRect = spaceship.getBoundingClientRect();

    if(!(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    )){
      console.log('hit');
    }
  }
}