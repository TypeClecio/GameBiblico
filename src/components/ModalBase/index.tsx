import { Pause, X } from "lucide-react";
import styles from "./ModalBase.module.scss";

type AcaoModal = "sair" | "pausar";

type ModalBaseProps = {
  acaoModal: AcaoModal;
}

export default function ModalBase({ acaoModal }: ModalBaseProps) {
  const acao = acaoModal === "sair" ? true : false;

  return (
    <div className={styles.escopo}>
      <article
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="Sair dá partida"
        aria-describedby="Ao sair perderá todo o progresso."
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.iconeDaAcao}
          aria-label="Icone da ação"
        >{
          acao
            ? <X size={26} strokeWidth={4} />
            : <Pause size={26} strokeWidth={3} />
        }</button>

        <div>
          <h2 className={styles.titulo}>{
            acao
              ? "Deseja sair?"
              : "Retomar partida?"
          }</h2>
          <p className={styles.descricao}>{
            acao
              ? "Ao sair perderá todo o progresso."
              : "Dê continuidade a partida."
          }</p>
        </div>

        <div className={styles.acoes}>
          <button
            type="button"
            className={`${styles.acaoPrincipal} ${acao ? styles.acaoSair : styles.acaoPausar}`}
          >{
            acao
              ? "Sair"
              : "Retomar"  
          }</button>
          <button type="button" className={styles.acaoSecundaria}>{
            acao
              ? "Ficar"
              : "Sair"
          }</button>
        </div>
      </article>
    </div>
  )
}