/**
 * Для делимости числа на 4 необходимо и достаточно, чтобы число, составленное из двух последних цифр делилось на 4.
 * Написать функцию проверки делимости числа n, вводимого с клиатуры, на 4.
 */

const stdin = process.openStdin()

console.log('Введите n')

solution = ([n]) => ~~(n.toString().split('').splice(-2).join('')) % 4 ? false : true;

stdin.addListener('data', text => {
  const input = text
    .toString()
    .trim()
    .split(' ')
    .filter(x => !!x)
    .map((item) => parseInt(item));
  console.log(solution(input));
})