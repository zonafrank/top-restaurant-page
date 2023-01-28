function createFooter() {
  const footer = document.createElement("footer");
  footer.setAttribute("id", "footer");
  footer.innerHTML = "&copy;" + "Eche's coffe shop " + new Date().getFullYear();
  return footer;
}

export default createFooter;
