image = document.querySelectorAll(".image-content");

image.forEach((element) => {
  element.addEventListener("click", (event) => {
    alert("Thanks for purchasing a phone from us.");
  });
});