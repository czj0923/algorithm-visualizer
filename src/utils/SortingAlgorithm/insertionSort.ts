/**
 * 插入排序
 * @param {number[]} arr
 * @return {number[]}
 */

const insertionSort = (arr: number[]): number[] => {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    let j = i - 1;
    const cur = arr[i];
    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = cur;
  }
  return arr;
};

export default insertionSort;
