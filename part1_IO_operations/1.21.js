/**
 * Составить программу вычисления значения функции y = 2*(a + b)^3 + 7*a^2*b^2 – 3*a*b + 6 при целых значениях a и b.
 */

const stdin = process.openStdin()

console.log('Введите значение a и b')

calculate = ([a, b]) => 2 * (a + b)**3 + 7 * a**2 * b**2 - 3 * a * b + 6;

stdin.addListener('data', text => {
  const arr = text
    .toString()
    .trim()
    .split(' ')
    .filter(x => !!x)
    .map((item) => parseInt(item));
  console.log(calculate(arr));
})