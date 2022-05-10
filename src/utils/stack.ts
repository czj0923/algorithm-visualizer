export class Stack<T> {
  items: T[] = [];
  // 添加元素
  push(element: T) {
    this.items.push(element);
  }
  // 弹出栈顶元素
  pop(): T | undefined {
    return this.items.pop();
  }
  //  查看栈顶元素
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
  // 检查栈是否为空
  isEmpty(): boolean {
    return !this.items.length;
  }
  // 栈的大小
  size(): number {
    return this.items.length;
  }
  // 清空栈
  clear() {
    this.items = [];
  }
  // 打印栈
  print() {
    console.log(this.items.toString());
  }
}
