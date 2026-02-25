import { useState } from "react";
import { BookMarked, Pause, Timer, X } from "lucide-react";

import styles from "./Jogatina.module.scss";
import ModalBase from "../../components/ModalBase";

export default function Jogatina() {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <main className={styles.escopo}>
      <section className={styles.antigoTestamento}>
        <span>Antigo</span>
      </section>

      <section className={styles.secaoDeIndicadores}>
        <div className={styles.barraDeTempo}>
          <div className={styles.tempoRestante}></div>
        </div>

        <div className={styles.indicadores}>
          <div className={styles.quantidadeFaltanteDeLivros}>
            <BookMarked size={18} strokeWidth={2.5} />
            <span>64</span>
          </div>

          <span className={styles.nomeDoLivroEmTela}>DEUTERONÔMIO</span>

          <div className={styles.tempoDecorrido}>
            <Timer size={18} strokeWidth={2.5} />
            <span>3.4</span>
          </div>
        </div>

        <div className={styles.gatilhosDaJogatina}>
          <button
            onClick={() => setMostrarModal(true)}
          >
            <X size={26} strokeWidth={3} />
          </button>
          <button
            onClick={() => setMostrarModal(true)}
          >
            <Pause size={24} strokeWidth={3} />
          </button>
        </div>
      </section>
      
      <section className={styles.novoTestamento}>
        <span>Novo</span>
      </section>

      {mostrarModal
        ? <ModalBase acaoModal="sair" />
        : false
      }
    </main>
  )
}