import { enemyFighters } from "../enemy-spaceship-scripts/enemy-fighter.js";
import { mainSpaceshipBullets } from "../main-spaceship-scripts/main-spaceship-bullets.js";
import { mainSpaceship } from "../main-spaceship-scripts/main-spaceship.js";

export function checkCollisions(){
  // can combine both of these in one function
  //bulletVsEnemy
  mainSpaceshipBullets.forEach((bullet) => {
    enemyFighters.forEach((fighter) => {
      mainSpaceshipbulletVsEnemySpaceship(bullet, fighter);
    });
  });

  // mainspaceshipVsEnemy
  enemyFighters.forEach((fighter) => {
    mainSpaceshipVsEnemySpaceship(mainSpaceship, fighter);
  });
}

function mainSpaceshipbulletVsEnemySpaceship(bullet, spaceship){
  const rectBul = bullet.bulletElement.getBoundingClientRect();
  const rectShp = spaceship.fighterElement.getBoundingClientRect();

  if((rectBul.right >= (rectShp.left - 5) && rectBul.left <= (rectShp.right + 5)) && (rectBul.top <= rectShp.bottom && rectBul.bottom >= rectShp.top)){
    spaceship.destroy();
    bullet.destroy();
  }
}

function mainSpaceshipVsEnemySpaceship(mainSpaceship, enemySpaceship){
  const rectMain = mainSpaceship.spaceship.getBoundingClientRect();
  const rectEnemy = enemySpaceship.fighterElement.getBoundingClientRect();

  if((rectMain.right >= (rectEnemy.left - 0) && rectMain.left <= (rectEnemy.right + 0)) && (rectMain.top <= rectEnemy.bottom && rectMain.bottom >= rectEnemy.top)){
    enemySpaceship.destroy();
  }
}