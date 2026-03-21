import { ordemPodio, podio } from "../../data/podio";
import styles from "./Podio.module.scss";

import Avatar from "../Avatar";
import { avatares } from "../../utils/avatares";

interface PodioProps {
  estilo?: string;
  tamanhoAvatar?: number;
}

export default function Podio({ estilo, tamanhoAvatar }: PodioProps) {
  return (
    <section className={`${styles.secaoPodio} ${estilo}`}>
      {ordemPodio.map((indiceJogador) => {
        const jogador = podio[indiceJogador];
        const posicao = indiceJogador + 1;

        return (
          <div key={jogador.id} className={`${styles.top3} ${styles[`posicao${posicao}`]}`}>
            <div className={styles.informacoesJogador}>
              <Avatar src={avatares[jogador.avatar]} alt="Avatar" tamanho={tamanhoAvatar} />

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
