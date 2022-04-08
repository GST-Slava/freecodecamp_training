function factorialize(num) {
let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}

factorialize(5);
factorialize(10);
factorialize(20);

/*Пояснение про факториал https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-factorialize-a-number/16013*/