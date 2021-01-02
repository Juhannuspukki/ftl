// opens and closes the navbar
const navBar = () => {
  const x = document.getElementById("nav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
