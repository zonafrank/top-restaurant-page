import createMainSection from "./mainSection";
import createAboutMainSection from "./about";
import createContactMainSection from "./contact";

function generatePageMainContent(page) {
  const main = document.createElement("main");
  main.setAttribute("id", "main");
  let section;

  if (page === "home") {
    section = createMainSection();
  } else if (page === "about") {
    section = createAboutMainSection();
  } else if (page === "contact") {
    section = createContactMainSection();
  } else {
    section = createMainSection();
  }

  main.appendChild(section);
  return main;
}

export default generatePageMainContent;
