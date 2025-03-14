document.addEventListener("DOMContentLoaded", function() {
    // Плавная прокрутка
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Карусель
    new Swiper('.swiper-container', {
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
    });

    // Эффект печатной машинки
    const text = "Татуировки и Обучение";
    let index = 0;

    function type() {
        if (index < text.length) {
            document.getElementById("typing-effect").innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    type();
});