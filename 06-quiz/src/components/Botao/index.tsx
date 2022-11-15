import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  children: string;
  href?: string;
  onClick?: (e: any) => void;
}

export default function Botao({ children, href, onClick }: Props) {
  function renderBotao() {
    return (
      <button className={styles.botao} onClick={onClick}>
        {children}
      </button>
    );
  }

  return href ? <Link href={href}>{renderBotao()}</Link> : renderBotao();
}
