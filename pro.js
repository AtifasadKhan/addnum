const add = (numbers) => {
  if (numbers === '') {
    return 0;
  }
  const strArr = numbers.split(',');
  let numArr = [];
  let negativeNumArr = [];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].trim() !== '') {
      const num = parseInt(strArr[i]);
      if (num < 0) {
        negativeNumArr.push(num);
      }
      numArr.push(num);
    }
  }
  if (negativeNumArr.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumArr.join(', ')}`
    );
  }
  let sum = 0;
  for (let i of numArr) {
    sum += i;
  }
  return sum;
};

console.log(add('1\n,-2,-3'));
