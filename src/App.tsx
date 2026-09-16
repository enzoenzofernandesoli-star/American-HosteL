import {
  ArrowRight,
  Bath,
  BedDouble,
  CalendarClock,
  Car,
  Check,
  ChevronRight,
  Coffee,
  CreditCard,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Percent,
  Snowflake,
  Star,
  Tv,
  Users,
  Waves,
  Wifi,
  X,
  XCircle,
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

const iconesPolitica = [Percent, CreditCard, CalendarClock, XCircle]

function BotaoReserva({ classe = '' }: { classe?: string }) {
  return (
    <a className={`botao botao-principal ${classe}`} href={americanHostel.reservas} target="_blank" rel="noreferrer">
      Ver disponibilidade <ArrowRight size={18} aria-hidden="true" />
    </a>
  )
}

function Estrelas({ rotulo }: { rotulo?: string }) {
  return (
    <span className="estrelas" aria-label={rotulo} role={rotulo ? 'img' : undefined} aria-hidden={rotulo ? undefined : true}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </span>
  )
}

function EspacoFoto({ legenda, foto, classe = '' }: { legenda: string; foto?: string; classe?: string }) {
  return (
    <div className={`espaco-foto ${classe}`} role="img" aria-label={legenda}>
      <div className="espaco-foto-marca" aria-hidden="true">AH</div>
      {foto ? <img className="foto-real" src={foto} alt="" loading="lazy" onError={(e) => e.currentTarget.remove()} /> : null}
      <div className="espaco-foto-legenda">
        <span>American Hostel</span>
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
          <span className="marca-simbolo" aria-hidden="true">AH</span>
          <span className="marca-texto">American Hostel<small>Joinville · SC</small></span>
        </a>

        <button className="menu-botao" type="button" aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuAberto} onClick={() => setMenuAberto(!menuAberto)}>
          {menuAberto ? <X /> : <Menu />}
        </button>

        <nav className={menuAberto ? 'navegacao aberta' : 'navegacao'} aria-label="Navegação principal">
          <a href="#quartos" onClick={fecharMenu}>Quartos</a>
          <a href="#estrutura" onClick={fecharMenu}>Estrutura</a>
          <a href="#localizacao" onClick={fecharMenu}>Localização</a>
          <a href="#avaliacoes" onClick={fecharMenu}>Avaliações</a>
          <a className="botao botao-cabecalho" href={americanHostel.reservas} target="_blank" rel="noreferrer">Reservar</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-conteudo">
            <p className="sobretitulo">{americanHostel.posicionamento}</p>
            <h1>Hospedagem econômica <em>no bairro América.</em></h1>
            <p className="hero-texto">
              Quartos confortáveis com café da manhã incluso, Wi-Fi gratuito, piscina e estacionamento — a 2 km do centro
              de Joinville. Diárias a partir de R$ {americanHostel.diariaMinima}.
            </p>
            <div className="hero-acoes">
              <BotaoReserva />
              <a className="botao botao-secundario" href={americanHostel.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle size={18} aria-hidden="true" /> Falar no WhatsApp
              </a>
            </div>
            <div className="prova-rapida">
              <strong>{americanHostel.avaliacao}</strong>
              <Estrelas rotulo={`${americanHostel.avaliacao} de 5 no Google`} />
              <span>{americanHostel.totalAvaliacoes} avaliações no Google</span>
            </div>
          </div>

          <div className="hero-visual">
            <EspacoFoto legenda="Suíte Los Angeles" foto={americanHostel.quartos[0].foto} />
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
            <p className="sobretitulo">{americanHostel.tagline}</p>
            <h2>Acolhimento de casa.<br />Praticidade de hotel.</h2>
          </div>
          <div className="intro-texto">
            <p>
              Um hostel e pousada econômica no bairro América, em Joinville: 5 quartos para até {americanHostel.capacidadeTotal} hóspedes,
              ambiente limpo e organizado, atendimento próximo e ótimo custo-benefício.
            </p>
            <a href="#quartos">Conheça os quartos <ChevronRight size={18} aria-hidden="true" /></a>
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

        <section className="secao quartos" id="quartos">
          <div className="quartos-topo">
            <div className="secao-cabecalho">
              <p className="sobretitulo">Nossos 5 quartos</p>
              <h2>Escolha o seu estado.</h2>
            </div>
            <p>
              Cada quarto leva o nome de um lugar dos Estados Unidos. Duas suítes com banheiro no quarto e três quartos
              privativos com banheiro externo dividido com apenas 1 outro quarto.
            </p>
          </div>

          <div className="grade-quartos">
            {americanHostel.quartos.map((quarto) => (
              <article className="quarto" key={quarto.nome}>
                <div className="quarto-foto">
                  <span className="quarto-foto-vazia" aria-hidden="true">{quarto.nome}</span>
                  <img src={quarto.foto} alt={`Foto do quarto ${quarto.nome}`} loading="lazy" onError={(e) => e.currentTarget.remove()} />
                  <span className="quarto-preco">R$ {quarto.preco} <small>/noite</small></span>
                </div>
                <div className="quarto-corpo">
                  <p className="quarto-tipo">{quarto.tipo}</p>
                  <h3>{quarto.nome}</h3>
                  <p className="quarto-chamada">{quarto.chamada}</p>
                  <ul className="quarto-itens">
                    <li><Users size={17} aria-hidden="true" /><span>Acomoda até {quarto.hospedes} {quarto.hospedes > 1 ? 'pessoas' : 'pessoa'}</span></li>
                    <li><BedDouble size={17} aria-hidden="true" /><span>{quarto.camas}</span></li>
                    <li><Bath size={17} aria-hidden="true" /><span>{quarto.banheiro}</span></li>
                    <li><Snowflake size={17} aria-hidden="true" /><span>{quarto.clima}</span></li>
                    {quarto.tv ? <li><Tv size={17} aria-hidden="true" /><span>{quarto.tv}</span></li> : null}
                  </ul>
                  <a className="quarto-acao" href={quarto.url} target="_blank" rel="noreferrer">
                    Reservar {quarto.nome} <ArrowRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="quartos-rodape">
            <BotaoReserva />
            <span>Diárias consultadas para 1 hóspede. O valor varia conforme a data e o número de pessoas.</span>
          </div>
        </section>

        <section className="secao acomodacoes" id="acomodacoes">
          <div className="acomodacoes-visual">
            <EspacoFoto legenda="Suíte Texas" foto={americanHostel.quartos[1].foto} classe="foto-alta" />
          </div>
          <div className="acomodacoes-conteudo">
            <p className="sobretitulo">Como preparamos cada quarto</p>
            <h2>O essencial, muito bem cuidado.</h2>
            <p className="texto-destaque">
              Acreditamos que o verdadeiro conforto está nos detalhes essenciais: um espaço funcional, tranquilo e bem
              estruturado, onde você relaxa sem preocupações.
            </p>
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
          <div className="chips">
            {americanHostel.comodidadesExtras.map((extra) => (
              <span className="chip" key={extra}>{extra}</span>
            ))}
          </div>
        </section>

        <section className="avaliacoes" id="avaliacoes">
          <div className="avaliacoes-nota">
            <span>{americanHostel.avaliacao}</span>
            <div><strong>Excelente</strong><small>{americanHostel.totalAvaliacoes} avaliações no Google</small></div>
          </div>
          <blockquote>“{americanHostel.resumoGoogle}”</blockquote>
          <p>Resumo das avaliações do Google. A anfitriã {americanHostel.anfitria} é o nome mais citado pelos hóspedes.</p>
        </section>

        <section className="secao depoimentos" aria-label="Depoimentos de hóspedes">
          <div className="grade-depoimentos">
            {americanHostel.depoimentos.map((depoimento) => (
              <article className="depoimento" key={depoimento.nome}>
                <Estrelas rotulo="5 de 5" />
                <p>“{depoimento.texto}”</p>
                <div>
                  <strong>{depoimento.nome}</strong>
                  <small>{depoimento.contexto}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="secao localizacao" id="localizacao">
          <div className="localizacao-conteudo">
            <p className="sobretitulo">Bairro América · Joinville</p>
            <h2>Bem localizado para viver a cidade.</h2>
            <p>
              Estamos em uma localização privilegiada, com fácil acesso aos principais pontos turísticos e serviços de
              Joinville — e a apenas 1,5 km do Centreventos Cau Hansen.
            </p>
            <address><MapPin size={22} aria-hidden="true" /><span>{americanHostel.endereco}</span></address>
            <div className="horarios">
              <div><small>Check-in</small><strong>A partir das {americanHostel.checkIn}</strong></div>
              <div><small>Check-out</small><strong>Até as {americanHostel.checkOut}</strong></div>
            </div>
            <a className="botao botao-secundario" href={americanHostel.rotas} target="_blank" rel="noreferrer">Abrir rotas <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
          <div className="mapa-reserva" role="img" aria-label="Localização: Rua Capinzal, 584, bairro América, Joinville">
            <div className="mapa-grade" aria-hidden="true" />
            <MapPin size={38} aria-hidden="true" />
            <strong>R. Capinzal, 584</strong>
            <span>América · Joinville · {americanHostel.checkInDetalhe}</span>
          </div>
        </section>

        <section className="secao secao-intro" aria-label="O que há por perto">
          <div className="secao-cabecalho">
            <p className="sobretitulo">O que há por perto</p>
            <h2>Joinville a poucos minutos.</h2>
          </div>
          <div className="intro-texto">
            <p>O bairro América tem nota 4,4 no Google e é classificado como “ótimo para visitantes”.</p>
          </div>
        </section>

        <section className="secao" aria-label="Distâncias">
          <ul className="lista-distancias">
            {americanHostel.distancias.map((item) => (
              <li key={item.ponto}><span>{item.ponto}</span><strong>{item.km}</strong></li>
            ))}
          </ul>
        </section>

        <section className="secao politicas">
          <div className="secao-cabecalho estreito">
            <p className="sobretitulo">Reserva e pagamento</p>
            <h2>Sem surpresas na chegada.</h2>
          </div>
          <div className="grade-politicas">
            {americanHostel.politicas.map((politica, indice) => {
              const Icone = iconesPolitica[indice]
              return (
                <article className="politica" key={politica.titulo}>
                  <span><Icone size={19} aria-hidden="true" /></span>
                  <h3>{politica.titulo}</h3>
                  <p>{politica.texto}</p>
                </article>
              )
            })}
          </div>
          <p className="politicas-nota">
            Ficou com dúvida sobre a reserva? Fale com a gente no WhatsApp {americanHostel.telefone}.
          </p>
        </section>

        <section className="secao manifesto">
          <span className="manifesto-selo"><BedDouble size={24} aria-hidden="true" /> Acolhimento em Joinville</span>
          <div>
            <p className="sobretitulo">Nossa missão</p>
            <h2>Qualidade e economia caminham lado a lado.</h2>
            <p>
              Nossa missão é proporcionar uma experiência de hospedagem acolhedora, confortável e acessível, com excelente
              custo-benefício. Cada espaço da pousada é projetado para oferecer o máximo de aconchego e funcionalidade, com
              higiene impecável, quartos bem equipados e atendimento personalizado.
            </p>
            <p>
              Seja para uma curta estadia ou para um descanso prolongado, {americanHostel.anfitria} e a equipe estão prontas
              para receber você com um sorriso.
            </p>
            <p className="acolhimento">{americanHostel.selo}</p>
          </div>
        </section>

        <section className="cta-final">
          <div>
            <p className="sobretitulo">Sua estadia começa aqui</p>
            <h2>Joinville espera por você.</h2>
            <p>Consulte as datas disponíveis e garanta seu quarto a partir de R$ {americanHostel.diariaMinima} a diária.</p>
          </div>
          <BotaoReserva />
        </section>
      </main>

      <footer className="rodape">
        <div className="rodape-marca">
          <span className="marca-simbolo" aria-hidden="true">AH</span>
          <strong>{americanHostel.nomeCompleto}</strong>
        </div>
        <div className="rodape-dados">
          <a href={americanHostel.whatsapp} target="_blank" rel="noreferrer">WhatsApp {americanHostel.telefone}</a>
          <span>{americanHostel.endereco}</span>
          <span>Check-in {americanHostel.checkIn} · Check-out {americanHostel.checkOut}</span>
          <div className="rodape-links">
            <a href={americanHostel.instagram} target="_blank" rel="noreferrer">
              <Instagram size={14} aria-hidden="true" /> {americanHostel.instagramHandle}
            </a>
            <a href={americanHostel.booking} target="_blank" rel="noreferrer">Booking</a>
            <a href={americanHostel.tripadvisor} target="_blank" rel="noreferrer">TripAdvisor</a>
          </div>
        </div>
        <p>Hostel e pousada econômica no bairro América, em Joinville · {americanHostel.selo}</p>
      </footer>
    </>
  )
}
