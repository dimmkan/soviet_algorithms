/**
 * С начала суток часовая стрелка повернулась на y градусов (y - целое число, 0 < y < 360). Определить число целых часов и минут, прошедших с начала суток.
 */

const stdin = process.openStdin()

console.log('Введите угол')

solution = ([a]) => `${~~(a/30)} часов ${~~(a%30/0.5)} минут`;

stdin.addListener('data', text => {
  const input = text
    .toString()
    .trim()
    .split(' ')
    .filter(x => !!x)
    .map((item) => parseInt(item));
  console.log(solution(input));
})