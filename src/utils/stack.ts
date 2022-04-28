export class Stack {
  items: number[] = [];
  // 添加元素
  push(element: number) {
    this.items.push(element);
  }
  // 弹出栈顶元素
  pop() {
    return this.items.pop();
  }
  //  查看栈顶元素
  peek() {
    return this.items[this.items.length - 1];
  }
  // 检查栈是否为空
  isEmpty() {
    return !this.items.length;
  }
  // 栈的大小
  size() {
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
