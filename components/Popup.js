class Popup {
  constructor(popUp, game) {
    this.popUp = popUp;
    this.game = game;
    this.button = this.popUp.querySelector('.popup__button');
  }

  close() {
    this.popUp.classList.remove('popup_opened');
  }

  setEventListeners() {
    this.button.addEventListener('click', () => {
      this.close();
      this.game.restart();
    });
  }
}

export { Popup };
