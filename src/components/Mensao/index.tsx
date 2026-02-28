import styles from "./Mensao.module.scss";
import avatar from "/public/avatar-1-gamebiblico.svg";

export default function Mensao() {
  return (
    <section className={styles.secaoListaDeJogadores}>
      <ul className={styles.listaDemaisColocados}>
        <li className={styles.jogadorColocado}>
          <span className={styles.posicaoColocado}>4</span>
          <img className={styles.avatarColocado} src={avatar} alt="Avatar" />
          <div className={styles.informacoesJogadorColocado}>
            <p className={styles.nomeJogadorColocado}>TachoViva</p>
            <p className={styles.idJogadorColocado}>#469874563</p>
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
      </ul>
    </section>
  )
}