window.onscroll = function () {
  var header = document.getElementById("header");
  var middleText = document.getElementById("middleText");
  var sticky = middleText.offsetTop;

  if (window.pageYOffset > sticky) {
    middleText.classList.add("sticky");
  } else {
    middleText.classList.remove("sticky");
  }
};
