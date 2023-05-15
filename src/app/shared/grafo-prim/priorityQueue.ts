type Edge = [number, number, number];

export default class PriorityQueue {
  private heap: Edge[] = [];

  public size(): number {
    return this.heap.length;
  }

  public insert(value: Edge): Edge {
    this.heap.push(value);
    let index = this.heap.length - 1;
    let parentIndex = Math.trunc(index / 2);
    while (this.heap[parentIndex][2] > this.heap[index][2]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
      parentIndex = Math.trunc(index / 2);
    }

    return this.heap[0];
  }

  public extractMin(): Edge | null {
    if (this.heap.length === 0) {
      return null;
    }
    const lastIndex = this.heap.length - 1;
    [this.heap[0], this.heap[lastIndex]] = [
      this.heap[lastIndex],
      this.heap[0],
    ];
    const min = this.heap.pop()!;

    let xIndex = 0;
    let smallerChild: number;

    if (this.heap.length <= 1) {
      return min;
    } else if (this.heap.length === 2) {
      smallerChild = 1;
    } else {
      smallerChild = this.heap[1][2] > this.heap[2][2] ? 2 : 1;
    }

    while (this.heap[xIndex][2] > this.heap[smallerChild][2]) {
      [this.heap[xIndex], this.heap[smallerChild]] = [
        this.heap[smallerChild],
        this.heap[xIndex],
      ];
      xIndex = smallerChild;

      if (!this.heap[2 * xIndex]) {
        break;
      } else if (!this.heap[2 * xIndex + 1]) {
        smallerChild = 2 * xIndex;
      } else {
        smallerChild =
          this.heap[2 * xIndex][2] > this.heap[2 * xIndex + 1][2]
            ? 2 * xIndex + 1
            : 2 * xIndex;
      }
    }
    return min;
  }
}