/**
 * 计数排序
 * @param {ISortItem[]} arr
 * @return {IInfo[]}
 */
import { ISortItem, IInfo } from "@/types/sort";

const countingSort = (arr: ISortItem[]): IInfo[] => {
  const valueArr = arr.map((item) => item.value);
  const max = Math.max(...valueArr); // 找到这个数组的 最大 最小值
  const min = Math.min(...valueArr);

  const l = arr.length,
    //初始化newArr
    newArr = new Array(l + 1).fill(0),
    infoArr: IInfo[] = [
      {
        arr: JSON.parse(JSON.stringify(arr)),
        desc: "开始",
        countArr: JSON.parse(JSON.stringify(newArr)),
      },
    ];

  //遍历每个数存入计数数组中
  for (let i = 0; i < l; i++) {
    newArr[arr[i].value] = newArr[arr[i].value] ? newArr[arr[i].value] + 1 : 1;
    const curNum = arr[i].value;
    arr[i].value = -1; //将统计过的值变为-1
    infoArr.push({
      arr: JSON.parse(JSON.stringify(arr)),
      desc: `把${curNum}作为index存到桶数组中`,
      countArr: JSON.parse(JSON.stringify(newArr)),
    });
  }

  let index = 0;
  for (let i = min; i <= max; i++) {
    while (newArr[i] > 0) {
      arr[index].value = i; // 就把原数组的第index位赋值为 i
      arr[index].status = 2;
      index++;
      newArr[i]--;
      infoArr.push({
        arr: JSON.parse(JSON.stringify(arr)),
        desc: `index=${i}作为value,存到原数组第${index}项,桶里还剩${newArr[i]}个${i}`,
        countArr: JSON.parse(JSON.stringify(newArr)),
      });
    }
  }

  infoArr.push({
    arr: JSON.parse(JSON.stringify(arr)),
    desc: "排序完成",
    countArr: JSON.parse(JSON.stringify(newArr)),
  });
  return infoArr;
};

export default countingSort;
