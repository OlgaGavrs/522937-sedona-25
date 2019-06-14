var link = document.querySelector(".search");
var popup = document.querySelector(".modal");
popup.classList.remove("no-js");
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});
