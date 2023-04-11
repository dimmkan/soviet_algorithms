/**
 * С клавиатуры вводится целое число х из промежутка [100, 9999]. Если число четырехзначное, то найти сумму его цифр, если трехзначное - произедение.
 */


const stdin = process.openStdin()

console.log('Введите x')

solution = ([x]) => x.toString().split('').length === 4 ? x.toString().split('').reduce((acc, item) => acc += ~~item, 0) : x.toString().split('').reduce((acc, item) => acc *= ~~item, 1);

stdin.addListener('data', text => {
  const input = text
    .toString()
    .trim()
    .split(' ')
    .filter(x => !!x)
    .map((item) => parseInt(item));
  console.log(solution(input));
})