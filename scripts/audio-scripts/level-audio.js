const levelMusic = new Audio('Sounds/level_music.mp3');
levelMusic.preload = true;
levelMusic.loop = true;
levelMusic.volume = 0.8
levelMusic.play();

export function playBulletAudio() {
  const bulletAudio = new Audio('Sounds/shoot_bullet.wav');
  bulletAudio.play();
}

export function playExplosionAudio() {
  const explosionAudio = new Audio('Sounds/explosion.mp3');
  explosionAudio.play();
}
