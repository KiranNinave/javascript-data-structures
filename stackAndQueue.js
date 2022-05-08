// what is a stacks
// its Last in first out data structure
// the last element added to the stack will be the first one to removed
// time complexity of stack insertion O(1), Removal O(1), Searching O(N)

let stack = [];

stack.push("element");
stack.pop();

// stack using linked list
console.log("linked list stack");
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.head = null;
		this.size = 0;
	}
	push(val) {
		const newNode = new Node(val);
		if(!this.head) {
			this.head = newNode
		}	
		else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.size++;
		return newNode;
	}
	pop() {
		if(this.size === 0) return null;
		const removedNode = this.head;
		this.head = this.head.next;
		this.size--;
		return removedNode;
	}
}
const s = new Stack();
console.log(s.push(1));
console.log(s.push(2));
console.log(s.push(3));
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());

// queue
// it's first in first out datastructure
// insertion O(1), Removal O(1), Seraching and Access O(N)
console.log("queue using linked list")
class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		const newNode = new Node(val);
		if(this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		}
		else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.size += 1;
		return newNode;
	}

	dequeue() {
		if(this.size === 0) return null;
		const removedNode = this.first;
		this.first = this.first.next;
		removedNode.next = null;
		this.size -= 1;
		return removedNode;
	}
}

const queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());