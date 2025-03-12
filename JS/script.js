document.addEventListener("DOMContentLoaded", function() {
    console.log("Сайт загружен!");

    let links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("mouseover", function() {
            link.style.color = "#ff0";
        });
        link.addEventListener("mouseout", function() {
            link.style.color = "";
        });
    });
});