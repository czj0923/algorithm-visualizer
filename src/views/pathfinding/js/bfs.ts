import { Queue } from "@/utils/queue";
import { posType, blockType } from "@/types/PathFinding";
import { getInnerPos } from "./index";

/**
 * 广度优先搜索
 * @param {blockType[][]} mapArr
 * @param {posType} entrance
 * @param {posType} exit
 * @param {number} rowCount
 * @param {number} colCount
 * @return {object}
 */
const bfs = (
  mapArr: blockType[][],
  entrance: posType,
  exit: posType,
  rowCount: number,
  colCount: number
): {
  hasRoad: boolean;
  distance: number;
  roadArr: boolean[][];
} => {
  //利用队列来实现bfs
  const queue = new Queue();
  //开始时把入口放入队列并标记为已访问
  queue.enqueue(entrance);

  //存放路径  将二维数组地图映射成为一维数组 对应一维数组下标:colCount*x+y
  const comeRoute = new Array(rowCount * colCount);
  //初始化已搜索过的节点
  const hasSearchArr: boolean[][] = [];
  //距离
  let distance = 0;
  for (let i = 0; i < rowCount; i++) {
    hasSearchArr[i] = [];
    for (let j = 0; j < colCount; j++) {
      hasSearchArr[i][j] = false;
    }
  }
  hasSearchArr[entrance[0]][entrance[1]] = true;

  //标记是否有道路
  let hasRoad = false;

  comeRoute[entrance[0] * colCount + entrance[1]] = null;

  while (!queue.isEmpty()) {
    const temp = queue.dequeue() as posType;
    //如果该点是终点 则结束
    if (temp[0] == exit[0] && temp[1] == exit[1]) {
      //标记是否有通路
      hasRoad = true;
      break;
    }

    //查找可以前往的点,并入队
    const pos = getInnerPos(
      mapArr,
      temp[0],
      temp[1],
      rowCount,
      colCount,
      hasSearchArr
    );

    pos.forEach((item) => {
      //标记为已查询过
      hasSearchArr[item[0]][item[1]] = true;
      queue.enqueue(item);
      comeRoute[item[0] * colCount + item[1]] = [temp[0], temp[1]];
    });
  }

  const roadArr: boolean[][] = [];
  for (let i = 0; i < rowCount; i++) {
    roadArr[i] = [];
    for (let j = 0; j < colCount; j++) {
      roadArr[i][j] = false;
    }
  }

  //从终点开始往回找路径并保存
  let [x, y] = exit;
  roadArr[x][y] = true;

  while (comeRoute[x * colCount + y]) {
    distance++;
    const cur_node = comeRoute[x * colCount + y];
    x = cur_node[0];
    y = cur_node[1];
    roadArr[x][y] = true;
  }

  return {
    hasRoad,
    distance,
    roadArr,
  };
};

export default bfs;
