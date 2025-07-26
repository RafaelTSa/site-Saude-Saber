document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    
    function toggleMenu() {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    }

    menuToggle.addEventListener("click", toggleMenu);

    // Seleciona todos os links da navegação para fechar o menu ao clicar
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                toggleMenu();
            }
        });
    });
});
