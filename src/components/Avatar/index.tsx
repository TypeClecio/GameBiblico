import styles from "./Avatar.module.scss";

interface AvatarProps {
  src?: string;
  alt?: string;
}

/**
 * 
 * @param src Indica o caminho do Ícone
 * @param alt Texto alternativo caso não carregue o Ícone
 * @description Componente renderizando o Avatar do jogador
 */
export default function Avatar({
  src = "",
  alt = "Avatar"
}: AvatarProps) {
  return (
    <div className={styles.imagemJogador}>
      <img src={src} alt={alt} />
    </div>
  )
}