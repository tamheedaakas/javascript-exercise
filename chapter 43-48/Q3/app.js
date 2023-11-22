const deleteBtn = document.querySelectorAll("button");

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let row = btn.parentElement.parentElement;
    row.remove();
  });
});