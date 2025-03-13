document.addEventListener("DOMContentLoaded", function() {
    console.log("Сайт загружен!");

    // Анимация при скролле
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