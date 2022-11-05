const cssTab = document.querySelector(".css-tab");
const btns = document.querySelectorAll(".btn");
const sections = document.querySelectorAll(".sectionP");
console.log(sections);

cssTab.addEventListener("click", (e) => {
  const getAtri = e.target.dataset.id;
  if (getAtri) {
    btns.forEach((btn) => {
      btn.classList.remove("activeB");
      e.target.classList.add("activeB");

      sections.forEach((section) => {
        section.classList.remove("activeT");
        // console.log(sec);
      });
      const element = document.getElementById(getAtri);
      element.classList.add("activeT");
    });
  }
});
