export let enemyFighters = [];

class EnemyFighter {
  constructor() {
    this.fighterElement = document.createElement('img');
    this.fighterElement.src = "Enemy_Fleet_1/Kla'ed/Base/PNGs/Kla'ed - Fighter - Base.png";
    this.fighterElement.alt = "enemy-fighter.png";
    this.fighterElement.className = "enemy-fighter";
    document.querySelector('.enemy-fighters').appendChild(this.fighterElement);

    enemyFighters.push(this.fighterElement);

    this.x = Math.random();
    this.y = -75;

    // Randomizing it on vw scale (1 - 100)
    this.x = Number((this.x*80).toFixed(0));

    this.fighterElement.style.setProperty('margin-left', `${this.x}vw`);

    this.fighterMoveInterval = setInterval(() => this.moveFighter(), 50);
  }

  moveFighter() {
    if (this.y >= window.innerHeight) {
      this.destroy();
      return;
    }

    this.y += 3;
    this.fighterElement.style.setProperty('margin-top', `${this.y}px`);
  }

  destroy() {
    clearInterval(this.fighterMoveInterval);
    this.fighterElement.remove();
    enemyFighters.splice(enemyFighters.indexOf(this.fighterElement), 1);
  }
}

export function renderEnemyFighters() {
  setInterval(() => { new EnemyFighter(); }, 3500); 
}