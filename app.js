/* ==========================
   VELORA STUDIO APP.JS
========================== */

/* LOADER */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1800);
});

/* DARK / LIGHT THEME */
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});

/* STICKY HEADER */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.85)";
  } else {
    header.style.background = "rgba(0,0,0,0.25)";
  }
});

/* HERO FADE-IN */
const heroContent = document.querySelector(".hero-content");

heroContent.style.opacity = "0";
heroContent.style.transform = "translateY(40px)";

setTimeout(() => {
  heroContent.style.transition = "1s ease";
  heroContent.style.opacity = "1";
  heroContent.style.transform = "translateY(0)";
}, 700);

/* BUTTON GLOW */
const btn = document.querySelector(".btn");

btn.addEventListener("mouseenter", () => {
  btn.style.boxShadow = "0 0 30px rgba(200,169,106,.5)";
});

btn.addEventListener("mouseleave", () => {
  btn.style.boxShadow = "none";
});
