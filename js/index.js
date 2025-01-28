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

// Array com os dados dos destinos
const destinos = [
  {
    imagem: "Imagens/Austrália.jpeg",
    titulo: "Austrália",
    descricao:
      "Fazer um intercâmbio na Austrália é poder desfrutar de paisagens inacreditáveis, praias maravilhosas, um clima parecido ao nosso e peculiaridades que tornam a estada ainda mais agradável.",
    link: "australia.html",
  },
  {
    imagem: "Imagens/Canadá.jpeg",
    titulo: "Canadá",
    descricao:
      "Como não considerar um intercâmbio em um país completo? Tem neve, praia, inglês, francês, moradores hospitaleiros e paisagens de cinema.",
    link: "canada.html",
  },
  {
    imagem: "Imagens/EUA.jpg",
    titulo: "Estados Unidos",
    descricao:
      "Em um país com dimensões continentais, nada mais natural do que encontrar uma diversidade enorme de paisagens, culturas e mais.",
    link: "eua.html",
  },
  {
    imagem: "Imagens/Espanha.jpg",
    titulo: "Espanha",
    descricao:
      "Fazer um intercâmbio na Espanha é explorar uma rica cultura, com cidades vibrantes como Madrid e Barcelona.",
    link: "espanha.html",
  },
];

// Seleciona o contêiner onde o card será exibido
const container = document.querySelector(".container");

// Inicializa o índice do carrossel
let idx = 0;

// Função para exibir o card atual com transição suave
function exibirCard() {
  const destino = destinos[idx];

  // Seleciona o card atual, se já existir
  let card = container.querySelector(".card");

  if (!card) {
    card = document.createElement("div");
    card.classList.add("card");
    card.style.opacity = 0; // Inicialmente invisível
    container.appendChild(card);
  }

  // Atualiza o conteúdo do card
  card.innerHTML = `
    <img src="${destino.imagem}" alt="Imagem de ${destino.titulo}" />
    <h3>${destino.titulo}</h3>
    <p>${destino.descricao}</p>
    <a href="${destino.link}" target="_blank">
      <button>SAIBA MAIS</button>
    </a>
  `;

  // Suaviza a transição
  setTimeout(() => {
    card.style.opacity = 1;
    card.style.transform = "translateX(0)";
  }, 100);
}

// Função do carrossel
function carrossel() {
  // Suaviza a saída do card atual
  const card = container.querySelector(".card");
  if (card) {
    card.style.opacity = 0;
    card.style.transform = "translateX(-100px)"; // Move para fora
  }

  idx++;
  if (idx > destinos.length - 1) {
    idx = 0;
  }

  // Aguarda a saída antes de trocar o conteúdo
  setTimeout(exibirCard, 600); // Espera o tempo da transição (0.6s)
}

// Exibe o primeiro card ao carregar a página
exibirCard();

// Define o intervalo para trocar os cards
setInterval(carrossel, 3500); // Tempo ajustado para dar espaço à transição
