const monthA = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const dayW = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "thursday",
  "Friday",
  "Suterday",
];
setInterval(setClock, 1000);

function setClock() {
  let currentDate = new Date();
  const secondRatio = currentDate.getSeconds() / 60;
  // console.log(secondRatio);
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
  setRotaion(secondHand, secondRatio);
  setRotaion(minuteHand, minuteRatio);
  setRotaion(hourHand, hourRatio);
  const month = currentDate.getUTCMonth();
  const today = currentDate.getDate();
  let aj = currentDate.getDay();
  date.innerHTML = `${dayW[aj]}-${today}-${monthA[month]}`;
}
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const date = document.querySelector(".aj");

function setRotaion(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}
