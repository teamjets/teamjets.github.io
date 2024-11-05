var button = document.getElementById("hamburger-menu"),
  span = button.getElementsByTagName("span")[0];

button.onclick = function () {
  span.classList.toggle("hamburger-menu-button-close");
};

$("#hamburger-menu").on("click", toggleOnClass);

function toggleOnClass(event) {
  var toggleElementId = "#" + $(this).data("toggle"),
    element = $(toggleElementId);

  element.toggleClass("on");
}

// close hamburger menu after click a
$(".menu li a").on("click", function () {
  $("#hamburger-menu").click();
});
