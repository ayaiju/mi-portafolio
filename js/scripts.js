const text = "Bienvenidos a mi perfil";
const typedTextSpan = document.getElementById("typed-text");
const cursorSpan = document.querySelector(".cursor");

let charIndex = 0;

function typeLoop() {
  if (charIndex <= text.length) {
    typedTextSpan.textContent = text.substring(0, charIndex);
    charIndex++;
    setTimeout(typeLoop, 100);
  } else {
    // Espera un poco, luego reinicia desde el inicio
    setTimeout(() => {
      charIndex = 0;
      typedTextSpan.textContent = "";
      typeLoop();
    }, 2000); // espera antes de reiniciar
  }
}

document.addEventListener("DOMContentLoaded", typeLoop);

// Animación scroll para secciones y tarjetas
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('section, .card').forEach(el => observer.observe(el));
