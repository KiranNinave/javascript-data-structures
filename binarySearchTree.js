// tree terminology
// root : the top node in a tree
// child: A node directly connected to another node when moving away from the root
// parent : The converse notion of a child
// siblings : A group of nodes with the same parent
// leaf: A node with no children
// edge: The connection between one node and another

// binary search tree
// everything in the left is less than node
// everything in the right is greater than node
// insertion O(log N)
// seraching O (log N)
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

console.log("BinarySearchTree");
class BinarySearchTree {
	constructor() {
		this.root = null;
		this.size = 0;
	}

	insertIteratively(value) {
		let newNode = new Node(value);
		if(!this.root) {
			this.root = newNode;
		}
		else {
			let current = this.root;
			while(true) {
				if(value < current.value) {
					if(current.left === null) {
						current.left = newNode;
						return newNode;
					}
					else {
						current = current.left;
					}
				}
				else {
					if(current.right === null) {
						current.right = newNode;
						return newNode;
					}
					else {
						current = current.right;
					}
				}
			}
		}
	}

	find(value) {
		let current = this.root;
		while(current) {
			if(value < current.value) {
				current = current.left;
			}
			else if(value > current.value) {
				current = current.right;
			}
			else return current;
		}
		return null;
	}
}

const tree = new BinarySearchTree();
tree.insertIteratively(10);
tree.insertIteratively(5);
tree.insertIteratively(20);
console.log(tree);

console.log(tree.find(20));
console.log(tree.find(30));