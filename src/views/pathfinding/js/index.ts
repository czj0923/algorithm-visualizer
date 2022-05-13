import { posType, blockType } from "@/types/PathFinding";
//获取可以前往的坐标
function getInnerPos(
  mapArr: blockType[][],
  x: number,
  y: number,
  rowCount: number,
  colCount: number,
  hasSearchArr: boolean[][]
): posType[] {
  const aroundPos: posType[] = [
    [x, y - 1],
    [x + 1, y],
    [x, y + 1],
    [x - 1, y],
  ];
  return aroundPos.filter((arr) => {
    return (
      arr[0] >= 0 &&
      arr[0] < rowCount &&
      arr[1] >= 0 &&
      arr[1] < colCount &&
      mapArr[arr[0]][arr[1]] !== "2" &&
      !hasSearchArr[arr[0]][arr[1]]
    );
  });
}

//生成随机坐标
function getRandom(rowCount: number, colCount: number): posType {
  return [
    Math.round(Math.random() * (rowCount - 1)),
    Math.round(Math.random() * (colCount - 1)),
  ];
}

export { getInnerPos, getRandom };
