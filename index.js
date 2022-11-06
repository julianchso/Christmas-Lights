/*
https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Christmas-Lights-App.md
https://codepen.io/tobyj/pen/QjvEex
https://codepen.io/irfanezani_/pen/mdeLpKo
*/

const play = document.querySelector("#playButton");
const stop = document.querySelector("#stopButton");
const ovals = document.querySelectorAll(".oval");
const run = document.querySelector("#run");
let root = document.documentElement;
let lights = document.querySelectorAll(".light-on");

function lightsOff() {
  ovals.forEach((oval) => {
    oval.classList.add("light-off");
    oval.classList.remove("light-on");
  });
}

function lightsOn() {
  ovals.forEach((oval) => {
    oval.classList.remove("light-off");
    oval.classList.add("light-on");
  });
}

function setSpeed() {
  const speed = document.querySelector("#speed").value;
  console.log(lights);
  for (let i = 0; i < lights.length; i++) {
    if (speed >= 1 && speed <= 5) {
      lights[i].style.setProperty("animation-duration", speed + "s");
    }
  }
}

stop.addEventListener("click", lightsOff);
play.addEventListener("click", lightsOn);
run.addEventListener("click", setSpeed);
