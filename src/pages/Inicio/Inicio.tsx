import { Info, Trophy, UserRoundPen } from "lucide-react";

import styles from "./Inicio.module.scss";
import avatar from "../../../public/avatar-1-gamebiblico.svg";

export default function Inicio() {
  return (
    <main className={styles.escopo}>
      <section id="informacoes" className={styles.secaoInformacoes}>
        <button className={styles.botaoDeInformacoes}>
          <Info />
        </button>
      </section>

      <section id="avatar" className={styles.secaoAvatar}>
        <div id="imagem-jogador" className={styles.imagemJogador}>
          <img src={avatar} alt="Avatar" />
        </div>

        <div id="nome-e-id-jogador">
          <h3>TochaViva</h3>
          <p>#469874563</p>
        </div>

        <button id="iniciar-partida">Iniciar Partida</button>
      </section>
      
      <section id="guias">
        <button id="ranking">
          <Trophy />
          
          <span>Ranking</span>
        </button>
        
        <button id="perfil">
          <UserRoundPen />
          
          <span>Pefil</span>
        </button>
      </section>
    </main>
  )
}