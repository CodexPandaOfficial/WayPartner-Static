let listitems = document.getElementsByClassName("slist-item");

for (let item of listitems) {
  let tick = document.createElement('img');
  tick.setAttribute("src", "./images/tick.png");
  tick.style.marginRight = "8px";
  item.prepend(tick);
  tick.style.height="20px";
  tick.style.width="20px";
}
