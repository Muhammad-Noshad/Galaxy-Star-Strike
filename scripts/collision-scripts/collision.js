import { enemyFighters } from "../enemy-spaceship-scripts/enemy-fighter.js";
import { mainSpaceshipBullets } from "../main-spaceship-scripts/main-spaceship-bullets.js";

export function checkCollisions(){
  mainSpaceshipBullets.forEach((bullet) => {
    enemyFighters.forEach((fighter) => {
      mainSpaceshipbulletVsEnemySpaceship(bullet, fighter);
    });
  });
}

function mainSpaceshipbulletVsEnemySpaceship(bullet, spaceship){
  const rectBul = bullet.bulletElement.getBoundingClientRect();
  const rectShp = spaceship.fighterElement.getBoundingClientRect();

  if((rectBul.right >= (rectShp.left - 5) && rectBul.left <= (rectShp.right + 5)) && (rectBul.top <= rectShp.bottom)){
    spaceship.destroy();
    bullet.destroy();
  }
}