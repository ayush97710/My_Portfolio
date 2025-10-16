// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
});
observer.observe(document.querySelector(".skills-cards"));

// Animate progress bars
const cards = document.querySelectorAll(".card");
cards.forEach((card, i) => {
  setTimeout(() => {
    const bar = card.querySelector(".progress div");
    const width = bar.parentElement.previousElementSibling.textContent.match(/\d+/)[0];
    bar.style.width = width + "%";
  }, i * 200 + 300);
});
