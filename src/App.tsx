import './index.css';

export default function App() {
  return (
    <div className="container">
      <header className="cabecalho">
        <span className="logo">Esther.dev</span>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </header>

      {/* Seção Sobre com o ID único correto para o menu superior funcionar */}
      <section id="sobre" className="secao-sobre">
        <h2 className="frase-destaque">
          Experiente em desenvolvimento front-end, apaixonada por criar interfaces intuitivas e seguras.
        </h2>
        <p className="texto-academico">
          Com formação em <strong>SISTEMAS DE INFORMAÇÃO</strong> pela Universidade Estácio de Sá, construo soluções que unem interfaces limpas a uma arquitetura sólida, garantindo que o usuário final nunca lide com fluxos confusos. Tenho um forte interesse em segurança no front-end, explorando ativamente métodos de proteção de código-fonte e ofuscação em JavaScript para garantir a integridade das aplicações.
        </p>
      </section>

      <main>
        {/* Removido o id="sobre" duplicado daqui para não quebrar a navegação */}
        <section className="hero">
          <h1><span className="destaque">Meu foco é entregar aplicações rápidas, com validações precisas.</span></h1>
          <p className="frase-destaque">
            "O que eu mais espero é encontrar um time que jogue junto e um ambiente com comunicação muito clara. Quero ter espaço para focar no desenvolvimento, sabendo que estou em um lugar que foge de processos confusos e realmente valoriza a troca de ideias no dia a dia."
          </p>
        </section>

       <section id="projetos" className="projetos">
          <h2>Projetos em Destaque</h2>
          
          <div className="grid-projetos">
            
            {/* --- ⭐ CARRO-CHEFE: DASHBOARD FINANCEIRO (1º DA LISTA) --- */}
            <div className="card-projeto destaque-principal">
              <img 
                src={`${import.meta.env.BASE_URL}dashboard.png`} 
                alt="Dashboard Financeiro & Fluxo de Caixa" 
                className="imagem-projeto" 
              />
              <div className="title-row-badge">
                <h3>Dashboard Financeiro & Fluxo de Caixa</h3>
                <span className="badge-destaque-top">⭐ Projeto Principal</span>
              </div>
              <p>
                Sistema analítico interativo com simulação de estresse macroeconômico, cálculo preditivo de Runway (sobrevida), gráficos nativos em SVG e blindagem Anti-XSS nos inputs. Inclui exportação de relatórios executivos formatados diretamente em Excel (.xls).
              </p>
              <div className="tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>Blindagem XSS</span>
                <span>Excel Export</span>
              </div>
              
              <div className="links-projeto">
                <a 
                  href="https://estherf31.github.io/dashboard-financeiro/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-link-projeto vivo"
                >
                  💻 Ver ao Vivo
                </a>
                <a 
                  href="https://github.com/Estherf31/dashboard-financeiro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-link-projeto repo"
                >
                  📁 GitHub
                </a>
              </div>
            </div>

            {/* --- 2º: SIMULADOR DE TRIBUTOS --- */}
            <div className="card-projeto">
              <img 
                src={`${import.meta.env.BASE_URL}simulador.png`} 
                alt="Interface do Simulador" 
                className="imagem-projeto" 
              />
              <h3>Simulador de Tributos</h3>
              <p>Aplicação web para cálculo de impostos com integração de logo de marca. Foco em uma interface limpa, garantindo que o simulador fique perfeitamente alinhado no cabeçalho e apresente as taxas em formatos visuais simples para o usuário final.</p>
              <div className="tags">
                <span>JavaScript</span>
                <span>CSS</span>
                <span>UX/UI</span>
              </div>
            </div>

            {/* --- 3º: PREÇO DE FÁBRICA --- */}
            <div className="card-projeto">
              <img 
                src={`${import.meta.env.BASE_URL}fabrica.png`} 
                alt="Código da Lógica de Negócio" 
                className="imagem-projeto" 
              />
              <h3>Cálculo de Preço de Fábrica</h3>
              <p>Módulo focado na resiliência de dados e tratamento de inputs. Implementação de lógicas precisas de debug para erros de entrada, garantindo feedback imediato ao usuário sem jamais quebrar o layout da tela.</p>
              <div className="tags">
                <span>TypeScript</span>
                <span>Lógica de Negócio</span>
              </div>
            </div>

            {/* --- 4º: SEGURANÇA E OFUSCAÇÃO --- */}
            <div className="card-projeto">
              <h3>Proteção de Código Front-end</h3>
              <p>Aplicação de técnicas avançadas de ofuscação de JavaScript para blindar a lógica do sistema em produção. O desafio resolvido foi garantir a segurança do código-fonte sem alterar a aparência ou o comportamento final.</p>
              <div className="tags">
                <span>Segurança</span>
                <span>JavaScript</span>
              </div>
            </div>

          </div>
        </section>
           
        <section id="contato" className="contato">
          <h2>Vamos conversar?</h2>
          <p>
            Estou sempre aberta a novas ideias, trocas de conhecimento e oportunidades para construir soluções eficientes. Sinta-se à vontade para entrar em contato.
          </p>
          
          <div className="contato-links">
            <a href="mailto:estherf31@gmail.com" className="btn-contato principal">
              Me mande um E-mail  
            </a>
            <a href="https://www.linkedin.com/in/esthernandes/" target="_blank" rel="noopener noreferrer" className="btn-contato">
              LinkedIn
            </a>
            <a href={`${import.meta.env.BASE_URL}curriculo.pdf`} target="_blank" rel="noopener noreferrer" className="btn-contato download">
              Baixar Currículo (PDF)
            </a>
          </div>
        </section>  

      </main>

      <footer className="rodape">
        <p>© {new Date().getFullYear()} — Desenhado e codificado do zero.</p>
      </footer>
    </div>
  );
}