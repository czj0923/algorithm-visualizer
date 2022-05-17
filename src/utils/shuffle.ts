/**
 * Fisher–Yates shuffle 洗牌算法
 * @param {T[]} arr
 * @return {T[]}
 */

export const shuffle = <T>(arr: T[]): T[] => {
  let l = arr.length;
  let index, temp;
  while (l > 0) {
    index = Math.floor(Math.random() * l);
    temp = arr[l - 1];
    arr[l - 1] = arr[index];
    arr[index] = temp;
    l--;
  }

  return arr;
};
