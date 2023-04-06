/**
 * Составить программу для пересчета величины временного интервала, заданного в минутах, в величину, выраженную в часах и минутах
 */

const stdin = process.openStdin()

console.log('Введите количество минут')

solution = ([input]) => `${input} минут - это ${~~(input/60)} час${~~(input%60) ? ` ${~~(input%60)} мин` : ''}`;

stdin.addListener('data', text => {
  const input = text
    .toString()
    .trim()
    .split(' ')
    .filter(x => !!x)
    .map((item) => parseInt(item));
  console.log(solution(input));
})