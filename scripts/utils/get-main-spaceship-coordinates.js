const mainSpaceship = document.querySelector('.js-main-spaceship');

export function getMainSpaceshipX(){
  return getComputedStyle(mainSpaceship).getPropertyValue('margin-left');
}

export function getMainSpaceshipY(){
  return getComputedStyle(mainSpaceship).getPropertyValue('margin-top');
}