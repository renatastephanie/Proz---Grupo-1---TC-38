
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#fale-conosco form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Impede o envio padrão do formulário
  
      // Limpa todas as mensagens de erro anteriores
      const errorMessages = document.querySelectorAll('.error-message');
      errorMessages.forEach(function (error) {
        error.textContent = '';
        error.style.display = 'none';
      });
  
      // Validação dos campos
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const agencia = document.getElementById('agencia-form').value;
      const destino = document.getElementById('destino-form').value;
      const objetivo = document.querySelector('input[name="objetivo"]:checked');
      const tempo = document.querySelector('input[name="tempo"]:checked');
      const valor = document.querySelector('input[name="valor"]:checked');
  
      let isValid = true;
  
      // Validação do nome
      if (nome === '') {
        document.getElementById('nome-error').textContent = 'Por favor, insira seu nome.';
        document.getElementById('nome-error').style.display = 'block';
        isValid = false;

        // lipa a msg
        setTimeout(() => {
          document.getElementById('nome-error').textContent = ''; 
          document.getElementById('nome-error').style.display = 'none'; 
        }, 3000);
        
      }
  
      // Validação do e-mail
      if (email === '' || !validateEmail(email)) {
        document.getElementById('email-error').textContent = 'Por favor, insira um e-mail válido.';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;

        setTimeout(() => {
          document.getElementById('email-error').textContent = ''; 
          document.getElementById('email-error').style.display = 'email'; 
        }, 3000);
      

      }
  
      // Validação da agência
      if (agencia === '') {
        document.getElementById('agencia-error').textContent = 'Por favor, selecione uma agência.';
        document.getElementById('agencia-error').style.display = 'block';
        isValid = false;

        setTimeout(() => {
          document.getElementById('agencia-error').textContent = ''; 
          document.getElementById('agencia-error').style.display = 'agencia'; 
        }, 3000);

      }
  
      // Validação do destino
      if (destino === '') {
        document.getElementById('destino-error').textContent = 'Por favor, selecione um destino.';
        document.getElementById('destino-error').style.display = 'block';
        isValid = false;

        setTimeout(() => {
          document.getElementById('destino-error').textContent = ''; 
          document.getElementById('destino-error').style.display = 'destino'; 
        }, 3000);

      }
  
      // Validação do objetivo
      if (!objetivo) {
        document.getElementById('objetivo-error').textContent = 'Por favor, selecione o objetivo do intercâmbio.';
        document.getElementById('objetivo-error').style.display = 'block';
        isValid = false;

        setTimeout(() => {
          document.getElementById('objetivo-error').textContent = ''; 
          document.getElementById('objetivo-error').style.display = 'objetivo'; 
        }, 3000);


      }
  
      // Validação do tempo
      if (!tempo) {
        document.getElementById('tempo-error').textContent = 'Por favor, selecione quando gostaria de ir.';
        document.getElementById('tempo-error').style.display = 'block';
        isValid = false;

        setTimeout(() => {
          document.getElementById('tempo-error').textContent = ''; 
          document.getElementById('tempo-error').style.display = 'tempo'; 
        }, 3000);

      }
  
      // Validação do valor
      if (!valor) {
        document.getElementById('valor-error').textContent = 'Por favor, selecione o valor disponível para investimento.';
        document.getElementById('valor-error').style.display = 'block';
        isValid = false;

        setTimeout(() => {
          document.getElementById('valor-error').textContent = ''; 
          document.getElementById('valor-error').style.display = 'valor'; 
        }, 3000);

      }
  
      //  enviar o formulário
      if (isValid) {

        document.getElementById('sucesso-message').textContent = 'Enviado com Sucesso!';
        document.getElementById('sucesso-message').style.display = 'block';
        
        form.reset(); // Limpa o formulário após o envio
      }
    });
  
    //  validar e-mail
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });

  

