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



