import { ChevronLeft } from "lucide-react";

import styles from "./Ranking.module.scss";
import avatar from "../../../public/avatar-1-gamebiblico.svg";

export default function Ranking() {
  return (
    <main className={styles.escopo}>
      <section className={styles.secaoCabecalho}>
        <a href="/">
          <button>
            <ChevronLeft size={22} strokeWidth={3} />
          </button>
        </a>

        <span className={styles.tituloPagina}>Ranking</span>

        <span className={styles.complementoCabecalho}>.</span>
      </section>
      
      <section className={styles.secaoPodio}>
        <div className={`${styles.top3} ${styles.posicao2}`}>
          <div className={styles.informacoesJogador}>
            <img className={styles.avatarJogador} src={avatar} alt="Avatar" />

            <h3 className={styles.nomeJogador}>Tocha</h3>

            <p className={styles.idJogador}>#132756984</p>
          </div>
          
          <div className={styles.informacoesColocacao}>
            <div className={styles.conteudoColocacao}>
              <div className={styles.jogadorColocacao}>
                <span className={styles.posicaoColocacao}>2º</span>
              </div>

              <span className={styles.tempoColocacao}>54.4seg</span>
            </div>
          </div>
        </div>

        <div className={`${styles.top3} ${styles.posicao1}`}>
          <div className={styles.informacoesJogador}>
            <img className={styles.avatarJogador} src={avatar} alt="Avatar" />
            
            <h3 className={styles.nomeJogador}>Jurema</h3>

            <p className={styles.idJogador}>#758991532</p>
          </div>
          
          <div className={styles.informacoesColocacao}>
            <div className={styles.conteudoColocacao}>
              <div className={styles.jogadorColocacao}>
                <span className={styles.posicaoColocacao}>1º</span>
              </div>

              <span className={styles.tempoColocacao}>50.2seg</span>
            </div>
          </div>
        </div>

        <div className={`${styles.top3} ${styles.posicao3}`}>
          <div className={styles.informacoesJogador}>
            <img className={styles.avatarJogador} src={avatar} alt="Avatar" />
            
            <h3 className={styles.nomeJogador}>Clécio</h3>

            <p className={styles.idJogador}>#563112854</p>
          </div>
          
          <div className={styles.informacoesColocacao}>
            <div className={styles.conteudoColocacao}>
              <div className={styles.jogadorColocacao}>
                <span className={styles.posicaoColocacao}>3º</span>
              </div>

              <span className={styles.tempoColocacao}>59.7seg</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.secaoListaDeJogadores}></section>
    </main>
  )
}