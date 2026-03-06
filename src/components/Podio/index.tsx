import type { Jogador } from "../../interfaces/Jogador";

import styles from "./Podio.module.scss";

import Avatar from "../Avatar";
import { avatares } from "../../utils/avatares";

interface PodioProps {
  estilo?: string;
}

const jogadores: Jogador[] = [
  {
    nome: "TochaViva",
    id: "469874563",
    tempo: 49.8,
    avatar: 0,
    criado_em: "2026-03-03T17:15:02.539Z",
  },
  {
    nome: "Jurema",
    id: "758991532",
    tempo: 50.2,
    avatar: 1,
    criado_em: "2026-03-03T17:15:02.539Z",
  },
  {
    nome: "Tocha",
    id: "132756984",
    tempo: 54.4,
    avatar: 2,
    criado_em: "2026-03-03T17:15:02.539Z",
  },
];

const ordemPodio = [1, 0, 2];

export default function Podio({ estilo }: PodioProps) {
  return (
    <section className={`${styles.secaoPodio} ${estilo}`}>
      {ordemPodio.map((indiceJogador) => {
        const jogador = jogadores[indiceJogador];
        const posicao = indiceJogador + 1;

        return (
          <div key={jogador.id} className={`${styles.top3} ${styles[`posicao${posicao}`]}`}>
            <div className={styles.informacoesJogador}>
              <Avatar src={avatares[jogador.avatar]} alt="Avatar" />

              <h3 className={styles.nomeJogador}>{jogador.nome}</h3>

              <p className={styles.idJogador}>#{jogador.id}</p>
            </div>

            <div className={styles.informacoesColocacao}>
              <div className={styles.conteudoColocacao}>
                <div className={styles.jogadorColocacao}>
                  <span className={styles.posicaoColocacao}>{posicao}º</span>
                </div>

                <span className={styles.tempoColocacao}>{jogador.tempo}seg</span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
