function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// várjuk meg hogy betöltődjön az oldal
document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll(".side-menu a");
  const menu = document.getElementById("menu");

  links.forEach(link => {
    link.addEventListener("click", function () {
      menu.classList.remove("active");
    });
  });

});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const counters = document.querySelectorAll('.counter');

let started = false;

function runCounters() {

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const update = () => {
      const increment = target / 100;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(update, 20);
      } else {
        counter.innerText = target;
      }
    };

    update();
  });
}

// csak amikor odaérsz scrollal
window.addEventListener("scroll", () => {

  const statsSection = document.querySelector(".stats");
  const sectionTop = statsSection.offsetTop;
  const screenHeight = window.innerHeight;

  if (!started && window.scrollY > sectionTop - screenHeight + 100) {
    runCounters();
    started = true;
  }

});