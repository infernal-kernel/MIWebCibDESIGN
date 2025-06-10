// ================================
// scripts.js – Funcionalidades JS
// ================================

// ========= Menú hamburguesa (responsive) =========
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      menuToggle.setAttribute(
        "aria-label",
        navLinks.classList.contains("show") ? "Cerrar menú" : "Abrir menú"
      );
    });

    // Cerrar menú al hacer clic en un enlace (en móvil)
    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-label", "Abrir menú");
      }
    });
  }
});

// =========== Smooth Scroll en enlaces internos ===========
document.addEventListener("DOMContentLoaded", () => {
  const enlacesInternos = document.querySelectorAll('a[href^="#"]');

  enlacesInternos.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// =========== Validación de formulario de contacto ===========
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    // Prevenir envío si hay campos inválidos
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

    let valid = true;
    [nombre, email, mensaje].forEach(input => {
      if (!input.checkValidity()) {
        valid = false;
        input.classList.add("input-error");
      } else {
        input.classList.remove("input-error");
      }
    });

    if (!valid) {
      e.preventDefault();
      alert("Por favor, completa correctamente todos los campos obligatorios.");
    }
  });
});

// ========= Animación de fondo (opcional) =========
// Si quisieras agregar una animación extra (por ejemplo, cambiar el gradiente),
// puedes insertarla aquí. Por ahora, el CSS maneja la animación de fondo.
/*
document.addEventListener("DOMContentLoaded", () => {
  // Ejemplo: cambiar el background-position cada X ms
});
*/
