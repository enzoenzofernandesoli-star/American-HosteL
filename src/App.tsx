import {
  ArrowRight,
  BedDouble,
  Car,
  Check,
  ChevronRight,
  Coffee,
  MapPin,
  Menu,
  MessageCircle,
  Snowflake,
  Star,
  Waves,
  Wifi,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { americanHostel } from './data/american-hostel'

const icones = {
  wifi: Wifi,
  cafe: Coffee,
  carro: Car,
  piscina: Waves,
  ar: Snowflake,
}

function BotaoReserva({ classe = '' }: { classe?: string }) {
  return (
    <a className={`botao botao-principal ${classe}`} href={americanHostel.reservas} target="_blank" rel="noreferrer">
      Ver disponibilidade <ArrowRight size={18} aria-hidden="true" />
    </a>
  )
}

function EspacoFoto({ legenda, classe = '' }: { legenda: string; classe?: string }) {
  return (
    <div className={`espaco-foto ${classe}`} role="img" aria-label={`Espaço reservado para foto: ${legenda}`}>
      <div className="espaco-foto-marca" aria-hidden="true">AH</div>
      <div className="espaco-foto-legenda">
        <span>Foto em breve</span>
        <strong>{legenda}</strong>
      </div>
    </div>
  )
}

export function App() {
  const [menuAberto, setMenuAberto] = useState(false)

  const fecharMenu = () => setMenuAberto(false)

  return (
    <>
      <header className="cabecalho">
        <a className="marca" href="#inicio" aria-label="American Hostel e Pousada — início">
          <span className="marca-simbolo">AH</span>
          <span className="marca-texto">American Hostel<small>Joinville · SC</small></span>
        </a>

        <button className="menu-botao" type="button" aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuAberto} onClick={() => setMenuAberto(!menuAberto)}>
          {menuAberto ? <X /> : <Menu />}
        </button>

        <nav className={menuAberto ? 'navegacao aberta' : 'navegacao'} aria-label="Navegação principal">
          <a href="#acomodacoes" onClick={fecharMenu}>Acomodações</a>
          <a href="#estrutura" onClick={fecharMenu}>Estrutura</a>
          <a href="#localizacao" onClick={fecharMenu}>Localização</a>
          <a className="botao botao-cabecalho" href={americanHostel.reservas} target="_blank" rel="noreferrer">Reservar</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-conteudo">
            <p className="sobretitulo">Hospedagem econômica no bairro América</p>
            <h1>Seu lugar em Joinville, <em>do seu jeito.</em></h1>
            <p className="hero-texto">Conforto, cuidado e praticidade para descansar, trabalhar ou descobrir a cidade — sem abrir mão do bom custo-benefício.</p>
            <div className="hero-acoes">
              <BotaoReserva />
              <a className="botao botao-secundario" href={americanHostel.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle size={18} aria-hidden="true" /> Falar no WhatsApp
              </a>
            </div>
            <div className="prova-rapida" aria-label={`${americanHostel.avaliacao} de 5, com ${americanHostel.totalAvaliacoes} avaliações no Google`}>
              <strong>{americanHostel.avaliacao}</strong>
              <span className="estrelas" aria-hidden="true"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></span>
              <span>{americanHostel.totalAvaliacoes} avaliações no Google</span>
            </div>
          </div>

          <div className="hero-visual">
            <EspacoFoto legenda="Fachada ou ambiente principal" />
            <div className="etiqueta-chave" aria-hidden="true">
              <span>AMÉRICA</span>
              <strong>584</strong>
              <small>JOINVILLE</small>
            </div>
          </div>
        </section>

        <section className="faixa-beneficios" aria-label="Principais comodidades">
          {americanHostel.comodidades.map((item) => {
            const Icone = icones[item.icone]
            return <div className="beneficio-resumo" key={item.nome}><Icone size={20} aria-hidden="true" /><span>{item.nome}</span></div>
          })}
        </section>

        <section className="secao secao-intro" id="estrutura">
          <div className="secao-cabecalho">
            <p className="sobretitulo">Uma estadia que funciona para você</p>
            <h2>Acolhimento de casa.<br />Praticidade de hotel.</h2>
          </div>
          <div className="intro-texto">
            <p>Um ambiente limpo, organizado e acolhedor, pensado para quem procura tranquilidade e localização conveniente em Joinville.</p>
            <a href="#acomodacoes">Conheça as acomodações <ChevronRight size={18} aria-hidden="true" /></a>
          </div>
        </section>

        <section className="secao grade-perfis" aria-label="Para cada tipo de estadia">
          {americanHostel.perfis.map((perfil) => (
            <article className="perfil" key={perfil.titulo}>
              <h3>{perfil.titulo}</h3>
              <p>{perfil.texto}</p>
            </article>
          ))}
        </section>

        <section className="secao acomodacoes" id="acomodacoes">
          <div className="acomodacoes-visual">
            <EspacoFoto legenda="Quarto ou suíte" classe="foto-alta" />
          </div>
          <div className="acomodacoes-conteudo">
            <p className="sobretitulo">Acomodações</p>
            <h2>O essencial, muito bem cuidado.</h2>
            <p className="texto-destaque">Espaços confortáveis para você desacelerar e aproveitar cada momento da estadia.</p>
            <ul className="lista-acomodacoes">
              {americanHostel.acomodacoes.map((item) => (
                <li key={item.titulo}>
                  <Check size={18} aria-hidden="true" />
                  <span><strong>{item.titulo}</strong>{item.texto}</span>
                </li>
              ))}
            </ul>
            <BotaoReserva />
          </div>
        </section>

        <section className="secao comodidades">
          <div className="secao-cabecalho estreito">
            <p className="sobretitulo">Tudo ao seu alcance</p>
            <h2>Conforto que acompanha sua rotina.</h2>
          </div>
          <div className="grade-comodidades">
            {americanHostel.comodidades.map((item) => {
              const Icone = icones[item.icone]
              return (
                <article className="comodidade" key={item.nome}>
                  <span className="comodidade-icone"><Icone size={24} aria-hidden="true" /></span>
                  <h3>{item.nome}</h3>
                  <p>{item.detalhe}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="avaliacoes">
          <div className="avaliacoes-nota">
            <span>{americanHostel.avaliacao}</span>
            <div><strong>Excelente</strong><small>{americanHostel.totalAvaliacoes} avaliações no Google</small></div>
          </div>
          <blockquote>“Acomodações confortáveis, limpas e bem organizadas, com uma equipe acolhedora e atenciosa.”</blockquote>
          <p>Síntese dos temas mais citados por hóspedes nas avaliações do Google.</p>
        </section>

        <section className="secao localizacao" id="localizacao">
          <div className="localizacao-conteudo">
            <p className="sobretitulo">Bairro América · Joinville</p>
            <h2>Bem localizado para viver a cidade.</h2>
            <p>Chegue com facilidade e fique perto de opções de transporte, lazer e pontos de interesse de Joinville.</p>
            <address><MapPin size={22} aria-hidden="true" /><span>{americanHostel.endereco}</span></address>
            <div className="horarios">
              <div><small>Check-in</small><strong>A partir das {americanHostel.checkIn}</strong></div>
              <div><small>Check-out</small><strong>Até as {americanHostel.checkOut}</strong></div>
            </div>
            <a className="botao botao-secundario" href={americanHostel.rotas} target="_blank" rel="noreferrer">Abrir rotas <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
          <div className="mapa-reserva" role="img" aria-label="Espaço reservado para mapa da localização">
            <div className="mapa-grade" aria-hidden="true" />
            <MapPin size={38} aria-hidden="true" />
            <strong>R. Capinzal, 584</strong>
            <span>América · Joinville</span>
          </div>
        </section>

        <section className="secao manifesto">
          <span className="manifesto-selo"><BedDouble size={24} aria-hidden="true" /> Acolhimento em Joinville</span>
          <div>
            <p className="sobretitulo">Nossa forma de receber</p>
            <h2>Qualidade e economia caminham lado a lado.</h2>
            <p>Queremos que cada hóspede se sinta à vontade. Por isso, cuidamos dos espaços, dos detalhes e do atendimento para oferecer uma experiência acolhedora, confortável e econômica.</p>
            <p className="acolhimento">Empresa que acolhe a comunidade LGBTQ+</p>
          </div>
        </section>

        <section className="cta-final">
          <div>
            <p className="sobretitulo">Sua estadia começa aqui</p>
            <h2>Joinville espera por você.</h2>
            <p>Consulte as opções disponíveis e escolha a acomodação ideal.</p>
          </div>
          <BotaoReserva />
        </section>
      </main>

      <footer className="rodape">
        <div className="rodape-marca"><span className="marca-simbolo">AH</span><strong>American Hostel e Pousada</strong></div>
        <div className="rodape-dados">
          <a href={americanHostel.whatsapp} target="_blank" rel="noreferrer">{americanHostel.telefone}</a>
          <span>{americanHostel.endereco}</span>
        </div>
        <p>Hospedagem econômica e acolhedora em Joinville.</p>
      </footer>
    </>
  )
}
