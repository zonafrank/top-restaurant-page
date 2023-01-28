function createHeaderSection() {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.textContent = "Eche's coffee shop";
  header.appendChild(h1);
  const paragraph = document.createElement("p");
  paragraph.textContent =
    "We make the best coffee in the world. Come on in to confirm.";
  header.appendChild(paragraph);
  return header;
}

function createMenuItem(item) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  const titleElem = document.createElement("span");
  titleElem.classList.add("item-title");
  titleElem.textContent = item.title;
  menuItem.appendChild(titleElem);
  menuItem.insertAdjacentText("beforeend", " - ");
  const priceElem = document.createElement("span");
  priceElem.textContent = item.price;
  priceElem.classList.add("item-price");
  menuItem.appendChild(priceElem);
  return menuItem;
}

function createMenuSection() {
  const menuItems = [
    { title: "Capuccino", price: "$1.50" },
    { title: "Latte", price: "$1.50" },
    { title: "Expresso", price: "$1.00" },
    { title: "Macciato", price: "$1.20" }
  ];

  const menuSection = document.createElement("section");
  menuSection.setAttribute("id", "menu");
  const h2 = document.createElement("h2");
  h2.textContent = "Our menu";
  menuSection.appendChild(h2);
  for (let item of menuItems) {
    const menuItem = createMenuItem(item);
    menuSection.appendChild(menuItem);
  }

  return menuSection;
}

function createOpeartingHourSection() {
  const operatingHours = [
    { day: "Sunday", workingHours: "8am - 8pm" },
    { day: "Monday", workingHours: "6am - 6pm" },
    { day: "Tuesday", workingHours: "6am - 6pm" },
    { day: "Wednesday", workingHours: "6am - 6pm" },
    { day: "Thursday", workingHours: "6am - 6pm" },
    { day: "Friday", workingHours: "6am - 6pm" },
    { day: "Saturday", workingHours: "8am - 10pm" }
  ];
  const operatingHourSection = document.createElement("section");
  operatingHourSection.setAttribute("id", "operating-hours");
  const h2 = document.createElement("h2");
  h2.textContent = "Our operating hours";
  operatingHourSection.appendChild(h2);

  for (let item of operatingHours) {
    const workDayElem = document.createElement("div");
    const dayElem = document.createElement("span");
    dayElem.classList.add("day-of-week");
    dayElem.textContent = item.day;
    const timeRangeElem = document.createElement("span");
    timeRangeElem.classList.add("time-span");
    timeRangeElem.textContent = item.workingHours;
    workDayElem.appendChild(dayElem);
    workDayElem.insertAdjacentText("beforeend", "-");
    workDayElem.appendChild(timeRangeElem);
    operatingHourSection.appendChild(workDayElem);
  }

  return operatingHourSection;
}

function createMainSection() {
  const fragment = document.createDocumentFragment();
  // create and append header
  const header = createHeaderSection();
  fragment.appendChild(header);
  // create and append menu section
  const menuSection = createMenuSection();
  fragment.appendChild(menuSection);
  // create and append operating hour section
  const operatingHourSection = createOpeartingHourSection();
  fragment.appendChild(operatingHourSection);
  return fragment;
}

export default createMainSection;
