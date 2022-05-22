/**
 * 计数排序
 * @param {number[]} arr
 * @return {number[]}
 */

const countingSort = (arr: number[]): number[] => {
  const l = arr.length;
  const newArr: number[] = [];
  for (let i = 0; i < l; i++) {
    newArr[arr[i]]++;
  }
  return arr;
};
const arr = [5, 2, 4, 8, 7, 6, 5, 4, 1];
countingSort(arr);

export default countingSort;
