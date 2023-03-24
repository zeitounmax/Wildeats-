const slidesContainer = document.querySelector("#slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.querySelector("#slide-arrow-prev");
const nextButton = document.querySelector("#slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
