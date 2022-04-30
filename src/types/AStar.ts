export class initData {
  mapArr: Array<Array<"1" | "2" | "99" | "100">> = [[]]; //1.空白 2.障碍物 99.入口 100.出口
  hasSearchArr: Array<Array<boolean>> = []; //保存已被搜索过的点
  rowCount = 20;
  colCount = 20;
  obstacleCount = 40;
  entrance: [number, number] = [0, 0]; //入口
  export: [number, number] = [0, 0]; //出口
}
