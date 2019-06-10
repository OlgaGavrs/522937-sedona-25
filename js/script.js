var link = document.querySelector(".search");
var popup = document.querySelector(".modal");
link.addEventListener("click", function (evt){
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});
