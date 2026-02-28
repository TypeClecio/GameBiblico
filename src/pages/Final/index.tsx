import { ChevronLeft, Gamepad2Icon, Home, Share2 } from "lucide-react";

import styles from "./Final.module.scss";
import Podio from "../../components/Podio";
import Mensao from "../../components/Mensao";

export default function Final() {
  const campeao = true; // Verdadeiro: mostra o pódio; Falso: mosta a lista de mensões.

  return (
    <main className={styles.escopo}>
      <section className={styles.secaoCabecalho}>
        <a href="/">
          <button>
            <ChevronLeft size={22} strokeWidth={3} />
          </button>
        </a>

        <span className={styles.tituloPagina}>Resumo</span>

        <span className={styles.complementoCabecalho}>.</span>
      </section>

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
        : <Mensao />
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