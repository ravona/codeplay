"use strict";

const unsortedQueue = [
  "Michael Jackson",
  "George Martin",
  "Mike Mendes",
  "Floyd Rose",
  "Johnny Cage",
];

// shuffeling the input array to generate a possible correct result
let inputArray = [...unsortedQueue];
inputArray = inputArray.sort(() => Math.random() - 0.5);

class Queue {
  constructor(unsortedQueue) {
    this.unsortedQueue = unsortedQueue;
    this.sortedQueue = null;
    this.queue = {};
  }

  getSortedQueue() {
    return this.sortedQueue;
  }

  getPreviousQueue(name, queue) {
    return queue.slice(0, queue.indexOf(name));
  }

  setSortedQueue(arr) {
    this.sortedQueue = arr;
  }

  switchPlaces(person1, person2) {
    console.log(`Switching places between ${person1} and ${person2}`);
    console.log("Before the switch: ", this.queue);
    let queueCopy = {...this.queue};

    this.queue[person1] = queueCopy[person2];
    this.queue[person2] = queueCopy[person1];

    this.setSortedQueue(this.queue);

    console.log("After the switch: ", this.queue);
  }

  sortQueue() {
    console.log("Unsorted Queue: ", unsortedQueue);

    for (let i = 0; i < this.unsortedQueue.length; i++) {
      let name = this.unsortedQueue[i];
      let personalQueue = this.getPreviousQueue(name, inputArray);
      this.queue[name] = personalQueue.length;
    }

    let sortedArray = Object.keys(this.queue).sort(
      (a, b) => this.queue[a] - this.queue[b]
    );
    this.setSortedQueue(sortedArray);

    console.log("Sorted Queue: ", this.getSortedQueue());
    console.log("The Queue Hashtable", this.queue);

    this.getSortedQueue();
  }
}

let solution = new Queue(unsortedQueue);
solution.sortQueue();
solution.switchPlaces("Mike Mendes", "Floyd Rose");
