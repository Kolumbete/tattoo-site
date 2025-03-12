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
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = this.name.value;
    let phone = this.phone.value;
    let message = this.message.value || "Без комментариев";

    let telegramBotToken = "YOUR_TELEGRAM_BOT_TOKEN"; // Замени на свой токен
    let chatId = "YOUR_CHAT_ID"; // Замени на свой chat ID

    let text = `Новая заявка!\nИмя: ${name}\nТелефон: ${phone}\nКомментарий: ${message}`;

    let url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                alert("Заявка отправлена!");
            } else {
                alert("Ошибка отправки.");
            }
        });
});