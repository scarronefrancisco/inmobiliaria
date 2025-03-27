// Parte 15: Menú hamburguesa móvil
const toggleBtn = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.main-nav ul');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Parte 16: Mostrar elementos al hacer scroll
const animarItems = document.querySelectorAll('.animar');

const mostrarScroll = () => {
  animarItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    const pantallaAltura = window.innerHeight;

    if (itemTop < pantallaAltura - 100) {
      item.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', mostrarScroll);
window.addEventListener('load', mostrarScroll);
