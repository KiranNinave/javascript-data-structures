// Singly linked list
// A data structure that contains a head, tail and length property.
// Linked lists consist of nodes, and each node has a value and a pointer to another node or null

// Comparisons with arrays
// list
// do not have indexes!
// connected via nodes with a next pointer
// random access in not allowed

// arrays
// indexed in order
// insertion and deletion can be expensive
// can quickly be accessed at a specific index

// time complexity
// insertion start and end O(1), middle O(N)
// Removal start O(1), middle or end O(N)
// Searching O(N)
// Access O(N)

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		// this function add new node to the end
		const newNode = new Node(val);
		if(!this.head) {
			this.head = newNode;
			this.tail = newNode;
		}
		else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length ++;
		return newNode;
	}
	pop(){
		// remove item from the list end
		if(!this.head) return null;
		let current = this.head;
		let newTail = current;
		while(current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if(this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	shift() {
		// removing node from the begining
		if(!this.head) return null;
		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		return currentHead;
	}

	unshift(val) {
		// add a new node to the begining of the linked list
		let newNode = new Node(val);
		if(!this.head) {
			this.head = newNode;
			this.tail = newNode;
		}
		else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length ++;
		return newNode;
	}

	get(index) {
		// retrieving a node by it's position in the linked list
		if(index < 0 || index >= this.length) return null;
		let current = this.head;
		let counter = 0;
		while(counter !== index && current) {
			current = current.next;
			counter++;
		}
		return current;
	}

	set(index, val) {
		// update item at index
		 let foundNode = this.get(index);
		 if(foundNode) {
			foundNode.val = val;
			return foundNode;
		 }
		 return null;
	}

	insert(index, val) {
		// add item at index
		if(index < 0 || index > this.length) return null;
		if(index === this.length) return this.push(val);
		if(index === 0) return this.unshift(val);
		let prev = this.get(index - 1);
		let newNode = new Node(val);
		newNode.next = prev.next;
		prev.next = newNode;
		this.length++;
		return newNode;
	}

	remove(index) {
		// remove item at index
		if(index < 0 || index >= this.length) return null;
		if(index === this.length-1) return this.pop();
		if(index === 0) return this.shift(val);
		let prev = this.get(index - 1);
		let removed = prev.next;
		prev.next = removed.next;
		this.length--;
		return removed;
	}

	reverse() {
		// reverse linked list
		if(!this.head || !this.head.next) return this.head;
		let prev = this.head;
		let current = this.head.next;
		prev.next = null;
		let temp = null;
		while(current) {
			temp = current.next;
			current.next = prev;
			prev = current;
			current = temp;
		}
		temp = this.head;
		this.head = this.tail;
		this.tail = temp;
		return this.head;
	}

	traverse() {
		var current = this.head;
		let list = [];
		while(current) {
			list.push(current.val);
			current = current.next;
		}
		console.log(list);
	}
} 

const list = new SinglyLinkedList();
list.push("hello");
list.push("world");
list.push("coding");
list.push("is");
list.push("awesome");
list.traverse();
console.log(list.pop());
list.traverse();
console.log(list.shift());
list.traverse();
console.log(list.unshift("hello"));
list.traverse();
console.log(list.get(1));
console.log(list.set(1, 'wooorld'));
list.traverse();
console.log(list.insert(1, 'world'));
list.traverse();
console.log(list.remove(2));
list.traverse();
list.reverse();
list.traverse();