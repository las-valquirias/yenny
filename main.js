// 1. Obtener referencias a los elementos del DOM
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// 2. Alternar la clase 'active' al hacer clic en el botón de hamburguesa
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// 3. Cerrar el menú automáticamente al seleccionar una opción de navegación
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});
