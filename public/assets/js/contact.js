const form = document.querySelector(".contact-form");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
});
observer.observe(form);

form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully! 🚀");
  form.reset();
});
