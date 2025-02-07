-- Criação das tabelas
CREATE TABLE newsletter (
    id_newsletter SERIAL PRIMARY KEY,
    nome_usuario VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    data_inscricao DATE
);

CREATE TABLE formulario (
    id_formulario SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    agencia VARCHAR(255),
    destino VARCHAR(255),
    objetivo_intercambio TEXT,
    tempo_intercambio VARCHAR(50),
    investimento DECIMAL(10,2),
    data_de_envio DATE
);

CREATE TABLE programa (
    id_programa SERIAL PRIMARY KEY,
    tipo_intercambio VARCHAR(255),
    descricao TEXT,
    link VARCHAR(255)
);

CREATE TABLE assunto (
    id_assunto SERIAL PRIMARY KEY,
    tipo_assunto VARCHAR(255)
);

CREATE TABLE blog (
    id_blog SERIAL PRIMARY KEY,
    titulo VARCHAR(255),
    conteudo TEXT,
    imagem VARCHAR(255),
    link VARCHAR(255),
    fk_id_assunto INT,
    CONSTRAINT fk_blog_assunto FOREIGN KEY (fk_id_assunto) REFERENCES Assunto(id_assunto)
	ON DELETE CASCADE
);

-- Inserção de dados
INSERT INTO assunto (tipo_assunto) VALUES
('País'),
('Tipo de Intercâmbio'),
('Segurança');

INSERT INTO blog (imagem, titulo, conteudo, link, fk_id_assunto) VALUES
('Imagens/img_amigos_blog.jpg', 'Intercâmbio educacional: o que é, como fazer, destinos e mais', 'Fazer um intercâmbio educacional possibilita que o seu entendimento cultural, profissional e pessoal seja expandido. Estudar no exterior, trabalhar em...', 'blog-one.html', 2),
('Imagens/img_australia_blog.jpg', 'A Austrália é um país seguro? Tudo sobre a segurança na Austrália', 'A Austrália tem paisagens incríveis e qualidade de vida elevada, e a segurança é um ponto que atrai quem vai...', 'blog-two.html', 3),
('Imagens/img_inglaterra_blog.jpg', 'Por que escolher a Inglaterra para fazer intercâmbio?', 'Por que escolher a Inglaterra para estudar no exterior? Bom, existem vários motivos: qualidade de vida, ensino reconhecido mundialmente e...', 'blog-three.html', 1);

INSERT INTO programa (tipo_intercambio, descricao, link) VALUES
('High School', 'Esse programa é feito para quem já está no Ensino Médio ou vai começá-lo em breve. Com o High School, você poderá estudar em um colégio em outro país durante um semestre, um ano letivo e/ou até o Ensino Médio completo. Tem opções tanto em escolas públicas quanto em particulares, todas com um ensino de alta qualidade', 'high-school.html'),
('Curso de Idiomas', 'Para quem precisa ativar o turbo no aprendizado de uma nova língua, sem dúvidas, a maneira mais rápida e eficaz é embarcar para estudar fora e vivenciar de perto a cultura do país de destino. Na GROUP1, você encontra cursos de inglês, espanhol, francês e alemão em instituições de ensino no mundo todo.', 'language-course.html'),
('Work & Study', 'Para quem pretende ganhar experiência profissional no exterior enquanto estuda inglês ou espanhol, esse é o seu programa. Nele, você vai morar por um longo período fora e poderá estudar o idioma e, ao mesmo tempo, trabalhar na Austrália, Emirados Árabes, Espanha, Irlanda, Malta ou Nova Zelândia.', 'work-study.html'),
('Summer Program', 'O Summer Program é uma oportunidade incrível para estudantes que desejam explorar novas culturas enquanto aprimoram suas habilidades acadêmicas e linguísticas. Este programa de intercâmbio oferece a chance de passar um verão em um país estrangeiro, participando de cursos intensivos, atividades extracurriculares e interações com estudantes locais.', 'summer-program.html');

INSERT INTO newsletter (nome_usuario, email, data_inscricao) VALUES
('João Silva', 'joao.silva@email.com', '2025-02-01'),
('Maria Oliveira', 'maria.oliveira@email.com', '2025-02-02'),
('Carlos Santos', 'carlos.santos@email.com', '2025-02-03');

INSERT INTO formulario (nome, email, agencia, destino, objetivo_intercambio, tempo_intercambio, investimento, data_de_envio) VALUES
('Ana Souza', 'ana.souza@email.com', 'Agência Group One', 'Canadá', 'Estudar', '6 meses', 10000.00, '2025-02-04'),
('Pedro Almeida', 'pedro.almeida@email.com', 'Agência Group One', 'Austrália', 'Estudar e trabalhar', '12 meses', 20000.00, '2025-02-05'),
('Juliana Ramos', 'juliana.ramos@email.com', 'Agência Group One', 'Inglaterra', 'Trabalhar', 'Indefinido', 15000.00, '2025-02-06');

-- Consulta de dados
SELECT nome_usuario, email FROM newsletter;

SELECT * from formulario;

SELECT blog.titulo, blog.conteudo, assunto.tipo_assunto FROM blog
	JOIN assunto ON blog.fk_id_assunto = assunto.id_assunto;
    
SELECT tipo_intercambio, descricao FROM programa;