import './index.css';

const projects = [
 {
    title: 'Dashboard Financeiro & Fluxo de Caixa',
    image: 'dashboard.png',
    alt: 'Dashboard financeiro com indicadores e gráficos',
    description:
      'Painel analítico corporativo com simulação de cenários, cálculo algorítmico de runway e queima de caixa, gráficos vetoriais de precisão e exportação otimizada de relatórios para o Microsoft Excel.',
    tags: ['React', 'TypeScript', 'Matemática Financeira', 'Excel'],
    live: 'https://estherf31.github.io/dashboard-financeiro/',
    repository: 'https://github.com/Estherf31/dashboard-financeiro',
    featured: true,
  },
  {
    title: 'Simulador de Tributos',
    image: 'simulador.png',
    alt: 'Interface do simulador de tributos',
    description:
      'Aplicação para cálculo de impostos com uma experiência simples, informações bem organizadas e resultados fáceis de entender.',
    tags: ['JavaScript', 'CSS', 'UX/UI'],
  },
  {
    title: 'Cálculo de Preço de Fábrica',
    image: 'fabrica.png',
    alt: 'Código do módulo de cálculo de preço de fábrica',
    description:
      'Módulo com regras de negócio e validações de entrada que oferecem feedback imediato sem comprometer a experiência.',
    tags: ['TypeScript', 'Regras de negócio', 'Validações'],
  },
  {
    title: 'Proteção de Código Front-end',
    description:
      'Estudo de técnicas de ofuscação em JavaScript para proteger lógica de negócio em produção e preservar o comportamento da aplicação.',
    tags: ['Segurança', 'JavaScript', 'Boas práticas'],
  },
];

export default function App() {
  return (
    <div className="container">
      <header className="cabecalho">
        <a className="logo" href="#inicio" aria-label="Ir para o início">
          Esther<span>.dev</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <p className="eyebrow">FRONT-END DEVELOPER</p>
          <h1>
            Interfaces <span>rápidas, claras</span> e seguras para produtos que importam.
          </h1>
          <p className="hero-texto">
            Transformo regras de negócio complexas em experiências digitais intuitivas, bem estruturadas e agradáveis de usar.
          </p>
          <div className="hero-acoes">
            <a className="botao botao-principal" href="#projetos">Ver projetos <span aria-hidden="true">↘</span></a>
            <a className="botao botao-secundario" href="https://www.linkedin.com/in/esthernandes/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
          <div className="estatisticas" aria-label="Áreas de atuação">
            <div><strong>Front-end</strong><span>React e TypeScript</span></div>
            <div><strong>UX/UI</strong><span>Interfaces centradas em pessoas</span></div>
            <div><strong>Segurança</strong><span>Validações e proteção de dados</span></div>
          </div>
        </section>

        <section id="sobre" className="secao-sobre">
          <div className="rotulo-secao">01 — SOBRE MIM</div>
          <div className="sobre-conteudo">
            <h2>Construo com atenção aos detalhes que fazem a diferença.</h2>
            <div>
              <p>Sou formada em <strong>Sistemas de Informação</strong> pela Universidade Estácio de Sá e desenvolvo soluções que unem uma interface limpa a uma base técnica sólida.</p>
              <p>Meu foco é evitar fluxos confusos, tornar decisões simples para quem usa o produto e explorar boas práticas de segurança no front-end.</p>
            </div>
          </div>
        </section>

        <section id="projetos" className="projetos">
          <div className="cabecalho-secao">
            <div>
              <div className="rotulo-secao">02 — PORTFÓLIO</div>
              <h2>Projetos selecionados</h2>
            </div>
            <p>Uma seleção de aplicações que mostram meu cuidado com lógica, usabilidade e acabamento visual.</p>
          </div>

          <div className="grid-projetos">
            {projects.map((project) => (
              <article className={`card-projeto${project.featured ? ' destaque-principal' : ''}`} key={project.title}>
                {project.image ? (
                  <div className="moldura-imagem">
                    <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.alt} className="imagem-projeto" />
                  </div>
                ) : (
                  <div className="projeto-sem-imagem" aria-hidden="true"><span>&lt;/&gt;</span></div>
                )}
                <div className="card-topo">
                  <h3>{project.title}</h3>
                  {project.featured && <span className="badge-destaque">Projeto principal</span>}
                </div>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                {(project.live || project.repository) && (
                  <div className="links-projeto">
                    {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Ver ao vivo <span aria-hidden="true">↗</span></a>}
                    {project.repository && <a href={project.repository} target="_blank" rel="noopener noreferrer">Código <span aria-hidden="true">↗</span></a>}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="contato">
          <p className="eyebrow">03 — CONTATO</p>
          <h2>Tem uma ideia em mente?</h2>
          <p>Estou aberta a oportunidades, parcerias e boas conversas sobre tecnologia.</p>
          <div className="contato-links">
            <a href="mailto:estherf31@gmail.com" className="botao botao-principal">Enviar e-mail <span aria-hidden="true">↗</span></a>
            <a href={`${import.meta.env.BASE_URL}curriculo.pdf`} target="_blank" rel="noopener noreferrer" className="botao botao-secundario">Baixar currículo <span aria-hidden="true">↓</span></a>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <p>© {new Date().getFullYear()} Esther Nandes. Desenhado e codificado do zero.</p>
      </footer>
    </div>
  );
}
