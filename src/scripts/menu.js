// document.querySelector(".hamburger").addEventListener("click", () => {
//   document.querySelector(".links").classList.toggle("expanded");
//   document.querySelector(".hamburger").classList.toggle("change");
// });

const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

hamburger.addEventListener("click", () => {
  const isExpanded = links.classList.contains("expanded");

  if (isExpanded) {
    links.style.maxHeight = "0px";
    links.classList.remove("expanded");
  } else {
    links.classList.add("expanded");
    links.style.maxHeight = links.scrollHeight + "px";
  }

  hamburger.classList.toggle("change");
});
