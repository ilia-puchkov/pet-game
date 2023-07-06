import { Game } from '../components/Game.js';
import { Popup } from '../components/Popup.js';

window.addEventListener('load', function () {
  const popup = document.querySelector('.popup');

  const canvas = document.getElementById('canvas1');

  const ctx = canvas.getContext('2d');
  canvas.width = 1280;
  canvas.height = 720;

  ctx.fillStyle = 'white';
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'black';
  ctx.font = '40px Salwey';
  ctx.textAlign = 'center';

  const game = new Game(canvas);
  const startPopup = new Popup(popup, game);
  startPopup.setEventListeners();
  game.init();

  let lastTime = 0;
  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    game.render(ctx, deltaTime);
    window.requestAnimationFrame(animate);
  }
  animate(0);
});
