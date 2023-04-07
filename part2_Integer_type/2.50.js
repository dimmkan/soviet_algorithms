/**
 * Даны целые числа h и m (0 < h < 23, 0 <= m <= 59), указывающие момент времени "h часов, m минут". 
 * Определить угол (в градусах) между положением часовой стрелки в начале суток и в указанный момент времени. * 
 */

const stdin = process.openStdin()

console.log('Введите h и m')

solution = ([h, m]) => {
  const angle_1h = 30;
  const angle_1m = 0.5;
  return (h*angle_1h + m*angle_1m) % 360;
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