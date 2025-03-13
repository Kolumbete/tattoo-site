document.addEventListener("DOMContentLoaded", function() {
    // Добавляем класс "visible" для секций при прокрутке
    const sections = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Запуск при загрузке

    // Плавный скролл по клику в меню
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});