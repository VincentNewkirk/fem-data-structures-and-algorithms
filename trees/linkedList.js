/*

LINKED LIST

Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.


*** Operations:

** Part 1

myList.forEach(callbackFn)
invoke callback function with the value of each node

myList.print()
=> string with all values in list (ex: '0, 1, 2, 3')

myList.insertAfter(refNode, value)
=> new node
insert new node associated with value passed in after refNode

myList.removeAfter(refNode)
=> removed node
remove node after the refNode

myList.insertHead(value)
=> new head
insert new head node at the beginning of the list with the value passed in

myList.removeHead()
=> removed head node
remove the head node of the linked list

myList.findNode(value)
=> first node that has a value matching what was passed in


* Optimization:
Say we have a linked list that has 100 items and we want to add an item to the very end. How would you do that with your current implementation? How can you modify the data structure to add an item to the end in constant time?

myList.appendToTail(value)
=> new tail node
add a new tail node at the end of the list with the associated value passed in

myList.removeTail()
=> removed tail node
remove the tail node from the list


** Part 2

Now let's think about creating insertBefore and removeBefore methods for the nodes in our list. Can you think of an efficient way to do so?

Think about time complexity. What would it be for your current implementation of a linked list?

How can we modify our data structures (Node and Linked List classes) so that we can make these O(1) operations?

Once you've come up with a plan, implement the following methods.

myList.insertBefore(refNode, value)
=> new node inserted
insert new node with associated value before refNode

myList.removeBefore(refNode)
=> removed node
remove node before the refNode passed in


*** Additional Exercises:

Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list

Reimplement stack and queue data structures using linked lists.


 */


// PART 1

function Node(value) {
  this.next = null;
  this.prev = null;
  this.value = value;
}

function LinkedList(headValue) {
  if (headValue === undefined) console.log('Must provide value for first node');
  let newNode = new Node(headValue);
  if (this.head) {
    newNode.next = this.head;
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  this.head = newNode;
}

LinkedList.prototype.forEach = function(callback) {
  if (this.head) {
    let currentNode = this.head;
    while (currentNode) {
      callback(currentNode);
      currentNode = currentNode.next;
    }
  } else {
    return 'No nodes added to list yet.'
  }
};
// Time complexity:

LinkedList.prototype.print = function() {
  let node = this.head;
  let returnStr = '';
  while (node) {
    if (!returnStr) {
      returnStr = `${node.value}`;
    } else {
      returnStr = returnStr + `, ${node.value}`;
    }
    node = node.next;
  }
  return returnStr;
};
// Time complexity: O(n) Linear

LinkedList.prototype.insertAfter = function(node, value) {
  let currentNode = this.head;
  let nextNode;
  let newNode = new Node(value);
  while (currentNode) {
    if (currentNode.value === node) {
      if (currentNode.next) {
        nextNode = currentNode.next;
        newNode.next = nextNode;
      } else {
        this.tail = newNode;
      }
      newNode.prev = currentNode;
      currentNode.next = newNode;
      return newNode;
    } else {
      currentNode = currentNode.next;
    }
  }
};
// Time complexity: 0(n) Linear

LinkedList.prototype.removeAfter = function(node) {
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === node) {
      let returnNode = currentNode.next;
      if (currentNode.next === this.tail) {
        currentNode.next = null;
        this.tail = currentNode;
      } else {
        currentNode.next = currentNode.next.next;
        currentNode.next.prev = currentNode;
      }
      return returnNode;
    } else {
      currentNode = currentNode.next;
    }
  }
};
// Time complexity: O(n) Linear

LinkedList.prototype.insertHead = function(value) {
  let newHead = new Node(value);
  newHead.next = this.head;
  this.head.prev = newHead;
  this.head = newHead;
  return this.head;
};
// Time complexity: Constant

LinkedList.prototype.removeHead = function() {
  const returnNode = this.head;
  if (this.head.next) {
    this.head = this.head.next;
    this.head.prev = null;
    return returnNode;
  }
  this.head = null;
  return returnNode;
}
//Time Complexity: Constant

LinkedList.prototype.findNode = function(value) {
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === value) {
      return currentNode
    } else {
      currentNode = currentNode.next;
    }
  }
  return 'No nodes matched your search.'
};
// Time complexity: O(n) Linear

LinkedList.prototype.appendToTail = function(value) {
  const newTail = new Node(value);
  newTail.prev = this.tail;
  this.tail.next = newTail;
  this.tail = newTail;
  return newTail;
};
// Time complexity: Constant


// PART 2:

LinkedList.prototype.insertBefore = function(node, value) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.removeBefore = function(node) {
  // implement me...
};
// Time complexity:

const myLL = new LinkedList(10);
myLL.insertAfter(10, 5);
myLL.insertAfter(10, 3);
myLL.insertHead(1);
myLL.appendToTail(20);
myLL.forEach(function(node) {
  console.log(`The value is ${node.value} and the prev is ${node.prev}`)
})

/*
*** Exercises:

1. Implement a stack using a linked list.

2. Implement a queue using a linked list.

3. Write a method that remove duplicates from an unsorted linked list. What is the time complexity? Re-implement the method without using any additional storage structure (constant space complexity). What is the time complexity?

4. Reverse a linked list. Do not use any additional storage structures.

5. Find the kth to last element of a singly linked list.

6. Detect if a linked list has a loop.

7. Check if a linked list is a palindrome.

8. Given two linked lists that represent numbers, return a linked list that represents the sum of those numbers:
  4 2 5        (4 -> 2 -> 5)
+ 7 3 1        (7 -> 3 -> 1)
--------
1 1 5 6   (1 -> 1 -> 5 -> 6)

 */
