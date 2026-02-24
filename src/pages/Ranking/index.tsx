import { ChevronLeft, Share2 } from "lucide-react";

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

        <span className={styles.complementoCabecalho}>
          <Share2 size={22} strokeWidth={2} />
        </span>
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

      <section className={styles.secaoListaDeJogadores}>
        <ul className={styles.listaDemaisColocados}>
          <li className={styles.jogadorColocado}>
            <span className={styles.posicaoColocado}>4</span>
            <img className={styles.avatarColocado} src={avatar} alt="Avatar" />
            <div className={styles.informacoesJogadorColocado}>
              <p className={styles.nomeJogadorColocado}>Raimundo</p>
              <p className={styles.idJogadorColocado}>#756984278</p>
            </div>
            <p className={styles.tempoColocado}>63.0seg</p>
          </li>

          <li className={styles.jogadorColocado}>
            <span className={styles.posicaoColocado}>5</span>
            <img className={styles.avatarColocado} src={avatar} alt="Avatar" />
            <div className={styles.informacoesJogadorColocado}>
              <p className={styles.nomeJogadorColocado}>Levy</p>
              <p className={styles.idJogadorColocado}>#56823356</p>
            </div>
            <p className={styles.tempoColocado}>65.2seg</p>
          </li>

          <li className={styles.jogadorColocado}>
            <span className={styles.posicaoColocado}>6</span>
            <img className={styles.avatarColocado} src={avatar} alt="Avatar" />
            <div className={styles.informacoesJogadorColocado}>
              <p className={styles.nomeJogadorColocado}>Dantas</p>
              <p className={styles.idJogadorColocado}>#12235784</p>
            </div>
            <p className={styles.tempoColocado}>65.3seg</p>
          </li>

          <li className={styles.jogadorColocado}>
            <span className={styles.posicaoColocado}>7</span>
            <img className={styles.avatarColocado} src={avatar} alt="Avatar" />
            <div className={styles.informacoesJogadorColocado}>
              <p className={styles.nomeJogadorColocado}>Jéssica</p>
              <p className={styles.idJogadorColocado}>#586557443</p>
            </div>
            <p className={styles.tempoColocado}>68.6seg</p>
          </li>

          <li className={styles.jogadorColocado}>
            <span className={styles.posicaoColocado}>8</span>
            <img className={styles.avatarColocado} src={avatar} alt="Avatar" />
            <div className={styles.informacoesJogadorColocado}>
              <p className={styles.nomeJogadorColocado}>Pedro</p>
              <p className={styles.idJogadorColocado}>#966325884</p>
            </div>
            <p className={styles.tempoColocado}>73.5seg</p>
          </li>

          <li className={styles.jogadorColocado}>
            <span className={styles.posicaoColocado}>9</span>
            <img className={styles.avatarColocado} src={avatar} alt="Avatar" />
            <div className={styles.informacoesJogadorColocado}>
              <p className={styles.nomeJogadorColocado}>Batista</p>
              <p className={styles.idJogadorColocado}>#357854698</p>
            </div>
            <p className={styles.tempoColocado}>77.8seg</p>
          </li>

          <li className={styles.jogadorColocado}>
            <span className={styles.posicaoColocado}>10</span>
            <img className={styles.avatarColocado} src={avatar} alt="Avatar" />
            <div className={styles.informacoesJogadorColocado}>
              <p className={styles.nomeJogadorColocado}>Estevam</p>
              <p className={styles.idJogadorColocado}>#874537966</p>
            </div>
            <p className={styles.tempoColocado}>79.1seg</p>
          </li>
        </ul>
      </section>
    </main>
  )
}