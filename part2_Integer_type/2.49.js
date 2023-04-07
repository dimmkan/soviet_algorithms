/**
 * Даны два целых числа a и b. Если a делится на b или b делится на a, то вывести 1, иначе - любое другое число.
 * !!! Условные операторы и операторы цикла использовать нельзя. 
 */

const stdin = process.openStdin()

console.log('Введите a и b')

solution = ([a, b]) => Number(!~~(a%b) || !~~(b%a));

stdin.addListener('data', text => {
  const input = text
    .toString()
    .trim()
    .split(' ')
    .filter(x => !!x)
    .map((item) => parseInt(item));
  console.log(solution(input));
})