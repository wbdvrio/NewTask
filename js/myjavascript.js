// const image = document.querySelector("img")
// image.addEventListener("click")

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".img-fluid").forEach((element) => {
    element.addEventListener("click", function () {
      document.getElementById("ImageEnlarge").src = this.src;
    });
  });
});
