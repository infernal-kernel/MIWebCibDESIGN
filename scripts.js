// Script para manejar la publicación de noticias
document.getElementById("news-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var newsText = document.getElementById("news-text").value;
    
    if(newsText.trim() !== "") {
        // Crear una nueva noticia
        var newsItem = document.createElement("div");
        newsItem.classList.add("news-item");
        newsItem.innerHTML = `
            <p>${newsText}</p>
            <button class="like-btn">Like</button>
        `;
        
        // Añadirla al contenedor de noticias
        document.getElementById("news-container").appendChild(newsItem);
        
        // Limpiar el formulario
        document.getElementById("news-text").value = "";
    }
});
