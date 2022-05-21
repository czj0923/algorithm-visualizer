/**
 * 冒泡排序
 * @param {ISortItem[]} arr
 * @return {IInfo[]}
 */
import { ISortItem, IInfo } from "@/types/sort";

const bubbleSort = (arr: ISortItem[]): IInfo[] => {
  const l = arr.length;
  let temp,
    prev = -1;
  const infoArr: IInfo[] = [
    {
      arr: [...arr],
      desc: "",
    },
  ];

  for (let i = 0; i < l - 1; i++) {
    for (let j = 0; j < l - i - 1; j++) {
      arr[prev + 1].status = 1;
      arr[prev + 2].status = 1;

      const obj: IInfo = {
        arr: JSON.parse(JSON.stringify(arr)),
        desc: `${i},${j}`,
      };
      infoArr.push(obj);
      arr[prev + 1].status = 0;
      arr[prev + 2].status = 0;
      if (arr[j].value > arr[j + 1].value) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      if (j >= l - i - 2) {
        prev = 0;
      } else {
        prev = j;
      }
    }
  }
  return infoArr;
};

export default bubbleSort;
