import { Gamepad2Icon, Home, Share2 } from "lucide-react";

import styles from "./Final.module.scss";

import Cabecalho from "../../components/Header";
import Podio from "../../components/Podio";
import DemaisJogadores from "../../components/DemaisJogadores";

export default function Final() {
  const campeao = false; // Verdadeiro: mostra o pódio; Falso: mosta a lista de mensões.

  return (
    <main className={styles.escopo}>
      <Cabecalho tituloPagina="Resumo" className={styles.secaoCabecalho} />

      <section className={styles.secaoResultadoDaPartida}>
        <p className={styles.fraseResultadoDaPartida}>
          Incrível você ficou em
          <span className={styles.colocacaoDaPartida}>primeiro</span>
          lugar!
        </p>
      </section>

      <section className={styles.secaoCompartilharResultado}>
        <button className={styles.botaoCompartilharResultado}>
          <Share2 size={16} strokeWidth={2.5} />
          Compartilhe
        </button>
      </section>

      {campeao
        ? <Podio />
        : <DemaisJogadores estilo={styles.secaoListaDeJogadores} resumoPartida={true} />
      }

      <section className={styles.secaoBotoesDeAcao}>
        <button className={styles.botaoVoltarAoInicio}>
          <Home size={16} strokeWidth={2.5} />
          Voltar ao início
        </button>

        <button className={styles.botaoJogarNovamente}>
          <Gamepad2Icon size={16} strokeWidth={2.5} />
          Jogar novamente
        </button>
      </section>
    </main>
  )
}