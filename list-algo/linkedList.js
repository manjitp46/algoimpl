function LinkedList() {
  this.start = null;
  var add = function(x,y){

  };
  return this;

}
LinkedList.prototype.addAtBegining = function (value) {
  var node = {
    data: value,
    next: null
  };
  if (this.start === null) {
    this.start = node;
  } else {
    node.next = this.start;
    this.start = node;
  }

};
LinkedList.prototype.addAtEnd = function (value) {
  var node = {
    data: value,
    next: null
  };
  if (this.start === null) {
    this.start = node;
  } else {
    var current = this.start;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

};
LinkedList.prototype.search = function (value) {
  var current = this.start;
  while (current.next) {
    if (current.data === value || current.next.data === value) {
      return "value " + value + " found in the list";
    } else {
      current = current.next;
    }
  }
  return "value " + value + " Not found in the list";
};
//BubbleSort Impl for linked list
LinkedList.prototype.bubbleSort = function () {
  for (var current = this.start; current != null; current = current.next) {
    for (var nextNode = current.next; nextNode != null; nextNode = nextNode.next) {
      if (current.data > nextNode.data) {
        var temp = current.data;
        current.data = nextNode.data;
        nextNode.data = temp;
      }
    }
    console.log(JSON.stringify(this));
  }
};
//SelectionSort impl for linkedList
LinkedList.prototype.selectionSort = function () {
  for (var i = this.start; i != null; i = i.next) {
    var minimum = i.data;
    var minimumIndex = i;
    for (var j = i.next; j != null; j=j.next) {
      if(j.data<minimum){
        minimum = j.data;
        minimumIndex = j;
      }
    }
    var temp = i.data;
    i.data = minimumIndex.data;
    minimumIndex.data = temp;
  }
};

var x = new LinkedList();
for (var i = 0; i < 5; i++)
  x.addAtBegining(Math.floor(Math.random() * 100));
// x.addAtBegining(88);
// x.addAtBegining(5);
// x.addAtEnd(99);
console.log("start data", JSON.stringify(x));
x.selectionSort();
console.log(JSON.stringify(x));