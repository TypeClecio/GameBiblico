import type { JSX } from "react";
import { demaisJogadores } from "../../data/demaisJogadores";
import type { Jogador } from "../../interfaces/Jogador";

import styles from "./DemaisJogadores.module.scss";
import Avatar from "../Avatar";
import { avatares } from "../../utils/avatares";

interface DemaisJogadoresPorps {
  estilo?: string;
  resumoPartida?: boolean;
}

export default function DemaisJogadores({ estilo, resumoPartida }: DemaisJogadoresPorps): JSX.Element {
  const resumo = resumoPartida ? "efeitoCascata" : "";

  return (
    <section className={`${styles.secaoListaDeJogadores} ${estilo}`}>
      <ul className={`${styles.listaDemaisColocados} ${styles[resumo]}`}>{
        demaisJogadores.map((jogador: Jogador, index) => (
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