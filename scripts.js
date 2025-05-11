// Script para manejar la publicación de noticias
document.getElementById("news-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var newsText = document.getElementById("news-text").value;
    
    if(newsText.trim() !== "") {
        var newsItem = document.createElement("div");
        newsItem.classList.add("news-item");
        newsItem.innerHTML = `
            <p>${newsText}</p>
            <button class="like-btn">Like</button>
        `;
        
        document.getElementById("news-container").appendChild(newsItem);
        document.getElementById("news-text").value = "";
    }
});
