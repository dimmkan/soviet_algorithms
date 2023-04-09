/**
 * Вычислить площадь поверхности цилиндра, где радиус R и высота цилиндра h вводятся с клавиатуры.
 */

const stdin = process.openStdin()

console.log('Введите R и h')

solution = ([R, h]) => 2*Math.PI*R*h + 2*Math.PI*R**2;

stdin.addListener('data', text => {
  const input = text
    .toString()
    .trim()
    .split(' ')
    .filter(x => !!x)
    .map((item) => parseInt(item));
  console.log(solution(input));
})