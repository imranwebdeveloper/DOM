const text = document.querySelector(".card");
const r = " Hello, Imran_Nazir, Habib You are a good man";
let number = 1;

function my() {
  number++;
  console.log(number);
  text.innerHTML = r.slice(0, number);
  if (number > r.length) {
    number = 1;
  }
}

setInterval(my, 100);
