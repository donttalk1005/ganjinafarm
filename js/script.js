document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");
      // Menyu tugmasi ikonkasini o'zgartirish (agar kerak bo'lsa)
      menuToggle.classList.toggle("is-active");
    });
  }

  // Mobil menyu ochilganda boshqa joyni bosganda yopish
  document.addEventListener("click", (event) => {
    if (
      !mainNav.contains(event.target) &&
      !menuToggle.contains(event.target) &&
      mainNav.classList.contains("active")
    ) {
      mainNav.classList.remove("active");
      menuToggle.classList.remove("is-active");
    }
  });
});
