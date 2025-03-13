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
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${this.src}" alt="${this.alt}">
                </div>
            `;
            document.body.appendChild(modal);

            modal.querySelector(".close").addEventListener("click", () => modal.remove());
            modal.addEventListener("click", (e) => {
                if (e.target === modal) modal.remove();
            });

            document.addEventListener("keydown", (e) => {
                if (e.key === "Escape") modal.remove();
            });
        });
    });

    // Анимация появления секций
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Валидация формы
    document.getElementById("bookingForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const name = this.name.value.trim();
        const phone = this.phone.value.trim();

        if (!name || !phone) {
            alert("Пожалуйста, заполните все обязательные поля.");
            return;
        }

        if (!/^\+?\d{10,15}$/.test(phone)) {
            alert("Пожалуйста, введите корректный номер телефона.");
            return;
        }

        // Отправка данных (можно добавить AJAX-запрос)
        alert("Ваша заявка успешно отправлена!");
        this.reset();
    });
});