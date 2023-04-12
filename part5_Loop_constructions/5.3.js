/**
 * Найти все двузначные числа, в записи которых есть цифра n или само число делится на n
 */

const stdin = process.openStdin()

console.log('Введите n')

solution = ([n]) => {
  for(let i = 10; i < 100; i++) {
    if(i % n === 0) {
      console.log(i);
      continue;
    }

    if(i.toString().split('').map(item => ~~item).includes(n)) {
      console.log(i);
    }
  }
};

stdin.addListener('data', text => {
  const input = text
    .toString()
    .trim()
    .split(' ')
    .filter(x => !!x)
    .map((item) => parseInt(item));
  solution(input);
})