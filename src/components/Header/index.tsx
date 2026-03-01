import { ChevronLeft } from "lucide-react";

import styles from "./Header.module.scss";

interface CabecalhoProps {
  tituloPagina?: string;
  link?: string;
  className?: string;
}

export default function Cabecalho({
  tituloPagina,
  link = "/",
  className = ""
}: CabecalhoProps) {
  return (
    <section className={`${styles.secaoCabecalho} ${className}`}>
      <a href={link}>
        <button>
          <ChevronLeft size={22} strokeWidth={3} />
        </button>
      </a>

      <h6 className={styles.tituloPagina}>{tituloPagina}</h6>

      <div className={`${styles.recursoExtra} ${styles.desativado}`}>.</div>
    </section>
  );
};
