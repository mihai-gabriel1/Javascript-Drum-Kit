"use strict";

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
  if (!audio) return; //Pause all the functions from running;
  audio.curentTime = 0; //rewind to the start !
  audio.play();
  key.classList.add("playing");
});
