const thankYouCard = document.querySelector(".thank-you-card");
const ratingCard = document.querySelector(".rating-card");
const outOf = document.querySelector(".out-of");
let rating;
const submit = () => {
  document.querySelector(".rating").addEventListener("click", (e) => {
    const elements = e.currentTarget.children;
    if (e.target.className == "rating") return;
    for (const element of elements) {
      element.classList.remove("active");
    }
    e.target.classList.add("active");
    rating = e.target.innerText;
  });
  document.querySelector(".submit").addEventListener("click", () => {
    if (rating == undefined) return;

    ratingCard.style.display = "none";
    outOf.textContent = `You selected ${rating} out of 5`;
    thankYouCard.style.display = "block";
  });
};
submit();
