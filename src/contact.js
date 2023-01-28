function createHeaderSection() {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.textContent = "About our coffee shop";
  header.appendChild(h1);
  return header;
}

function createContactForm() {
  const form = document.createElement("form");
  const nameInput = document.createElement("input");
  nameInput.classList.add("form-input");
  nameInput.placeholder = "Enter your email here...";
  form.appendChild(nameInput);
  const emailInput = document.createElement("input");
  emailInput.classList.add("form-input");
  emailInput.placeholder = "Enter your email here...";
  form.appendChild(emailInput);
  const commentInput = document.createElement("textarea");
  commentInput.classList.add("form-input");
  commentInput.placeholder = "Enter your comment here please";
  commentInput.rows = "5";
  form.appendChild(commentInput);
  const submitButton = document.createElement("button");
  submitButton.classList.add("form-btn");
  submitButton.textContent = "Submit";
  form.appendChild(submitButton);
  return form;
}

function createContactSection() {
  const menuSection = document.createElement("section");
  menuSection.setAttribute("id", "contact-us");
  const h2 = document.createElement("h2");
  h2.textContent = "Get in touch";
  menuSection.appendChild(h2);
  const contactForm = createContactForm();
  menuSection.appendChild(contactForm);
  return menuSection;
}

function createContactMainSection() {
  const fragment = document.createDocumentFragment();
  const header = createHeaderSection();
  fragment.appendChild(header);
  const section = createContactSection();
  fragment.appendChild(section);
  return fragment;
}

export default createContactMainSection;
