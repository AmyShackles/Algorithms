function quickSort(nums) {
  if (nums.length <= 1) return nums;

  const pivot = nums[nums.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  // return quickSort(left).concat(pivot, quickSort(right));
  return [...quickSort(left), pivot, ...quickSort(right)];
}
