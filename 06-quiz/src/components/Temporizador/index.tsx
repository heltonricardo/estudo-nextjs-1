import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "./styles.module.scss";

interface Props {
  key: any;
  duracao: number;
  tempoEsgotado: () => void;
}

export default function Temporizador({ duracao, tempoEsgotado }: Props) {
  return (
    <div className={styles.temporizador}>
      <CountdownCircleTimer
        isPlaying
        size={120}
        onComplete={tempoEsgotado}
        duration={duracao}
        colors={["#0f0", "#ff0", "#f00"]}
        colorsTime={[7.5, 5, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
