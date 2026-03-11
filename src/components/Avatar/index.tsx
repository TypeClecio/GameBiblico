import styles from "./Avatar.module.scss";

interface AvatarProps {
  src?: string;
  alt?: string;
  tamanho?: number;
}

/**
 * 
 * @param src Indica o caminho do Ícone
 * @param alt Texto alternativo caso não carregue o Ícone
 * @param tamanho Define a largura e altura do Ícone
 * @description Componente renderizando o Avatar do jogador
 */
export default function Avatar({
  src = "",
  alt = "Avatar",
  tamanho = 50
}: AvatarProps) {
  return (
    <div className={styles.imagemJogador} style={{width: tamanho, height: tamanho}}>
      <img src={src} alt={alt} />
    </div>
  )
}