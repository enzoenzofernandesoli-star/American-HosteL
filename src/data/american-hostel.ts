export const americanHostel = {
  nome: 'American Hostel e Pousada',
  cidade: 'Joinville',
  bairro: 'América',
  endereco: 'R. Capinzal, 584 - América, Joinville - SC, 89204-120',
  telefone: '(47) 99918-8474',
  whatsapp: 'https://api.whatsapp.com/send?phone=5547999188474&text=Olá%2C%20gostaria%20de%20reservar%20um%20quarto.',
  reservas: 'https://nobeds.app/OnePage/1508186526',
  rotas: 'https://www.google.com/maps/dir/?api=1&destination=R.%20Capinzal%2C%20584%20-%20América%2C%20Joinville%20-%20SC%2C%2089204-120',
  avaliacao: '4,8',
  totalAvaliacoes: 284,
  checkIn: '14:00',
  checkOut: '11:00',
  comodidades: [
    { nome: 'Wi-Fi gratuito', detalhe: 'Conexão para sua estadia e trabalho remoto', icone: 'wifi' },
    { nome: 'Café da manhã', detalhe: 'Incluso para começar bem o dia', icone: 'cafe' },
    { nome: 'Estacionamento', detalhe: 'Comodidade no próprio local', icone: 'carro' },
    { nome: 'Piscina', detalhe: 'Um espaço convidativo para relaxar', icone: 'piscina' },
    { nome: 'Ar-condicionado', detalhe: 'Disponível em algumas acomodações', icone: 'ar' },
  ],
  perfis: [
    { titulo: 'Turismo', texto: 'Uma base acolhedora para conhecer Joinville com praticidade.' },
    { titulo: 'Trabalho', texto: 'Localização conveniente e estrutura para manter a rotina em dia.' },
    { titulo: 'Workation', texto: 'Internet estável, conforto e tranquilidade para trabalhar e descansar.' },
  ],
  acomodacoes: [
    { titulo: 'Quartos confortáveis', texto: 'Ambientes simples, funcionais e preparados com cuidado para uma estadia tranquila.' },
    { titulo: 'Opções privativas', texto: 'Algumas acomodações contam com banheiro próprio para mais privacidade.' },
    { titulo: 'Essenciais bem cuidados', texto: 'Camas confortáveis, roupas de cama limpas e espaços bem organizados.' },
  ],
} as const

export type DadosAmericanHostel = typeof americanHostel
