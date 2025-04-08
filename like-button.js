<script>
    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', function() {
            let currentLikes = parseInt(this.textContent.split(' ')[1]) || 0;
            this.textContent = `Me gusta ${currentLikes + 1} 👍`;
        });
    });
</script>
