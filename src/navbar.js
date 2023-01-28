import logoImage from "./assets/cup-of-coffee-svgrepo-com.svg";
import generatePageMainContent from "./generatePageContent";

function createNavLogo() {
  const logoContainer = document.createElement("span");
  logoContainer.setAttribute("id", "logo");
  const logo = document.createElement("img");
  logo.setAttribute("src", logoImage);
  logoContainer.appendChild(logo);
  return logoContainer;
}

function createNavLink(title) {
  const navLink = document.createElement("span");
  navLink.classList.add("nav-link");
  navLink.setAttribute("title", title);
  navLink.textContent = title;
  return navLink;
}

function showPage(pageName) {
  const main = document.getElementById("main");
  console.log(pageName);
  const newMain = generatePageMainContent(pageName);
  console.log(newMain);
  main.replaceWith(newMain);
}

function makeLinkActive(title) {
  const links = document.querySelectorAll(".nav-link");
  for (let link of links) {
    if (link.title !== title) {
      link.classList.remove("active");
    } else {
      link.classList.add("active");
    }
  }
}

function handleNavLinkClick({ target }) {
  const title = target.title;
  showPage(title);
  makeLinkActive(title);
}

function createNavLinks() {
  const navLinkNames = ["home", "about", "contact"];
  const linksContainer = document.createElement("div");
  linksContainer.setAttribute("id", "nav-links");
  for (let title of navLinkNames) {
    const navLink = createNavLink(title);
    navLink.addEventListener("click", handleNavLinkClick);
    linksContainer.appendChild(navLink);
  }
  return linksContainer;
}

function createNav() {
  const navbar = document.createElement("nav");
  navbar.setAttribute("id", "navbar");
  const logoContainer = createNavLogo();
  navbar.appendChild(logoContainer);
  const navLinksContainer = createNavLinks();
  navbar.append(navLinksContainer);
  return navbar;
}

export default createNav;
