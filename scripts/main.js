import { renderMainSpaceship } from "./main-spaceship-scripts/main-spaceship.js"
import { renderEnemyFighters } from "./enemy-spaceship-scripts/enemy-fighter.js";
import { checkCollisions } from "./collision-scripts/collision.js";

renderMainSpaceship();
renderEnemyFighters();
setInterval(() => { checkCollisions(); }, 50);