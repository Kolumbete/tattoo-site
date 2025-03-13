document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll(".section");

    function checkScroll() {
        sections.forEach(section => {
            let rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();

    let carousel = document.querySelector(".carousel-container");
    let images = document.querySelectorAll(".carousel img");
    let index = 0;

    setInterval(() => {
        index = (index + 1) % images.length;
        carousel.style.transform = `translateX(-${index * 320}px)`;
    }, 3000);
});