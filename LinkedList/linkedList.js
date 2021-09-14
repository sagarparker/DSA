class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }

    // O(1)
    append(value) {
      const newNode = {
        value: value,
        next: null
      }
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    // O(1)
    prepend(value) {
      const newNode = {
        value: value,
        next: null
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }

    // O(n)
    traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }

    // O(n)
    insert(index, value){
      if(index >= this.length) {
        return this.append(value);
      }
      
      const newNode = {
        value: value,
        next: null
      }

      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
    }


    // O(n)
    remove(index) {
      // Check Parameters      
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
    }



    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      console.log(array);
    }

  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  // console.log(myLinkedList.traverseToIndex(0).value);
  // myLinkedList.prepend(1);
  // myLinkedList.insert(2, 99);
  // myLinkedList.insert(20, 88);
  // myLinkedList.remove(2);
  console.log(myLinkedList);
  myLinkedList.printList();

  
  
  
  