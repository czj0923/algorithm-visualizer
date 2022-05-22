/**
 * 插入排序
 * @param {ISortItem[]} arr
 * @return {IInfo[]}
 */
import { ISortItem, IInfo } from "@/types/sort";

const bubbleSort = (arr: ISortItem[]): IInfo[] => {
  const l = arr.length;
  let temp, j;
  const infoArr: IInfo[] = [
    {
      arr: JSON.parse(JSON.stringify(arr)),
      desc: "",
    },
  ];

  for (let i = 0; i < l; i++) {
    j = i - 1;
    const cur = arr[i];

    while (j >= 0 && arr[j].value > cur.value) {
      arr[j].status = 1;
      cur.status = 1;
      infoArr.push({
        arr: JSON.parse(JSON.stringify(arr)),
        desc: `${i},${j}`,
      });
      arr[j].status = 0;
      cur.status = 0;
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      j--;
    }
    arr[j + 1] = cur;
  }
  infoArr.push({
    arr: JSON.parse(JSON.stringify(arr)),
    desc: `结束了`,
  });
  return infoArr;
};

export default bubbleSort;
