var link = document.querySelector(".search");
var popup = document.querySelector(".modal");
var form = popup.querySelector(".search-form");
var date_in = form.querySelector("[name=date-in]");
var date_out = form.querySelector("[name=date-out]");
var adult = form.querySelector("[name=adult]");
var child = form.querySelector("[name=child]");
var isStorageSupport = true;
var storage_adult = "";
var storage_child = "";

try {
  storage_adult = localstorage.getItem("adult");
  storage_child = localstorage.getItem("child");
} catch (err) {
  isStorageSupport = false;
}

popup.classList.remove("no-js");
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!date_in.value || !date_out.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (!adult.value || adult.value == "0") {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localstorage.setItem("adult", adult.value);
        localstorage.setItem("child", child.value);
      }
    }
  }
});
