// linkedList.js
import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  size() {
    let count = 0;
    let current = this.headNode;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let current = this.headNode;
    while (current && current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    let count = 0;
    let current = this.headNode;
    while (current) {
      if (count === index) {
        return current;
      }
      count++;
      current = current.nextNode;
    }
    return null;
  }

  pop() {
    if (!this.headNode) return null;

    if (!this.headNode.nextNode) {
      const nodeToReturn = this.headNode;
      this.headNode = null;
      return nodeToReturn;
    }

    let current = this.headNode;
    while (current.nextNode && current.nextNode.nextNode) {
      current = current.nextNode;
    }
    const nodeToReturn = current.nextNode;
    current.nextNode = null;
    return nodeToReturn;
  }

  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let current = this.headNode;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let current = this.headNode;
    let result = '';
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return result + 'null';
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const previous = this.at(index - 1);
    if (!previous) return;

    const newNode = new Node(value, previous.nextNode);
    previous.nextNode = newNode;
  }

  removeAt(index) {
    if (index === 0) {
      if (!this.headNode) return null;
      const nodeToReturn = this.headNode;
      this.headNode = this.headNode.nextNode;
      return nodeToReturn;
    }

    const previous = this.at(index - 1);
    if (!previous || !previous.nextNode) return null;

    const nodeToReturn = previous.nextNode;
    previous.nextNode = previous.nextNode.nextNode;
    return nodeToReturn;
  }
}
