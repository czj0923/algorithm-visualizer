export interface IState {
  mapArr: blockType[][]; //1.空白 2.障碍物 99.入口 100.出口
  hasSearchArr: boolean[][]; //保存已被搜索过的点
  roadArr: boolean[][]; //保存路径
  rowCount: number;
  colCount: number;
  obstacleNum: number;
  entrance: posType = [0, 0]; //入口
  exit: posType = [0, 0]; //出口
}

//格子 联合类型
export type blockType = "1" | "2" | "99" | "100";
//坐标
export type posType = [number, number];
