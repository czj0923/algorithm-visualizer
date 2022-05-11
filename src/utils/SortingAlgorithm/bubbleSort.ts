/**
 * 冒泡排序
 * @param {arr} number[]
 * @return {number[]}
 */

const bubbleSort = (arr: number[]): number[] => {
  const l = arr.length;
  let temp;
  for (let i = 0; i < l; i++) {
    for (let j = l - 1 - i; j < l; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

export default bubbleSort;
