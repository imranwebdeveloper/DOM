const weeksDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//Headding start --------------------------------------------------------------------------------------
const heading = document.querySelector(".head");
const futurDate = new Date(2021, 2, 17, 14, 42, 00);
const year = futurDate.getFullYear();
const month = months[futurDate.getMonth()];
const date = futurDate.getDate();
const weekday = weeksDay[futurDate.getDay()];
const hours = futurDate.getHours();
const minuts = futurDate.getMinutes();
heading.innerHTML = `Discount Expired on ${weekday}, ${date} ${month} ${year}, ${hours}:${minuts}pm`;
//Headding End ---------------------------------------------------------------------------------------
//

function GettingTime() {
  const currentDate = new Date().getTime();
  const countDownDate = futurDate - currentDate;
  // console.log(countDownDate);

  let Rdays = 24 * 60 * 60 * 1000;
  let Rhours = 60 * 60 * 1000;
  let Rminutes = 60 * 1000;
  let day = Math.floor(countDownDate / Rdays);

  let hour = Math.floor((countDownDate % Rdays) / Rhours);
  let minute = Math.floor(((countDownDate % Rdays) % Rhours) / Rminutes);
  let seconds = Math.floor(
    (((countDownDate % Rdays) % Rhours) % Rminutes) / 1000
  );

  // const FullDate = [hour, minute, seconds];
  const Cdays = document.querySelector(".days");
  const Chours = document.querySelector(".hours");
  const Cminutes = document.querySelector(".minutes");
  const Cseconds = document.querySelector(".seconds");
  const Set = document.querySelector(".countDown");
  const Stop = setInterval(GettingTime, 1000);

  function gettime() {
    if (countDownDate > 0) {
      Cdays.innerHTML = `${day} Days`;
      Chours.innerHTML = `${hour} Hours`;
      Cminutes.innerHTML = `${minute} Minutes`;
      Cseconds.innerHTML = `${seconds} Seconds`;
    } else {
      clearInterval(Stop);
      Set.innerHTML = "Sorry, Batter luck next time !";
    }
  }
  gettime();
}

GettingTime();
