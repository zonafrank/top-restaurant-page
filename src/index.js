import "./assets/style.css";
import createNav from "./navbar";
import generatePageMainContent from "./generatePageContent";
import createFooter from "./footer";

function updatePage() {
  const container = document.getElementById("content");
  // alert("Hello");
  // create and append navigation bar
  const navBar = createNav();
  container.appendChild(navBar);
  // create and append main section
  const mainSection = generatePageMainContent();
  console.log(mainSection);
  container.appendChild(mainSection);
  // create and append footer
  const footer = createFooter();
  container.appendChild(footer);
  container.app;
}

window.onload = updatePage;
