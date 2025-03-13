document.addEventListener("DOMContentLoaded", function() {
    // Плавная прокрутка к разделам
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Открытие изображений на весь экран
    document.querySelectorAll(".gallery img").forEach(img => {
        img.addEventListener("click", function() {
            let modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `<img src="${this.src}" class="modal-content">`;
            document.body.appendChild(modal);
            modal.addEventListener("click", () => modal.remove());
        });
    });
});