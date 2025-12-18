const btn = document.getElementById("toTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

// smooth scroll ke atas
btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
