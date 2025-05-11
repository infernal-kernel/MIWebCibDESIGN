// Script mejorado para manejo de noticias y botones de tipo Android 7 UI

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("news-form");
    const newsText = document.getElementById("news-text");
    const newsContainer = document.getElementById("news-container");

    if (form && newsText && newsContainer) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const text = newsText.value.trim();

            if (text !== "") {
                const newsItem = document.createElement("div");
                newsItem.classList.add("news-item");
                newsItem.innerHTML = `
                    <p>${text}</p>
                    <button class="like-btn android-button">👍 Like</button>
                `;
                newsContainer.prepend(newsItem);
                newsText.value = "";
            }
        });
    }

    // Delegación de eventos para botones like
    document.body.addEventListener("click", (e) => {
        if (e.target.classList.contains("like-btn")) {
            e.target.classList.toggle("liked");
            e.target.textContent = e.target.classList.contains("liked") ? "💙 Liked" : "👍 Like";
        }
    });
});
