const menu_layout = document.querySelector(".menu");
const menu_button = document.querySelector(".menu-button");

menu_button?.addEventListener("click", () => {
  const isExpanded = menu_layout.getAttribute("aria-expanded") === "true";
  menu_layout.setAttribute("aria-expanded", `${!isExpanded}`);
});
