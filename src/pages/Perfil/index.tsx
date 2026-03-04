import { ChevronLeft, ChevronRight } from "lucide-react";

import styles from "./Perfil.module.scss";
import avatar from "/src/assets/Avatares/fogo.svg";

import Cabecalho from "../../components/Header";

export default function Perfil() {
  return (
    <main className={styles.escopo}>
      <Cabecalho tituloPagina="Perfil" />

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