/**
 * Числа вида 2^p - 1, где p - простое число, называются числами Мерсенна. Являются ли числа Мерсенна при значениях p, 
 * равных [2,3,5,7,9,11,13,17,19,23,29,31], простыми?
 */

solution = (arr) => {
  return arr.map((item) => {
    const x = 2 ** item - 1; 
    for(let i = 2; i < ~~Math.sqrt(x); i++) {
      if(x % i === 0) return {
        value: x,
        flag: false,
      };
    }  
    return {
      value: x,
      flag: true,
    };
  })
};

console.log(solution([2,3,5,7,9,11,13,17,19,23,29,31]));