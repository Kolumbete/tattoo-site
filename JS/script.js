document.addEventListener("DOMContentLoaded", function() {
    console.log("Сайт загружен!");

    // Анимация ссылок при наведении
    let links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("mouseover", function() {
            link.style.color = "#ff0";
        });
        link.addEventListener("mouseout", function() {
            link.style.color = "";
        });
    });

    // Плавное появление элементов при скролле
    let animatedElements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        let triggerBottom = window.innerHeight * 0.9;
        animatedElements.forEach(el => {
            let boxTop = el.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});