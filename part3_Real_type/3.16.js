/**
 * Квадратное уравнение ax**2 + bx + c = 0 (a != 0) задается своими коэффициентами. Составить программу нахождения корней квадратного уравнения.
 */

const stdin = process.openStdin()

console.log('Введите a, b, c')

solution = ([a, b, c]) => {
  const d = b**2 - 4*a*c;
  if (d < 0) {
    console.log('Корни уравнения не существуют');
    return;
  }

  if (d === 0) {
    console.log('Существует 1 корень уравнения:', (-b / (2 * a)).toFixed(2));
    return;
  }

  console.log('корень 1:', (-b + Math.sqrt(d) / (2 * a)).toFixed(2), 'корень 2:', (-b - Math.sqrt(d) / (2 * a)).toFixed(2));
};

stdin.addListener('data', text => {
  const input = text
    .toString()
    .trim()
    .split(' ')
    .filter(x => !!x)
    .map((item) => parseInt(item));
  solution(input);
})