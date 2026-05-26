/**
 * @type {Record<string, { translation: string, example: string }>}
 */
const TRANSLATIONS = {
  // Target words
  saudade: { translation: 'longing, nostalgia', example: 'Tenho saudade dos dias de verão.' },
  praia: { translation: 'beach', example: 'Vamos à praia no domingo?' },
  café: { translation: 'coffee; café', example: 'Quero um café com leite, por favor.' },
  chuva: { translation: 'rain', example: 'A chuva caiu a noite toda.' },
  comboio: { translation: 'train', example: 'O comboio parte às dez da manhã.' },
  jantar: { translation: 'dinner; to dine', example: 'O jantar estava delicioso.' },
  amigo: { translation: 'friend', example: 'O meu melhor amigo mora em Lisboa.' },
  // Common passage words
  mercado: { translation: 'market', example: 'Fui ao mercado comprar fruta.' },
  pão: { translation: 'bread', example: 'Comprei pão fresco na padaria.' },
  sol: { translation: 'sun', example: 'O sol brilha hoje.' },
  casa: { translation: 'house, home', example: 'Estou em casa.' },
  mar: { translation: 'sea', example: 'O mar estava calmo.' },
  areia: { translation: 'sand', example: 'A areia da praia era muito fina.' },
  fado: { translation: 'fado (Portuguese music)', example: 'O fado é a alma de Portugal.' },
  verão: { translation: 'summer', example: 'No verão vou sempre à praia.' },
  família: { translation: 'family', example: 'Adoro passar tempo com a minha família.' },
  amigos: { translation: 'friends', example: 'Saí com os meus amigos ontem à noite.' },
  semana: { translation: 'week', example: 'Esta semana estou muito ocupado.' },
  manhã: { translation: 'morning', example: 'De manhã tomo sempre café.' },
  estação: { translation: 'station; season', example: 'A estação de comboio fica perto.' },
  janela: { translation: 'window', example: 'Sentei-me junto à janela.' },
  jornal: { translation: 'newspaper', example: 'Leio o jornal de manhã.' },
  livraria: { translation: 'bookshop', example: 'Há uma livraria perto do café.' },
  esquina: { translation: 'street corner', example: 'O café fica na esquina.' },
  // General vocabulary
  dia: { translation: 'day', example: 'Bom dia!' },
  noite: { translation: 'night, evening', example: 'Boa noite!' },
  tempo: { translation: 'time; weather', example: 'O tempo está bom hoje.' },
  água: { translation: 'water', example: 'Quero um copo de água.' },
  vinho: { translation: 'wine', example: 'Um copo de vinho, por favor.' },
  comida: { translation: 'food', example: 'A comida portuguesa é muito boa.' },
  livro: { translation: 'book', example: 'Estou a ler um livro interessante.' },
  rua: { translation: 'street', example: 'A livraria fica na rua principal.' },
  pessoa: { translation: 'person', example: 'Ela é uma pessoa muito simpática.' },
  trabalho: { translation: 'work, job', example: 'Vou ao trabalho de comboio.' },
  cidade: { translation: 'city', example: 'Lisboa é uma cidade linda.' },
  fim: { translation: 'end; weekend (fim de semana)', example: 'No fim de semana descanso.' },
  colinas: { translation: 'hills', example: 'As colinas de Lisboa são lindas.' },
}

/**
 * @param {string} word
 * @returns {{ translation: string, example: string } | null}
 */
export function getTranslation(word) {
  return TRANSLATIONS[word.toLowerCase()] ?? null
}
