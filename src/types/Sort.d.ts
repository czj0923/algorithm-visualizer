export interface ISortItem {
  value: number;
  status: 0 | 1 | 2 | 3; //1排序中  2排序完成 3最值
}

//排序的信息
export interface IInfo {
  arr: ISortItem[];
  desc: string;
  countArr?: number[]; //计数排序用到
}
