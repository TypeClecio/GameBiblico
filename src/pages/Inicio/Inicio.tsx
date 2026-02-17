import { Info, Trophy, UserRoundPen } from "lucide-react";

import styles from "./Inicio.module.scss";
import avatar from "../../../public/avatar-1-gamebiblico.svg";

export default function Inicio() {
  return (
    <main className={styles.escopo}>
      <section id="informacoes" className={styles.secaoInformacoes}>
        <button className={styles.botaoDeInformacoes}>
          <Info size={30} strokeWidth={2.5} />
        </button>
      </section>

      <section id="avatar" className={styles.secaoAvatar}>
        <div id="imagem-jogador" className={styles.imagemJogador}>
          <img src={avatar} alt="Avatar" />
        </div>

        <div id="nome-e-id-jogador" className={styles.identificadoresJogador}>
          <h3 className={styles.nomeJogador}>TochaViva</h3>
          <p className={styles.idJogador}>#469874563</p>
        </div>

        <button id="iniciar-partida" className={styles.botaoIniciarPartida}>Iniciar Partida</button>
      </section>
      
      <section id="guias" className={styles.secaoGuias}>
        <button id="ranking" className={styles.botoesGuias}>
          <Trophy size={30} strokeWidth={2.5} />
          
          <span>Ranking</span>
        </button>
        
        <button id="perfil" className={styles.botoesGuias}>
          <UserRoundPen size={30} strokeWidth={2.5} />
          
          <span>Pefil</span>
        </button>
      </section>
    </main>
  )
}