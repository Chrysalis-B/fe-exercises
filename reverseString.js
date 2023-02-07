const reverseString1 = str => {
  const reversed = [];
  for (let char of str) {
    reversed.unshift(char);
  }
  return reversed.join('');
}

const reverseString2 = str => {
  return str.split('').reverse().join('');
}

console.log(reverseString1('Hello'));
console.log(reverseString2('Hello'));

