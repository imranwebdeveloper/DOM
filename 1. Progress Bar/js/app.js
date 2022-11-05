const ber = document.querySelector(".progressbar");

setTimeout(() => {
  const data = ber.getAttribute("data-id");
  ber.style.width = data + "%";
  ber.innerHTML = `${data} %`;
  ber.style.opacity = 2;
}, 500);
