import styles from "./Ranking.module.scss";

import Cabecalho from "../../components/Header";
import Podio from "../../components/Podio";
import DemaisJogadores from "../../components/DemaisJogadores";

export default function Ranking() {
  return (
    <main className={styles.escopo}>
      <Cabecalho tituloPagina="Ranking" className={styles.secaoCabecalho} />
      <Podio estilo={styles.secaoPodio} tamanhoAvatar={70} />
      <DemaisJogadores />
    </main>
  );
}
