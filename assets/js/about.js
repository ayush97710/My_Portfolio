// Fade-in on scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});
observer.observe(document.querySelector(".container"));

// Smooth entry animation for cards
const cards = document.querySelectorAll(".card");
cards.forEach((card, i) => {
  setTimeout(() => {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, i * 150 + 300);
});