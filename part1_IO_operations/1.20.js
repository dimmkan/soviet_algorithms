/**
 * Составить программу вычисления значения функции y = 2x^3 + 7x^2 – 3x + 6 при целом значении x.
 */

const stdin = process.openStdin()

console.log('Введите значение x')

calculate = x => 2*x**3 + 7*x**2 - 3*x + 6;

stdin.addListener('data', text => {
  const arr = text
    .toString()
    .trim()
    .split(' ')
    .filter(x => !!x)
    .map((item) => parseInt(item));
  console.log(calculate(arr));
})