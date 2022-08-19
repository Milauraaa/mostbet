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
