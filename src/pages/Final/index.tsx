import { useNavigate } from "react-router-dom";
import { Gamepad2Icon, Home, Share2 } from "lucide-react";

import styles from "./Final.module.scss";
import Podio from "../../components/Podio";
import Mensao from "../../components/Mensao";
import Cabecalho from "../../components/Header";

export default function Final() {
  const navigator = useNavigate();
  const campeao = true; // Verdadeiro: mostra o pódio; Falso: mosta a lista de mensões.

  return (
    <main className={styles.escopo}>
      <Cabecalho tituloPagina="Resumo" />

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
        <button
          onClick={() => navigator("/")}
          className={styles.botaoVoltarAoInicio}
        >
          <Home size={16} strokeWidth={2.5} />
          Voltar ao início
        </button>

        <button
          onClick={() => navigator("/jogatina")}
          className={styles.botaoJogarNovamente}
        >
          <Gamepad2Icon size={16} strokeWidth={2.5} />
          Jogar novamente
        </button>
      </section>
    </main>
  )
}