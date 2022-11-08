export default function numeroAleatorio(min: number = 1, max: number = 1000): number {
  return Math.trunc(Math.random() * (max - min)) + min;
}
