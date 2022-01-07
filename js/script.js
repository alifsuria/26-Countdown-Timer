const target = document.querySelector("#target-time");
const countdown = document.querySelector("#countdown");

let targetTime = new Date("5 July,2020").toDateString();
let countdownDate = new Date("5 July,2022").getTime();

let timer = setInterval(() => {
  let now = new Date().getTime();
  let range = countdownDate - now;

  let days = Math.floor(range / (1000 * 60 * 60 * 24));
  let hours = Math.floor((range % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((range % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((range % (1000 * 60)) / 1000);
  console.log(range, days, hours, minutes, seconds);

  target.innerHTML = targetTime;
  countdown.innerHTML = `${days} days <> ${hours} hours <> ${minutes} minutes <> ${seconds} seconds`;

  if (range < 0) {
    clearInterval(timer);
    countdown.innerHTML = "Timer Expired";
  }
}, 1000);
