/**
 * Автоморфным называется такое число, которое рано последним цифрам своего квадрата. Примеры 5^2 = 25, 25^2 = 625. Найти все автоморфне числа до 999.
 */

solution = () => {
  for(let i = 2; i < 1000; i++) {
    if(i < 10) {
      const automorph = i ** 2;
      if(~~(automorph%10) === i) {
        console.log('i:', i, 'automorph:', automorph);
      }
    } else if(i < 100) {
      const automorph = i ** 2;
      if(~~(automorph%100) === i) {
        console.log('i:', i, 'automorph:', automorph);
      }
    } else {
      const automorph = i ** 2;
      if(~~(automorph%1000) === i) {
        console.log('i:', i, 'automorph:', automorph);
      }
    }
  }
};

console.log(solution());