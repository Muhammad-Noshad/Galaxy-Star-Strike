export let enemyFighters = [];
let count = -1;
class EnemyFighter {
  constructor() {
    this.fighterElement = document.createElement('img');
    this.fighterElement.src = "Enemy_Fleet_1/Kla'ed/Base/fighter.png";
    this.fighterElement.alt = "enemy-fighter.png";
    this.fighterElement.className = `enemy-fighter ${++count}`;
    document.querySelector('.enemy-fighters').appendChild(this.fighterElement);

    this.x = Math.random();
    this.y = -75;

    // Randomizing it on vw scale (1 - 100)
    this.x = Number((this.x*80).toFixed(0));

    this.fighterElement.style.setProperty('margin-left', `${this.x}vw`);
    this.fighterElement.style.setProperty('margin-top', `${this.y}px`);

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
    this.animateDestruction();
    setTimeout(() => { this.fighterElement.remove(); }, 300);
    
    let eF = enemyFighters.filter((element) => {
      if(element.fighterElement === this.fighterElement){
        return false;
      }
      else{
        return true;
      }
    });
    enemyFighters = eF;
  }

  animateDestruction(){
    animation1(this.fighterElement); 
    setTimeout(() => { animation2(this.fighterElement) }, 50);
    setTimeout(() => { animation3(this.fighterElement) }, 100);
    setTimeout(() => { animation4(this.fighterElement) }, 150);
    setTimeout(() => { animation5(this.fighterElement) }, 200);
    setTimeout(() => { animation6(this.fighterElement) }, 250);
    setTimeout(() => { animation7(this.fighterElement) }, 300);

    function animation1(fighterElement){
      fighterElement.src = "Enemy_Fleet_1/Kla'ed/Destruction/Fighter (improved)/destroy-1.png";
    }

    function animation2(fighterElement){
      fighterElement.src = "Enemy_Fleet_1/Kla'ed/Destruction/Fighter (improved)/destroy-2.png";
    }

    function animation3(fighterElement){
      fighterElement.src = "Enemy_Fleet_1/Kla'ed/Destruction/Fighter (improved)/destroy-3.png";
    }

    function animation4(fighterElement){
      fighterElement.src = "Enemy_Fleet_1/Kla'ed/Destruction/Fighter (improved)/destroy-4.png";
    }

    function animation5(fighterElement){
      fighterElement.src = "Enemy_Fleet_1/Kla'ed/Destruction/Fighter (improved)/destroy-5.png";
    }

    function animation6(fighterElement){
      fighterElement.src = "Enemy_Fleet_1/Kla'ed/Destruction/Fighter (improved)/destroy-6.png";
    }

    function animation7(fighterElement){
      fighterElement.src = "Enemy_Fleet_1/Kla'ed/Destruction/Fighter (improved)/destroy-7.png";
    }
  }
}

export function renderEnemyFighters() {
  setInterval(() => { enemyFighters.push(new EnemyFighter()); }, 3000);  
}