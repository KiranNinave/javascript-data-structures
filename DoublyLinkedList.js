// doubly linked lists are almost identical to singly linked lists except there is an
// additional pointer to previous nodes

// time complexity
// insertion and removal start and end  - O(1), middle O(N)
// searching O(N), Access O(N)
// technically searching is O(N/2), but that's still O(N)

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		// add item to the end of the list
		const newNode = new Node(val);
		if(this.length === 0) {
			this.head = newNode;
			this.tail = newNode;	
		}
		else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return newNode;
	}

	pop() {
		// remove last node
		if(this.length === 0) return null;
		const removed = this.tail;
		if(this.length === 1) {
			this.head = null;
			this.tail = null;
		}
		else {
			this.tail = removed.prev;
			this.tail.next = null;
			removed.prev = null;
		}
		this.length--;
		return removed;
	}

	shift() {
		// remove first node
		if(this.length === 0) return null;
		const removed = this.head;
		if(this.length === 1) {
			this.head = null;
			this.tail = null;
		}
		else {
			this.head = removed.next;
			this.head.prev = null;
			removed.next = null;
		}
		this.length--;
		return removed;
	}

	unshift(val) {
		// adding node to begining of the linked list
		let newNode;
		if(this.length === 0) {
			newNode = this.push(val);
		}
		else {
			newNode = new Node(val);
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		this.length++;
		return newNode;
	}

	get(index) {
		// get item at index
		if(index < 0 || index >= this.length) return null;
		let current = null;
		if(index <= this.length / 2) {
			let counter = 0;
			current = this.head;
			while(counter !== index) {
				current = current.next;
				counter++;
			}
		}
		else {
			let counter = this.length - 1;
			current = this.tail;
			while(counter !== index) {
				current = current.prev;
				counter--;
			}
		}
		return current;
	}

	set(index, val) {
		// update item at index
		let foundNode = this.get(index)
		if(!foundNode) return null;
		foundNode.val = val;
		return foundNode;
	}

	insert(index, val) {
		// add value at index
		if(index === 0) return this.unshift(val);
		if(index === this.length) return this.push(val);
		let foundNode = this.get(index);
		if(!foundNode) return null;
		const newNode = new Node(val);
		newNode.next = foundNode, newNode.prev = foundNode.prev; // grouping sentences
		newNode.prev.next = newNode, foundNode.prev = newNode; // grouping sentences
		this.length++;
		return newNode;
	}

	remove(index) {
		// remove item at index
		if(index === 0) return this.shift();
		if(index === this.length - 1) return this.pop();
		let foundNode = this.get(index);
		if(!foundNode) return null;
		foundNode.prev.next = foundNode.next, foundNode.next.prev = foundNode.prev;
		foundNode.next = null, foundNode.prev = null;
		return foundNode;
	}

	traverse() {
		let items = [];
		let current = this.head;
		while(current) {
			items.push(current.val);
			current = current.next;
		}
		console.log("items", items);
	}
}

const list = new DoublyLinkedList();
list.push("hello");
list.push("world");
list.push("coding")
list.push("is");
list.push("awesome");
list.traverse();
list.pop();
list.traverse();
list.shift();
list.traverse();
list.unshift("hello");
list.traverse();
console.log(list.get(3));
console.log(list.set(3, "awesome"));
list.traverse();
console.log(list.insert(3, "is"));
list.traverse();
console.log(list.remove(3));
list.traverse();