const fieldset = document.querySelector(".rating-group");
const submitBtn = document.querySelector(".submit-btn");
const raitingLabels = document.querySelectorAll(".rating-btn");
const ratingView = document.querySelector(".rating-view");
const thankyouView = document.querySelector(".thankyou-view");
const selectedRatingSpan = document.querySelector(".selected-rating");

let selectedRating = null;

fieldset.addEventListener("change", (e) => {
  if (e.target.type !== "radio") return;

  selectedRating = e.target.value;

  raitingLabels.forEach((label) => label.classList.remove("active"));

  e.target.closest(".rating-btn").classList.add("active");

  submitBtn.disabled = false;
  submitBtn.removeAttribute("aria-disabled");
});

submitBtn.addEventListener("click", () => {
  if (!selectedRating) return;

  showThankYouView();
});

function showThankYouView() {
  selectedRatingSpan.textContent = selectedRating;

  ratingView.hidden = true;

  thankyouView.hidden = false;

  thankyouView.setAttribute("tabindex", "-1");
  thankyouView.focus();
}
