import { useEffect, useState } from "react";
import { BookMarked, Pause, Timer, X } from "lucide-react";

import styles from "./Jogatina.module.scss";
import ModalBase from "../../components/ModalBase";

import livros from "../../utils/livros";
import type { Livro } from "../../interfaces/Livros";
import { useNavigate } from "react-router-dom";

// Configurações da página
const tempoAoIniciar = new Date().getTime(); // Tempo inicial da partida

const embaralharLivros = (arg: Livro[]) => {
  const a = arg.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}; // Embaralhar a lista de Livros da Bíblia

const livrosRestantesNaLista = embaralharLivros(livros); // Mostra somente os livros não selecionados

export default function Jogatina() {
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);

  const [livro, setLivro] = useState<Livro>(); // Mostrar em tela 1 livro dos 66
  const [decorrente, setDecorrente] = useState(0); // Tempo decorrido na partida
  const [faltante, setFaltante] = useState(100); // Tempo que falta para acabar a partida ( 5 segundos )

  function proximoLivro() {
    if (livrosRestantesNaLista.length === 0) return fimDaPartida(); // Finaliza a partida por não existir próximo livro

    const livroSelecionado = livrosRestantesNaLista.splice(0, 1);
    setLivro(livroSelecionado[0]);
  } // Depois dos livros estarem sortido, seleciona sempre o primeiro item.

  function tempoDePartida() {
    const tempoAtual = new Date().getTime();

    const tempoDecorrido = Number(((tempoAtual - tempoAoIniciar) / 1000).toFixed(1));
    setDecorrente(tempoDecorrido);
  } // Contador de tempo

  function tempoRegressivo(resposta: boolean) {
    if (resposta) {
      return setFaltante(100);
    } else {
      setFaltante(t => t - 2);
      if (faltante <= 0) fimDaPartida();
    }

  } // Contagem regressiva para finalizar a partida

  function correcao(testamentoEscolhido: string) {
    const testamentoAtual = livro?.testamento;
    if (testamentoAtual === testamentoEscolhido) {
      proximoLivro();
      tempoRegressivo(true);
      return;
    };
    fimDaPartida(); // Finaliza a partida por resposta errada
  } // Checagem se o Testamento escolhido corresponde com o Livro Atual

  function fimDaPartida() {
    // navigate("/final", /*{ replace: true }*/);
  } // Finalizar partida

  useEffect(() => {
    const contador = setTimeout(() => {
      tempoDePartida();
      tempoRegressivo(false);
    }, 100);

    if (decorrente >= 0.1 && decorrente <= 0.2) {
      proximoLivro();
    }

    return () => clearTimeout(contador);
  }, [decorrente]); // Iniciar partida e Cronômetro

  return (
    <main className={styles.escopo}>
      <section
        className={styles.antigoTestamento}
        onClick={() => correcao("antigo")}
      >
        <span>Antigo</span>
      </section>

      <section className={styles.secaoDeIndicadores}>
        <div className={styles.barraDeTempo}>
          <div className={styles.tempoRestante} style={{ width: `${faltante}%` }}></div>
        </div>

        <div className={styles.indicadores}>
          <div className={styles.quantidadeFaltanteDeLivros}>
            <BookMarked size={18} strokeWidth={2.5} />
            <span>{livrosRestantesNaLista.length}</span>
          </div>

          <span className={styles.nomeDoLivroEmTela}>{livro?.nome}</span>

          <div className={styles.tempoDecorrido}>
            <Timer size={18} strokeWidth={2.5} />
            <span>{decorrente}</span>
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

      <section
        className={styles.novoTestamento}
        onClick={() => correcao("novo")}
      >
        <span>Novo</span>
      </section>

      {mostrarModal
        ? <ModalBase acaoModal="sair" />
        : false
      }
    </main>
  )
}