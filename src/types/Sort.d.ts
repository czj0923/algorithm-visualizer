export interface ISortItem {
  value: number;
  status: 0 | 1 | 2 | 3; //1排序中  2排序完成 3最值
}

//排序的信息
export interface IInfo {
  arr: ISortItem[];
  desc: string;
}

export interface IState {
  length: number; //排序的数组长度
  arr: ISortItem[]; //需要排序的数组
  sortInfo: IInfo[]; //存放排序的信息
  curStep: IInfo;
}
