let score = document.querySelector('.score-value');

export function incrementScore() {
  score.textContent = parseInt(score.textContent) + 1;
}