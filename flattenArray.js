const flattenArray1 = arr => {
  if (arr.length === 0) {
    return arr;
  }
  if (Array.isArray(arr[0])) {
    return [...flattenArray1(arr[0]), ...flattenArray1(arr.slice(1))];
  }
  else {
    return [arr[0], ...flattenArray1(arr.slice(1))];
  }
}

const flattenArray2 = arr => {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(flattenArray2(item));
    }
    else {
      acc.push(item);
      return acc;
    }
  }, []);
}

console.log(flattenArray1([1, 2, [3, 4, [5, 6, 7], 8], 9, 10]));
console.log(flattenArray2([1, 2, [3, 4, [5, 6, 7], 8], 9, 10]));