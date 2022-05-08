// traversing a tree
// two ways
// breath-first search (starting with root then level 1's left node to right node, then level 2's left to right node continue to whole tree)
// depth-first serach (InOrder, PreOrder, PostOrder)

// WHEN To use BFS or DFS
// When width of tree is lot more then use DFS else use BFS

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

// BreathFirstSearch
function BreathFirstSearch(tree) {
	const queue = [];
	if(tree != null) {
		queue.unshift(tree);
	}
	const result = [];
	while(queue.length !== 0) {
		const current = queue.shift();
		result.push(current.value);
		if(current.left) {
			queue.push(current.left);
		}
		if(current.right) {
			queue.push(current.right);
		}
		
	}
	return result;
}

// DeftFirstSearch preOrder VLR
function preOrder(tree) {
	const result = [];
	function helper(node) {
		result.push(node.value);
		if(node.left) helper(node.left);
		if(node.right) helper(node.right);
	}
	helper(tree);
	return result;
}

// DeftFirstSearch preOrder VLR iteratively
function preOrderIteratively(tree) {
	const stack = [];
	if(tree) stack.push(tree);
	const result = [];
	while(stack.length !== 0) {
		const current = stack.pop();
		result.push(current.value);
		if(current.right) stack.push(current.right);
		if(current.left) stack.push(current.left);
	}
	return result;
}

// DeftFirstSearch postOrder LRV recursively
function postOrder(tree) {
	const result = [];
	function helper(node) {
		if(node) {
			if(node.left) helper(node.left);
			if(node.right) helper(node.right);
			result.push(node.value);
		}
	}
	helper(tree);
	return result;
}

// DeftFirstSearch postOrder LRV iterativly
function postOrderIterativly(tree) {
	const result = [];
	const stack = [];
	if(tree) stack.push(tree);
	while(stack.length) {
		const current = stack.pop();
		if(current.left) stack.push(current.left);
		if(current.right) stack.push(current.right);
		result.unshift(current.value);
	}
	return result;
}

// DeftFirstSearch inOrder LVR recursivly
function inOrder(tree) {
	const result = [];
	function helper(node) {
		if(node) {
			if(node.left) helper(node.left);
			result.push(node.value);
			if(node.right) helper(node.right);
		}
	}
	helper(tree);
	return result;
}

// DeftFirstSearch inOrder LVR iterativly
function inOrderIterativly(tree) {
	const result = [];
	const stack = [];
	let current = tree;
	while(current != null || stack.length)  {
		// iterate left side
		while(current) {
			stack.push(current);
			current = current.left;
		}
		current = stack.pop();
		result.push(current.value);
		current = current.right;
	}
	return result;
}

const tree = new Node(1);
tree.left = new Node(2), tree.right = new Node(3);
tree.left.left = new Node(4), tree.left.right = new Node(5);
tree.right.left = new Node(6), tree.right.right = new Node(7);

console.log("BreathFirstSearch");
console.log(BreathFirstSearch(tree));

console.log("DeftFirstSearch preOrder recorsively");
console.log(preOrder(tree));

console.log("DeftFirstSearch preOrder iterativly");
console.log(preOrderIteratively(tree));

console.log("DeftFirstSearch postOrder recursivly");
console.log(postOrder(tree));

console.log("DeftFirstSearch postOrder iterativly");
console.log(postOrderIterativly(tree));

console.log("DeftFirstSearch inOrder recursivly");
console.log(inOrder(tree));

console.log("DeftFirstSearch inOrder iterativly");
console.log(inOrderIterativly(tree));