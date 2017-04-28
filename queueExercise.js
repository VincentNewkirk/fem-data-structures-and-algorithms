/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?




 */

function Queue(capacity) {
  this.storage = {};
  this.idGenerator = 0;
}

Queue.prototype.enqueue = function(value) {
  if (Object.keys(this.storage).length) {
    for (let key in this.storage) {
      this.storage[key]['position'] = this.storage[key]['position'] += 1;
    }
  }

  this.storage[this.idGenerator] = { value };
  this.storage[this.idGenerator]['position'] = 0;
  this.idGenerator += 1;

  return Object.keys(this.storage).length;
};
// Time complexity:

Queue.prototype.dequeue = function() {
  let firstOut;
  let element;
  for (let key in this.storage) {
    if (this.storage[key]['position'] === 0) {
      element = this.storage[key].value;
      firstOut = key;
      delete this.storage[key];
    } else {
      this.storage[key]['position'] = this.storage[key]['position'] -= 1;
    }
  };
  return element;
};
// Time complexity:

Queue.prototype.peek = function() {
  // implement me...
};

Queue.prototype.count = function() {
  // implement me...
};
// Time complexity:

const newQueue = new Queue();
newQueue.enqueue('first');
newQueue.enqueue('second');
newQueue.enqueue('third');
console.log(newQueue.dequeue());
console.log(newQueue.storage);


/*
*** Exercises:

1. Implement a queue using two stacks.

2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.


 */
