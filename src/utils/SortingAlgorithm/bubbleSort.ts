/**
 * 冒泡排序
 * @param {ISortItem[]} arr
 * @param {number} delay
 * @return {number[]}
 */
import { ISortItem } from "@/types/Sort";

const bubbleSort = (arr: ISortItem[], delay = 700): ISortItem[] => {
  const l = arr.length;
  let temp,
    i = 0,
    j = 0;

  //内层循环
  const innerLoop = () => {
    if (j >= l - 1 - i) {
      arr[j].status = 2;
      j = 0;
      i++;
      outLoop();
      return false;
    }
    arr[j].status = 1;
    arr[j + 1].status = 1;
    setTimeout(() => {
      if (arr[j].value > arr[j + 1].value) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      setTimeout(() => {
        arr[j].status = 0;
        arr[j + 1].status = 0;
        j++;
        innerLoop();
      }, delay);
    }, 300);
  };

  //外层循环
  const outLoop = () => {
    if (i > l) {
      return false;
    }
    innerLoop();
  };

  outLoop();
  return arr;
};

export default bubbleSort;
