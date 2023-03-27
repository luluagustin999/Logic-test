function productArray(arr) {
    const n = arr.length;
    const product = arr.reduce((acc, curr) => acc * curr, 1);
    for (let i = 0; i < n; i++) {
      result.push(product / arr[i]);
    }
    return result;
  }

  console.log(productArray([12, 20]));
  console.log(productArray([3, 27, 4, 2]));
  console.log(productArray([13, 10, 5, 2, 9]));
  