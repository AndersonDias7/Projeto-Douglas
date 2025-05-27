const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('openMenuBtn');
const closeBtn = document.getElementById('closeMenuBtn');
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input, textarea');
const submitBtn = form.querySelector('button[type="submit"]');

// Abrir menu lateral com animação suave
openBtn.addEventListener('click', () => {
  sidebar.classList.add('show');
  // Desabilitar scroll do body enquanto menu aberto
  document.body.style.overflow = 'hidden';
});

// Fechar menu lateral
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show');
  document.body.style.overflow = '';
});

// Fechar menu se clicar em link do menu lateral
sidebar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('show');
    document.body.style.overflow = '';
  });
});

// Focar nos inputs adiciona efeito visual (via classe CSS)
inputs.forEach(input => {
  input.addEventListener('focus', () => input.classList.add('focused'));
  input.addEventListener('blur', () => input.classList.remove('focused'));
});

// Validação simples e envio com feedback animado
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validação básica: checar se todos os campos estão preenchidos
  let valid = true;
  inputs.forEach(input => {
    if (!input.value.trim()) {
      valid = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  if (!valid) {
    alert('Por favor, preencha todos os campos corretamente.');
    return;
  }

  // Animação do botão "enviando"
  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando...';

  // Simula envio com delay
  setTimeout(() => {
    alert('Mensagem enviada com sucesso! 📸');
    form.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = 'Enviar';
  }, 1800);
});
