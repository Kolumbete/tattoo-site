document.addEventListener("DOMContentLoaded", function() {
    // Плавный скролл к разделам
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Плавное появление секций при скролле
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
    checkVisibility();

    // Lightbox
    window.openLightbox = function(img) {
        document.getElementById("lightbox-img").src = img.src;
        document.getElementById("lightbox").classList.remove("hidden");
    };

    window.closeLightbox = function() {
        document.getElementById("lightbox").classList.add("hidden");
    };
});