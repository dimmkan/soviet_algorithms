/**
 * Найти все двузначные числа, равные утроенной сумме своих цифр
 */
solution = () => {
  for(let i = 10; i < 100; i++) {
    const conditional = i.toString().split('').map(item => ~~item).reduce((acc, item) => acc += item, 0) * 3;
    if(i === conditional) {
      console.log(i);
    }
  }
};

solution();
