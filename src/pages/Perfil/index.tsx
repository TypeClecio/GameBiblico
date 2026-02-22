import { ChevronLeft, ChevronRight } from "lucide-react";

import styles from "./Perfil.module.scss";
import avatar from "../../../public/avatar-1-gamebiblico.svg";

export default function Perfil() {
  return (
    <main className={styles.escopo}>
      <section className={styles.secaoCabecalho}>
        <a href="/">
          <button>
            <ChevronLeft size={22} strokeWidth={3} />
          </button>
        </a>

        <span className={styles.tituloPagina}>Perfil</span>

        <span className={styles.complementoCabecalho}>.</span>
      </section>

      <section className={styles.secaoPerfil}>
        <div className={styles.imagemPerfil}>
          <button>
            <ChevronLeft size={50} strokeWidth={3} />
          </button>
          <img src={avatar} alt="Avatar" />
          <button>
            <ChevronRight size={50} strokeWidth={3} />
          </button>
        </div>

        <form>
          <fieldset>
            <input name="nomeJogador" type="text" placeholder="Seu nome..." />

            <span>0/10</span>
          </fieldset>

          <button className={styles.botaoSalvar}>Salvar</button>
        </form>
      </section>
    </main>
  )
}