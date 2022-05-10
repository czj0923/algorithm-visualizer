export class Queue<T> {
  items: T[] = [];
  //入队
  enqueue(element: T) {
    this.items.push(element);
  }
  //出队
  dequeue(): T | undefined {
    const result = this.items.shift();
    return result;
  }
  //返回队首元素
  front(): T | undefined {
    return this.items[this.items.length - 1];
  }
  //队列是否为空
  isEmpty(): boolean {
    return !this.items.length;
  }
  //返回队列长度
  size(): number {
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
