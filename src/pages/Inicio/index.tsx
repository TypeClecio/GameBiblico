import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Info, Trophy, UserRoundPen } from "lucide-react";

import styles from "./Inicio.module.scss";

import Avatar from "../../components/Avatar";

import { avatares } from "../../utils/avatares";
import { obterOuCriarJogadorLocal } from "../../utils/jogadorLocal";


export default function Inicio() {
  const navigate = useNavigate();

  const [jogador] = useState(obterOuCriarJogadorLocal());

  return (
    <main className={styles.escopo}>
      <section className={styles.secaoInformacoes}>
        <button className={styles.botaoDeInformacoes}>
          <strong>GameBíblico</strong>
          <Info size={18} strokeWidth={2.5} />
        </button>
      </section>

      <section className={styles.secaoJogador}>
        <Avatar src={avatares[jogador.avatar]} tamanho={130} />

        <div className={styles.identificadoresJogador}>
          <h3 className={styles.nomeJogador}>{jogador.nome}</h3>
          <p className={styles.idJogador}>#{jogador.id}</p>
        </div>

        <button onClick={() => navigate("/jogatina")} className={styles.botaoIniciarPartida}>Iniciar Partida</button>
      </section>

      <section className={styles.secaoGuias}>
        <button onClick={() => navigate("/ranking")} className={styles.botoesGuias}>
          <Trophy size={25} strokeWidth={2.5} />

          <span>Ranking</span>
        </button>

        <button onClick={() => navigate("/perfil")} className={styles.botoesGuias}>
          <UserRoundPen size={25} strokeWidth={2.5} />

          <span>Pefil</span>
        </button>
      </section>
    </main>
  )
}