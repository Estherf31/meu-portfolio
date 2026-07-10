import './index.css';

export default function App() {
  return (
    <div className="container">
      <header className="cabecalho">
        <span className="logo">Seu_Nome.dev</span>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </header>

      <main>
        <section id="sobre" className="hero">
          <h1><span className="destaque">Meu foco é entregar aplicações rápidas, com validações precisas.</span></h1>
          <p className="frase-destaque">
            "O que eu mais espero é encontrar um time que jogue junto e um ambiente com comunicação muito clara. Quero ter espaço para focar no desenvolvimento, sabendo que estou em um lugar que foge de processos confusos e realmente valoriza a troca de ideias no dia a dia."
          </p>
        </section>

        <section id="projetos" className="projetos">
          <h2>Projetos em Destaque</h2>
          
          <div className="grid-projetos">
            <div className="card-projeto">
          {/* Ajuste para o Simulador */}
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

        <div className="card-projeto">
          {/* Ajuste para a Fábrica */}
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
            <div className="card-projeto">
              {/* O card de segurança pode ficar sem imagem para dar um respiro, ou você pode adicionar uma img aqui também */}
              <h3>Proteção de Código Front-end</h3>
              <p>Aplicação de técnicas avançadas de ofuscação de JavaScript para blindar a lógica do sistema em produção. O desafio resolvido foi garantir a segurança do código-fonte sem alterar a aparência ou o comportamento final.</p>
              <div className="tags">
                <span>Segurança</span>
                <span>JavaScript</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <p>© {new Date().getFullYear()} — Desenhado e codificado do zero.</p>
      </footer>
    </div>
  );
}