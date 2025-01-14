//Renderização dinâmica nos Cards
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
  //Criação da div filha
  let div = document.createElement("div");

  //Criação do título
  let h5 = document.createElement("h5");
  h5.textContent = programa.titulo;

  //Criação do parágrafo
  let p = document.createElement("p");
  p.textContent = programa.paragrafo;

  //Criação da âncora para o link
  let a = document.createElement("a");
  a.href = programa.link;
  a.target = "_blank";
  a.textContent = "Saiba mais";

  //Adicionando elementos na div
  div.append(h5, p, a);
  divCards.appendChild(div);
}
