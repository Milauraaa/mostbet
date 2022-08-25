const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navLinks");
  const navLinks = document.querySelectorAll(".navLinks li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0
        }s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};
navSlide();

function copyText() {
  let copy = document.getElementById("input");
  copy.select();
  document.execCommand("copy");

  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "KOPYALANDI";
}
function outFunc() {
  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Kodu kopyala";
}

// let upbutton = document.getElementById("icon-up");
// window.onscroll = function () {
//   scrollFunction();
// };
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     upbutton.style.display = "block";
//   } else {
//     upbutton.style.display = "none";
//   }
// }
