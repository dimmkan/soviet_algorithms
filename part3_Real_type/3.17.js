/**
 * Составить программу вычисления значения функции y = a**2 + 1 / sqrt(a**2 + 1) для любого значения a, введенного с клавиатуры.
 */

const stdin = process.openStdin()

console.log('Введите a')

solution = ([a]) => (a**2 + 1) / (Math.sqrt(a**2 + 1));

stdin.addListener('data', text => {
  const input = text
    .toString()
    .trim()
    .split(' ')
    .filter(x => !!x)
    .map((item) => parseInt(item));
  console.log(solution(input));
})