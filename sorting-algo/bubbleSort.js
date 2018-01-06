function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length-i; j++) {
      if(arr[j]>arr[j+1]){
        var temp = arr[j];
        arr[j] =arr[j+1];
        arr[j+1] =temp;
      }
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
bubbleSort(arr);
console.log("After Sorting");
console.log("-------------------------------------------------------------------------------");
console.log(arr);
console.log("---------------------------------------------------------------------------------");