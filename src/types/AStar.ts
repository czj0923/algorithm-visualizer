export class initData {
  mapArr: Array<Array<"1" | "2" | "99" | "100">> = [[]]; //1.空白 2.障碍物 99.入口 100.出口
  hasSearchArr: Array<Array<boolean>> = []; //保存已被搜索过的点
  roadArr: Array<Array<boolean>> = []; //保存路径
  rowCount = 60;
  colCount = 60;
  obstacleCount = 1000;

  entrance: nodeType = [0, 0]; //入口
  export: nodeType = [0, 0]; //出口
}

export type nodeType = [number, number];
