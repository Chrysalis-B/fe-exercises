const removeDuplicates1 = str => {
  const arr = str.split(' ');
  const uniqueArr = [...new Set(arr)];
  return uniqueArr.join(' ');
}

const removeDuplicates2 = str => {
  const arr = str.split(' ');
  const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
  return uniqueArr.join(' ');
}



console.log(removeDuplicates1('Hello Hello'))
console.log(removeDuplicates2('Hello Hello'))