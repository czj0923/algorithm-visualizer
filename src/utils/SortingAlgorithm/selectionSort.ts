/**
 * 选择排序
 * @param {ISortItem[]} arr
 * @param {number} delay
 * @return {number[]}
 */
import { ISortItem } from "@/types/Sort";

const selectionSort = (arr: ISortItem[], delay = 700): ISortItem[] => {
  const l = arr.length;
  let minIndex = 0,
    temp,
    i = 0,
    j = 0;
  const innerLoop = () => {
    if (j >= l) {
      minIndex < l && (arr[minIndex].status = 2);
      outLoop();
      return false;
    }
    arr[minIndex].status = 3;
    arr[j].status = 1;
    setTimeout(() => {
      arr[minIndex].status = 0;
      arr[j].status = 0;
      if (arr[minIndex].value > arr[j].value) {
        minIndex = j;
      }
      j++;
      innerLoop();
    }, delay);
  };
  const outLoop = (isFirst?: boolean) => {
    if (i > l - 1) {
      return false;
    }
    if (!isFirst) {
      temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;

      i++;
    }
    minIndex = i;
    j = i + 1;

    innerLoop();
  };
  outLoop(true);
  /*for (let i = 0; i < l - 1; i++) {
    minIndex = i;

    for (let j = i+1; j < l; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }*/
  return arr;
};

export default selectionSort;
