/**
 * Определить, является ли веденное число n - простым.
 */

const stdin = process.openStdin()

console.log('Введите n')

solution = ([n]) => {
  for(let i = 2; i < ~~Math.sqrt(n); i++) {
    if(n % i === 0) return false;
  }

  return true;
};

stdin.addListener('data', text => {
  const input = text
    .toString()
    .trim()
    .split(' ')
    .filter(x => !!x)
    .map((item) => parseInt(item));
  console.log(solution(input));
})