import { enemyFighters } from "../enemy-spaceship-scripts/enemy-fighter.js";
import { mainSpaceshipBullets } from "../main-spaceship-scripts/main-spaceship-bullets.js";

export function checkCollisions(){
  console.log(enemyFighters.length);
  //console.log(mainSpaceshipBullets.length);
  mainSpaceshipBullets.forEach((bullet) => {
    enemyFighters.forEach((fighter) => {
      mainSpaceshipbulletVsEnemySpaceship(bullet, fighter);
    });
  });
}

function mainSpaceshipbulletVsEnemySpaceship(bullet, spaceship){
  const rectBul = bullet.bulletElement.getBoundingClientRect();
  const rectShp = spaceship.fighterElement.getBoundingClientRect();

  if((rectBul.right >= rectShp.left && rectBul.left <= rectShp.right) && (rectBul.top <= rectShp.bottom)){
    bullet.destroy();
    spaceship.destroy();
  }
}