function createHeaderSection() {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.textContent = "About our coffee shop";
  header.appendChild(h1);
  return header;
}

function createAboutSection() {
  const menuSection = document.createElement("section");
  menuSection.setAttribute("id", "about-us");
  const h2 = document.createElement("h2");
  h2.textContent = "How we started";
  menuSection.appendChild(h2);
  const p = document.createElement("p");
  p.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse unde quasi molestiae dolore aliquid temporibus, animi maxime hic ipsa at repellendus nam perspiciatis aperiam deserunt maiores tempore? Minima, minus exercitationem!";
  menuSection.appendChild(p);
  return menuSection;
}

function createAboutMainSection() {
  const fragment = document.createDocumentFragment();
  const header = createHeaderSection();
  fragment.appendChild(header);
  const section = createAboutSection();
  fragment.appendChild(section);
  return fragment;
}

export default createAboutMainSection;
