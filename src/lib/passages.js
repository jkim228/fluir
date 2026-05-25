/**
 * Mock passage bank — one or more passages per target word.
 * Each passage is written in European Portuguese, 2–4 sentences,
 * targeting A2–B1 comprehension, drawn from everyday contexts.
 *
 * @type {Array<{id: string, targetWord: string, text: string}>}
 */
export const PASSAGES = [
  {
    id: 'saudade-1',
    targetWord: 'saudade',
    text: 'A Maria foi ao mercado comprar pão e sentiu uma saudade de casa. O sol brilhava sobre as colinas de Lisboa.',
  },
  {
    id: 'saudade-2',
    targetWord: 'saudade',
    text: 'Enquanto ouvia o fado, o Pedro fechou os olhos cheios de saudade. Lembrou-se dos verões na praia com a família.',
  },
  {
    id: 'praia-1',
    targetWord: 'praia',
    text: 'No fim de semana, a Ana foi à praia com os amigos. O mar estava calmo e a areia estava quente.',
  },
  {
    id: 'café-1',
    targetWord: 'café',
    text: 'O João entrou no café da esquina e pediu uma bica. Sentou-se junto à janela a ler o jornal.',
  },
  {
    id: 'chuva-1',
    targetWord: 'chuva',
    text: 'A chuva começou de repente enquanto a Sofia passeava pelo Chiado. Ela entrou numa livraria para se abrigar.',
  },
  {
    id: 'comboio-1',
    targetWord: 'comboio',
    text: 'O comboio para o Porto sai às nove da manhã. O Rui chegou à estação com cinco minutos de avanço.',
  },
  {
    id: 'jantar-1',
    targetWord: 'jantar',
    text: 'A família reuniu-se para jantar e a mãe fez bacalhau com batatas. Falaram de tudo e riram muito.',
  },
  {
    id: 'amigo-1',
    targetWord: 'amigo',
    text: 'O Miguel encontrou um amigo antigo no mercado de Campo de Ourique. Combinaram tomar um café na semana seguinte.',
  },
]

/**
 * Returns all passages for a given target word.
 * Falls back to all passages if no match is found.
 *
 * @param {string} word
 * @returns {Array<{id: string, targetWord: string, text: string}>}
 */
export function getPassagesForWord(word) {
  const matches = PASSAGES.filter(
    (p) => p.targetWord.toLowerCase() === word.toLowerCase(),
  )
  return matches.length > 0 ? matches : PASSAGES
}
