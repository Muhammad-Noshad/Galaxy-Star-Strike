const menuMusic = new Audio('Sounds/menu_music.mp3');
menuMusic.preload = true;
menuMusic.loop = true;
menuMusic.volume = 0.8
menuMusic.play();

document.addEventListener('click', () => {
  if(menuMusic.pause){
    menuMusic.play();
  }
});