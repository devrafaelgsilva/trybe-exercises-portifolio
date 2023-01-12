function romanNumeralToCardinalNumeralConverter(number) {
  const romanNumeral = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };
  number = number.toLowerCase();
  const numbersLength = number.length;
  let summation = romanNumeral[number[numbersLength - 1]];
  let current = romanNumeral[number[numbersLength - 1]];
  for (let index = 2; index <= numbersLength; index += 1) {
    const previous = romanNumeral[number[numbersLength - index]];
    if (current <= previous) {
      summation += previous;
    } else {
      summation -= previous;
    }
    current = previous;
  }
  return summation;
}

console.log(romanNumeralToCardinalNumeralConverter("X"));
