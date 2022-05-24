/**
 * 选择排序
 * @param {ISortItem[]} arr
 * @return {IInfo[]}
 */
import { ISortItem, IInfo } from "@/types/sort";

const selectionSort = (arr: ISortItem[]): IInfo[] => {
  const l = arr.length;
  const infoArr: IInfo[] = [
    {
      arr: JSON.parse(JSON.stringify(arr)),
      desc: "开始",
    },
  ];
  let minIndex = 0,
    temp;

  for (let i = 0; i < l - 1; i++) {
    minIndex = i;

    for (let j = i + 1; j < l; j++) {
      let flag = false; //标记最小值是否发生改变
      const num1 = arr[minIndex].value,
        num2 = arr[j].value,
        prevMinIndex = minIndex; //保留前一个最小值的序号

      if (arr[minIndex].value > arr[j].value) {
        minIndex = j;
        flag = true;
      }

      let desc = "";
      if (flag) {
        arr[prevMinIndex].status = 1;
        arr[minIndex].status = 3;
        desc = `当前未排序队列中最小值为${num2},下标${minIndex},改变了`;
      } else {
        arr[j].status = 1;
        arr[minIndex].status = 3;
        desc = `当前未排序队列中最小值为${num1},下标${minIndex}`;
      }
      infoArr.push({
        arr: JSON.parse(JSON.stringify(arr)),
        desc,
      });

      arr[j].status = 0;
      //最小值发生改变时需要清除上一个最小值项的status
      if (flag) {
        arr[prevMinIndex].status = 0;
      } else {
        arr[minIndex].status = 0;
      }
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;

    arr[i].status = 2;

    //判断是否为最后一步
    if (i === l - 2) {
      arr[i + 1].status = 2;
      infoArr.push({
        arr: JSON.parse(JSON.stringify(arr)),
        desc: `排序完成`,
      });
    } else {
      infoArr.push({
        arr: JSON.parse(JSON.stringify(arr)),
        desc: `一轮遍历结束，当前未排序队列中最小值为${arr[i].value},交换到已排序队列的末尾`,
      });
    }
  }
  return infoArr;
};

export default selectionSort;
