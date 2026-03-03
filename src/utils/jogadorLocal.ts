import nomeJogadores from "./nomeJogadores";

export type JogadorLocal = {
  nome: string;
  id: string;
  criado_em: string;
};

const CHAVE_ARMAZENAMENTO = "jogador";

function gerarIdJogador() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return `#${crypto.randomUUID().replace(/-/g, "").slice(0, 9)}`;
  }

  return `#${Math.floor(100_000_000 + Math.random() * 900_000_000)}`;
}

function sortearNomeJogador() {
  const indice = Math.floor(Math.random() * nomeJogadores.length);
  return nomeJogadores[indice].nome;
}

function criarJogadorLocal(): JogadorLocal {
  return {
    nome: sortearNomeJogador(),
    id: gerarIdJogador(),
    criado_em: new Date().toISOString(),
  };
}

/**
 * @param ID Identificador do jogador
 * @param NomeJogador Um nome selecionado automáticamente da lista de nomes
 * @returns Um objeto com NOME e ID do jogador
 */
export function obterOuCriarJogadorLocal(): JogadorLocal {
  if (typeof window === "undefined") {
    return criarJogadorLocal();
  }

  const salvo = window.localStorage.getItem(CHAVE_ARMAZENAMENTO);

  if (salvo) {
    try {
      const jogador = JSON.parse(salvo) as JogadorLocal;

      if (jogador.nome && jogador.id) {
        return jogador;
      }
    } catch {
      // Ignora valor invalido e recria.
    }
  }

  const novoJogador = criarJogadorLocal();
  window.localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(novoJogador));

  return novoJogador;
}

