// what is binary heap?
// very similar to a binary search tree, but with some diffrent rules!

// in a MaxBinaryHeap, parent nodes are always larger than child nodes. In a
// MinBinaryHeap, parent nodes are always smaller than child nodes

// binary heaps are used to implement priority queues, which are very commonly
// used data structures

// they are also used quite a bit, with graph traversal algorithms

// for any index of an array n
// the left child is stored at 2n + 1
// the right child is at 2n + 2

// for any child node at index n
// its parent is at index floored (n-1) / 2 