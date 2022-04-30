export class Queue {
  items: Array<Array<number>> = [];
  //入队
  enqueue(element: number[]) {
    this.items.push(element);
  }
  //出队
  dequeue() {
    const result = this.items.shift();
    return result;
  }
  //返回队首元素
  front() {
    return this.items[this.items.length - 1];
  }
  //队列是否为空
  isEmpty() {
    return !this.items.length;
  }
  //返回队列长度
  size() {
    return this.items.length;
  }
  //清空队列
  clear() {
    this.items = [];
  }
  // 打印队列
  print() {
    console.log(this.items.toString());
  }
}
