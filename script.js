const contactUrl = "#contact";

document.querySelectorAll("[data-contact-link]").forEach((link) => {
  link.setAttribute("href", contactUrl);
});

const menuButton = document.querySelector("[data-menu-button]");
const navLinks = document.querySelectorAll(".site-nav a");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("is-menu-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("is-menu-open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "メニューを開く");
  });
});
