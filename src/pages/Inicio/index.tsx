import { useNavigate } from "react-router-dom";
import { Info, Trophy, UserRoundPen } from "lucide-react";

import styles from "./Inicio.module.scss";
import avatar from "/public/avatar-1-gamebiblico.svg";

export default function Inicio() {
  const navigate = useNavigate();

  return (
    <main className={styles.escopo}>
      <section className={styles.secaoInformacoes}>
        <button className={styles.botaoDeInformacoes}>
          <strong>GameBíblico</strong>
          <Info size={18} strokeWidth={2.5} />
        </button>
      </section>

      <section className={styles.secaoJogador}>
        <div className={styles.imagemJogador}>
          <img src={avatar} alt="Avatar" />
        </div>

        <div className={styles.identificadoresJogador}>
          <h3 className={styles.nomeJogador}>TochaViva</h3>
          <p className={styles.idJogador}>#469874563</p>
        </div>

        <a onClick={() => navigate("/jogatina")}>
          <button className={styles.botaoIniciarPartida}>Iniciar Partida</button>
        </a>
      </section>

      <section className={styles.secaoGuias}>
        <a onClick={() => navigate("/ranking")}>
          <button className={styles.botoesGuias}>
            <Trophy size={25} strokeWidth={2.5} />

            <span>Ranking</span>
          </button>
        </a>

        <a onClick={() => navigate("/perfil")}>
          <button className={styles.botoesGuias}>
            <UserRoundPen size={25} strokeWidth={2.5} />

            <span>Pefil</span>
          </button>
        </a>
      </section>
    </main>
  )
}