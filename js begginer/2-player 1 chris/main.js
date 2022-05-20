const name1 = document.querySelector("p");
name1.addEventListener("click", changeName);
function changeName() {
  let newName = prompt("pleae new name");
  name1.textContent = `player 1: ${newName}`;
}
