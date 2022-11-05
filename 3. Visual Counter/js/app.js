const counter = document.querySelector(".aj");
let start = 0;
const end = 50;

function my() {
  if (start < end) {
    setTimeout(() => {
      counter.innerHTML = start;
      start++;
    }, 100);
  }
}

setInterval(my, 100);
