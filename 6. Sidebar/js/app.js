const nav = document.querySelector(".nav");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const persons = {
  name: "Imran",
  age: "24",
  weight: 60,
};

let create = (my) => {
  my = Object.assign(
    {
      name: "Imran",
      age: "24",
      height: "4.6",
      weight: 70,
    },
    my
  );
  return my;
};

let aj = create(persons);
console.dir(aj);

let peoples = {};
