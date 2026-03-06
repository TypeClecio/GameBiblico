import { useState, type SubmitEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Cabecalho from "../../components/Header";
import styles from "./Perfil.module.scss";

import Avatar from "../../components/Avatar";
import type { Jogador } from "../../interfaces/Jogador";
import { avatares } from "../../utils/avatares";

const padraoJogador: Jogador = {
  nome: "",
  id: "0",
  tempo: 0,
  avatar: 0,
  criado_em: new Date().toISOString()
}

export default function Perfil() {
  const recuperarDadosJogador = localStorage.getItem("jogador");
  const jogador: Jogador = recuperarDadosJogador ? JSON.parse(recuperarDadosJogador) : padraoJogador;
  const maximoCaracteresNomeJogador = 10;

  const [definirAvatar, setDefinirAvatar] = useState(jogador.avatar);
  const [definirNomeJogador, setDefinirNomeJogador] = useState(jogador.nome);

  function definirNovosDadosJogador(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (definirNomeJogador.length < 3 || !definirNomeJogador) return;

    const novo = {
      ...jogador,
      avatar: definirAvatar,
      nome: definirNomeJogador
    };

    localStorage.setItem("jogador", JSON.stringify(novo));
    alert("Salvo!");
  }

  return (
    <main className={styles.escopo}>
      <Cabecalho tituloPagina="Perfil" />

      <section className={styles.secaoPerfil}>
        <div className={styles.imagemPerfil}>
          <button
            onClick={() => {
              if (definirAvatar > 0) {
                setDefinirAvatar((n) => n - 1);
              }
            }}
          >
            <ChevronLeft size={50} strokeWidth={3} />
          </button>

          <Avatar src={avatares[definirAvatar]} tamanho={130} />

          <button
            onClick={() => {
              if (definirAvatar < (avatares.length - 1)) {
                setDefinirAvatar((n) => n + 1);
              }
            }}
          >
            <ChevronRight size={50} strokeWidth={3} />
          </button>
        </div>

        <form onSubmit={definirNovosDadosJogador}>
          <fieldset>
            <input
              name="nomeJogador"
              type="text"
              placeholder="Seu nome..."
              value={definirNomeJogador}
              onChange={(e) => {
                const valor = e.target.value;
                if (valor.length <= maximoCaracteresNomeJogador) setDefinirNomeJogador(e.target.value);
              }}
            />

            <span>{definirNomeJogador.length}/{maximoCaracteresNomeJogador}</span>
          </fieldset>

          <button className={styles.botaoSalvar}>Salvar</button>
        </form>
      </section>
    </main>
  )
};
