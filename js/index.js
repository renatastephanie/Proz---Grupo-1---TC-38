// Renderização dinâmica nos Cards dos Cursos
let divCards = document.getElementById("cards-main");
let programas = [
  {
    titulo: "High School",
    paragrafo:
      "Esse programa é feito para quem já está no Ensino Médio ou vai começá-lo em breve. Com o High School, você poderá estudar em um colégio em outro país durante um semestre, um ano letivo e/ou até o Ensino Médio completo. Tem opções tanto em escolas públicas quanto em particulares, todas com um ensino de alta qualidade",
    link: "high-school.html",
  },
  {
    titulo: "Curso de Idiomas",
    paragrafo:
      "Para quem precisa ativar o turbo no aprendizado de uma nova língua, sem dúvidas, a maneira mais rápida e eficaz é embarcar para estudar fora e vivenciar de perto a cultura do país de destino. Na GROUP1, você encontra cursos de inglês, espanhol, francês e alemão em instituições de ensino no mundo todo.",
    link: "language-course.html",
  },
  {
    titulo: "Work & Study",
    paragrafo:
      "Para quem pretende ganhar experiência profissional no exterior enquanto estuda inglês ou espanhol, esse é o seu programa. Nele, você vai morar por um longo período fora e poderá estudar o idioma e, ao mesmo tempo, trabalhar na Austrália, Emirados Árabes, Espanha, Irlanda, Malta ou Nova Zelândia.",
    link: "work-study.html",
  },
  {
    titulo: "Summer Program",
    paragrafo:
      "O Summer Program é uma oportunidade incrível para estudantes que desejam explorar novas culturas enquanto aprimoram suas habilidades acadêmicas e linguísticas. Este programa de intercâmbio oferece a chance de passar um verão em um país estrangeiro, participando de cursos intensivos, atividades extracurriculares e interações com estudantes locais.",
    link: "summer-program.html",
  },
];

for (let programa of programas) {
  let div = document.createElement("div");
  let h5 = document.createElement("h5");
  h5.textContent = programa.titulo;
  let p = document.createElement("p");
  p.textContent = programa.paragrafo;
  let a = document.createElement("a");
  a.href = programa.link;
  a.target = "_blank";
  a.textContent = "Saiba mais";
  div.append(h5, p, a);
  divCards.appendChild(div);
}

// Renderização dinâmica no Blog
let divBlog = document.getElementById("blog");
let paginas = [
  {
    imagem: "Imagens/img_amigos_blog.jpg",
    alt: "Imagem Intercâmbio Educacional",
    titulo: "Intercâmbio educacional: o que é, como fazer, destinos e mais",
    texto:
      "Fazer um intercâmbio educacional possibilita que o seu entendimento cultural, profissional e pessoal seja expandido. Estudar no exterior, trabalhar em...",
    link: "blog-one.html",
  },
  {
    imagem: "Imagens/img_australia_blog.jpg",
    alt: "Imagem Austrália",
    titulo: "A Austrália é um país seguro? Tudo sobre a segurança na Austrália",
    texto:
      "A Austrália tem paisagens incríveis e qualidade de vida elevada, e a segurança é um ponto que atrai quem vai...",
    link: "blog-two.html",
  },
  {
    imagem: "Imagens/img_inglaterra_blog.jpg",
    alt: "Imagem Inglaterra",
    titulo: "Por que escolher a Inglaterra para fazer intercâmbio?",
    texto:
      "Por que escolher a Inglaterra para estudar no exterior? Bom, existem vários motivos: qualidade de vida, ensino reconhecido mundialmente e...",
    link: "blog-three.html",
  },
];

for (let pagina of paginas) {
  let div = document.createElement("div");
  div.className = "blog-item";
  let img = document.createElement("img");
  img.src = pagina.imagem;
  img.alt = pagina.alt;
  let h3 = document.createElement("h3");
  h3.textContent = pagina.titulo;
  let p = document.createElement("p");
  p.textContent = pagina.texto;
  let a = document.createElement("a");
  a.href = pagina.link;
  a.target = "_blank";
  a.textContent = "Ver mais";
  p.appendChild(a);
  div.append(img, h3, p);
  divBlog.appendChild(div);
}

// Selecionando os elementos do formulário
const nomeInput = document.querySelector('#footer-newsletter-input-name input');
const emailInput = document.querySelector('#footer-newsletter-input-email input');
const submitButton = document.querySelector('#footer-newsletter-input-email button');

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
