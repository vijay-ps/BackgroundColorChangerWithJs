let index = 0;
function colorchange() {
  let colors = [
    "Orangered",
    "Blue",
    "Yellow",
    "Green",
    "Orange",
    "Cyan",
    "DodgerBlue",
    "Violet",
    "Navy",
    "Purple",
    "YellowGreen",
    "OrangeRed",
    "SlateBlue",
    "Salmon",
    "Crimson",
    "HotPink",
    "Magenta",
  ];
  document.body.style.background = colors[index++];
  if (index > colors.length - 1) {
    index = 0;
  }
}
document.querySelector("#btn").addEventListener("click", colorchange);
