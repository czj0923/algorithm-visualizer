export interface ISortItem {
  value: number;
  status: 0 | 1 | 2 | 3; //1排序中  2排序完成 3最值
}

export interface IState {
  length: number; //排序的数组长度
  arr: ISortItem[]; //需要排序的数组
}
