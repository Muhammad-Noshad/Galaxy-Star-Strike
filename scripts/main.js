import { renderBackground } from "./background-script/background.js";
import { renderMainSpaceship } from "./main-spaceship-scripts/main-spaceship.js"
import { renderEnemyFighters, enemyFighters } from "./enemy-spaceship-scripts/enemy-fighter.js";
import { checkCollisions } from "./collision-scripts/collision.js";

renderBackground();
renderMainSpaceship();
renderEnemyFighters();
setInterval(() => { checkCollisions(); }, 50);