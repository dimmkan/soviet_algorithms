/**
 * Дано трехзначное число. Найти сумму и произведение его цифр.
 */

const stdin = process.openStdin()

console.log('Введите значение x')

digitsSummator = (arr) => arr.reduce((acc, item) => acc += item, 0);
digitsMultiplyer = (arr) => arr.reduce((acc, item) => acc *= item, 1);

stdin.addListener('data', text => {
  const input = text
    .toString()
    .trim()
    .split(' ')
    .filter(x => !!x)
    .map((item) => parseInt(item));
  const digitsArr = input[0].toString().split('').map(item => ~~item);
  console.log(`Сумма чисел: ${digitsSummator(digitsArr)}, произведение чисел: ${digitsMultiplyer(digitsArr)}`);
})