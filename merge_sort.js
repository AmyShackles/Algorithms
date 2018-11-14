function mergeSort(nums) {
  if (nums.length < 2) {
    return nums;
  }
  const length = nums.length;
  const middle = Math.floor(length / 2);
  let left = nums.slice(0, middle);
  let right = nums.slice(middle, length);

  return stitch(mergeSort(left), mergeSort(right));
}

function stitch(a, b) {
  const results = [];

  while (a.length && b.length) {
    if (a[0] <= b[0]) {
      results.push(a.shift());
    } else {
      results.push(b.shift());
    }
  }
  return results.concat(a, b);
}
