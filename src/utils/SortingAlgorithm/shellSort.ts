/**
 * 希尔排序
 * @param {number[]} arr
 * @return {number[]}
 */

const shellSort = (arr: number[]): number[] => {
  const l = arr.length;
  let temp,
    gap = 1;
  while (gap < l / 5) {
    //动态定义间隔序列
    gap = gap * 5 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 5)) {
    for (let i = gap; i < l; i++) {
      temp = arr[i];
      let j;
      for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
};

export default shellSort;
