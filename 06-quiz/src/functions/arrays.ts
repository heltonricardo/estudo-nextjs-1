export function embaralharVetor<T>(vetor: T[]): T[] {
  return vetor
    .map((el) => ({ data: el, ordem: Math.random() }))
    .sort((obj1, obj2) => obj1.ordem - obj2.ordem)
    .map((obj) => obj.data);
}
