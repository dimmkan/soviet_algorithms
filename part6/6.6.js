/**
 * Для делимости числа на 3 необходимо и достаточно, чтобы сумма цифр числ делилась на 3. Написать функцию проверки делимости числа n, вводимого с клавиатуры, на 3.
 */

const stdin = process.openStdin()

console.log('Введите n')

solution = ([n]) => ~~(n.toString().split('').map(item => ~~item).reduce((acc, item) => acc += item, 0)) % 3 ? false : true;

stdin.addListener('data', text => {
  const input = text
    .toString()
    .trim()
    .split(' ')
    .filter(x => !!x)
    .map((item) => parseInt(item));
  console.log(solution(input));
})