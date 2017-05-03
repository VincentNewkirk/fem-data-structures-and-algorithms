# Front End Masters Data Structures and Algorithms

This repo goes through the coding challenges presented in Front End Master's Data Structures and Algorithms video course. Exercises can be found [here](https://github.com/kuychaco/algoClass).

# Challenges

### Pseudoclassical JavaScript
```constructors.js```

Create a class, add methods to the class and create an instance of the class.

## Stacks

#### Stack String Exercise
```stacks/stackStringExercise.js```

Create a 'storage' (stack) string on a class. Then add 'menu items' to the 'storage'. Create methods that allow you to push and pop strings on and off the stack as well as a method that returns the number of items on the stack.

*This was difficult because the stack had to be a string.*

### Stack Exercise
```stacks/stackExercise.js```

Create a stack (Last in First out) with an object as the underlying data structure. Not allowed to use arrays or native push/pop methods.

### Queue Exercise
```stacks/queueExercise.js```

Same rules apply as Stack Exercise. However, a queue is First in First Out.

## Recursion

```recursion/*```

This directory is filled with exercises and common interview whiteboard questions involving Recursion. Exercises include Factorials, Fibonnaci sequence, reversal of array and strings through recursion and more. I have not completed all "interview" exercises in this directory.

## BigO Notation, Space/Time Complexity

```timeComplexity/TC.js```

Code examples in which you must notate the time complexity of each algorithm. Slides and exercise can be found [here](http://slides.com/bgando/sorting#/0/20).

## Sorting Algorithms

```sortingAlgorithms/*```

### Bubble Sort

Implement Bubble Sort. Average Complexity: O(n^2). Best Time Complexity: O(n).

Optional exercises(completed):

Make Algorithm Adaptive. If at any point the array is already sorted, break out of algorithm early.

Optimize algorithm by avoiding unnecessary comparisons. I solved this by not iterating to the end of the array after each iteration.

### Insertion Sort

Implement Insertion Sort. Average Time Complexity: O(n^2). Best Time Complexity: O(n).

Optional Exercises(not completed yet):

Allow your algorithm to take a comparator function. Look at array.sort comparator function for an example (I'm still not sure what a comparator function is after looking at array.sort)

Use the comparator function to ensure your sort is stable.

### Selection Sort

Implement Selection Sort. Average Time Complexity: O(n^2). Best Time Complexity: 0(n).

Optional Exercises:

Make algorithm stable. (completed)

Allow your algorithm to take a comparator function, just like Insertion Sort. (I'm still not clear on what this is).

### Merge Sort

Implement merge sort recursively. Time complexity: 0(n*logn).
