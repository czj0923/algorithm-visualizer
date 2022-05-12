/**
 * 选择排序
 * @param {number[]} arr
 * @return {number[]}
 */

const selectionSort = (arr: number[]): number[] => {
  const l = arr.length;
  let minIndex, temp;
  for (let i = 0; i < l - 1; i++) {
    minIndex = i;
    for (let j = i; j < l; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

export default selectionSort;
