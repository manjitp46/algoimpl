function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var j = 0;
    while (j < i) {
      if (arr[j] > arr[i]) {
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
      j++;
    }
  }
}

var arr = new Array();
for (i = 0; i < 20; i++) {
  arr[i] = Math.floor(Math.random() * 100);
}

console.log("Before Sorting");
console.log("-------------------------------------------------------------------------------");
console.log(arr);
console.log("---------------------------------------------------------------------------------");
insertionSort(arr);
console.log("After Sorting");
console.log("-------------------------------------------------------------------------------");
console.log(arr);
console.log("---------------------------------------------------------------------------------");