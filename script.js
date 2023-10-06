const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const firstComment = document.getElementById("first-comment");
const secondComment = document.getElementById("second-comment");

prevBtn.addEventListener("click", () => {
  firstComment.style.display = "flex";
  secondComment.style.display = "none";
})

nextBtn.addEventListener("click", () => {
  firstComment.style.display = "none";
  secondComment.style.display = "flex";
})

