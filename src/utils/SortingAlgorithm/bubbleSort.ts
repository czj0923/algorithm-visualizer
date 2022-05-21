/**
 * 冒泡排序
 * @param {ISortItem[]} arr
 * @return {IInfo[]}
 */
import { ISortItem, IInfo } from "@/types/sort";

const bubbleSort = (arr: ISortItem[]): IInfo[] => {
  const l = arr.length;
  let temp;
  const infoArr: IInfo[] = [
    {
      arr: JSON.parse(JSON.stringify(arr)),
      desc: "",
    },
  ];

  for (let i = 0; i < l - 1; i++) {
    for (let j = 0; j < l - i - 1; j++) {
      if (arr[j].value > arr[j + 1].value) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      if (i >= l - 2) {
        arr[j].status = 2;
        arr[j + 1].status = 2;
      } else {
        arr[j].status = 1;
        arr[j + 1].status = 1;
      }

      const obj: IInfo = {
        arr: JSON.parse(JSON.stringify(arr)),
        desc: `${i},${j}`,
      };
      infoArr.push(obj);
      arr[j].status = 0;
      arr[j + 1].status = 0;
      if (j >= l - i - 2) {
        arr[j + 1].status = 2;
      }
    }
  }
  return infoArr;
};

export default bubbleSort;
