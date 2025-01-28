// Selecionando os elementos do formulário
const nomeInput = document.querySelector('#footer-newsletter-form input[type="text"');
const emailInput = document.querySelector('#footer-newsletter-form input[type="email"');
const submitButton = document.querySelector('#footer-newsletter-form input[type="submit"');

// Função para validar o nome
function validarNome(nome) {
  return nome.trim().length >= 2; // Nome deve ter pelo menos 2 caracteres
}

// Função para validar o e-mail
function validarEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex básico para validação de e-mails
  return emailRegex.test(email);
}

// Adicionando um evento ao botão de envio
submitButton.addEventListener('click', function (event) {
  // Prevenindo a ação padrão
  event.preventDefault();

  // Pegando os valores dos campos
  const nome = nomeInput.value;
  const email = emailInput.value;

  // Validando os campos
  let erros = [];
  if (!validarNome(nome)) {
    erros.push('O nome deve conter pelo menos 2 caracteres.');
  }
  if (!validarEmail(email)) {
    erros.push('Por favor, insira um e-mail válido.');
  }

  // Exibindo as mensagens de erro ou sucesso
  if (erros.length > 0) {
    alert(erros.join('\n')); // Mostra os erros em um alerta (pode ser customizado)
  } else {
    alert('Inscrição realizada com sucesso!'); // Mensagem de sucesso
    // Aqui você pode enviar os dados para o servidor ou limpar os campos
    nomeInput.value = '';
    emailInput.value = '';
  }
});
