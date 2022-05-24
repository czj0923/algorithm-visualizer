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
      desc: "开始",
    },
  ];

  for (let i = 0; i < l; i++) {
    j = i - 1;
    const cur = arr[i];

    while (j >= 0 && arr[j].value > cur.value) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;

      arr[j + 1].status = 1;
      cur.status = 1;
      infoArr.push({
        arr: JSON.parse(JSON.stringify(arr)),
        desc: `${cur.value}比${arr[j + 1].value}小，交换位置`,
      });
      arr[j + 1].status = 0;
      cur.status = 0;

      j--;
    }
    arr[j + 1] = cur;
  }
  infoArr.push({
    arr: JSON.parse(JSON.stringify(arr)),
    desc: `排序完成`,
  });
  return infoArr;
};

export default bubbleSort;
