// MODAL
function openModal(title, price, desc) {
  serviceTitle.innerText = title;
  servicePrice.innerText = price;
  serviceDesc.innerText = desc;
  serviceModal.style.display = "block";
}

function closeModal() {
  serviceModal.style.display = "none";
}

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
},{ threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// PARALLAX
window.addEventListener("scroll", () => {
  document.querySelectorAll(".parallax").forEach(el => {
    el.style.backgroundPositionY = window.scrollY * 0.4 + "px";
  });
});
