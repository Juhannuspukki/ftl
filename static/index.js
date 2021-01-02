// opens and closes the navbar
const navBar = () => {
  const x = document.getElementById("header");
  const links = document.getElementById("nav-links");
  if (x.className === "ftl-stripe") {
    x.className += " responsive";
    links.className += " responsive";
  } else {
    x.className = "ftl-stripe";
    links.className = "main-nav";
  }
}
