const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const closeBtn = document.getElementById("close-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    closeBtn.classList.toggle("hidden");
    hamburgerBtn.classList.toggle("block");
    hamburgerBtn.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    closeBtn.classList.toggle("block");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
