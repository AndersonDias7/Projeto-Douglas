const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('openMenuBtn');
const closeBtn = document.getElementById('closeMenuBtn');

openBtn.addEventListener('click', () => {
  sidebar.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show');
});

// Exemplo: mostrar alerta quando o formulário for enviado
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! 📸");
});