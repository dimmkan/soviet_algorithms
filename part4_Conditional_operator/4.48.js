/**
 * Дано 5-значное число. Определить, упорядочены ли по возрастанию цифры в записи этого числа.
 */

const stdin = process.openStdin()

console.log('Введите x')

solution = ([x]) => x.toString().split('').reduce((acc, item) => {
  if(acc.flag && item > acc.prev) {
    acc.prev = item;
  } else {
    acc.flag = false;
  }
  return acc;
}, {
  prev: 0,
  flag: true,
})['flag'];

stdin.addListener('data', text => {
  const input = text
    .toString()
    .trim()
    .split(' ')
    .filter(x => !!x)
    .map((item) => parseInt(item));
  console.log(solution(input));
})