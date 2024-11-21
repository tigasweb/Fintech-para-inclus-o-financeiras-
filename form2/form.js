// Alternar entre Pessoa Física e Pessoa Jurídica
const pessoaFisica = document.querySelector('.form-header h2:nth-child(1)');
const pessoaJuridica = document.querySelector('.form-header h2:nth-child(2)');
const formHeader = document.querySelector('.form-header');

pessoaFisica.addEventListener('click', () => {
  pessoaFisica.style.color = 'black';
  pessoaJuridica.style.color = 'gray';
});

pessoaJuridica.addEventListener('click', () => {
  pessoaJuridica.style.color = 'black';
  pessoaFisica.style.color = 'gray';
});

// Validar entrada ao clicar em "Entrar na sua conta"
const form = document.querySelector('.login-form');
const inputField = document.querySelector('.input-field');
const btnPrimary = document.querySelector('.btn-primary');

btnPrimary.addEventListener('click', (event) => {
  event.preventDefault(); // Evita o envio do formulário
  if (inputField.value.trim() === '') {
    alert('Por favor, preencha o campo de acesso.');
  } else {
    alert('Login realizado com sucesso!');
    // Aqui você pode adicionar a lógica para enviar os dados ao servidor
  }
});

// Simular bloqueio de conta
const btnSecondary = document.querySelector('.btn-secondary');
btnSecondary.addEventListener('click', () => {
  alert('Sua conta foi bloqueada. Entre em contato com o suporte.');
});

// Ações nos links de ajuda
const helpLinks = document.querySelectorAll('.help-links a');

helpLinks[0].addEventListener('click', (event) => {
  event.preventDefault();
  alert('Redirecionando para a página de recuperação de código...');
});

helpLinks[1].addEventListener('click', (event) => {
  event.preventDefault();
  alert('Redirecionando para a página de cadastro...');
});