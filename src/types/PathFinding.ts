export class initData {
  mapArr: Array<Array<blockType>> = []; //1.空白 2.障碍物 99.入口 100.出口
  hasSearchArr: Array<Array<boolean>> = []; //保存已被搜索过的点
  roadArr: Array<Array<boolean>> = []; //保存路径
  rowCount = 60;
  colCount = 60;
  obstacleNum = 1000;

  entrance: posType = [0, 0]; //入口
  exit: posType = [0, 0]; //出口
}

//坐标
export type posType = [number, number];
//格子 联合类型
export type blockType = "1" | "2" | "99" | "100";
