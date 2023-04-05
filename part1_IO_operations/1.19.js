/**
* Найти значение переменной x, если x = (a + 3(d – 12)) * (c – 5k), а значения переменных a, d, c, k задаются с клавиатуры 
*/

const stdin = process.openStdin()

console.log('Введите значения a, d, c, k')

calculate = ([a, d, c, k]) => (a + 3 * (d - 12)) * (c - 5 * k);

stdin.addListener('data', text => {
  const arr = text
    .toString()
    .trim()
    .split(' ')
    .filter(x => !!x)
    .map((item) => parseInt(item));
  console.log(calculate(arr));
})