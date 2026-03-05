import type { JSX } from "react";

import styles from "./DemaisJogadores.module.scss";
import Avatar from "../Avatar";
import { avatares } from "../../utils/avatares";

interface Jogador {
  nome: string;
  id: string;
  tempo: number;
  avatar: number;
  criado_em: string;
}

interface DemaisJogadoresPorps {
  estilo?: string;
  resumoPartida?: boolean;
}

const pod = [
  {
    nome: "TachoViva",
    id: "469874563",
    tempo: 63.0,
    avatar: 0,
    criado_em: "2026-03-03T17:15:02.539Z"
  },
  {
    nome: "Levy",
    id: "56823356",
    tempo: 65.2,
    avatar: 1,
    criado_em: "2026-03-03T17:15:02.539Z"
  },
  {
    nome: "Dantas",
    id: "12235784",
    tempo: 65.3,
    avatar: 2,
    criado_em: "2026-03-03T17:15:02.539Z"
  },
  {
    nome: "Jéssica",
    id: "586557443",
    tempo: 68.6,
    avatar: 3,
    criado_em: "2026-03-03T17:15:02.539Z"
  }
]

export default function DemaisJogadores({ estilo, resumoPartida }: DemaisJogadoresPorps): JSX.Element {
  const resumo = resumoPartida ? "efeitoCascata" : "";

  return (
    <section className={`${styles.secaoListaDeJogadores} ${estilo}`}>
      <ul className={`${styles.listaDemaisColocados} ${styles[resumo]}`}>{
        pod.map((jogador: Jogador, index) => (
          <li key={jogador.id} className={styles.jogadorColocado}>
            <span className={styles.posicaoColocado}>{index + 4}</span>

            <Avatar src={avatares[jogador.avatar]} alt="Avatar" tamanho={30} />

            <div className={styles.informacoesJogadorColocado}>
              <p className={styles.nomeJogadorColocado}>{jogador.nome}</p>
              <p className={styles.idJogadorColocado}>#{jogador.id}</p>
            </div>

            <p className={styles.tempoColocado}>{jogador.tempo}seg</p>
          </li>
        ))
      }</ul>
    </section>
  )
}